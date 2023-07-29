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


function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

getJSONP('https://pagasa.chlod.net/api/v1/bulletin/parse/TCB%2335F_egay.pdf', function(data){
    console.log(data);
});  