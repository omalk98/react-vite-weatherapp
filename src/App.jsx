import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './home/Home'
import Map from './map/Map'
import NotFound from './NotFound'
import Navigation from './navigation/Navigation'

function App() {
  const [recentCities, setRecentCities] = useState(localStorage.getItem("cities") ? JSON.parse(localStorage.getItem("cities")) : []);

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
    <BrowserRouter>
      <Navigation style={{ 'zIndex': 0 }} cityId={recentCities} />
      <Routes style={{ 'zIndex': 1000 }}>
        <Route exact path="/" element={<Navigate to={"/home"} replace />} />
        <Route exact path="/home" element={<Home recentCitiesHandler={dumpSearchHistory} />} />
        <Route exact path="/home/:id" element={<Home recentCitiesHandler={dumpSearchHistory} />} />
        <Route exact path="/cities" element={<Map />} />
        <Route path="*" element={<NotFound text='Page Not Found.' className="position-static" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

