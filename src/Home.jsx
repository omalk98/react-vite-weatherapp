import { useState, useEffect } from 'react'
import _ from 'lodash'
import { Container, Form, Card, Row, Col, Button, Table } from 'react-bootstrap'
import NotFound from './NotFound'
import fetchData from './helpers/weatherData'
import * as Icons from './helpers/icons'

let components = [];

export default function Home() {
    const [search, setSearch] = useState("");
    const [cities, setCities] = useState(null);
    const [tempFormat, setTempFormat] = useState("C");
    const [error, setError] = useState(false);

    useEffect(()=> tempControl(), [tempFormat]);
    
    async function submitSearch(e) {
        setError(null);
        components.length = 0;
        e.preventDefault();
        let i = 0;
        _.forEach(await fetchData(search), (city) => components.unshift(<CityCard city={city} key={i += 1} />))
        if(components.length === 0) setError(<NotFound text="No Data Found"/>);
        else setCities(components);
    }

    function tempControl() {
        if(components.length === 0) return;
        _.forEach(components, (ct) => {
            ct.props.city.temp.value = convertTemp(ct.props.city.temp.value, tempFormat);
            ct.props.city.temp.feel = convertTemp(ct.props.city.temp.feel, tempFormat);
            ct.props.city.temp.min = convertTemp(ct.props.city.temp.min, tempFormat);
            ct.props.city.temp.max = convertTemp(ct.props.city.temp.max, tempFormat);
            console.log(ct)
        })
        setCities(components);
    }

    function convertTemp(temp, CF) {
        console.log(tempFormat);
        let conversion = Number(temp);
        conversion = (CF === "C") ? conversion * 9 / 5 + 32 : (conversion - 32) * 5 / 9;
        return conversion.toFixed(2);
    }
    
    function CityCard(props) {
        return (
            <tr><td>
                {props.city &&
                    <Card className='w-100 text-white'
                        style={{ "backgroundImage": "url('" + props.city.background + "')", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "textShadow": "1px 2px 5px black" }}>
                        <Card.Body>
                            <h2 className="mb-1 sfw-normal">
                                {props.city.name}, {props.city.country} <img style={{"width" : "25px", "height" : "20px"}} src={props.city.flag.toLowerCase()} alt="flag.svg" />
                            </h2>
                            <div style={{"fontSize" : "13pt", "textDecoration" : "underline"}}>
                                <p>Condition: <strong >{props.city.desc}</strong><img style={{"width" : "30px", "height" : "30px"}} src={props.city.icon} alt="icon.png" /></p>
                                <p>Temperature: <strong>{props.city.temp.value}°{tempFormat} |</strong> Feels like: <strong>{props.city.temp.feel}°{tempFormat}</strong></p>
                            </div>

                            <p>Max: <strong>{props.city.temp.max}°{tempFormat} |</strong> Min: <strong>{props.city.temp.min}°{tempFormat}</strong></p>
                            <p>Clouds: <strong>25% |</strong> Wind Speed: <strong>15m/s</strong></p>
                            <p>Humidity: <strong>{props.city.humidity}% |</strong> Pressure: <strong> {props.city.pressure} hPa</strong></p>
                            <p>Sunrise: <strong>{props.city.sun.rise}|</strong> Sunset: <strong>{props.city.sun.set}</strong></p>
                            <p>Geo Coords: [<strong>{props.city.coord.lon}, {props.city.coord.lat}</strong>]</p>
                        </Card.Body>
                    </Card>}
            </td></tr>
        );
    }

    return (
        <div>
            <section>
                <Container className='w-100 h-100 mt-5 '>
                    <Row className='d-flex justify-content-center align-items-center h-100'>
                        <Col className='col-md-8 col-lg-6 col-xl-5'>
                            <Card className='w-100 h-100 p-2 position-static shadow-lg' style={{ "textShadow": "1px 2px 8px black", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "backgroundColor": "var(--bs-gray-600)", "backgroundImage": "url('https://media1.tenor.com/images/69420a9494909231ca2752a175839fec/tenor.gif')" }}>
                                <Card.Body className='position-static'>
                                    <Card.Title className="mb-4 pb-2 fw-normal text-white text-shadow">Check the weather forecast for {search}</Card.Title>
                                    <Form method='GET' action='#' className='form-inline' onSubmit={submitSearch}>
                                        <Form.Group controlId="weatherSearch">
                                            <div className='input-group position-static'>
                                                <div className="input-group-prepend position-static" >
                                                    <span className="input-group-text text-white bg-secondary" id="basic-addon1">?</span>
                                                </div>
                                                <Form.Control className='bg-dark text-white position-static' type='text' placeholder='City, CC' onChange={(e) => setSearch(e.target.value)} />
                                                <Button variant='success' className='position-static' type='submit'><Icons.Weather />&nbsp;Forecast</Button>
                                            </div>
                                        </Form.Group>

                                        <Form.Group controlId="weatherSearch">
                                            <div className="flex mb-4 pb-2 text-white" style={{ 'marginTop': '10px' }}>
                                                <span className="ps-4">
                                                    <div className="form-check form-check-inline">
                                                        <input id="wt_C" className="form-check-input" type="radio" name="format"
                                                            value="C" defaultChecked onClick={(e)=>setTempFormat(e.target.value)} />
                                                        <label className="form-check-label" htmlFor="celsius">C°</label>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input id="wt_F" className="form-check-input" type="radio" name="format"
                                                            value="F" onClick={(e)=>{setTempFormat(e.target.value)}} />
                                                        <label className="form-check-label" htmlFor="fahrenheit">F°</label>
                                                    </div>
                                                </span>

                                                <span className="ms-5 ps-5 ">
                                                    <div className="form-check form-check-inline">
                                                        <input id="wt_clear" className="btn btn-sm btn-primary" type="button"
                                                            name="inlineRadioOptions" value="Clear Cards" />
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

            <section>
                <Container className='w-100 h-100 mt-5 '>
                    <Row className='d-flex justify-content-center align-items-center h-100'>
                        <Col className='col-md-8 col-lg-6 col-xl-5'>
                            { error && error}
                            <Table hover>
                                <tbody>
                                    {cities}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}