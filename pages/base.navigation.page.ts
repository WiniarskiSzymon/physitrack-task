import  NavigationBar  from "./navigation.bar.element";

class BasePageWithNavigation{

    navigationBar: NavigationBar


    constructor(){
        this.navigationBar = new NavigationBar()
    }



}

export default BasePageWithNavigation