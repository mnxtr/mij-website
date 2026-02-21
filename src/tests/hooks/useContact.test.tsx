import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useContactForm } from '@/hooks/useContact';
import type { ContactFormData } from '@/types/api';

describe('useContactForm', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
        mutations: { retry: false },
      },
    });
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it('should initialize with idle state', () => {
    const { result } = renderHook(() => useContactForm(), { wrapper });

    expect(result.current.isPending).toBe(false);
    expect(result.current.isSuccess).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toBeUndefined();
  });

  it('should successfully submit contact form', async () => {
    const { result } = renderHook(() => useContactForm(), { wrapper });

    const formData: ContactFormData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      company: 'Acme Corp',
      message: 'This is a test message',
    };

    result.current.mutate(formData);

    // Check pending state
    await waitFor(() => {
      expect(result.current.isPending).toBe(true);
    });

    // Wait for success
    await waitFor(
      () => {
        expect(result.current.isSuccess).toBe(true);
      },
      { timeout: 2000 }
    );

    expect(result.current.data).toEqual({
      success: true,
      message: 'Thank you for contacting us!',
    });
  });

  it('should handle async mutation with mutateAsync', async () => {
    const { result } = renderHook(() => useContactForm(), { wrapper });

    const formData: ContactFormData = {
      name: 'Jane Smith',
      email: 'jane@example.com',
      message: 'Another test message',
    };

    const response = await result.current.mutateAsync(formData);

    expect(response).toEqual({
      success: true,
      message: 'Thank you for contacting us!',
    });
    expect(result.current.isSuccess).toBe(true);
  });

  it('should reset mutation state', async () => {
    const { result } = renderHook(() => useContactForm(), { wrapper });

    const formData: ContactFormData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'Test message for reset',
    };

    // Submit form
    await result.current.mutateAsync(formData);

    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toBeDefined();

    // Reset
    result.current.reset();

    expect(result.current.isSuccess).toBe(false);
    expect(result.current.data).toBeUndefined();
  });

  it('should call onSuccess callback when provided', async () => {
    const onSuccessMock = vi.fn();

    const { result } = renderHook(() => useContactForm(), { wrapper });

    const formData: ContactFormData = {
      name: 'Success Test',
      email: 'success@example.com',
      message: 'Testing success callback',
    };

    result.current.mutate(formData, {
      onSuccess: onSuccessMock,
    });

    await waitFor(
      () => {
        expect(onSuccessMock).toHaveBeenCalledWith(
          { success: true, message: 'Thank you for contacting us!' },
          formData,
          expect.anything()
        );
      },
      { timeout: 2000 }
    );
  });

  it('should handle minimal required fields', async () => {
    const { result } = renderHook(() => useContactForm(), { wrapper });

    const minimalData: ContactFormData = {
      name: 'Min User',
      email: 'min@example.com',
      message: 'Minimal message',
    };

    const response = await result.current.mutateAsync(minimalData);

    expect(response.success).toBe(true);
    expect(result.current.isSuccess).toBe(true);
  });
});
