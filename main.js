let btn=document.getElementById("btn");
let input=document.getElementById("city")
btn.addEventListener("click",function(){
    let city = input.value;
    getWeather(city);
})

const apiKey = "3083251f8cc4cdfe2737c137336be942";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let res = await fetch(apiUrl);
    if(res.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    } 
    else {
        let data = await res.json();
        console.log("Data:", data);
        document.querySelector(".error").style.display = "none";

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        let icon = document.querySelector(".weather-icon");

        if (data.weather[0].main === "Rain") {
            icon.src = "./weather-app-img/images/rain.png"
        }
        else if (data.weather[0].main === "Clouds") {
            icon.src = "./weather-app-img/images/clouds.png"
        }
        else if (data.weather[0].main === "Clear") {
            icon.src = "./weather-app-img/images/clear.png"
        }
        else if (data.weather[0].main === "Mist") {
            icon.src = "./weather-app-img/images/mist.png"
        }
        else if (data.weather[0].main === "Drizzle") {
            icon.src = "./weather-app-img/images/drizzle.png"
        }

        document.querySelector(".weather").style.display = "block";
    }
}