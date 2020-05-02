// const inputF = document.querySelector("input");
// const submBtn = document.querySelector("button");
// const londonDiv = document.getElementById('london')

// submBtn.addEventListener("click", () => {
//   let inputText = inputF.value;
//   let inputFixed = inputText.toLocaleLowerCase().slice(0, 3);
//   console.log(inputFixed);

//   fetch(
//     `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${inputFixed}`
//   )
//     .then((res) => {
//       return res.text();
//     })
//     .then((data) => {
//       let result = JSON.parse(data);
//       result.forEach((elem) => {
//         if (elem.title === inputText) {
//             fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${elem.woeid}/`)
//             .then((res) => {
//                 return res.text();
//             })
//           .then(data =>{
//               console.log(JSON.parse(data))
//           })
//           .catch(err=>{
//               console.error('somethig went wrong... ')
//           })
//         }
//       });
//     })
//     .catch(err=>{
//         console.error(err)
//     });
// });

// const getWeatherInfo = (woeid, townBox ) => {
//   fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
//   .then(res=>{
//     return res.json()
//   })
//   .then(data=>{
//     console.log (data.consolidated_weather) ;

//   // townBox.innerHTML = `<h1>${data.consolidated_weather[0].max_temp}</h1>`
//   })

// }



// getWeatherInfo(44418, londonDiv)

// let d = new Date ('2020-05-02T12:16:02.591903Z');
// let nd = d.toString()
// console.log (nd.slice(0,3))