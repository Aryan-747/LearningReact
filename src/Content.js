import React from 'react'

const Content = () => {

    const  handleNameChange = () =>
    {
        const names = ['Davey','Mikel','Bob','Todd','Kevin De Bruyne'];
        const int = Math.floor(Math.random()*5);

        return names[int];
    }

    const handleClick = () => {
      console.log("You clicked it");
    }
    
    const handleClick2 = () => {
      console.log(`${handleNameChange()} was Clicked`);
    }

  return (
<main>
    <p>
        Hello {handleNameChange()}!
    </p>

    <button onClick={handleClick}>Click It</button>
    <button onClick={handleClick2}>Click Me!</button>

</main>
  )
}

export default Content