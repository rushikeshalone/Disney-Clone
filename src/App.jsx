import { useState } from 'react'
import Header from './Componets/Header'
import './App.css'
import Slider from './Componets/Slider'
import ProductionHouse from './Componets/ProductionHouse'
import GeneralList from './Constant/GeneralList'
import GenreMovieList from './Componets/GenreMovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </>
  )
}

export default App
