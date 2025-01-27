import {Locator, Page, expect} from "@playwright/test";

export class dbHome{
    private readonly page: Page;
    private readonly url: string;
    //private readonly title: Locator;
    private readonly mainNavtext: Locator;
    readonly productList: Locator;
    private readonly loginLocator: Locator;

    constructor(page: Page){
        this.page = page;
        this.url = "https://www.demoblaze.com/";
        //this.title = page.getByTitle("STORE");
        this.mainNavtext = page.locator("#nava");
        this.productList = page.locator("#tbodyid");
        this.loginLocator = page.locator("#login2");
    }

    //Actions
    async goto(){
       await this.page.goto(this.url);
    };
    async loginClick(){
        await this.loginLocator.click();
    }

    async getTitleLocator(){
        return this.page.title();
    }

    getMainNavText(){
        return this.mainNavtext;
    }

}