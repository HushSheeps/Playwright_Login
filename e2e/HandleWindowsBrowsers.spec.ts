import {test,expect, chromium} from "@playwright/test";

test("Handle windows and browser", async() =>{
    const browser = await chromium.launch();

    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto("https://www.letskodeit.com/practice");
    await page1.waitForTimeout(2000);

    await page2.goto("https://www.demoblaze.com/");
    await page2.waitForTimeout(2000);

    await browser.close();
})