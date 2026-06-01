import { test, expect } from '@playwright/test';

test('Facebook test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  await expect(page.getByText('Log into Facebook', {exact:true})).toBeVisible();

  await page.getByText('Create new account', {exact:true}).click();
  
  await expect(page).toHaveURL('https://www.facebook.com/reg/?entry_point=login&next=');

  await expect(page.getByText('Get started on Facebook', {exact:true})).toBeVisible();

  await page.getByText('Submit', {exact:true}).click();
});
