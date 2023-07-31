

var theDamnDropDown = document.getElementById("dropdown");
var indeed = document.getElementById("indeed");

theDamnDropDown.addEventListener("mouseover", show_indeedElementt, false);
indeed.addEventListener("mouseout", hide_indeedElementt, false);


indeed.addEventListener("mouseover", show_indeedElementt, false);
indeed.addEventListener("mouseout", hide_indeedElementt, false);

function show_indeedElementt() {
    indeed.setAttribute("style","display: block;");
}

function hide_indeedElementt() {
    indeed.setAttribute("style","display: none;");
}

