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
    
    /* convert all value in State object to a string using [JSON] to format. */
    let stateString = JSON.stringify(state);

    /* create global key variable for all data in State object. */
    const stateKey = "stateObject"; // reusable create for intellisense.
    
    /* set State object: store State object in local storage. */
    localStorage.setItem(stateKey, stateString); // (key, value)

    /* get State object: read State object from local storage. */
    let stateResult = localStorage.getItem(stateKey);

    /* convert back to object. */
    let currentState:State = JSON.parse(stateResult);
    // display data in developer tool
    console.log(currentState);
    // display on web page.
    displayInfo.innerHTML = currentState.city + ", " +
                            currentState.name + " " +
                            "(" + currentState.areaCode + ")";
}