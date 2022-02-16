import { useState, useEffect } from 'react'
import { Card, Alert } from 'react-bootstrap'
import _ from 'lodash'
import SearchCard from './SearchCard'
import WeatherCardPage from './WeatherCardPage'
import MapContainer from '../map/Map'
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
                recentSearchesHandler={props.recentSearchesHandler}
            />
            <WeatherCardPage
                error={error}
                cities={cities}
            >
                {cities && <Card className='m-auto mt-5 shadow-lg p-3 position-relative' style={{ height: '50vh', width: '40vw', backgroundColor: "var(--bs-gray-200)" }}>
                    <Card.Title style={{ "fontFamily": "Stencil Std, serif" }} className='text-black text-center'>Recently Searched Cities</Card.Title>
                    <Alert variant='dark' className='m-auto d-flex' style={{ height: "2.8rem" }}>
                        <span className='d-flex w-100' style={{ marginTop: "-.7rem", fontFamily: "cursive, serif" }}>
                            <span className='ms-auto ps-4 pe-4'>
                                <div
                                    className="pin bounce position-static"
                                    style={{ backgroundColor: "orange", cursor: 'pointer' }}
                                    title="your current/home location"
                                />
                                <span>Home</span>
                            </span>

                            <span className='ps-4 pe-4'>
                                <div
                                    className="pin bounce position-static"
                                    style={{ backgroundColor: "blue", cursor: 'pointer' }}
                                    title="recently viewed cities, can be seen in the dropdown tab"
                                />
                                <span>Viewed</span>
                            </span>
                            <span className='me-auto ps-4 pe-4 position-static'>
                                <div
                                    className="pin bounce position-static"
                                    style={{ backgroundColor: "red", cursor: 'pointer' }}
                                    title="recently searched cities using the engine"
                                />
                                <span>Searched</span>
                            </span>
                        </span>
                    </Alert>
                    <Card.Body style={{ border: "solid black 2px", padding: 0, overflow: "hidden", borderRadius: "0.5rem" }}>
                        <MapContainer
                            searches={props.searches}
                            locations={props.locations}
                        />
                    </Card.Body>
                </Card>
                }
                <br /><br />

            </WeatherCardPage>
        </div>
    );
}