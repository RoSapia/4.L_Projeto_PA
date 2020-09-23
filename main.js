const nome = prompt("Qual é o seu nome? ");
document.getElementById("nome").textContent = "Olá, " + nome + "!";

const saudacao = prompt("Olá, seja bem vindo! Deseja realizar o vesibular? (S/N) ");
let confirmacao;
let resposta1 = prompt("1- João tem 5 anos e Maria é 5 ano mais velha que João. Quantos anos Maria tem?\n1. 10\n2. 5\n3. 7");
let resposta2 = prompt("2- Matheus tem 5 bolinhas, se Joana  retirou 2, quantas sobraram?\n1. 1\n2. 5\n3. 3");
let resposta3 = prompt("3- Marcela tem 20 anos. Se Marcela tem o dobro da idade de Carlos, quantos anos Carlos tem?\n1. 22\n2. 10\n3. 40");
if (saudacao == "S" && "s") {
    confirmacao = function resultados(resposta1, resposta2, resposta3) {

    }
}
if (resposta1 == 1) {
    document.getElementById("correta_1").textContent = resposta1;

} else {
    document.getElementById("errada_1").textContent = resposta1;
}

if (resposta2 == 3) {
    document.getElementById("correta_2").textContent = resposta2;

} else {
    document.getElementById("errada_2").textContent = resposta2;
}

if (resposta3 == 2) {
    document.getElementById("correta_3").textContent = resposta3;

} else {
    document.getElementById("errada_3").textContent = resposta3;
}



