console.log(document.getElementById('elementoOndeVoceEsta'));
console.log(document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'purple');
console.log(document.getElementById('primeiroFilhoDoFilho').innerText = 'kaizokuou ni ore wa naru!!');
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling.nextSibling);
console.log(document.getElementById('pai').lastElementChild.previousElementSibling);
let pai = document.getElementById('pai');
let voce = document.getElementById('elementoOndeVoceEsta');
let filhoDofilho = document.getElementById('primeiroFilhoDoFilho');

let irmao = document.createElement('section');
irmao.id = 'quintoEUltimoFilho';
let filho1 = document.createElement('section');
filho1.id = 'terceiroEUltimoFilho';
let filho2 = document.createElement('section');
filho2.id = 'primeiroFilhoDoFilhoDoFilhoDoFilho';

pai.appendChild(irmao);
voce.appendChild(filho1);
filhoDofilho.appendChild(filho2);

console.log(document.getElementById('primeiroFilhoDoFilhoDoFilhoDoFilho').parentElement.parentElement.nextElementSibling);