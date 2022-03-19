import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <LoadPosts></LoadPosts> */}
      <District name='hobigonj'></District>
      <District name='sylhet'></District>
      <District name='dhaka'></District>
    </div>
  );
}
function LoadPosts() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
    
  }, [])
  
  return (
    <div>
      <h1>Post Length:{posts.length}</h1>
      {
        posts.map(post=> <Post title={post.title} ></Post>)
      }
    </div>
  )

}
function Post(props) {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}

//adding event listener
function District(props) {
  
  

  return (
    <div>
      <h2>Name:{props.name}</h2>
    <h5>Speciality:</h5>
    </div>
  )
}

export default App;
