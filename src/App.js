import Gallery from './components/Gallery/Gallery';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons"
// import axios from 'axios';

function App() {
  // const [data, setData] = useState([])
  const [userSelection, setUserSelection]= useState("")
  const [buttonSelect, setButtonSelect] = useState("");
  const [nightMode, setNightMode] = useState(false)

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

  const handleNightMode =()=>{
    setNightMode(!nightMode)
  }

  return (
      <div className={
        nightMode
        ?
        "nightMode"
        :
        "App"
      }>
          <Header nightMode={nightMode}/>
          <div className="wrapper">
              <form onSubmit={submit}>
                  <select onChange={handleSelect} value={userSelection}>
                      <option value="">Please select</option>
                      <option value="Vincent van Gogh">Vincent Van Gogh</option>
                      <option value="Johannes Vermeer">Johannes Vermeer</option>
                  </select>
                  <button type="submit">Go!</button>
              </form>
              <button className="nightModeBtn" onClick={handleNightMode}>
                {nightMode 
                ? 
                <>
                  <FontAwesomeIcon className="nightMode" icon={faSun} />
                </>
                :
                <FontAwesomeIcon icon={faMoon} />
                }
              </button>


              <Gallery userChoice={buttonSelect} />
              <Footer nightMode={nightMode}/>
          </div>
      </div>
  );


}

export default App;
