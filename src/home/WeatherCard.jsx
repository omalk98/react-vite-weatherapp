import { Card } from 'react-bootstrap'

export default function WeatherCard(props) {
    return (
        <Card className='w-100'
            style={{ "backgroundImage": "url('" + props.city.background + "')", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "textShadow": "1px 2px 5px black" }}>
            <Card.Body>
                <Card.Title className="mb-1 sfw-normal">
                    {props.city.name}, {props.city.country} <img id="wt_flag"
                        style="width: 25px; height: 20px;" src={props.city.flag} alt="flag.svg" />
                </Card.Title>
                <Card.Text>
                    <div style="font-size: 13pt; text-decoration: underline;">
                        <p>Condition: <strong id="wt_cond">{props.city.desc}</strong><img id="wt_flag"
                            style="width: 30px; height: 30px;" src="${props.city.icon}" alt="icon.png" /></p>
                        <p>Temperature: <strong id="wt_ctemp">{props.city.temp.value}°{props.tempState} |</strong> Feels like: <strong
                            id="wt_rfeel">{props.city.temp.feel}°{props.tempState}</strong></p>
                    </div>

                    <p>Max: <strong id="wt_max">{props.city.temp.max}°{props.tempState} |</strong> Min: <strong
                        id="wt_min">{props.city.temp.min}°{props.tempState}</strong></p>
                    <p>Clouds: <strong id="wt_cloud">25% |</strong> Wind Speed: <strong
                        id="wt_wspeed">15m/s</strong></p>
                    <p>Humidity: <strong id="wt_humid">{props.city.humidity}% |</strong> Pressure: <strong
                        id="wt_press"> {props.city.pressure}
                        hPa</strong></p>
                    <p>Sunrise: <strong id="wt_srise">{props.city.sun.rise}
                        |</strong> Sunset: <strong id="wt_sset">{props.city.sun.set}</strong></p>
                    <p>Geo Coords: [<strong id="wt_geo">{props.city.coord.lon}, {props.city.coord.lat}</strong>]</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}