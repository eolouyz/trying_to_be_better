import { test, expect } from '@playwright/test';

const urlTest = 'https://front.serverest.dev/login'

test.beforeEach( async ({ page }) => {
    await page.goto(urlTest);
});



test('Try to login with an invalid e-mail', async ({ page }) => {
    
await expect(page).toHaveURL(urlTest);

    await expect(page.getByLabel('/static/media/serverestlogo1.532833ba.png'));
    await expect(page.getByText('Login', {exact:true})).toBeVisible();

    await page.getByLabel('email').fill('www@123');
    await page.getByLabel('password').fill('12345678');

    await page.getByRole('button', {name:'Entrar'}).click();

        await expect(page.getByText('Email deve ser um email válido'));

    await page.getByLabel('Close').hover();    
    });