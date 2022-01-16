import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/layout/header";
import Search from "./components/layout/search";
import CharactersGrid from "./components/common/characters-grid";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchWord, setSearchWord] = useState('')

  
  useEffect(() => {
    const getCharacters = async () => {
      const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${searchWord}`)
      setItems(result.data)
      setIsLoading(false)
    };
    getCharacters();
  }, [searchWord]);

  return (
    <div className="container">
      <Header />
      <Search setSearchWord={setSearchWord} />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
}
export default App;
// https://breakingbadapi.com/documentation