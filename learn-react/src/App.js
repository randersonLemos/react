import './App.css';
import Person from './components/Person'

function App() {
  return (
    <div className="App">  
      <Person 
        name='Randerson'
        age='34'
        labor='Computer Scientist'
        photo='https://via.placeholder.com/150'    
      />
    </div>
  );
}

export default App;
