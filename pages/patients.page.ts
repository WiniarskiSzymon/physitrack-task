
import { ChainablePromiseArray } from "webdriverio"
import BasePageWithNavigation from "./base.navigation.page"
class PatientsPage extends BasePageWithNavigation{


    get patientsList(): ChainablePromiseArray<WebdriverIO.ElementArray> {
        return $$('div[class*="content-unit patient"]')
    }

    get editProgramButton(){
        return $('div[id*="ExerciseCart"]')   
    }


    async getAllPatientsNames() : Promise<Array<string>>{
        let patientsNames = []
        await this.waitForPatientListToLoad()
        let patinets = await this.patientsList
         for(let patinet of patinets){
            let name = await patinet.$('.content-link').getText()
            patientsNames.push(name)
            }
        return patientsNames
        }

    async getPatientPlan(patientName: string) : Promise<string>{
        await this.waitForPatientListToLoad()
        let patinets = await this.patientsList
        for(let patinet of patinets){
            let name = await patinet.$('.content-link').getText()
            if (name === patientName) {
                return await patinet.$('.active-program-link').getText()
            }    
        }
    }

    async waitForPatientListToLoad(){
        await $('div[class*="content-unit patient"]').waitForDisplayed()
    }
}

export default new PatientsPage()