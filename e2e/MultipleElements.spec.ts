import { test, expect } from "@playwright/test";

test.beforeEach(async({page})=>{
    await page.goto("https://www.demoblaze.com/");
})

test("LocateMultipleElements", async ({page})=>{

    await test.step("links verification", async() =>{
        const links = await page.$$("a");
        const expectedText = [      "PRODUCT STORE",
            "Home (current)",
            "Contact",
            "About us",
            "Cart",
            "Log in",
            "Log out",
            "",
            "Sign up",
            "",
            "",
            "",
            "",
                      "Previous",
            "",
            "",
            "",
                      "Next",
            "",
            "CATEGORIES",
            "Phones",
            "Laptops",];
    
        for(const [index, link] of links.entries()){
            const linkText = await link.textContent();
            if(linkText !== null){
                console.log(linkText.trim());
                expect(linkText.trim()).toBe(expectedText[index]);
            }
        }
    })
   

    await test.step("Products verification", async() =>{
        await page.waitForSelector("//div[@id='tbodyid']//h4/a");
        const products = await page.$$("//div[@id='tbodyid']//h4/a");
    
        for(const product of products){
            const prodText = await product.textContent();
            console.log(prodText)
        }
    })
})