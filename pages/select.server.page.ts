import { ChainablePromiseElement, ChainablePromiseArray } from 'webdriverio';

type CountryValues =  "au"|"nl"|"ca"|"br"|"fr"|"fi"|"id"|"de"|"it"|"ie"|"pl"|"nz"|"se"|"es"|"us"

class SelectServerModal{

    get countriesList():ChainablePromiseArray<WebdriverIO.ElementArray>{
        return $('div[id*="ChooseServerPseudoModal"').$$('input[name="country"]')
    }

    get continueButton():ChainablePromiseElement<WebdriverIO.Element>{
        return $('button[type="submit"]')
    }

    async selectCountryByValue(country: CountryValues): Promise<void>{
        await this.countriesList.forEach( async (element, index, list) =>  {
            let value = await element.getValue()
            if(country === value){
                return await element.click()
            } else if( index === list.length -1){
                throw Error(`No country with value ${country} was found`)
            }
        })
    }


    async pressContinueButton():Promise<void>{
        await this.continueButton.click()
    }

}


export default new SelectServerModal()