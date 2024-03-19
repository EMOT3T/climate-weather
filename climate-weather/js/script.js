const API_KEY = "4e63b730d1e97486e34a23103d40cb66";

function atualizarValores(data) {
  document.getElementById("cityText").textContent = `Clima em ${data.name}`;
  document.getElementById("temp").textContent = `${Math.floor(data.main.temp)}°C`;
  document.getElementById("weatherText").textContent = data.weather[0].description;
  document.getElementById("humidity").textContent = `Humidade: ${data.main.humidity}%`;
  document.getElementById("searchImg").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&lang=pt_br&units=metric`
    );
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.status}`);
    }
    const data = await response.json();
    atualizarValores(data);
  } catch (error) {
    console.error(error.message);
    mostrarMensagemErro(error.message);
  }
}

function pesquisar() {
  const cidade = document.getElementById("inputCity").value.trim();
  if (!cidade) {
    return;
  }
  buscarCidade(cidade);
}

document.getElementById("inputCity").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    pesquisar();
  }
});

function mostrarMensagemErro(mensagem) {
}

buscarCidade("São Paulo");
