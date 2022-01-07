
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/UI/Navbar';
import Header from './Components/UI/Header';
import GridItems from './Components/Giphs/GridItems'
import Funny from './Components/Giphs/Funny';
import Random from './Components/Giphs/Random';
import Footer from './Components/UI/Footer';
import './App.css';
import axios from 'axios'



function App() {
  const [catItems, setCatItems] = useState([])
  const [funnyItems, setFunnyItems] = useState([])
  const [randomItems, setRandomItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCats = async () => {
      let result = await axios('https://api.giphy.com/v1/gifs/search?api_key=Q3AxVxgOVnNUXLk7yjCnGS7u1BX2tzfj&limit=50&rating=r&q=cats')
      let results = result.data.data
      setCatItems(results)
      console.log(results)
      setIsLoading(false)
    }

    // Get funny gifs
    const fetchFunny = async () => {
      let funnyResult = await axios('https://api.giphy.com/v1/gifs/search?api_key=Q3AxVxgOVnNUXLk7yjCnGS7u1BX2tzfj&limit=50&rating=r&q=funny')
      let funnyResults = funnyResult.data.data
      setFunnyItems(funnyResults)
      console.log(funnyResults)
      setIsLoading(false)

    }

     // Get random gifs
     const fetchRandom = async () => {
      let randomResult = await axios('https://api.giphy.com/v1/gifs/search?api_key=Q3AxVxgOVnNUXLk7yjCnGS7u1BX2tzfj&limit=50&rating=r&q=random')
      let randomResults = randomResult.data.data
      setRandomItems(randomResults)
      console.log(randomResults)
      setIsLoading(false)

    }

    fetchCats()
    fetchFunny()
    fetchRandom()
}, [])
  


  return (
    <Router>
      <div className="container">

        <Navbar />
        <Header />
        <Routes>
          <Route exact path="/" element={
            <GridItems isLoading={isLoading} catItems={catItems} />
          }
          />
        
          <Route path="/funny" element={<Funny isLoading={
            isLoading} funnyItems={funnyItems} />
          }
          />
        
          <Route path="/random" element={<Random isLoading={
            isLoading} randomItems={randomItems} />
          }
          />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
