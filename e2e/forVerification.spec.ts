import {test, expect} from "@playwright/test";

test("Verification of details", async ({page})=>{
    page.goto("https://www.letskodeit.com/practice");
    await page.getByText("Peach").click();
    await page.waitForTimeout(2000);
})