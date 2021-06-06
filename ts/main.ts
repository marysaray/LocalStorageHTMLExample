/**
 * Create class that will hold State Information.
 */
class State{
    // fields 
    name:string;
    city:string;
    areaCode:number;
}
/**
 * This will take the new instance of State object and convert it to a string
 * using JSON method. Then it will be converted back to original format 
 * to display on the web page. It will be locally stored in the 
 * specfic web browser until manually deleted by user under History Settings
 * to clear browser data.
 */
window.onload = function(){
    /* check values in browser developer tool under the Application tab. */
    // set: storing test data in local storage.
    localStorage.setItem("state", "Washington");
    // get: read data from local storage.
    let stateInfo = localStorage.getItem("state");
    // display on web page.
    let displayInfo = <HTMLInputElement>document.getElementById("info");
    displayInfo.innerText = stateInfo;

    /* create new instance for State to store on local storage. */
    let state = new State(); // constructor
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

    /*
      // converting can be done in one line of code for getting State object.
      let currentState:State = JSON.parse(localStorage.getItem(stateKey)); 
    */

    // display data in developer tool under Console tab.
    console.log(currentState);
    // display data on web page.
    displayInfo.innerHTML = currentState.city + ", " +
                            currentState.name + " " +
                            "(" + currentState.areaCode + ")";
}