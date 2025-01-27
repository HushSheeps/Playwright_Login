import { Locator, Page} from "@playwright/test";

export class HomePage{
    readonly page: Page;
    readonly bmwRadio: Locator;
    readonly autoComField: Locator;
    readonly dropDown: Locator;
    readonly autoComSuggestions: Locator;
    readonly alertPop: Locator;
    readonly btnOpenPage: Locator;
    readonly iFrameMain: Locator;
    readonly hoverMouse: Locator;

    constructor(page: Page){
        this.page = page;
        this.bmwRadio = page.locator("#bmwradio");
        this.autoComField = page.locator(".ui-autocomplete-input");
        this.dropDown = page.locator("#carselect");
        this.autoComSuggestions = page.locator("#ui-id-1");
        this.alertPop = page.getByRole("button", {name: "Alert"});
        this.btnOpenPage = page.getByRole("button", {name: "Open Window"});
        this.iFrameMain = page.frameLocator("iframe[name='iframe-name']").locator('#course-list div');
        this.hoverMouse = page.locator("#mousehover");
    }

    //Actions
    async goto(){
        await this.page.goto("https://www.letskodeit.com/practice");
    }
    async checkBmwRadio(){
        await this.bmwRadio.check();
    }
    async fillAutoComField(text : string){
        await this.autoComField.fill(text);
    }
    async selectSuggestionAutoCom(optionText: string){
        //await this.page.waitForSelector("ul#ui-id-1");
        await this.page.getByText(optionText).click();
    }
    async selectFromDL(label: string){
        await this.dropDown.selectOption({label});
    }
    async clickAlert(){
        await this.alertPop.click();
    }
    async openWindow(){
        await this.btnOpenPage.click();
    }
    async selectingIframe(){
        await this.iFrameMain.filter({hasText: "Anil $199 Selenium WebDriver"}).nth(3).click();
    }
    async hoverOverBtn(){
        await this.hoverMouse.hover();
    }

    //Assertions
    async isBmwChecked(): Promise<boolean>{
        return await this.bmwRadio.isChecked();
    }
    async getAutoComFieldValue(): Promise<string> {
        return await this.autoComField.inputValue();
      }
}