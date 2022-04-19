// Item 1

// const newEmployees = (nomeEmail) => {
//   const employees = {
//     id1: nomeEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: nomeEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: nomeEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// const nomeEmail = (nome) => {
//   return {
//     nome:nome,
//     email: `${nome.replace(' ', '_').toLowerCase()}@gmail.com`,
//   }
// }

// console.log(newEmployees(nomeEmail));

// Item 2

// const sorteioTrybe = (num, func) => {
//   const numeroSorteado = Math.floor(Math.random(1) * 5)
//   return func(num, numeroSorteado);
// }

// const numeroSorteado = (num1, num2) => {
//   if (num1 === num2) {
//     return 'Parabéns você ganhou';
//   }
//   return 'Tente novamente';
// }

// console.log(sorteioTrybe(1, numeroSorteado));

// Item 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let contagemDeAcertos = 0;

const questoesDaProva = (gabarito, respostasEstudante, contagem) => {
  return contagem(gabarito, respostasEstudante)
}

const correcaoDaProva = (gabarito, respostasEstudante) => {
  for (let i = 0; i < respostasEstudante; i += 1) {
    gabarito.indexOf(respostasEstudante[i]) > -1 ? contagemDeAcertos = contagemDeAcertos + 1 : contagemDeAcertos = contagemDeAcertos - 0.5;
  }
  console.log(gabarito);
  console.log(respostasEstudante);
}

questoesDaProva(RIGHT_ANSWERS, STUDENT_ANSWERS, correcaoDaProva);
