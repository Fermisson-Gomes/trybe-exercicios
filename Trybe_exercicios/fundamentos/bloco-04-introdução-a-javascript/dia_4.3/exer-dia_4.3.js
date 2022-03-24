// let numero = 10;

// let fatorial = 1;

// for (let index = numero; index > 0; index -= 1) {
//   fatorial = fatorial * index;
// }

// console.log(fatorial)

// let numero = 1;

// let fatorial = 1;

// for (let index = numero; index <= 10; index += 1) {
//   fatorial = fatorial * index;
// }

// console.log(fatorial);

// let word = 'trybe';

// let newWord = '';

// for (let index = word.length -1; index >= 0; index -= 1){
//   newWord += word[index];
// }

// console.log(newWord);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';
let menorPalavra = '';


for (let i = 0; i <= array.length; i += 1) {
  if (maiorPalavra < array[i].length) {
    maiorPalavra = array[i];
  }
}

console.log(maiorPalavra);