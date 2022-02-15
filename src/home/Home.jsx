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

    useEffect(() => setCities(paginateCards(allCities, currentPage, tempFormat, pageControl, props.recentCitiesHandler)), [currentPage, allCities, tempFormat]);

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
                recentCitiesHandler={props.recentCitiesHandler}
            />

            <WeatherCardPage
                error={error}
                cities={cities}
            />
        </div>
    );
}