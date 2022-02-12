import { Accordion, Container } from 'react-bootstrap'

export default function CityCard(props) {

    function toFahrenheit(celsius) {
        return (Number(celsius) * 9 / 5 + 32).toFixed(2);
    }

    return (
        <tr><td>
            {props.city &&
            <div className='w-100 text-white'
            style={{ "backgroundImage": "url('" + props.city.background + "')", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "textShadow": "1px 2px 5px black" }}>
                        <h2 className="mb-1 sfw-normal">
                            {props.city.name}, {props.city.country} <img style={{ "width": "25px", "height": "20px" }} src={props.city.flag.toLowerCase()} alt="flag.svg" />
                        </h2>
                        <div style={{ "fontSize": "13pt", "textDecoration": "underline" }}>
                            <p>Condition: <strong >{props.city.desc}</strong><img style={{ "width": "30px", "height": "30px" }} src={props.city.icon} alt="icon.png" /></p>
                            <p>Temperature: <strong>{(props.tempFormat === "C") ? props.city.temp.value : toFahrenheit(props.city.temp.value)}°{props.tempFormat} |</strong> 
                            Feels like: <strong>{(props.tempFormat === "C") ? props.city.temp.feel : toFahrenheit(props.city.temp.feel)}°{props.tempFormat}</strong></p>
                        </div>
                        <Container>
                <Accordion defaultActiveKey="0">
                        <Accordion.Header style={{"backgroundColor" : "var(--bs-gray-800) !important"}}>More Details</Accordion.Header>
                        <Accordion.Body>
                                <p>Max: <strong>{(props.tempFormat === "C") ? props.city.temp.max : toFahrenheit(props.city.temp.max)}°{props.tempFormat} |</strong> 
                                Min: <strong>{(props.tempFormat === "C") ? props.city.temp.min : toFahrenheit(props.city.temp.min)}°{props.tempFormat}</strong></p>
                            <hr className='text-black'/>
                                <p>Clouds: <strong>25% |</strong> Wind Speed: <strong>15m/s</strong></p>
                                <p>Humidity: <strong>{props.city.humidity}% |</strong> Pressure: <strong> {props.city.pressure} hPa</strong></p>
                            <hr className='text-black'/>
                                <p>Sunrise: <strong>{props.city.sun.rise}|</strong> Sunset: <strong>{props.city.sun.set}</strong></p>
                            <hr className='text-black'/>
                                <p>Geo Coords: [lon: <strong>{props.city.coord.lon}</strong>, lat: <strong>{props.city.coord.lat}</strong>]</p>
                        </Accordion.Body>
                </Accordion>
                </Container>
                </div>
            }
        </td></tr>
    );
}