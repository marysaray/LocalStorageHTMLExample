/**
 * Create class that will hold State Information
 */
class State{
    name:string;
    city:string;
    areaCode:number;
}
/**
 * Test writing data in web storage 
 * Then reading out data
 */
window.onload = function(){
    // storing test data in local storage.
    localStorage.setItem("state", "Washington");
    // read data from local storage.
    let stateInfo = localStorage.getItem("state");
    // display on web page.
    let displayInfo = <HTMLInputElement>document.getElementById("info");
    displayInfo.innerText = stateInfo;

    /* create new instance for State to store on local storage. */

    let state = new State();
    state.name = "Washington";
    state.city = "Tacoma";
    state.areaCode = 253;    
}