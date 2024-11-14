import React from 'react'
import {useState} from 'react';

const Content = () => {


    const [name,setName] = useState('Davey');

    const  handleNameChange = () =>
    {
        const names = ['Davey','Mikel','Bob','Todd','Kevin De Bruyne'];
        const int = Math.floor(Math.random()*5);

        setName(names[int]);
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

</main>
  )
}

export default Content