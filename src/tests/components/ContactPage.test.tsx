import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@/tests/utils/test-utils';
import ContactPage from '@/components/pages/ContactPage';

// Mock the useContactForm hook
vi.mock('@/hooks/useContact', () => ({
  useContactForm: () => ({
    mutateAsync: vi.fn().mockResolvedValue({
      success: true,
      message: 'Thank you for contacting us!',
    }),
    isPending: false,
    isSuccess: false,
    isError: false,
  }),
}));

// Mock window.alert
global.alert = vi.fn();

describe('ContactPage', () => {
  it('should render the contact form fields', () => {
    render(<ContactPage />);

    // Check for form inputs by ID (more specific than label text)
    expect(screen.getByPlaceholderText(/john doe/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/company/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/phone/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument();
  });

  it('should display validation errors for empty fields', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    const submitButton = screen.getByRole('button', { name: /send/i });
    await user.click(submitButton);

    // Wait for at least one error message to appear
    await waitFor(() => {
      const errorMessages = screen.getAllByText(/invalid|must|required|expected/i);
      expect(errorMessages.length).toBeGreaterThan(0);
    }, { timeout: 3000 });
  });

  it('should accept valid form data', async () => {
    const user = userEvent.setup();
    render(<ContactPage />);

    // Fill in fields using placeholders
    const nameInput = screen.getByPlaceholderText(/john doe/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const messageInput = screen.getByPlaceholderText(/message/i);

    await user.type(nameInput, 'John Smith');
    await user.type(emailInput, 'john@example.com');
    await user.type(messageInput, 'This is a test message with more than 10 characters.');

    const submitButton = screen.getByRole('button', { name: /send/i });
    
    // Form should be submittable (button should be enabled)
    expect(submitButton).not.toBeDisabled();
  });

  it('should render office information', () => {
    render(<ContactPage />);

    // Check for general content that should be present
    expect(screen.getByText(/get in/i)).toBeInTheDocument();
    expect(screen.getByText(/touch/i)).toBeInTheDocument();
  });

  it('should have accessible form inputs', () => {
    render(<ContactPage />);

    const nameInput = screen.getByPlaceholderText(/john doe/i);
    expect(nameInput).toHaveAttribute('id', 'name');
    expect(nameInput).toHaveAttribute('name', 'name');

    const emailInput = screen.getByPlaceholderText(/email/i);
    expect(emailInput).toHaveAttribute('id', 'email');
    expect(emailInput).toHaveAttribute('type', 'email');

    const submitButton = screen.getByRole('button', { name: /send/i });
    expect(submitButton).toHaveAttribute('type', 'submit');
  });
});
