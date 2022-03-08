let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// parte 01

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// parte 02

let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}

console.log(soma);

// parte 03

let s = 0;
let m = 0;

for (let i = 0; i < numbers.length; i +=1) {
  s += numbers[i];
}

m = s / numbers.length;
console.log(m);

// tambem é possivel usar apenas as linhas 22, 28 e 29 pra resolver isso devido o exercicio anterior, mas como é para praticar o for, eu mantive ele.

// parte 04

let s = 0;
let m = 0;

for (let i = 0; i < numbers.length; i +=1) {
  s += numbers[i];
}

m = s / numbers.length;
console.log(m);

if (m > 20) {
  console.log("valor maior que 20");
}
else {
  console.log("valor menor ou igual a 20");
}

// parte 05

let maior = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (maior < numbers[i]) {
    maior = numbers[i];
  }
}

console.log(maior);

// parte 06

let impar = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 == 1) {
    impar += 1;
  }
}
if (impar > 0) {
  console.log(impar);
}
else {
  console.log("nenhum valor impar encontrado");
}

// parte 07

let menor = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (menor > numbers[i]) {
    menor = numbers[i];
  }
}

console.log(menor);

// parte 08

let numeros = [];

for (let i = 1; i <= 25; i += 1) {
  numeros.push(i);
}
for (let i = 0; i < numeros.length; i += 1) {
  console.log(numeros[i]);
}

// parte 09

let numeros = [];

for (let i = 1; i <= 25; i += 1) {
  numeros.push(i);
}
for (let i = 0; i < numeros.length; i += 1) {
  console.log(numeros[i] / 2);
}