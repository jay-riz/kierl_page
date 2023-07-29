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


const starsName = 'vega';
const api_key = '/7aiFJAxx0/UfD5oyAejBw==fnFPpGa8mkYCJbsY';
const url = `https://api.api-ninjas.com/v1/stars?name=${starsName}`;

fetch(url, {
    method: 'GET',
    headers: {
        'X-Api-Key': api_key,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }
    return response.json();
})
.then(result => {
    console.log(result);

    document.getElementById("")
})
.catch(error => {
    console.error('Error: ', error);
});

