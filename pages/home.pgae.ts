import { ChainablePromiseElement } from 'webdriverio';

class HomePage{


    get loginButton():ChainablePromiseElement<WebdriverIO.Element>{
        return $('#login')
    }

    async pressLoginButton(): Promise<void>{
        await this.loginButton.click()
    }
}

export default new HomePage();