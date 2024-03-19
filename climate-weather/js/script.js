const key = "4e63b730d1e97486e34a23103d40cb66";

function insertValues(data) {
    document.getElementById("cityText").innerHTML = "Weather in " + data.name;
    document.getElementById("temp").innerHTML = Math.floor(data.main.temp+"°C");
    document.getElementById("weatherText").innerHTML = data.weather[0].description;
    document.getElementById("humidity").innerHTML = data.main.humidity+"%";
    document.getElementById("searchImg").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    insertValues(data);
}

function searchOption() {
    const city = document.getElementById("inputCity").value;
}