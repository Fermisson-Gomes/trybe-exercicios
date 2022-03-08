// parte 01

const a = 30;
const b = 25;

let soma = a + b;
console.log(soma);

let sub =  a - b;
console.log(sub);

let mult = a * b;
console.log(mult);

let div = a / b;
console.log(div);

let mod = a % b;
console.log(mod);

 // parte 02

const num1 = 200
const num2 = 50

if (num1 > num2) {
  console.log(`${num1} é o maior numero`)
}
else {
  console.log(`${num2} é o maior numero`)
}

// parte 03

const n1 = 20;
const n2 = 400;
const n3 = -1000;

if (n1 > n2 && n1 > n3) {
  console.log(`${n1} é o maior numero`);
}
else if (n2 > n1 && n2 > n3) {
  console.log(`${n2} é o maior numero`);
}
else {
  console.log(`${n3} é o maior numero`);
}

// parte 04

const n = -10;

if (n > 0) {
  console.log("positivo");
}
else if (n == 0) {
  console.log("zero");
}
else if (n < 0) {
  console.log("negativo");
}

// parte 05

const a1 = 8;
const a2 = 9;
const a3 = -2;

let soma = a1 + a2 + a3;

if (a1 < 0 || a2 < 0 || a3 < 0) {
  console.log("erro: um dos angulos é invalido!");
}
else if (soma !== 18) {
  console.log(false);
}
else if (soma === 18) {
  console.log(true);
}

// parte 06

const peca = "raiNHa".toLowerCase();

switch (peca) {
  case "pião":
    console.log("1 casa a frente")
  break;
  case "torre":
    console.log("em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.")
  break;
  case "cavalo":
    console.log("um L tanto na horizontal quanto na vertical")
  break;
  case "bispo":
    console.log("todas as diagonais")
  break;
  case "rainha":
    console.log("todas as direções quantas casas forem possiveis")
  break;
  case "rei":
    console.log("todas as direções porem apenas uma casa")
  break;
  default: 
    console.log("erro: peça invalida!");
}

// parte 07

const nota = -1;

if (nota > 100 || nota < 0) {
  console.log("erro!");
}
else if (nota >= 90 && nota <= 100) {
  console.log("A");
} 
else if (nota >= 80 && nota <= 89) {
  console.log("B");
}
else if (nota >= 70 && nota <= 79) {
  console.log("C");
}
else if (nota >= 60 && nota <= 69) {
  console.log("D");
}
else if (nota >= 50 && nota <=59) {
  console.log("E");
}
else if (nota < 50 && nota >= 0) {
  console.log("F")
}

// parte 08

const nume1 = 2;
const nume2 = 3;
const nume3 = 4.5;

if (nume1 % 2 == 0 || nume2 % 2 == 0 || nume3 % 2 == 0) {
  console.log(true);
}
else {
  console.log(false);
}

// parte 09

const nume1 = 6;
const nume2 = 9;
const nume3 = 3.6;

if (nume1 % 2 == 1 || nume2 % 2 == 1 || nume3 % 2 == 1) {
  console.log(true);
}
else {
  console.log(false);
}

// parte 10


const valorCusto = 300;
const valorDeVenda = 400;

if (valorCusto == 0 || valorDeVenda == 0) {
  console.log("erro!")
}
else {
  let impost = valorCusto * 0.2;
  let valorCustoTotal = valorCusto + impost;
  let lucro = valorDeVenda - valorCustoTotal;
  console.log(lucro);
}

// parte 11

const salarioBruto = 50000.56;
let salarioBase;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
  let aliquota = salarioBruto * 0.08;
  salarioBase = salarioBruto - aliquota;
}
else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92) {
  let aliquota = salarioBruto * 0.09;
  salarioBase = salarioBruto - aliquota;
}
else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
  let aliquota = salarioBruto * 0.11;
  salarioBase = salarioBruto - aliquota;
}
else if (salarioBruto > 5189.83) {
  let aliquota = 570.88;
  salarioBase = salarioBruto - aliquota;
}

if (salarioBase <= 1903.98) {
  salarioLiquido = salarioBase;
  console.log(salarioLiquido);
}
else if (salarioBase > 1903.99 && salarioBase <= 2826.65) {
  let aliquota = (salarioBase * 0.075) - 142.80;
  salarioLiquido = salarioBase - aliquota;
  console.log(salarioLiquido);
}
else if (salarioBase > 2826.66 && salarioBase <= 3751.05) {
  let aliquota = (salarioBase * 0.15) - 354.80;
  salarioLiquido = salarioBase - aliquota;
  console.log(salarioLiquido);
}
else if (salarioBase > 3751.06 && salarioBase <= 4664.68) {
  let aliquota = (salarioBase * 0.225) - 636.13;
  salarioLiquido = salarioBase - aliquota;
  console.log(salarioLiquido);
}
else if (salarioBase > 4664.68) {
  let aliquota = (salarioBase * 0.275) - 869.36;
  salarioLiquido = salarioBase - aliquota;
  console.log(salarioLiquido);
}