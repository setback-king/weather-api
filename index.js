
const cityName = document.querySelector('.cityName');
const cityWeather = document.querySelector(".city");
const temperature = document.getElementById('temperature');
const feels = document.getElementById("feels");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const current = document.getElementById("current");
const tempHigh = document.querySelector(".high");
const tempLow = document.querySelector(".low");
const pressure = document.getElementById("pressure");
const visibility = document.getElementById("visibility");
const tempbox = document.getElementById("tempbox");
const hiddenWeather = document.querySelector(".hiddenWeather");


function getWeather() {
  //  if temp value === "Fahrenheit" {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityWeather.value + "&units=imperial&appid=a0618a5a0c32c299290832f8a97b1a70", {mode: 'cors'})
    .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.log(data);
        let weatherObject = [data.name, data.main.temp, data.main.feels_like, data.main.humidity, data.wind.speed, data.weather[0].description, data.main.temp_max, data.main.temp_min, data.main.pressure, data.visibility, data.weather[0].main]
       // cityName.textContent = weatherObject[0];
        return weatherObject
      })
      .then(object => {
        cityName.textContent = object[0];
        temperature.textContent = Math.round(object[1]) +" °F";
        feels.textContent = Math.round(object[2]) + " °F";
        humidity.textContent = object[3] + " %"
        wind.textContent = object[4].toFixed(1) + " mph";
        current.textContent = object[5];
        tempHigh.textContent = object[6] + " °F";
        tempLow.textContent = object[7] + " °F";
        pressure.textContent = object[8] + " hPa";
        visibility.textContent = ((object[9] * 3.281) / 5280).toFixed(1) + " miles";
        hiddenWeather.textContent = object[10];
        
        widgets();
        weatherPic();
        
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });        
    
} 



const searchCityBtn = document.querySelector('.search')

searchCityBtn.addEventListener('click', (e) => {
    e.preventDefault()
    getWeather();
    

})

function generatePage() {
    cityWeather.value = "Medellin"
    getWeather();
    cityWeather.value = ""

}

window.onload = generatePage();

function widgets () {
    if (temperature.textContent <= "49") {
        tempbox.classList.add("cold")
    }
        else if (temperature.textContent >= "50" && temperature.textContent <= "69") {
            tempbox.classList.add("average")
        }
        else {
            tempbox.classList.add("hot")
        }
}

function weatherPic() {
    const img = document.querySelector('img');
    if (hiddenWeather.textContent.includes("Drizzle")) {
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=MLyR1SOz5gSAV09eeCv4cHGzZQRbvX9A&s=drizzle', {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
    }
    else if (hiddenWeather.textContent.includes("Thunderstorm")) {
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=MLyR1SOz5gSAV09eeCv4cHGzZQRbvX9A&s=thunderstorm', {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
    }
    else if (hiddenWeather.textContent.includes("Snow")) {
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=MLyR1SOz5gSAV09eeCv4cHGzZQRbvX9A&s=snow', {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
    }
    else if (hiddenWeather.textContent.includes("Rain")) { 
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=MLyR1SOz5gSAV09eeCv4cHGzZQRbvX9A&s=Rain', {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
    }
    else if (hiddenWeather.textContent.includes("Clear")) { 
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=MLyR1SOz5gSAV09eeCv4cHGzZQRbvX9A&s=sunny', {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
    }
    else if (hiddenWeather.textContent.includes("Clouds")) { 
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=MLyR1SOz5gSAV09eeCv4cHGzZQRbvX9A&s=clouds', {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
    }
    else if (hiddenWeather.textContent.includes("Mist")) { 
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=MLyR1SOz5gSAV09eeCv4cHGzZQRbvX9A&s=mist', {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
    }
    else if (hiddenWeather.textContent.includes("Smoke")) { 
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=MLyR1SOz5gSAV09eeCv4cHGzZQRbvX9A&s=smoke', {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
    }
    else if (hiddenWeather.textContent.includes("Dust")) { 
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=MLyR1SOz5gSAV09eeCv4cHGzZQRbvX9A&s=dusty', {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
    }
    else if (hiddenWeather.textContent.includes("Fog")) { 
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=MLyR1SOz5gSAV09eeCv4cHGzZQRbvX9A&s=foggy', {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
    }
    else if (hiddenWeather.textContent.includes("Haze")) { 
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=MLyR1SOz5gSAV09eeCv4cHGzZQRbvX9A&s=haze', {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
    }
}

