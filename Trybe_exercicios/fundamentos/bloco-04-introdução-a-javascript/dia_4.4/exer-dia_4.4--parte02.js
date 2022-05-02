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

function maisRepetido(numeros) {
  let repetido = 0;
  let numero = 0;
  let indexNumero = 0;
  for (let index in numeros) {
    let vNumero = numeros[index];
    for (let index2 in numeros) {
      if (vNumero === numeros[index2]) {
        numero += 1;
      }
    }
    if (numero > repetido) {
      repetido = numero;
      indexNumero = index;
    }
    numero = 0;
  }
  return numeros[indexNumero];
}

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

function somaTodosNumeros(numeros) {
  let soma = 0;
  for (let index = 1; index <= numeros; index += 1) {
    soma = soma + index;
  }
  return soma;
}
// console.log(somaTodosNumeros(5));

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  trueFalse = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      trueFalse = false;
    }
  }
  return trueFalse;
}

// console.log(verificaFimPalavra('trybe', 'be')); 
// console.log(verificaFimPalavra('joaofernando', 'fernan')); 