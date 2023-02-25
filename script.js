const fr = document.querySelector('.fr');
console.log(fr);
const en = document.querySelector('.en');
console.log(en);

fr.addEventListener('click', () => {
    fr.classList.add('active');
    en.classList.remove('active');
    var cityInput = document.querySelector('.search-bar input');
    cityInput.placeholder = 'Entrez une ville'
    var humidityFr = document.querySelector('.humidity-details > p');
    humidityFr.textContent = 'Humidité'
    var windFr = document.querySelector('.wind-details > p');
    windFr.textContent = 'Vitesse du Vent'
    
})
en.addEventListener('click', () => {
    en.classList.add('active');
    fr.classList.remove('active');
    var cityInput = document.querySelector('.search-bar input');
    cityInput.placeholder = 'Enter your location'
    var humidityEn = document.querySelector('.humidity-details > p');
    humidityEn.textContent = 'Humidity'
    var windEn = document.querySelector('.wind-details > p');
    windEn.textContent = 'Wind Speed'
})

const container = document.querySelector('.container');
console.log(container);
const search = document.querySelector('.search-bar>button');
console.log(search);
const error404 = document.querySelector('.not-found');
console.log(error404);
const weatherBox = document.querySelector('.weather-box');
console.log(weatherBox);
const weatherDetails = document.querySelector('.weather-details');
console.log(weatherDetails);



search.addEventListener('click', () => {

    const APIKey = '4a963bbdfc4b3912a5e80cebace43298';
    const city = document.querySelector('.search-bar input').value;
    console.log(city.value);
    console.log('In the event');

    if(city === '')
        return;

    if(fr.classList.contains('active')){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric&lang=fr`)
        .then(response => response.json())
        .then(json => {
    
            if (json.cod === '404') {
                weatherDetails.style.display = 'none';
                weatherBox.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }
    
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');
    
            const tempImg = document.querySelector('.weather-box .temp-img');
            console.log(tempImg);
            const temp = document.querySelector('.weather-box .temperature');
            console.log(temp);
            const tempDetail = document.querySelector('.weather-box .description');
            console.log(tempDetail);
            const humidity = document.querySelector('.humidity > .humidity-details > span');
            const wind = document.querySelector('.wind > .wind-details > span');
    
            switch(json.weather[0].main){
                case 'Clear':
                    console.log('clear');
                    tempImg.src = 'img/clear.png';
                break;
                case 'Rain':
                    console.log('rain');
                    tempImg.src = 'img/rain.png';
                break;
                case 'Clouds':
                    console.log('clouds');
                    tempImg.src = 'img/cloud.png';
                break;
                case 'Snow':
                    console.log('snow');
                    tempImg.src = 'img/snow.png';
                break;
                case 'Haze':
                    console.log('haze');
                    tempImg.src = 'img/haze.png';
                break;
                default:
                    console.log('default');
                    tempImg.src = '';
                break;
            }
    
            temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            tempDetail.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    
            weatherBox.style.display = 'block';
            weatherDetails.style.display = 'flex';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
    
        })
    } else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric&lang=en`)
        .then(response => response.json())
        .then(json => {
    
            if (json.cod === '404') {
                weatherDetails.style.display = 'none';
                weatherBox.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }
    
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');
    
            const tempImg = document.querySelector('.weather-box .temp-img');
            console.log(tempImg);
            const temp = document.querySelector('.weather-box .temperature');
            console.log(temp);
            const tempDetail = document.querySelector('.weather-box .description');
            console.log(tempDetail);
            const humidity = document.querySelector('.humidity > .humidity-details > span');
            const wind = document.querySelector('.wind > .wind-details > span');
    
            switch(json.weather[0].main){
                case 'Clear':
                    console.log('clear');
                    tempImg.src = 'img/clear.png';
                break;
                case 'Rain':
                    console.log('rain');
                    tempImg.src = 'img/rain.png';
                break;
                case 'Clouds':
                    console.log('clouds');
                    tempImg.src = 'img/cloud.png';
                break;
                case 'Snow':
                    console.log('snow');
                    tempImg.src = 'img/snow.png';
                break;
                case 'Haze':
                    console.log('haze');
                    tempImg.src = 'img/haze.png';
                break;
                default:
                    console.log('default');
                    tempImg.src = '';
                break;
            }
    
            temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            tempDetail.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    
            weatherBox.style.display = 'block';
            weatherDetails.style.display = 'flex';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
    
        })
    }


})