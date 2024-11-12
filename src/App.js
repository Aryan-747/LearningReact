import './App.css';
import Header from './Header';

function App() {

  const handleNameChange = () => {
    const names = ['Davey','Bob','Kevin De Bruyne','Mikel','Mike'];
    const int = Math.floor(Math.random()*5);
    return names[int];
  }


  return (
    <div className="App">
          <Header/>
           Hello {handleNameChange()}!
        
    </div>
  );
}

export default App;
