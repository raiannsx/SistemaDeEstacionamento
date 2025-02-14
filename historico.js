let registros = [
];

// Função para carregar os registros na tabela
function carregarHistorico(filtrados = registros) {
    let tabela = document.getElementById("historico");
    tabela.innerHTML = ""; // Limpa a tabela antes de carregar

    filtrados.forEach((registro, index) => {
        let linha = `<tr>
            <td>${registro.placa}</td>
            <td>${registro.entrada}</td>
            <td>${registro.saida || "-"}</td>
            <td>${registro.status}</td>
            <td>
                ${registro.status === "Dentro" ? `<button onclick="registrarSaida(${index})">Registrar Saída</button>` : ""}
            </td>
        </tr>`;
        tabela.innerHTML += linha;
    });
}


// Função para adicionar um novo veículo ao histórico
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


// Função para filtrar os registros pela placa via prompt
function filtrarPlaca() {
    let filtro = prompt("Digite a placa que deseja filtrar:").toUpperCase().trim();

    if (filtro === "") {
        carregarHistorico(); // Se não houver filtro, exibe todos os registros
        return;
    }

    let filtrados = registros.filter(reg => reg.placa.includes(filtro));

    if (filtrados.length === 0) {
        alert("Nenhum registro encontrado para essa placa.");
    }

    carregarHistorico(filtrados);
}

// Função para registrar a saída de um veículo
function registrarSaida(index) {
    let saida = prompt("Digite o horário de saída:");

    if (saida) {
        registros[index].saida = saida;
        registros[index].status = "Saiu";
        carregarHistorico(); // Atualiza a tabela
    } else {
        alert("Horário de saída é obrigatório!");
    }
}

// Carrega os registros ao abrir a página
window.onload = carregarHistorico;
