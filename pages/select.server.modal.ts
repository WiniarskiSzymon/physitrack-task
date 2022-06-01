import { ChainablePromiseElement, ChainablePromiseArray } from 'webdriverio';

class SelectServerModal{

    get loginModal():ChainablePromiseElement<WebdriverIO.Element>{
        return $('.login-modal')
    }

    get countriesList():ChainablePromiseArray<WebdriverIO.ElementArray>{
        return this.loginModal.$('.modal-content').$$('a[href*="physitrack.com"]')
    }

    async selectCountry(country: string): Promise<void>{
        await this.countriesList.forEach( async (element, index, list) =>  {
            let countryName = await element.getText()
            if(countryName === country){
                return await element.click()
                
            } else if( index === list.length -1){
                throw Error(` No country with name ${country} was found`)
            }
        })
    }

}


export default new SelectServerModal()