import './App.css';
import P from 'prop-types'
import React, {useState, useEffect,  useMemo} from'react';

const Post = ({ post }) => {
  console.log("son's render");
  return(
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};



Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};



function App() {
  const[posts, setPosts] = useState([]);
  const[value, setValue] = useState('');
  
  console.log("Father's render");

  // ComponentDidMount
  useEffect(() => {
    setTimeout(function() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000)
  }, []);

  return(
    <div>
       <p>
          <input 
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
       </p>
       {useMemo(() => {
          return (
            posts.length > 0 && 
            posts.map((post) => {
              return <Post key={post.id} post={post} />
            })
          );
       }, [posts])}

       {posts.length <= 0 && <p>Don't have posts existents yet</p>}
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