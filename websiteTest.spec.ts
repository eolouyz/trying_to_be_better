import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
});

test('Playwright Practice - Get By Role Test', async ({ page }) => {
    
    await page.getByRole('link',{name: 'PlaywrightPractice'}).click();

    await expect(page).toHaveURL(/.*playwrightpractice/);

    await expect(page.getByText('getByRole()', {exact:true})).toBeVisible();

    await page.getByRole('button', {name:'Primary Action'}).click();

    await page.getByRole('button', {name:'Toggle Button'}).click();

    await page.getByLabel('username').fill('Louyz Tester');

    await page.getByRole('checkbox', {name:'Accept terms'}).check();

    await page.getByRole('link',{name: 'Home'}).nth(0).click();
            /*. 
                first() -> For the first position role available
                last() -> For the last position role available
                nth(0) / nth(1) / ... -> For choose the exactly position
            */    

        await expect(page).toHaveURL(/.com*./)
});

test('Playwright Practice - Mouse Hover', async ({ page }) => {

    await page.getByRole('link',{name: 'PlaywrightPractice'}).click();

        await expect(page).toHaveURL(/.*playwrightpractice/);

    await expect(page.getByText('Mouse Hover', {exact:true})).toBeVisible();

        await page.getByRole('button', {name:'Point Me'}).scrollIntoViewIfNeeded();

        await page.locator('.dropdown').hover();
                // using CSS locator

            await page.getByRole('button', {name: 'Point me'}).hover(); 

                await expect(page.getByText('Mobiles', {exact: true}).first())

            await page.getByText('Mobiles', {exact: true}).first().click()
})

