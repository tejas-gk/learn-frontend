const date=new Date();
document.querySelector('.date').innerHTML=date.toDateString();

const baseUrl='http://api.weatherapi.com/v1';
const apiKey='281010adcbad414592b152316222307';

const weatherData=document.querySelector('#weather-data');
const weatherTitle=document.querySelector('[data-weather-title]');
const weatherTemp=document.querySelector('[data-weather-temp]');
const weatherDesc=document.querySelector('[data-weather-desc]');
const weatherIcon=document.querySelector('[data-weather-icon]');
const weatherHumidity=document.querySelector('[data-weather-humidity]');
const weatherWind=document.querySelector('[data-weather-wind]');

const inputCity=document.querySelector('[type="text"]');
const btnSearch=document.querySelector('#btn-search');

function fetchWeather(){

var inputCity=document.querySelector('.input-city').value;
let url=`${baseUrl}/forecast.json?key=${apiKey}&q=${inputCity}}`;
fetch(url)
.then(res=>res.json())
.then(data=>{
    console.log(data);
    weatherTitle.innerHTML=data.location.name;
    weatherTemp.innerHTML=data.current.temp_c+'&deg;';
    weatherDesc.innerHTML=data.current.condition.text;
    weatherIcon.innerHTML=`<img src="${data.current.condition.icon}" alt="">`;
    weatherHumidity.innerHTML=`humidity: ${data.current.humidity}`;
    weatherWind.innerHTML=`wind: ${data.current.wind_kph} kph`;

})
.catch(err=>console.log(err));
}

function changeColor(){
    bgColor=document.body;
    bgColor.style.backgroundColor=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
}
changeColor();