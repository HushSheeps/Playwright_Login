import { Page } from 'playwright';
import fs from "fs";
import path from "path";

async function  takeScreenshot(page: Page, stepName: string) {
    const screenshotDir = "tests\\screenshots\\";

    if(!fs.existsSync(screenshotDir)){
        fs.mkdirSync(screenshotDir, {recursive: true});
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

    const filePath = path.join(screenshotDir, `${stepName}-${timestamp}.png`)

    await page.screenshot({ path: filePath });
}

export { takeScreenshot };