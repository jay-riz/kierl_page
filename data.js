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
        SayYorNO = "False";
    }

    const html = `<p style="text-align: center; margin: 0; font-weight: 700;">Is there typhoon?</p> <p style="text-align: center; margin: 0; font-weight: 500;">Cyclone</p> <li id="API">Name: ${name}</li> <li id="API">Category: ${category}</li> <li id="API">Prevailing?: ${SayYorNO}</li> <li id="API">Latitude: ${lat}</li> <li id="API">Longtitude: ${lon}</li> <li id="API">Movement: ${movement}</li> <li id="API">Issued: ${issued}</li> <li style="text-transform: lowercase ; color: #ff2400;" id="API">Summary: ${summary}</li>`
    document.querySelector("#indeed").insertAdjacentHTML("afterbegin", html);

    // const pdf = `<embed src="${url}" width="1000px" height="400px"/>`
    // document.querySelector(".leftBox").insertAdjacentHTML("afterbegin", pdf);

  })
  .catch(error => {
    console.error('Error!:', error);
  });




// async function fetchData(){
//   const options = {
//       method: 'GET',
//       headers: {
//           'X-RapidAPI-Key': '80a731deeamsh43949c48646ca17p1d870djsn1d59e25a9d8d',
//           'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
//       }
//   };

//   try {
//       const response = await fetch(url, options);
//       const result = await response.text();
//       console.log(result);
//   } catch (error) {
//       console.error(error);
//   }


// }
