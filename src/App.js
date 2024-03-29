import Gallery from './components/Gallery/Gallery';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import axios from 'axios';

function App() {
  // const [data, setData] = useState([])
  const [userSelection, setUserSelection]= useState("")
  const [buttonSelect, setButtonSelect] = useState("");


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://piano-chords.p.rapidapi.com/v2/chords/%7Broot%7D', {
  //         headers: {
  //           'X-RapidAPI-Key': '4678ba5a45msh3c0410aa78b5f19p174360jsn507c36790896'
  //         }
  //       });
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
        <Header/>
        <form onSubmit={submit}>
          <select onChange={handleSelect} value={userSelection}>
              <option value="">Please select</option>
              <option value="Vincent van Gogh">Vincent Van Gogh</option>
              <option value="Johannes Vermeer">Johannes Vermeer</option>
          </select>
          <button type="submit">Go!</button>
        </form>

          <Gallery userChoice={buttonSelect} />
          <Footer/>
      </div>
  );


}

export default App;
