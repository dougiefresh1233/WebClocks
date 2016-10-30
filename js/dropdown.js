function onClick() {
    var zone = document.getElementById("zone").value;
    var timeVal = document.getElementById("timeVal");
    timeVal.innerHTML = (parseInt(6) + parseInt(zone));
    outputTimeZone(zone);
}

function outputTimeZone(zone) {
    var outbox = document.getElementById("outbox");
    
    outbox.innerHTML = ("Your timezone is UTC" + zone);
    
}

function popup(){
    var outbox = document.getElementById("outbox");
    
    outbox.innerHTML = (window.prompt("Name?",""));
    
}