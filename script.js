var theDamnDropDown = document.getElementById("dropdown");
var indeed = document.getElementById("indeed");

theDamnDropDown.addEventListener("mouseover", show_indeedElementt, false);
theDamnDropDown.addEventListener("mouseout", hide_indeedElementt, false);

function show_indeedElementt() {
    indeed.setAttribute("style","display: block;")
}

function hide_indeedElementt() {
    indeed.setAttribute("style","display: none;")
}


async function load() {
    let url = 'https://pagasa.chlod.net/api/v1/bulletin/parse/TCB%2335F_egay.pdf';
    let obj = null;
    
    try {
        obj = await (await fetch(url)).json();
    } catch(e) {
        console.log('error');
    }
    
    console.log(obj);
}

load();