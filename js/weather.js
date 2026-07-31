/* ==========================================================
   XAMÃ VETERINÁRIA
   CLIMA - Open Meteo
========================================================== */

const LATITUDE = -15.793889;
const LONGITUDE = -47.882778;

async function atualizarClima() {

    try {

        const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo`;

        const resposta = await fetch(url);

        const dados = await resposta.json();

        const atual = dados.current;

        const diaria = dados.daily;

        document.getElementById("temperature").textContent =
            Math.round(atual.temperature_2m) + "°";

        document.getElementById("humidity").textContent =
            atual.relative_humidity_2m + "%";

        document.getElementById("wind").textContent =
            Math.round(atual.wind_speed_10m) + " km/h";

        document.getElementById("tempMax").textContent =
            Math.round(diaria.temperature_2m_max[0]) + "°";

        document.getElementById("tempMin").textContent =
            Math.round(diaria.temperature_2m_min[0]) + "°";

        atualizarDescricao(atual.weather_code);

	    }

    catch (erro) {

        console.error("Erro ao obter clima:", erro);

        document.getElementById("condition").textContent =
            "Sem conexão";

    }

}

function atualizarDescricao(codigo){

    const condicao =
        document.getElementById("condition");

    const icone =
        document.getElementById("weatherIcon");

    switch(codigo){

        case 0:

            condicao.textContent="Céu limpo";
            icone.src="assets/icons/clear-day.svg";
            break;

        case 1:
        case 2:
        case 3:

            condicao.textContent="Parcialmente nublado";
            icone.src="assets/icons/partly-cloudy-day.svg";
            break;

        case 45:
        case 48:

            condicao.textContent="Névoa";
            icone.src="assets/icons/fog.svg";
            break;

        case 51:
        case 53:
        case 55:
        case 61:
        case 63:
        case 65:

            condicao.textContent="Chuva";
            icone.src="assets/icons/partly-cloudy-day-rain.svg";
            break;

        case 71:
        case 73:
        case 75:
        case 77:

            condicao.textContent="Neve";
            icone.src="assets/icons/snow.svg";
            break;

        case 80:
        case 81:
        case 82:
        case 95:
        case 96:
        case 99:

            condicao.textContent="Tempestade";
            icone.src="assets/icons/thunderstorms.svg";
            break;

        default:

            condicao.textContent="Indisponível";
            icone.src="assets/icons/clear-day.svg";

    }

}

atualizarClima();

setInterval(atualizarClima, 900000);