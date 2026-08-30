var capital = prompt("Digite o capital inicial:");

var taxa = prompt("Digite a taxa de juros:");

var tempo = prompt("Digite o prazo do investimento:");

taxa = taxa / 100;

var montante = capital * Math.pow(1 + taxa, tempo);

alert("O montante é: R$ " + montante);