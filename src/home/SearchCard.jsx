import { useState } from 'react';
import _ from 'lodash'
import { Container, Form, Card, Row, Col, Button } from 'react-bootstrap'
import fetchData from '../helpers/weatherData'
import parseComp from '../helpers/parseComponents';
import NotFound from '../NotFound'
import * as Icons from '../helpers/icons'


export default function SearchCard(props) {
    const [search, setSearch] = useState("");

    async function submitSearch(e) {
        props.errorhandler(null);
        e.preventDefault();
        let newComp = parseComp( await fetchData(search, props.tempFormat), props.tempFormat);
        if(newComp.length === 0) props.errorhandler(<NotFound text="No Data Found"/>);
        else props.cardHandler(newComp);
    }

    return (
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
                                                        value="C" defaultChecked onChange={(e) => props.tempHandler(e.target.value)} />
                                                    <label className="form-check-label" htmlFor="celsius">C°</label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input id="wt_F" className="form-check-input" type="radio" name="format"
                                                        value="F" onChange={(e) => { props.tempHandler(e.target.value) }} />
                                                    <label className="form-check-label" htmlFor="fahrenheit">F°</label>
                                                </div>
                                            </span>

                                            <span className="ms-5 ps-5 ">
                                                <div className="form-check form-check-inline">
                                                    <input id="wt_clear" className="btn btn-sm btn-primary" type="button"
                                                        name="inlineRadioOptions" value="Clear Cards" onClick={() => props.cardHandler()} />
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