import {test, expect} from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("POM validationg", async ({page}) =>{
    //obj creation of home page
    const homePage = new HomePage(page);

    await homePage.goto();

    // Perform actions and assertions
  await test.step('Check radio button', async () => {
    // Fill the autocomplete field and assert its value
    await homePage.fillAutoComField('we');
    await page.waitForTimeout(1000);
    await homePage.selectSuggestionAutoCom("WebDriverIO Automation");
    
    //const fieldValue = await homePage.getAutoComFieldValue();
    //expect(fieldValue).toBe('test');

    // Check the radio button
    await homePage.checkBmwRadio();

    // Assert that the radio button is checked
    const bmwIsChecked = await homePage.isBmwChecked();
    expect(bmwIsChecked).toBe(true);
    
    //DropDown select
    await homePage.selectFromDL("Honda");

    page.once("dialog", dialog =>{
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
    })
   
    await homePage.clickAlert();

    await homePage.hoverOverBtn();
    
    await page.waitForTimeout(3000);

    // const page2Window = page.waitForEvent("popup");
    // await homePage.openWindow();
    // const page2 = await page2Window;
    // page2.getByRole('combobox').selectOption('1604');

    await homePage.selectingIframe();

  });

  // Wait for 3 seconds to observe the change (optional)
  await page.waitForTimeout(3000);

})




// test("E2E flow verificaton", async({page})=>{
//     await page.goto("https://www.letskodeit.com/practice");

//     await test.step("Check radio button", async()=>{
//         const bmwRadio = await page.locator("#bmwradio").check();

//         const bmwIsChecked = await page.isChecked("#bmwradio");

//         expect(bmwIsChecked).toBe(true);

//         const autoComField = page.locator(".ui-autocomplete-input")
        
//         await autoComField.fill("test");

//         await page.waitForTimeout(3000);
//     })
// })