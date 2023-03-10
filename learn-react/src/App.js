import './App.css';
import Events from './components/Events'

function App() {
  return (
    <div className="App">  
      <h1>Events testing</h1>
      <Events text='First event' number={10}></Events>
    </div>
  );
}

export default App;
