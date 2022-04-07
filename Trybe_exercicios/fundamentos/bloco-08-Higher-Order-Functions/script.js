// Item 1

const newEmployees = (nomeEmail) => {
  const employees = {
    id1: nomeEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nomeEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nomeEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const nomeEmail = (nome) => {
  return {
    nome:nome,
    email: `${nome.replace(' ', '_').toLowerCase()}@gmail.com`,
  }
}

// console.log(newEmployees(nomeEmail));

// Item 2

const sorteioTrybe = (num, func) => {
  
}

const numeroSorteado = (num) => {
  const numeroSorteado = Math.floor(Math.random(1) * 5)
  
}

console.log(sorteioTrybe());
