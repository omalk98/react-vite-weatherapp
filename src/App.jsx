import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './home/Home'
import MapContainer from './map/Map'
import NotFound from './NotFound'
import Navigation from './navigation/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [recentCities, setRecentCities] = useState(localStorage.getItem("cities") ? JSON.parse(localStorage.getItem("cities")) : []);
  const [recentSearches, setRecentSearch] = useState([]);

  function dumpSearchHistory(cities) {
    if (!cities || cities === undefined) return;

    let storageKeys = recentCities;
    if (!storageKeys || storageKeys === undefined) storageKeys = [];

    let i = 0;
    for (; i < storageKeys.length; ++i)
      if (cities.id == storageKeys[i].id) return;

    if (storageKeys.length >= 6) storageKeys.pop();

    storageKeys.unshift(cities)
    setRecentCities(storageKeys);
    localStorage.setItem("cities", JSON.stringify(storageKeys));
  }

  return (
    <BrowserRouter basepath="/react-vite-weatherapp">
      <Navigation style={{ zIndex : 1000000 }} cityId={recentCities} />
      <Routes style={{ zIndex : 0 }}>
        <Route exact path="/react-vite-weatherapp" element={<Navigate to={"/home"} replace />} />
        <Route exact path="/" element={<Navigate to={"/home"} replace />} />
        <Route exact path="/home" element={<Home 
            recentSearchesHandler={setRecentSearch} 
            recentCitiesHandler={dumpSearchHistory}
            searches={recentSearches} 
            locations={recentCities}
        />} />
        <Route exact path="/home/:id" element={<Home 
            recentSearchesHandler={setRecentSearch} 
            recentCitiesHandler={dumpSearchHistory} 
            searches={recentSearches} 
            locations={recentCities}    
        />} />
        <Route exact path="/map" element={<MapContainer 
            searches={recentSearches} 
            locations={recentCities} 
        />} />
        <Route path="*" element={<NotFound text='Page Not Found.'/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

