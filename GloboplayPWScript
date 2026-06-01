import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://globoplay.globo.com/');
});

test('Try to create a Globoplay account', async ({ page }) => {
    
page.goto('https://globoplay.globo.com/');

    await expect(page.getByText('Assine', {exact:true})).toBeVisible();

    await expect(page.getByRole('button',{name: 'Prosseguir'})).toBeVisible();

    await page.getByRole('link', {name:'Agora na TV'}).click();

        await expect(page).toHaveURL(/.*ao-vivo/);

    await expect(page.getByText('Aproveite', {exact:true})).toBeVisible();

    await page.getByRole('button', {name:'Assista agora'}).click();

    await expect(page.getByText('Não tem conta?', {exact:true})).toBeVisible();

            await page.getByText('Não tem conta?', {exact:true}).last().scrollIntoViewIfNeeded();

    await page.getByRole('link', {name:'Criar Conta Globo grátis'}).click();
        
        await expect(page).toHaveURL(/.*authx.globoid/)

                await page.getByLabel('Nome').fill('Luiz Henrique Lima Siqueira');
    
                await page.getByLabel('E-mail').fill('luizhlimasiq2@gmail.com');

                await page.getByLabel('Data').fill('09092000');

    await page.getByRole('button', {name: 'Próximo'}).click();

            await page.getByRole('button', {name:'Próximo'}).last().scrollIntoViewIfNeeded();
});

test('Try to login into a Globoplay account', async ({ page }) => {

page.goto('https://globoplay.globo.com/');

    await expect(page.getByText('Assine', {exact:true})).toBeVisible();

    await expect(page.getByRole('button',{name: 'Prosseguir'})).toBeVisible();

    page.getByRole('button',{name: 'Prosseguir'}).click();

    await page.getByRole('link', {name:'Agora na TV'}).click();

        await expect(page).toHaveURL(/.*ao-vivo/);

    await page.getByRole('button', {name:'Assista agora'}).click();

        await expect(page).toHaveURL(/.*authx.globoid/)

    await expect(page.getByText('Informe o seu e-mail', {exact:true})).toBeVisible();

        await page.getByLabel('e-mail').fill('luizhlimasiq@gmail.com');
        
        await page.getByText('Continuar', {exact:true}).click();
})


