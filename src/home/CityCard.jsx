import { Card } from 'react-bootstrap'

export default function CityCard(props) {
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
                            <p>Temperature: <strong>{props.city.temp.value}°{props.tempFormat} |</strong> Feels like: <strong>{props.city.temp.feel}°{props.tempFormat}</strong></p>
                        </div>

                        <p>Max: <strong>{props.city.temp.max}°{props.tempFormat} |</strong> Min: <strong>{props.city.temp.min}°{props.tempFormat}</strong></p>
                        <p>Clouds: <strong>25% |</strong> Wind Speed: <strong>15m/s</strong></p>
                        <p>Humidity: <strong>{props.city.humidity}% |</strong> Pressure: <strong> {props.city.pressure} hPa</strong></p>
                        <p>Sunrise: <strong>{props.city.sun.rise}|</strong> Sunset: <strong>{props.city.sun.set}</strong></p>
                        <p>Geo Coords: [<strong>{props.city.coord.lon}, {props.city.coord.lat}</strong>]</p>
                    </Card.Body>
                </Card>}
        </td></tr>
    );
}