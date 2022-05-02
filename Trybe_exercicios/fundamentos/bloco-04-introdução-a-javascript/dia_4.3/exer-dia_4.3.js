let numero = 4;

let fatorial = 1;

for (let index = numero; index > 0; index -= 1) {
  fatorial = fatorial * index;
}

// console.log(fatorial)


let word = 'trybe';

let newWord = '';

for (let index = word.length -1; index >= 0; index -= 1){
  newWord += word[index];
}

// console.log(newWord);

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}

// console.log(maiorPalavra);
// console.log(menorPalavra);

let maiorNumeroPrimo = 0;

for (let numeroInicial = 0; numeroInicial <= 50; numeroInicial += 1) {
  let isPrime = true;
  for (let divisor = 2; divisor < numeroInicial
; divisor += 1) {
    if (numeroInicial
   % divisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    maiorNumeroPrimo = numeroInicial
;
  }
}

// console.log(maiorNumeroPrimo);
