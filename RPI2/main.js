//https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=e7ba0d49f48cc64c03c18ec4d85fef5d&units=metric

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');


// если смена цитаты у вас не работает, вероятно, исчерпался лимит API. в консоли ошибка 403
// скопируйте код себе и запустите со своего компьютера
const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btn = document.querySelector('.btn');

// если в ссылке заменить lang=en на lang=ru, цитаты будут на русском языке
// префикс https://cors-anywhere.herokuapp.com используем для доступа к данным с других сайтов если браузер возвращает ошибку Cross-Origin Request Blocked 
async function getQuote() {  
  const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
  const res = await fetch(url);
  const data = await res.json(); 
  blockquote.textContent = data.quoteText;
  figcaption.textContent = data.quoteAuthor;
}
document.addEventListener('DOMContentLoaded', getQuote);
btn.addEventListener('click', getQuote);


const time = document.getElementById('time'),
    date = document.querySelector('#date'),
    greeting =document.getElementById('greeting'),   
    userName =document.getElementById('name'),        
    focuss =document.getElementById('focus'),         
    bgImage =document.querySelector('.bg-image'),    
    container =document.querySelector('.container');

    const btn2 = document.querySelector('.btn2');
    btn2.addEventListener('click', changeBg);


let changing=0;
function changeBg(){

    if(changing<6){

        setBgNight(changing);
        changing++;
        if(changing===6){
            changing=0;
        }
    }else if(changing>=6 && changing<12){

       setBgMorning(changing);
       changing++;
       if(changing===12){
           changing=6;
       }
    }else if(changing >=12 && changing <18){

       setBgDay(changing);
       changing++;
       if(changing===18){
           changing=12;
       }
    }else {

       setBgEvening(changing);
       changing++;
       if(changing===24){
           changing=18;
       }
    }

}


function showTime(){
    let today = new Date(),
    hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds(),
    month = today.getMonth(),
    monthDay = today.getDate(),
    weekDay = today.getDay();

    hours = addZero(hours);
    minutes =addZero(minutes);
    seconds =addZero(seconds);
    monthDay=addZero(monthDay);
    time.innerHTML=`${hours}<span>:</span>${minutes}<span>:</span>${seconds}`;
    date.innerHTML=`<br>${declareWeekDay(weekDay)}<span>, </span>${declareMonth(month)}<span> </span>${monthDay}`;
    setTimeout(showTime,1000);
}

 function addZero(n){
     return(parseInt(n,10) <10? '0':'') + n;
 }

function setBgGreet(){  
    //let today = new Date();
    let today = new Date(2019,06,20,18,33,30);
    hour = today.getHours();

    if(hour<6){

        setBgNight(hour);
    }else if(hour>=6 && hour<12){

       setBgMorning(hour);
    }else if(hour >=12 && hour <18){

       setBgDay(hour);
    }else {

       setBgEvening(hour);
    }
    changing=hour;
}

function setBgNight(hour){

    switch(hour){
        case 0:
            bgImage.style.backgroundImage= "url('night6.jpg')";
            greeting.textContent = "Good Night";
            break;
        case 1:
            bgImage.style.backgroundImage= "url('night7.jpg')";
            greeting.textContent = "Good Night";
            break;
        case 2:
            bgImage.style.backgroundImage= "url('night9.jpg')";
            greeting.textContent = "Good Night";
            break;
        case 3:
            bgImage.style.backgroundImage= "url('night10.jpg')";
            greeting.textContent = "Good Night";
            break;
        case 4:
            bgImage.style.backgroundImage= "url('night11.jpg')";
            greeting.textContent = "Good Night";
            break;
        case 5:
            bgImage.style.backgroundImage= "url('night12.jpg')";
            greeting.textContent = "Good Night";
            break;
            
    }
}

function setBgMorning(hour){

    switch(hour){
        case 6:
            bgImage.style.backgroundImage= "url('morning2.jpg')";
            greeting.textContent = "Good Morning";
            break;
        case 7:
            bgImage.style.backgroundImage= "url('morning3.jpg')";
            greeting.textContent = "Good Morning";
            break;
        case 8:
            bgImage.style.backgroundImage= "url('morning5.jpg')";
            greeting.textContent = "Good Morning";
            break;
        case 9:
            bgImage.style.backgroundImage= "url('morning6.jpg')";
            greeting.textContent = "Good Morning";
            break;
        case 10:
            bgImage.style.backgroundImage= "url('morning7.jpg')";
            greeting.textContent = "Good Morning";
            break;
        case 11:
            bgImage.style.backgroundImage= "url('morning8.jpg')";
            greeting.textContent = "Good Morning";
            break;
            
    }
}

function setBgDay(hour){

    switch(hour){
        case 12:
            bgImage.style.backgroundImage= "url('day2.jpg' )";
        greeting.textContent = "Good Afternoon";
            break;
        case 13:
            bgImage.style.backgroundImage= "url('day3.jpg' )";
            greeting.textContent = "Good Afternoon";
            break;
        case 14:
            bgImage.style.backgroundImage= "url('day4.jpg' )";
            greeting.textContent = "Good Afternoon";
            break;
        case 15:
            bgImage.style.backgroundImage= "url('day5.jpg' )";
            greeting.textContent = "Good Afternoon";
            break;
        case 16:
            bgImage.style.backgroundImage= "url('day6.jpg' )";
            greeting.textContent = "Good Afternoon";
            break;
        case 17:
            bgImage.style.backgroundImage= "url('day7.jpg' )";
            greeting.textContent = "Good Afternoon";
            break;
            
    }
}

function setBgEvening(hour){

    switch(hour){
        case 18:
            bgImage.style.backgroundImage = "url('evening3.jpg')";
            greeting.textContent = "Good Evening";
            break;
        case 19:
            bgImage.style.backgroundImage = "url('evening4.jpg')";
            greeting.textContent = "Good Evening";
            break;
        case 20:
            bgImage.style.backgroundImage = "url('evening5.jpg')";
            greeting.textContent = "Good Evening";
            break;
        case 21:
            bgImage.style.backgroundImage = "url('evening6.jpg')";
            greeting.textContent = "Good Evening";
            break;
        case 22:
            bgImage.style.backgroundImage = "url('evening7.jpg')";
            greeting.textContent = "Good Evening";
            break;
        case 23:
            bgImage.style.backgroundImage = "url('evening8.jpg')";
            greeting.textContent = "Good Evening";
            break;
            
    }
}

function declareMonth(key){
    key++;
    let month;
    switch(key){
        case 1: 
        month="January";
        break;
        case 2: 
        month="February";
        break;
        case 3: 
        month="March";
        break;
        case 4: 
        month="April";
        break;
        case 5: 
        month="May";
        break;
        case 6: 
        month="June";
        break;
        case 7: 
        month="July";
        break;
        case 8: 
        month="August";
        break;
        case 9: 
        month="September";
        break;
        case 10: 
        month="October";
        break;
        case 11: 
        month="November";
        break;
        case 12: 
        month="December";
        break;  
    }
    return month;
}

function declareWeekDay(key){
    key++;
    let weekDay;
    switch(key){
        case 1: 
        weekDay="Sunday";
        break;
        case 2: 
        weekDay="Monday";
        break;
        case 3: 
        weekDay="Tuesday";
        break;
        case 4: 
        weekDay="Wednesday";
        break;
        case 5: 
        weekDay="Thursday";
        break;
        case 6: 
        weekDay="Friday";
        break;
        case 7: 
        weekDay="Saturday";
        break;
        
    }
    return weekDay;
}

function getName(){
    
    if(localStorage.getItem('name')===null || localStorage.getItem('name')===""){
        userName.textContent ='[EnterName]';
    }else{
        userName.textContent= localStorage.getItem('name');
    }
}

function getFocus(){

    if(localStorage.getItem('focus')===null|| localStorage.getItem('focus')===""){
        focuss.textContent ='[EnterFocus]';
    }else{
        focuss.textContent= localStorage.getItem('focus');
    }
}

function setName(e){
    if(isEnterPressed(e)){
        localStorage.setItem('name',e.target.innerText);
        userName.blur();
    }else{
        localStorage.setItem('name',e.target.innerText);
    }
}

function setFocus(e){
    if(isEnterPressed(e)){
        localStorage.setItem('focus',e.target.innerText);
        focus.blur();
    }else{
        localStorage.setItem('focus',e.target.innerText);
    }
}

function isEnterPressed(e){
    if(e.type==='keypress'){
        if(e.which==13||e.keyCode==13){
            return true;
        }
    }
}

async function getWeather() {
    weatherIcon.className = 'weather-icon owf';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=e7ba0d49f48cc64c03c18ec4d85fef5d&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    humidity.textContent = `humidity: ${data.main.humidity}%`;
    wind.textContent = `wind speed: ${data.wind.speed}`
    weatherDescription.textContent = data.weather[0].description;
}

function setCity(event) {
    if (event.code === 'Enter') {
      getWeather();
      city.blur();
    }
  }

userName.addEventListener('keypress',setName);
userName.addEventListener('blur', setName);

focuss.addEventListener('keypress',setFocus);
focuss.addEventListener('blur', setFocus);

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

getWeather()
showTime();
setBgGreet();
getName();
getFocus();



