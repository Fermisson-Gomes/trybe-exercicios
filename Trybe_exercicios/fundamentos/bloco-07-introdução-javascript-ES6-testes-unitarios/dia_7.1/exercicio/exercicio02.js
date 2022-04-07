const fatorialCounter = (n) => {
  let fatorial = 1
  for (let index = n; index > 0; index -= 1) {
    fatorial = fatorial * index;
  }
  return fatorial
}

console.log(fatorialCounter(4));

const retornaMaior = (frase) => {
  const array = frase.split(' ');
  let maior = '';
  for (let i = 0; i  < array.length; i += 1) {
    if (maior.length < array[i].length) {
      maior = array[i];
    }
  }
  return maior;
}

const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu' // retorna 'aconteceu'

console.log(retornaMaior(frase));


