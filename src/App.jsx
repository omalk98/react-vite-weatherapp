import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './home/Home'
import AllCities from './cities/AllCities'
import NotFound from './NotFound'
import Navigation from './navigation/Navigation'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navigation style={{'zIndex' : 0}}/>
        <Routes style={{'zIndex' : 1000}}>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/cities" element={<AllCities/>}/>
          <Route path="*" element={<NotFound text='Page Not Found.' className="position-static"/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

