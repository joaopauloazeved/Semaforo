const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const verde = document.getElementById("verde");

function apagarLuzes() {
    vermelho.className = "luz";
    amarelo.className = "luz";
    verde.className = "luz";
}

function ligarVermelho() {
    apagarLuzes();
    vermelho.classList.add("vermelho");
}

function ligarAmarelo() {
    apagarLuzes();
    amarelo.classList.add("amarelo");
}

function ligarVerde() {
    apagarLuzes();
    verde.classList.add("verde");
}

