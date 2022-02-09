
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
const errorMessage = document.querySelector(".errorMessage")

let degreesF = "true"; 
const switcher = document.querySelector(".switch");
let city = ""
const units = document.querySelector(".units");


function getWeather() {
    if (degreesF === "true") {
    errorMessage.style.display = "none";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=a0618a5a0c32c299290832f8a97b1a70", {mode: 'cors'})
    .then(function(response) {
        return response.json();
      })
      .then(data => {
        console.log(data);
        let weatherObject = [data.name, data.main.temp, data.main.feels_like, data.main.humidity, data.wind.speed, data.weather[0].description, data.main.temp_max, data.main.temp_min, data.main.pressure, data.visibility, data.weather[0].main, data.sys.country]
       
        return weatherObject
      })
      .then(object => {
        cityName.textContent = object[0];
        temperature.textContent = Math.round(object[1]) + " °F";
        feels.textContent = Math.round(object[2]) + " °F";
        humidity.textContent = object[3] + " %"
        wind.textContent = object[4].toFixed(1) + " mph";
        current.textContent = object[5];
        tempHigh.textContent = object[6].toFixed(1) + " °F";
        tempLow.textContent = object[7].toFixed(1) + " °F";
        pressure.textContent = object[8] + " hPa";
        hiddenWeather.textContent = object[10];
        tempbox.classList.remove("hot", "cold", "average");
        if (object[11] === "US") {
            visibility.textContent = ((object[9] * 3.281) / 5280).toFixed(1) + " miles";
        }
         else {
            visibility.textContent = ((object[9] * 3.281) / 5280).toFixed(1) + " kilometers";
         }
        widgetsF();
        weatherPic();
      }) 
      .catch (error => {
        console.error('There has been a problem with your fetch operation:', error);
        errorMessage.style.display = "block"
      });
    }
    else if (degreesF === "false") {
        errorMessage.style.display = "none";
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=a0618a5a0c32c299290832f8a97b1a70", {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
      .then(data => {
        console.log(data);
        let weatherObject = [data.name, data.main.temp, data.main.feels_like, data.main.humidity, data.wind.speed, data.weather[0].description, data.main.temp_max, data.main.temp_min, data.main.pressure, data.visibility, data.weather[0].main, data.sys.country]
       
        return weatherObject
      })
      .then(object => {
        cityName.textContent = object[0];
        temperature.textContent = Math.round(object[1]) + " °C";
        feels.textContent = Math.round(object[2]) + " °C";
        humidity.textContent = object[3] + " %"
        wind.textContent = object[4].toFixed(1) + " kmh";
        current.textContent = object[5];
        tempHigh.textContent = object[6].toFixed(1) + " °C";
        tempLow.textContent = object[7].toFixed(1) + " °C";
        pressure.textContent = object[8] + " hPa";
        hiddenWeather.textContent = object[10];
        tempbox.classList.remove("hot", "cold", "average");
        if (object[11] === "US") {
            visibility.textContent = ((object[9] * 3.281) / 5280).toFixed(1) + " miles";
        }
         else {
            visibility.textContent = ((object[9] * 3.281) / 5280).toFixed(1) + " kilometers";
         }
        widgetsC();
        weatherPic();
        
      }) 
      .catch (error => {
        console.error('There has been a problem with your fetch operation:', error);
        errorMessage.style.display = "block"
      });
    }
}
       






const searchCityBtn = document.querySelector('.search')

searchCityBtn.addEventListener('click', (e) => {
    e.preventDefault()
    city = cityWeather.value;
    getWeather();
    

})

function generatePage() {
    city = "Medellin"
    getWeather();
    cityWeather.value = ""

}

window.onload = generatePage();

function widgetsF () {
    let temp = parseInt(temperature.textContent);

    if (temp <= 49) {
        tempbox.classList.add("cold")
    }
        else if (temp>= 50 && temp <= 69) {
            tempbox.classList.add("average")
        }
        else {
            tempbox.classList.add("hot")
        }
}

function widgetsC () {
    let temp = parseInt(temperature.textContent);
    
    if ( temp<= 10) {
        tempbox.classList.add("cold")
    }
        else if (temp >= 11 && temp <= 22) {
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
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=MLyR1SOz5gSAV09eeCv4cHGzZQRbvX9A&s=haze ', {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            img.src = response.data.images.original.url;
        })
    }
}


switcher.addEventListener("change", () => {
    if (degreesF === "true") {
        degreesF = "false";
        getWeather();
        units.textContent = "°C"
        return
       
        
    }
     else if (degreesF === "false") {
         degreesF = "true";
         getWeather();
         cityWeather.value = "";
         units.textContent = "°F"
         return
     }
})