function atualizarRelogio() {

    const agora = new Date();

    // Hora
    const hora = agora.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("clock").textContent = hora;

    // Data
    const data = agora.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    // Primeira letra maiúscula
    document.getElementById("date").textContent =
        data.charAt(0).toUpperCase() + data.slice(1);

    // Saudação
    const h = agora.getHours();

    let saudacao = "Boa noite 🌙";

    if (h >= 5 && h < 12) {
        saudacao = "Bom dia ☀️";
    } else if (h >= 12 && h < 18) {
        saudacao = "Boa tarde 🌤️";
    }

    document.getElementById("greeting").textContent = saudacao;
	
	document.getElementById("statusClock").innerHTML =
    hora.substring(0,5);
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);

