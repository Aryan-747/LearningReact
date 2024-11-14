import React from 'react'
import {useState} from 'react';

const Content = () => {


    const [name,setName] = useState('Davey');
    const [count,setCount] = useState(0);

    const  handleNameChange = () =>
    {
        const names = ['Davey','Mikel','Bob','Todd','Kevin De Bruyne'];
        const int = Math.floor(Math.random()*5);

        setName(names[int]);
    }

    const handleCount = () =>
    {
      setCount(count+1);
      console.log(count);
    }

    const handleClick = () => {
      console.log("You clicked it");
    }
    
    const handleClick2 = (name) => {
      console.log(`${name} was Clicked`);
    }

  return (
<main>
    <p>
        Hello {name}!
    </p>

    <button onClick={handleClick}>Click It</button>
    <button onClick={handleNameChange}>Change Name</button>
    <button onClick ={handleCount}>Check Count</button>

</main>
  )
}

export default Content