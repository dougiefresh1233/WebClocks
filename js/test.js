function timeCalc() {
    //function to calculate time from given
    "use strict";
}

function addClock() {
    "use strict";
    var table = document.getElementById("clocks");
    if (table.rows[table.rows.length - 1].cells.length < 4) {
        table.rows[table.rows.length - 1].insertCell().innerHTML = "<input type=\"text\"><input type=\"time\">";
    } else {
        table.insertRow();
        table.rows[table.rows.length - 1].insertCell().innerHTML = "<form> <input type=\"time\"> </form>";
    }
}

function buttonClick() {
    window.alert("You pressed the button");
    
}

