import ExcerciseElement from './exercise.element'
import BasePageWithNavigation from "../base.navigation.page"

class DemoExercisesPage extends BasePageWithNavigation{

    get excercisesList(): Promise<ExcerciseElement[]> {
        return  $('div[id*="ExercisesApp"]')
        .$$('div[class*="list-content-container"]')
        .map(excercise => new ExcerciseElement(excercise));

    }

    get editProgramButton(){
        return $('div[id*="ExerciseCart"]')   
    }


    async addExerciseToBasket(excerciseName: string) : Promise<void>{
        await browser.waitForLoadingToFinish()
        let excercies = await this.excercisesList
         for(let excercise of excercies){
            let excerciseText = await excercise.getText()
            if (excerciseText === excerciseName){
                await excercise.addToBasket()
                return
            }
        }
    }

    async editProgram(){

        return await this.editProgramButton.click()
    }
}

export default new DemoExercisesPage()