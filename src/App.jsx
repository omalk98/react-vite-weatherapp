import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './home/Home'
import WeatherCardPage from './home/WeatherCardPage'
import MapContainer from './map/Map'
import NotFound from './NotFound'
import Navigation from './navigation/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [recentCities, setRecentCities] = useState(localStorage.getItem("cities") ? JSON.parse(localStorage.getItem("cities")) : []);
  const [recentSearches, setRecentSearch] = useState([]);
  const [cities, setCities] = useState(null);
  const [error, setError] = useState(false);
  const [geoLocation, setGeoLocation] = useState(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) setGeoLocation(position);
        else
          setGeoLocation({ coords: { latitude: 0, longitude: 0 } });
        }, ()=>setError(<NotFound handler={setError} text="Unable to get GeoLocation." />));
    } 
    else setError(<NotFound handler={setError} text="Device does not support GeoLocation." />);
  });

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
      <Navigation style={{ zIndex: 1000000 }} cityId={recentCities} />
      <Routes style={{ zIndex: 0 }}>
        <Route exact path="/" element={<Navigate to={"/react-vite-weatherapp/home"} replace />} />
        <Route exact path="/react-vite-weatherapp" element={<Navigate to={"/react-vite-weatherapp/home"} replace />} />
        <Route exact path="/react-vite-weatherapp/home" element={<Home
          recentSearchesHandler={setRecentSearch}
          recentCitiesHandler={dumpSearchHistory}
          searches={recentSearches}
          locations={recentCities}
          cities={cities}
          setCities={setCities}
          error={error}
          setError={setError}
          position={geoLocation}
        />} />
        <Route exact path="/react-vite-weatherapp/home/:id" element={<Home
          recentSearchesHandler={setRecentSearch}
          recentCitiesHandler={dumpSearchHistory}
          searches={recentSearches}
          locations={recentCities}
          cities={cities}
          setCities={setCities}
          error={error}
          setError={setError}
          position={geoLocation}
        />} />
        <Route exact path="/react-vite-weatherapp/home/id/:id" element={
          <WeatherCardPage
            error={error}
            cities={cities}
          />} />
        <Route exact path="/react-vite-weatherapp/map" element={<MapContainer
          searches={recentSearches}
          locations={recentCities}
          position={geoLocation}
        />} />
        <Route path="*" element={<NotFound text='Page Not Found.' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

