import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './home/Home'
import AllCities from './cities/AllCities'
import NotFound from './NotFound'
import Navigation from './navigation/Navigation'

function App() {
  const [recentCities, setRecentCities] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const archived = localStorage.getItem("cities");
    setRecentCities(JSON.parse(archived));
    setFirstLoad(false);
  }, [firstLoad]);

  function dumpSearchHistory(cities) {
    if(!cities || cities.length === 0) return;

    let storageKeys;
    storageKeys = recentCities;
    if(!storageKeys) storageKeys = [];

    let i = 0;
    for(; i < 6 && i < cities.length; ++i) {
      if (storageKeys.length >= 6) storageKeys.shift();
      storageKeys.push({
        id : cities[i].id,
        name: cities[i].name,
        country: cities[i].country
      })
    }
    setRecentCities(storageKeys);
    localStorage.setItem("cities", JSON.stringify(storageKeys));
  }

  return (
    <BrowserRouter>
      <Navigation recentCities={recentCities} style={{ 'zIndex': 0 }} />
      <Routes style={{ 'zIndex': 1000 }}>
        <Route exact path="/" element={<Home recentCitiesHandler={dumpSearchHistory} />} />
        <Route exact path="/home" element={<Home recentCitiesHandler={dumpSearchHistory} />} />
        <Route exact path="/cities" element={<AllCities />} />
        <Route path="*" element={<NotFound text='Page Not Found.' className="position-static" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

