import { ChainablePromiseElement } from "webdriverio"

class LoginPage{

    get backToDemoButton():ChainablePromiseElement<WebdriverIO.Element>{
        return $('a.link-back-to-demo')
    }

    async goBackToDemo(): Promise<void>{
        await this.backToDemoButton.click()
    }


}

export default new LoginPage()