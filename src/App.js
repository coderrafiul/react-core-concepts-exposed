import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products=[{name: 'Photoshop', price: '$90.99'}, {name: 'Illustrator', price: '$65.5'}, {name: 'PDF Reader', price: '$35.5'}];

  return (
    <div className="App">
      <header className="App-header">
       <p>I am a react person</p>
       <Count></Count>
       <Users></Users>
      <ul>
          {products.map(product=> <li>{product.name}</li>)}
      </ul>
       {
         products.map(product=><Products product={product}></Products>)
       }
       <Products product={products[0]}></Products>
       <Products product={products[1]}></Products>
      </header>
    </div>
  );
}

function Products(props){

  const productStyle={
    border: '1px solid gray',
    backgroundColor: 'lightgray',
    borderRadius: '5px',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price}= props.product
  console.log(name, price)
  return(
    <div style={productStyle}>
     
      <h3>{name}</h3>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

function Count(){
  const [count, setCount]= useState(10);
  
  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=> setCount(count - 1)}>Decrease</button>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then (response => response.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic User:{users.length}</h3>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default App;
