import { useState, useEffect } from 'react'
import _ from 'lodash'
import SearchCard from './SearchCard'
import WeatherCardPage from './WeatherCardPage'
import paginateCards from '../helpers/paginate';

export default function Home(props) {
    const [allCities, setAllCities] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [cities, setCities] = useState(null);
    const [error, setError] = useState(false);
    const [tempFormat, setTempFormat] = useState("C");

    useEffect(()=> setCities(paginateCards(allCities, currentPage, tempFormat, pageControl)), [currentPage, allCities, tempFormat]);

    function pageControl(e) {
        switch (e.target.value) {
            case "prev":
                if (currentPage > 1) setCurrentPage(currentPage - 1);
                break;
            case "next":
                setCurrentPage(currentPage + 1);
                break;
            default:
                setCurrentPage(Number(e.target.value));
        }
    }

    function convertTemp(temp, CF) {
        let conversion = Number(temp);
        conversion = (CF === "F") ? conversion * 9 / 5 + 32 : (conversion - 32) * 5 / 9;
        return conversion.toFixed(2);
    }
    
    return (
        <div>
            <SearchCard 
            tempHandler={setTempFormat} 
            tempFormat={tempFormat}
            errorHandler={setError}
            cardHandler={setCities}
            components={cities}
            currentPage={currentPage}
            pageHandler={pageControl}
            setCities={setAllCities}
            setPageNo={setCurrentPage}
            />

            <WeatherCardPage 
            error={error} 
            cities={cities}
            />
        </div>
    );
}