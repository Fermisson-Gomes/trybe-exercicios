// function verificaPalindrome(palavra){
//   let reverseWord = palavra.split('').reverse().join('');
//   if (reverseWord === palavra) {
//     console.log(true)
//   }
//   else {
//     console.log(false)
//   }
// }

// verificaPalindrome('arara');

// let array = [2, 3, 6, 7, 10, 1];
// let maior = 0;
// function indiceDoMaior(arrayNumeros){
//   for (i in arrayNumeros) {
//     if (maior < arrayNumeros[i]) {
//       maior = i;
//     }
//   }
//   console.log(maior)
// }

// indiceDoMaior(array)

// let array2 = [2, 4, 6, 7, 10, 0, -3];
// let menor = 1;
// function indiceDoMenor(arrayNumeros){
//   for (i in arrayNumeros) {
//     if (menor > arrayNumeros[i]) {
//       menor = i;
//     }
//   }
//   console.log(menor)
// }

// indiceDoMenor(array2)

// let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// let maiorQuantidade = '';
// function maiorNome(listaNomes){
//   for (key in listaNomes) {
//     if (listaNomes[key].length > maiorQuantidade.length) {
//       maiorQuantidade = listaNomes[key];
//     }
//   }
//   console.log(maiorQuantidade);
// }

// maiorNome(nomes);

let inteiros = [2, 3, 2, 5, 8, 2, 3]; 
let maisRepetido = 0;

function inteiroMaisRepetido(arrayNumeros){
  let aparece = 1;
  for (key in arrayNumeros) {
    for (i in arrayNumeros) {
      if (arrayNumeros[key] === arrayNumeros[i]) {
        aparece += 1;
      }
    }
  }
  console.log(maisRepetido)
}

inteiroMaisRepetido(inteiros);