import './App.css';
import './components/OutraLista'
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">  
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}></OutraLista>
    </div>
  );
}

export default App;
