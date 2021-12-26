
import {useEffect, useState} from 'react'
import Header from './Components/UI/Header';
import GifGrid from './Components/Giphs/GifGrid';
import './App.css';
import axios from 'axios'



function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      let result = await axios('https://api.giphy.com/v1/gifs/trending?api_key=Q3AxVxgOVnNUXLk7yjCnGS7u1BX2tzfj&limit=50&rating=r')
      let results = result.data.data
      setItems(results)
      console.log(results)
      setIsLoading(false)

    }

  fetchItems()
}, [])
  


  return (
    <div className="container">
      <Header />
      <GifGrid isLoading={isLoading} items={items} />
      </div>
  );
}

export default App;
