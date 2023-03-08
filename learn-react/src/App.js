import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase'

function App() {
  const name = 'Randerson'

  function soma(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JSK</h2>
      <p>Olá, { name.toUpperCase() }</p>
      <p>Somando 1 + 2 = {soma(1,2)}</p>
      <img src={url} alt="Minha image" />
      <HelloWorld />
      <Frase />
    </div>
  );
}

export default App;
