// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log('Bem-vinda, ' + info.personagem);

// info.recorrente = 'sim';

// console.log(info);

// for (key in info){
//   console.log(key);
// }

// for (key in info) {
//   console.log(info[key]);
// }

// let infoTioPatinhas = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dells Four Colors Comics #178',
//   nota: 'Ultimo MacPatinhas',
//   recorrente: 'sim'
// };

// let informations = [info, infoTioPatinhas];

// for (key in info) {
//     if (key !== 'recorrente'){
//       console.log(info[key] + ' e ' + infoTioPatinhas[key]);
//     } else if (key === 'recorrente' && info.recorrente === 'sim' && infoTioPatinhas.recorrente === 'sim') {
//       console.log('ambos recorrentes');
//     }
// }

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('o livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo); 

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');
