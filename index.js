// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const WeatherAPI = {

    key: "155b6b1aacd5096af7db219a0d70c90f",
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
}

// Event Listener function on enter

const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress', (event) => {
  
    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherData(searchInputBox.value);
        document.querySelector('.weather-conditions-display').style.display = "block";
    }
    });  

// Get weather report

function getWeatherData(city){

    fetch(`${WeatherAPI.baseURL}?q=${city}&appid=${WeatherAPI.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherData);

}

// Show weather data

function showWeatherData(weather){

    console.log(weather);

    try {
    let city = document.getElementById('city');
    city.innerText =`${weather.name}, ${weather.sys.country}`;

    }
    catch(err){
        document.getElementById('weather-conditions-display').style.display = "none";
        alert("Oops! Enter a valid city!");
        
    }

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let feelslike = document.getElementById('feelslike');
    feelslike.innerHTML = `Feels Like ${Math.round(weather.main.feels_like)}&deg;C`;

    let Min = document.getElementById('min');
    Min.innerHTML = `Min ${Math.floor(weather.main.temp_min)}&deg;C`; 

    let Max = document.getElementById('max');
    Max.innerHTML = `Max ${Math.ceil(weather.main.temp_max)}&deg;C`;

    let humidity = document.getElementById('humidity');
    humidity.innerHTML = `Humidity ${weather.main.humidity}%`;

    let pressure = document.getElementById('pressure');
    pressure.innerHTML = `Pressure ${weather.main.pressure}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    if(weatherType.textContent == 'Clear') {
            document.getElementById('main-block').style.backgroundImage = "url('images/clear.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.getElementById('main-block').style.backgroundImage = "url('images/clouds.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.getElementById('main-block').style.backgroundImage = "url('images/haze.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.getElementById('main-block').style.backgroundImage = "url('images/rain.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.getElementById('main-block').style.backgroundImage = "url('images/snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.getElementById('main-block').style.backgroundImage = "url('images/thunderstorm.jpg')";
        
    } 

    else if(weatherType.textContent == 'Drizzle') {
    
        document.getElementById('main-block').style.backgroundImage = "url('images/drizzle.jpg')";
        
    } 

}

function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${day}, ${date} ${month}`;
}
