import { useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';


function App() {
  
  const [userSelection, setUserSelection]= useState("")
  const [buttonSelect, setButtonSelect] = useState("");

  
  const handleSelect=(e)=>{
    console.log("hello")
    setUserSelection(e.target.value)
    console.log(e.target.value)
  }

  const submit=(e)=>{
    e.preventDefault()
    setButtonSelect(userSelection)
    console.log("click")
  }

  return (
      <div className="App">
        <form onSubmit={submit}>
          <select onChange={handleSelect} value={userSelection}>
              <option value="">Please select</option>
              <option value="Vincent van Gogh">Vincent Van Gogh</option>
              <option value="Johannes Vermeer">Johannes Vermeer</option>
          </select>
          <button type="submit">get art</button>
        </form>

          <Gallery userChoice={buttonSelect} />
      </div>
  );


}

export default App;
