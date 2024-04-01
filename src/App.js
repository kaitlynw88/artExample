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
      <div className={nightMode ? "App nightMode" : "App"}>
          <Header nightMode={nightMode} />
          <div className="wrapper">
            <div className='container'>
              <div className="switchContainer">
                  <FontAwesomeIcon className="toggleIcon" icon={faSun} />
                  <label className="switch">
                      <input type="checkbox" onClick={handleNightMode} />
                      <span
                          className={
                              nightMode
                                  ? "sliderRound sliderTranslate"
                                  : "sliderRound"
                          }
                      ></span>
                  </label>
                  <FontAwesomeIcon className="toggleIcon" icon={faMoon} />
              </div>
            </div>

              <form onSubmit={submit}>
                  <select onChange={handleSelect} value={userSelection}>
                      <option value="">Please select</option>
                      <option value="Vincent van Gogh">Vincent Van Gogh</option>
                      <option value="Johannes Vermeer">Johannes Vermeer</option>
                  </select>
                  <button type="submit">Go!</button>
              </form>

              <Gallery userChoice={buttonSelect} />
          </div>
          <Footer nightMode={nightMode} />
      </div>
  );


}

export default App;
