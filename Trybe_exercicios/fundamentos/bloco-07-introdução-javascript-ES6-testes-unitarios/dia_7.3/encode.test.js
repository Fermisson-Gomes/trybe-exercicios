function encode(frase) {
  let palavra = frase.split('');
  for (let key = 0; key < palavra.length; key += 1) {
    switch (palavra[key]) {
    case 'a':
      palavra[key] = '1';
      break;
    case 'e':
      palavra[key] = '2';
      break;
    case 'i':
      palavra[key] = '3';
      break;
    case 'o':
      palavra[key] = '4';
      break;
    case 'u':
      palavra[key] = '5';
      break;
    }
  }
  let newFrase = palavra.join('');
  return newFrase;
}
function decode(newFrase) {
  let palavra = newFrase.split('');
  for (let key = 0; key < palavra.length; key += 1) {
    switch (palavra[key]) {
    case '1':
      palavra[key] = 'a';
      break;
    case '2':
      palavra[key] = 'e';
      break;
    case '3':
      palavra[key] = 'i';
      break;
    case '4':
      palavra[key] = 'o';
      break;
    case '5':
      palavra[key] = 'u';
      break;
    }
  }
  let novaFrase = palavra.join('');
  return novaFrase;
}