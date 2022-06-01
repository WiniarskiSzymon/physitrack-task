import ProgramExcerciseElement from "./program.exercise.element";
import { ChainablePromiseElement } from 'webdriverio';

class ProgramEditorPage{

    get programEditor(){
        return $('.protocol-editor')
    }

    get excercisesList():Promise<ProgramExcerciseElement[]>{
        return this.programEditor.$$('.program-day .w-row .pd-day')
        .map(excercise => new ProgramExcerciseElement(excercise));
    }

    get assignButton():ChainablePromiseElement<WebdriverIO.Element> {
        return this.programEditor.$('#assign-program-modal-button')
    }

    get closeButton(){
        return this.programEditor.$('a[href*="/close"]')

    }

    get assignedPatient(){
        return this.programEditor.$('.pd-patient-name')
    }

    async getAssignedPatient(){
        return await this.assignedPatient.getText()
    }

    async getExcercisesInProgram(){
        let excercises = []
        for (let excercise of (await this.excercisesList)){
           let excerciseName = await excercise.getExcerciseName()
           excercises.push(excerciseName)
        }
        return excercises
    }

    async openAssignProgramModal(){
        await this.assignButton.click()
    }

    async close(){
        return await this.closeButton.click()
    }

}

export default new ProgramEditorPage()