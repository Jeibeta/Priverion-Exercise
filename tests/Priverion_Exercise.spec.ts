import { test, expect } from '@playwright/test';

test('Priverion_Exercise',async({ page }) => {

//Login in PriverionPlatform

    console.time('gotopage')
    await page.goto('https://hwazicsshi-testing.priverion.dev/login')
    console.timeEnd('gotopage')
    console.time('fillemail')
    await page.getByRole('textbox',{name:'E-Mail Address'}).fill('jeison.herrera1592@gmail.com')
    console.timeEnd('fillemail')
    console.time('fillpassword')
    await page.getByRole('textbox',{name:'Password'}).fill('Jeisonpruebapriverion12345@')
    console.timeEnd('fillpassword')
    //await page.getByRole('button',{name:'Login'}).click()



})
