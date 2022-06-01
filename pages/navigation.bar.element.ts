class NavigationBar{


    get navbar(){
        return $('.nav-tabs')
    }

    get patinetsButton(){
        return this.navbar.$('a[controllers*="clients"]')
    }



    async navigateToPatientsPage(){
        await this.patinetsButton.click()

    }
}
     
export default NavigationBar