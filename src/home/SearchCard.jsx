import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Form, Card, Row, Col, Button } from 'react-bootstrap'
import _ from 'lodash'
import fetchData from '../helpers/weatherData'
import paginateCards from '../helpers/paginate';
import NotFound from '../NotFound'
import * as Icons from '../helpers/icons'

export default function SearchCard(props) {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [currentID, setCurrentID] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(async () => {
        if (!id || id === undefined) return;
        setCurrentID(id);
        await updateCards(id, props.currentPage, props.tempFormat, props.pageHandler, props.recentCitiesHandler);
        navigate('/react-vite-weatherapp/home/id/'+id);
    }, [id]);

    useEffect(async () => {
        getCurrentGeoWeather(props.position);
    }, [props.position]);

    async function getCurrentGeoWeather(position) {
        if (!position){
            props.errorHandler(<NotFound handler={props.errorHandler} text="Enable GeoLocation and Reload the Page to get Weather for your current area." />);
            return;
        } 
        if (id && id !== currentID) return;
        await updateCards(`&lat=${position.coords.latitude}&lon=${position.coords.longitude}&cnt=1`, props.currentPage, props.tempFormat, props.pageHandler, props.recentCitiesHandler, true);
    }

    async function submitSearch(e) {
        e.preventDefault();
        await updateCards(search, props.currentPage, props.tempFormat, props.pageHandler, props.recentCitiesHandler);
    }

    async function updateCards(queryString, currentPage, tempFormat, pageHandler, recentCitiesHandler, isGeoPos = false) {
        props.setPageNo(1);
        setLoading(true);
        props.errorHandler(null);

        if (!queryString || queryString == "") props.errorHandler(<NotFound handler={props.errorHandler} text="No String Provided." />);
        let newComp = await fetchData(queryString);

        if (!newComp) props.errorHandler(<NotFound handler={props.errorHandler} text="Bad Request" />);
        else if (newComp.length === 0) props.errorHandler(<NotFound handler={props.errorHandler} text="No Data Found" />);
        else {
            props.setCities(newComp);
            props.cardHandler(paginateCards(newComp, currentPage, tempFormat, pageHandler, recentCitiesHandler));
            if (!isGeoPos) props.recentSearchesHandler(newComp.map((elem) => { return { id: elem.id, name: elem.name, country: elem.country, coord: { lat: elem.coord.lat, lon: elem.coord.lon } } }));
        }

        if (queryString !== "Blockme") setLoading(false);
    }

    function wordProcess(searchString) {
        if (searchString.includes(',')) {
            let formString = searchString.split(',')
            formString[0] = _.startCase(formString[0]);
            formString[1] = formString[1].toUpperCase();
            return formString.join(", ");
        }
        else return _.startCase(searchString);
    }

    return (
        <section>
            <Container className='w-100 h-100 mt-5 '>
                <Row className='d-flex justify-content-center align-items-center h-100'>
                    <Col className='col-md-8 col-lg-6 col-xl-5'>
                        <Card className='w-100 h-100 p-2 position-static shadow-lg'
                            style={{
                                "textShadow": "1px 2px 8px black", "backgroundRepeat": "no-repeat",
                                "backgroundSize": "cover", "backgroundColor": "var(--bs-gray-600)",
                                "backgroundImage": "url('https://media1.tenor.com/images/69420a9494909231ca2752a175839fec/tenor.gif')"
                            }}
                        >
                            <Card.Body className='position-static'>
                                <Card.Title style={{ "fontFamily": "serif", "fontSize": "16pt" }} className="mb-4 pb-2 fw-normal text-white text-shadow">Check the weather forecast for&nbsp;&nbsp;
                                    <span style={{ "color": "var(--bs-yellow)" }}>{search}</span></Card.Title>
                                <Form method='GET' action='#' className='form-inline' onSubmit={submitSearch}>
                                    <Form.Group controlId="weatherSearch">
                                        <div className='input-group position-static'>
                                            <div className="input-group-prepend position-static" >
                                                <span className="input-group-text text-white bg-secondary h-100" id="basic-addon1"><Icons.Details /></span>
                                            </div>
                                            <Form.Control className='bg-dark text-white position-static' type='text' placeholder='City, CC' onChange={(e) => setSearch(wordProcess(e.target.value))} />
                                            <div className='position-static'>
                                                {!loading && <Button variant='success' className='position-static' type='submit'><Icons.Weather />&nbsp;Forecast</Button>}
                                                {loading && <Button disabled variant='secondary' className='position-static' type='submit'>Loading...&nbsp;<Icons.Cog className="Loading-data" /></Button>}
                                            </div>
                                        </div>
                                    </Form.Group>

                                    <Form.Group controlId="weatherSearch">
                                        <div className="flex mb-4 pb-2 text-white" style={{ 'marginTop': '10px' }}>
                                            <span className="ps-4">
                                                <div className="form-check form-check-inline">
                                                    <input id="wt_C" className="form-check-input" type="radio" name="format"
                                                        value="C" defaultChecked onChange={(e) => props.tempHandler(e.target.value)} />
                                                    <label className="form-check-label" htmlFor="celsius">C°</label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input id="wt_F" className="form-check-input" type="radio" name="format"
                                                        value="F" onChange={(e) => { props.tempHandler(e.target.value) }} />
                                                    <label className="form-check-label" htmlFor="fahrenheit">F°</label>
                                                </div>
                                            </span>
                                            <span className='ms-auto'>
                                            </span>
                                            <span>
                                                <div className="form-check form-check-inline">
                                                    {loading && <Button disabled={true} variant='secondary' className='btn-sm'>...&nbsp;<Icons.Cog className="Loading-data" /></Button>}
                                                    {!loading && <Button variant='secondary' className='btn-sm' value="Local" onClick={() => getCurrentGeoWeather(props.position)}><Icons.Map />&nbsp;Local</Button>}
                                                </div>
                                            </span>
                                            <span>
                                                <div className="form-check form-check-inline">
                                                    <Button variant='primary' className='btn-sm'
                                                        value="Clear Cards" onClick={() => props.cardHandler()}><Icons.Clear />&nbsp;Clear Cards</Button>
                                                </div>
                                            </span>
                                        </div>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}