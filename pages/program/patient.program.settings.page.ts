import { ChainablePromiseElement } from 'webdriverio';

class PatientProgramSettingsPage{

    get assignModal(){
        return $('#assign-protocol')
    }    
    

    get assignmentMessage():ChainablePromiseElement<WebdriverIO.Element>{
        return this.assignModal.$('div[class="callout assigned"]')
    }

    get patientName():ChainablePromiseElement<WebdriverIO.Element> {
        return this.assignModal.$('a[href*="/clients/"]')
    }

    get closeButton():ChainablePromiseElement<WebdriverIO.Element> {
        return this.assignModal.$('.modal-cancel')
    }

    async getAssignmentMessage(): Promise<string>{
        return (await this.assignmentMessage.getText()).replace(/(\r\n|\n|\r)/gm, "");
    }

    async getPatientName(): Promise<string>{
        return await this.patientName.getText()

    }

    async close(): Promise<void>{
        await this.closeButton.click()
    }

}

export default new PatientProgramSettingsPage()