import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { hot } from 'react-hot-loader'
import './App.css';
import Heros from './marvel/Heros'
import Search from './marvel/UserForm';


const App = ()=> {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

useEffect(()=>{
    const fetchItems = async () =>{
      const url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query[0]}I&apikey=e32ccd00baa0cd3eea844ac200b919a8`
    
      const result = await axios(url)
      console.log(result);
      setItems(result.data.data.results);
      setIsLoading(false);
    }
    fetchItems();
  },[query])
  return(
    <div className='appClass'>
      <button>START</button>
      <Search getQuery={(q)=>setQuery(q)} />
      <Heros isLoading={isLoading} items={items}/>
    </div>
  )
}

export default hot(module) (App);
