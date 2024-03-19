const API_KEY = "4e63b730d1e97486e34a23103d40cb66";

function updateValues(data) {
  document.getElementById("cityText").textContent = `Climate in ${data.name}`;
  document.getElementById("temp").textContent = `${Math.floor(data.main.temp)}°C`;
  document.getElementById("weatherText").textContent = data.weather[0].description;
  document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
  document.getElementById("searchImg").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function searchCity(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`
    );
    if (!response.ok) {
      throw new Error(`Error when fetching data : ${response.status}`);
    }
    const data = await response.json();
    updateValues(data);
  } catch (error) {
    console.error(error.message);
    errorMessage(error.message);
  }
}

function search() {
  const city = document.getElementById("inputCity").value.trim();
  if (!city) {
    return;
  }
  searchCity(city);
}

document.getElementById("inputCity").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    search();
  }
});

function errorMessage(message) {
}

searchCity("São Paulo");
