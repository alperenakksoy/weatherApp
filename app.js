const button = document.querySelector("button");
const searchBox = document.querySelector(".search input");
const weatherPng = document.querySelector(".weather-icon");
const hiddenBar = document.querySelector(".weather");
const apiKey = "4aae68c498084d36826ec9a6ebaf7b17";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name ;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector(".humid-level").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind-speed").innerHTML=data.wind.speed+"km/h";
    document.querySelector(".wind-speed").innerHTML=data.wind.speed+"km/h";
    document.querySelector(".condition").innerHTML=data.weather[0].main;


    if(data.weather[0].main=='Clouds'){
        weatherPng.src = 'images/fewClouds.png';
    }
    else if(data.weather[0].main=='Clear'){
        weatherPng.src='images/clearsky.png';
    }
    else if(data.weather[0].main=='Mist'){
        weatherPng.src='images/mist.png';
    }
    else if(data.weather[0].main=='Drizzle'){
        weatherPng.src='images/thunderstorm.png';
    }
    else if(data.weather[0].main=='Rain'){
        weatherPng.src='images/rain.png';
    }

    hiddenBar.style.display="block";
    
    

}

button.addEventListener('click',()=>{checkWeather(searchBox.value)});



