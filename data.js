const urls = 'https://raw.githubusercontent.com/jay-riz/thisPersonWebsite/main/data.json';

fetch(urls)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error');
    }
    return response.json();
  })
  .then(data => {

    const name = data.cyclone.name;
    const category = data.cyclone.category;
    const prevailing = data.cyclone.prevailing;
    const lat = data.cyclone.center.lat;
    const lon = data.cyclone.center.lon;
    const movement = data.cyclone.movement;
    const summary = data.info.summary;
    const issued = data.info.issued;


    let SayYorNO;
    if (prevailing == true){
        SayYorNO = "Yes";
    }
    else{
        SayYorNO = "No";
    }

    const html = `<p style="text-align: center; margin: 0; font-weight: 700;">Is there typhoon?</p> <p style="text-align: center; margin: 0; font-weight: 500;">Cyclone</p> <li id="API">Name: ${name}</li> <li id="API">Category: ${category}</li> <li id="API">Prevailing?: ${SayYorNO}</li> <li id="API">Latitude: ${lat}</li> <li id="API">Longtitude: ${lon}</li> <li id="API">Movement: ${movement}</li> <li id="API">Issued: ${issued}</li> <li style="text-transform: lowercase ; color: #ff2400;" id="API">Summary: ${summary}</li> <li id="API" style="color: #000 !important;"> Fetch through json (data.json on my github repo.) </li>`
    document.querySelector("#indeed").insertAdjacentHTML("afterbegin", html);

    // const pdf = `<embed src="${url}" width="1000px" height="400px"/>`
    // document.querySelector(".leftBox").insertAdjacentHTML("afterbegin", pdf);

  })
  .catch(error => {
    console.error('Error!:', error);
  });



