const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['jogar', 'assistir a aula ao vivo', 'jantar'];

function App() {
  return (
    <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
  );
}

export default App;
