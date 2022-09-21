const searchGarjIrneDark = () => {
    document.getElementsByClassName('searchDark')[0].style.display = "block";
    document.getElementsByClassName("locationDark")[0].style.display = "none";
}
const searchGarjIrneLight = () => {
    document.getElementsByClassName('searchLight')[0].style.display = "block";
    document.getElementsByClassName("locationLight")[0].style.display = "none";
}
const input = document.querySelector(".searchLight");
const cityName = document.querySelector('.locationLight');
input.addEventListener('keypress', (event) => {
    if(event.keyCode == 13) {
        getWeather(input.value)
        console.log(input.value)
        cityName.innerText = input.value
        document.getElementsByClassName('searchLight')[0].style.display = "none";
        document.getElementsByClassName("locationLight")[0].style.display = "block";
    }
})
async function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cbce11fc41917d162ce5f2091fc52eea`).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data)
        displayData(data.name, data.main.temp, data.weather[0].main)
    })
}
function displayData(cityName, tempRaw, status) {
    
}