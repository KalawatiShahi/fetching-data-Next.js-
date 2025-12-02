'use client'

import {useState, useEffect} from 'react';

const Posts = () =>{
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data = await res.json();
      console.log(data);
      setPosts(data);
    }
    fetchData();
  },[]);

  return(
    <div>
    <h1>Users List</h1>
      <ul>
        {
          posts.map((curElem)=>{
            const {id, title} = curElem;
            return <li key={id}>Title:{title}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Posts;