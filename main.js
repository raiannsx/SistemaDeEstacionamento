let registros = [
    { placa: "ABC-1234", entrada: "08:00", saida: "12:00", status: "Saiu" },
    { placa: "XYZ-5678", entrada: "09:30", saida: "", status: "Dentro" }
];

function carregarHistorico(lista = registros) {
    let tabela = document.getElementById("historico");
    tabela.innerHTML = ""; // Limpa a tabela antes de carregar novos dados

    lista.forEach(registro => {
        let linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${registro.placa}</td>
            <td>${registro.entrada}</td>
            <td>${registro.saida || "-"}</td>
            <td>${registro.status}</td>
        `;
        tabela.appendChild(linha);
    });
}

function adicionarRegistro() {
    let placa = prompt("Digite a placa do veículo:");
    let entrada = prompt("Digite o horário de entrada:");

    if (placa && entrada) {
        registros.push({ placa: placa.toUpperCase(), entrada, saida: "", status: "Dentro" });
        carregarHistorico();
    } else {
        alert("Placa e horário de entrada são obrigatórios!");
    }
}

function filtrarPlaca() {
    let filtro = document.getElementById("placaFiltro").value.toUpperCase();
    
    let filtrados = registros.filter(reg => reg.placa.includes(filtro));
    
    carregarHistorico(filtrados);
}

// Carrega os registros iniciais ao abrir a página
window.onload = carregarHistorico;
