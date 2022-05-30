import './App.css';
import { useState } from 'react';

function App() {
  // Declaring a new variable of state, called by "count"
  const [count, setCount] = useState(0);  // the only arg for useState is the initial state
  // Another State variables
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks'}]);

  // Use effect, similar to ComponentDidMount update and unmount
  
  //Update the doc title  using browser API
  document.title = `You clicked ${count} times on button`;
  return (
    <div className="App">
      <h2>{todos[0].text}</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Here  
      </button>    
    </div>
  );
}

export default App;
