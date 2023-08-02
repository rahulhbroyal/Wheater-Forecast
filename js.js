//selector variable
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var icon = document.querySelector('#ico')

// Get your own free OWM API key at https://www.openweathermap.org/appid - please do not re-use mine!
// You don't need an API key for this to work at the moment, but this will change eventually.
apik = "d53ceb29ff248b5288f374995ef37917"
//kelvin to celcious
function convertion(val){
    return (val - 273).toFixed(2)
}
function iconn(dis){
    if(dis=="scattered clouds"){
        return document.getElementById("ico").src = "bro.gif";
    }
    else if(dis=="broken clouds"){
        return document.getElementById("ico").src = "night.gif";
    }
    else{
        return document.getElementById("ico").src = "rain.gif";
    }
}
//fetch
    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
         //.then(data => console.log(data))
        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']

            city.innerHTML=`City: ${nameval}`
            temp.innerHTML = `Temperature: ${ convertion(tempature)} C`
            description.innerHTML = `Conditions: ${descrip}`
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`
            icon.innerHTML = `${iconn(descrip)}`
        })
        .catch(err => alert('You entered Wrong city name'))
    })