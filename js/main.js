var State = (function () {
    function State() {
    }
    return State;
}());
window.onload = function () {
    localStorage.setItem("state", "Washington");
    var stateInfo = localStorage.getItem("state");
    var displayInfo = document.getElementById("info");
    displayInfo.innerText = stateInfo;
    var state = new State();
    state.name = "Washington";
    state.city = "Tacoma";
    state.areaCode = 253;
};
