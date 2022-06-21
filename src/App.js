import './App.css';
import P from 'prop-types'
import React, {useState, useEffect, useCallback} from'react';

// React.memo will re-render only when has been modified
const Button = React.memo(function Button({ incrementButton }){
  console.log("Son's render");
  return <button onClick={()=> incrementButton(10)}>+</button>
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const[count,setCount] = useState(0);
  
  const incrementCounter = useCallback((num) => {
    setCount((c) => c + num);
  }, []);  

  console.log("Father's render");
  return(
    <div>
       <p>Você clicou: {count} vezes</p>
       <Button incrementButton={incrementCounter}/>
 
    </div>
  );
}

export default App;



// componentDidUpdate
  /*
  useEffect(()=> {
    console.log("componentDidUpdate"); // Will run at mounting and after each render component
  });
  */

  // componentDidMount
  /*
  useEffect(() => {
    console.log("Builded");
  }, []);
  
  // componentDidUpdate with dependencies, just update if have some changes including a state variable
  useEffect(() => {
    console.log(`count has been mounted and modified to ${count}`);
  }, [count]);

  

  useEffect(() => {
    document.querySelector("p")?.addEventListener("click", eventFunc); // ?. Chaining Operator 

    return () => {
      document.querySelector("p")?.removeEventListener("click", eventFunc); // ?. Chaining Operator 
    } 
  }, []);

  */