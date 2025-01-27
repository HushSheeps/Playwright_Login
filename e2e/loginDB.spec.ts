import {test, expect} from "@playwright/test";
import {dbHome as DBHomePage} from "../pages/dbHome";

test("DBlaze validation", async({page}) => {
    const dbHome = new DBHomePage(page);

    await dbHome.goto();
    //await dbHome.loginClick();
    const pageTitle = await dbHome.getTitleLocator();
    expect(pageTitle).toBe("STORE");
    await expect(dbHome.getMainNavText()).toHaveText("PRODUCT STORE");
    await expect(dbHome.productList).toHaveCount(1);

    await page.waitForTimeout(1000);
})