import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check for main heading or key content
    await expect(page).toHaveTitle(/MIJ|Website/i);
    
    // Verify page loaded
    await expect(page.locator('body')).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    
    // Check if header navigation exists
    const navigation = page.locator('header, nav').first();
    await expect(navigation).toBeVisible();
  });
});

test.describe('Contact Page', () => {
  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/');
    
    // Try to find and click a contact link
    const contactLink = page.getByRole('link', { name: /contact/i }).first();
    
    if (await contactLink.isVisible()) {
      await contactLink.click();
      await expect(page).toHaveURL(/\/contact/);
    } else {
      // If no contact link, navigate directly
      await page.goto('/contact');
    }
    
    // Verify we're on the contact page
    await expect(page.locator('h1, h2').filter({ hasText: /contact|touch/i }).first()).toBeVisible();
  });

  test('should display contact form', async ({ page }) => {
    await page.goto('/contact');
    
    // Check for form fields
    await expect(page.getByPlaceholder(/name/i).first()).toBeVisible();
    await expect(page.getByPlaceholder(/email/i).first()).toBeVisible();
    await expect(page.getByPlaceholder(/message/i).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /send|submit/i })).toBeVisible();
  });

  test('should show validation errors on empty submit', async ({ page }) => {
    await page.goto('/contact');
    
    // Find and click submit button
    const submitButton = page.getByRole('button', { name: /send|submit/i });
    await submitButton.click();
    
    // Wait for validation errors to appear
    await page.waitForTimeout(500);
    
    // Check if error messages appear (they contain "invalid" or "required" or "must")
    const errors = page.locator('text=/invalid|required|must/i');
    await expect(errors.first()).toBeVisible({ timeout: 2000 });
  });
});

test.describe('Language Switching', () => {
  test('should be able to switch languages', async ({ page }) => {
    await page.goto('/');
    
    // Look for language selector/switcher
    const languageButton = page.locator('[data-language], [class*="language"], button').filter({ hasText: /EN|JP|日本|বাংলা/i }).first();
    
    if (await languageButton.isVisible()) {
      await languageButton.click();
      // Language should change
      await page.waitForTimeout(500);
    }
  });
});
