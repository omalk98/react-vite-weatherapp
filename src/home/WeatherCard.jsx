import { Container, Form, Card, Row, Col, Button, Table } from 'react-bootstrap'
import fetchData from '../helpers/weatherData'
import * as Icons from '../helpers/icons'


export default function WeatherCard(props) {


    function CityCard(props) {
        return (
            props.data && <tr><td>
                <Card className='w-100'
                    style={{ "backgroundImage": "url('" + this.props.city.background + "')", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "textShadow": "1px 2px 5px black" }}>
                    <Card.Body>
                        <Card.Title className="mb-1 sfw-normal">
                            {this.props.city.name}, {this.props.city.country} <img id="wt_flag"
                                style="width: 25px; height: 20px;" src={this.props.city.flag} alt="flag.svg" />
                        </Card.Title>
                        <Card.Text>
                            <div style="font-size: 13pt; text-decoration: underline;">
                                <p>Condition: <strong id="wt_cond">{this.this.props.city.desc}</strong><img id="wt_flag"
                                    style="width: 30px; height: 30px;" src="${this.props.city.icon}" alt="icon.png" /></p>
                                <p>Temperature: <strong id="wt_ctemp">{this.props.city.temp.value}°{this.props.tempState} |</strong> Feels like: <strong
                                    id="wt_rfeel">{this.props.city.temp.feel}°{this.props.tempState}</strong></p>
                            </div>
    
                            <p>Max: <strong id="wt_max">{this.props.city.temp.max}°{this.props.tempState} |</strong> Min: <strong
                                id="wt_min">{this.props.city.temp.min}°{this.props.tempState}</strong></p>
                            <p>Clouds: <strong id="wt_cloud">25% |</strong> Wind Speed: <strong
                                id="wt_wspeed">15m/s</strong></p>
                            <p>Humidity: <strong id="wt_humid">{this.props.city.humidity}% |</strong> Pressure: <strong
                                id="wt_press"> {this.props.city.pressure}
                                hPa</strong></p>
                            <p>Sunrise: <strong id="wt_srise">{this.props.city.sun.rise}
                                |</strong> Sunset: <strong id="wt_sset">{this.props.city.sun.set}</strong></p>
                            <p>Geo Coords: [<strong id="wt_geo">{this.props.city.coord.lon}, {this.props.city.coord.lat}</strong>]</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
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
                                    <Card.Title className="mb-4 pb-2 fw-normal text-white text-shadow">Check the weather forecast</Card.Title>
                                    <Form method='GET' action='#' className='form-inline'>
                                        <Form.Group controlId="weatherSearch">
                                            <div className='input-group position-static'>
                                                <div className="input-group-prepend position-static" >
                                                    <span className="input-group-text text-white bg-secondary" id="basic-addon1">?</span>
                                                </div>
                                                <Form.Control className='bg-dark text-white position-static' type='text' placeholder='City, CC' />
                                                <Button variant='success' className='position-static' type='submit'><Icons.Weather />&nbsp;Forecast</Button>
                                            </div>
                                        </Form.Group>

                                        <Form.Group controlId="weatherSearch">
                                            <div className="flex mb-4 pb-2 text-white" style={{ 'marginTop': '10px' }}>
                                                <span className="ps-4">
                                                    <div className="form-check form-check-inline">
                                                        <input id="wt_C" className="form-check-input" type="radio" name="celsius"
                                                            value="C" defaultChecked />
                                                        <label className="form-check-label" htmlFor="celsius">C°</label>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input id="wt_F" className="form-check-input" type="radio" name="fahrenheit"
                                                            value="F" />
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
                <Table hover>
                    <CityCard data={""}/>
                </Table>
            </section>
        </div>
    );
}