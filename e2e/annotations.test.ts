import {test, expect} from "@playwright/test";
import {takeScreenshot} from "../tests/screenshotTaker";

test.describe("Radion btns and check lists", {tag: "@check"}, ()=>{

    test.beforeEach(async ({page}) => {
        await page.goto("https://www.letskodeit.com/practice");
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test("Radio button", async({page}) => {
        //await page.goto("https://www.letskodeit.com/practice");
        const autoComField = page.getByPlaceholder("Start Typing...");
        await autoComField.click();
        await page.keyboard.type('Hello World!');
        const bwmRadio = page.locator("#bmwradio");
        await bwmRadio.check();
        await expect.soft(bwmRadio).toBeChecked();
        await page.screenshot({path: `tests\\screenshots\\${(() => new Date().toISOString().replace(/[:.]/g, '-'))()} bmwradio.jpeg`});
    })

    test("checkbox button", async({page}) => {
        //await page.goto("https://www.letskodeit.com/practice");
        const bwmCheck = page.locator("#bmwcheck");
        await (bwmCheck).check();
        await expect(bwmCheck).toBeChecked();
        await page.screenshot({path: "tests\\screenshots\\" + Date.now() + " bmwcheckbox.jpg"});
    })

})

test("Verify test input", async({page}) => {
    await page.goto("https://www.letskodeit.com/practice");
    await page.getByPlaceholder("Start Typing...").fill("Yo!");
    await takeScreenshot(page, 'filled input');
    await page.waitForTimeout(2000);
})