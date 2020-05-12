import {renderData} from './renderData.js'

const inputF = document.querySelector("input");
const submBtn = document.querySelector("button");
const londonDiv = document.getElementById('london');
const moscowDiv = document.getElementById('moscow');
const newYorkDiv = document.getElementById('new-york');
const bejingDiv = document.getElementById('bejing');
const header = document.querySelector ('header');
const loader = document.getElementById('loader-bck');




// render town user entered

submBtn.addEventListener("click", () => {
  let inputText = inputF.value;
  let inputFixed = inputText.toLocaleLowerCase().slice(0, 3);
  
  moscowDiv.innerHTML = '';
  londonDiv.innerHTML = '';
  bejingDiv.innerHTML = '';
  newYorkDiv.innerHTML = '';  
  
  loader.style.display = 'flex'
  inputF.value = ''
  
  fetch(
    `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${inputFixed}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {      
      data.forEach((elem) => {
        if (elem.title === inputText) {
          fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${elem.woeid}/`)
          .then((res) => {
            return res.json();
          })
          .then(data =>{
            loader.style.display = 'none'
            console.log(data);
            
            header.innerHTML = `<div id="search-res">${renderData(data.title, 
              data.consolidated_weather[0].weather_state_abbr, 
              data.consolidated_weather[0].the_temp.toFixed(0),
              data.consolidated_weather[0].max_temp.toFixed(0),
              data.consolidated_weather[0].min_temp.toFixed(0),
              data.consolidated_weather[0].air_pressure.toFixed(0),
              data.consolidated_weather[0].humidity.toFixed(0),
              new Date (data.consolidated_weather[1].applicable_date).toString().slice(0,10),
              new Date (data.consolidated_weather[2].applicable_date).toString().slice(0,10),
              new Date (data.consolidated_weather[3].applicable_date).toString().slice(0,10),
              new Date (data.consolidated_weather[4].applicable_date).toString().slice(0,10),
              new Date (data.consolidated_weather[5].applicable_date).toString().slice(0,10),
              data.consolidated_weather[1].max_temp.toFixed(0),
              data.consolidated_weather[1].min_temp.toFixed(0),
              data.consolidated_weather[2].max_temp.toFixed(0),
              data.consolidated_weather[2].min_temp.toFixed(0),
              data.consolidated_weather[3].max_temp.toFixed(0),
              data.consolidated_weather[3].min_temp.toFixed(0),
              data.consolidated_weather[4].max_temp.toFixed(0),
              data.consolidated_weather[4].min_temp.toFixed(0),
              data.consolidated_weather[5].max_temp.toFixed(0),
              data.consolidated_weather[5].min_temp.toFixed(0)
              )}</div>`
          });
        }
      });
    })
    .catch(err=>{
      header.innerHTML = `<div id="err-msg" ><h2>Sorry, we have too many requests, please try later! :)</h2></div>`;
    });

  });
  


// Render 4 town (london, moscow, newyork and bejing)

  const getWeatherInfo = (woeid, townDiv) => {
        
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
    .then(res=>{
      loader.style.display = 'none'
      return res.json();
    })
    .then(data=>{
      console.log (data);
      
      townDiv.innerHTML =  renderData(data.title, 
        data.consolidated_weather[0].weather_state_abbr, 
        data.consolidated_weather[0].the_temp.toFixed(0),
        data.consolidated_weather[0].max_temp.toFixed(0),
        data.consolidated_weather[0].min_temp.toFixed(0),
        data.consolidated_weather[0].air_pressure.toFixed(0),
        data.consolidated_weather[0].humidity.toFixed(0),
        new Date (data.consolidated_weather[1].applicable_date).toString().slice(0,10),
        new Date (data.consolidated_weather[2].applicable_date).toString().slice(0,10),
        new Date (data.consolidated_weather[3].applicable_date).toString().slice(0,10),
        new Date (data.consolidated_weather[4].applicable_date).toString().slice(0,10),
        new Date (data.consolidated_weather[5].applicable_date).toString().slice(0,10),
        data.consolidated_weather[1].max_temp.toFixed(0),
        data.consolidated_weather[1].min_temp.toFixed(0),
        data.consolidated_weather[2].max_temp.toFixed(0),
        data.consolidated_weather[2].min_temp.toFixed(0),
        data.consolidated_weather[3].max_temp.toFixed(0),
        data.consolidated_weather[3].min_temp.toFixed(0),
        data.consolidated_weather[4].max_temp.toFixed(0),
        data.consolidated_weather[4].min_temp.toFixed(0),
        data.consolidated_weather[5].max_temp.toFixed(0),
        data.consolidated_weather[5].min_temp.toFixed(0)
        )

    
  })
      .catch(err=>{
        header.innerHTML = `<div id="err-msg" ><h2>Sorry, we have too many requests, please try later! :)</h2></div>`;
      });
}

getWeatherInfo(44418, londonDiv)
getWeatherInfo(2122265, moscowDiv)
getWeatherInfo(2459115, newYorkDiv)
getWeatherInfo(2151330, bejingDiv)