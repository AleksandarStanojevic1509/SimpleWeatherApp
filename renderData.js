export const renderData = (title, icon, currentTemp, maxToday, minToday, airPressure, humidity, day1, day2, day3, day4, day5, day1max, day1min, day2max, day2min, day3max, day3min, day4max, day4min, day5max, day5min )=>{
    return `<div><h1>${title}</h1> <img src="https://www.metaweather.com/static/img/weather/ico/${icon}.ico" alt=""></div>
    <h5>Current temperature: ${currentTemp} &#8451 </h5>
  
    <table class="current-add-info">
    <tr>
    <td>Max temp. ${maxToday} &#8451</td>
    <td>Min temp. ${minToday} &#8451</td>
    <td>Air pressure: ${airPressure} mbar</td>
    <td>Humidity: ${humidity} %</td>
    </tr>
    </table>
    
    <table>
    <tr class="table-active">
    <th colspan="2">${day1}</th>
    <th colspan="2">${day2}</th>
    <th colspan="2">${day3}</th>
    <th colspan="2">${day4}</th>
    <th colspan="2">${day5}</th>              
    </tr>
    <tr>
    <td>MAX</td>
    <td>MIN</td>
    <td>MAX</td>
    <td>MIN</td>
    <td>MAX</td>
    <td>MIN</td>
    <td>MAX</td>
    <td>MIN</td>
    <td>MAX</td>
    <td>MIN</td>
    </tr>
    <tr>
    <td>${day1max} &#8451</td>
    <td>${day1min} &#8451</td>
    <td>${day2max} &#8451</td>
    <td>${day2min} &#8451</td>
    <td>${day3max} &#8451</td>
    <td>${day3min} &#8451</td>
    <td>${day4max} &#8451</td>
    <td>${day4min} &#8451</td>
    <td>${day5max} &#8451</td>
    <td>${day5min} &#8451</td>
    </tr>
    </table>     
  `
  }
