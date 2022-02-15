import _ from 'lodash'
import { Accordion, Container } from 'react-bootstrap'
import * as  Icons from '../helpers/icons';

export default function CityCard(props) {
    const styleFont = { "fontSize": "20pt" };

    function toFahrenheit(celsius) {
        return (Number(celsius) * 9 / 5 + 32).toFixed(2);
    }

    return (
        <tr><td style={{ "borderRadius": "2rem" }}>
            {props.city &&
                <div className=' p-3 w-100 text-white'
                    style={{ "fontFamily": "serif", "backgroundImage": "url('" + props.city.background + "')", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "textShadow": "1px 2px 5px black", "borderRadius": "2rem" }}>
                    <h2 className="mb-1 sfw-normal">
                        {props.city.name}, {props.city.country} <img style={{ "width": "3rem", "height": "auto" }} src={props.city.flag} alt="flag.svg" />
                    </h2>
                    <div style={{ "fontSize": "13pt", "textDecoration": "underline" }}>
                        <table className='w-100'>
                            <tbody>
                                <tr><td colSpan={2}><strong style={{ "fontSize": "15pt" }}>{_.startCase(props.city.desc)}</strong><img style={{ "width": "50px", "height": "50px" }} src={props.city.icon} alt="icon.png" /></td></tr>
                                <tr><td><strong style={styleFont}><Icons.AvgTemp /> {(props.tempFormat === "C") ? props.city.temp.value : toFahrenheit(props.city.temp.value)}°{props.tempFormat}</strong></td>
                                    <td>Feels like: <strong style={styleFont}>{(props.tempFormat === "C") ? props.city.temp.feel : toFahrenheit(props.city.temp.feel)}°{props.tempFormat}</strong></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <Container style={{ "fontSize": "15pt" }}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Header onClick={() => props.handler({ "id": props.city.id, "name": props.city.name, "country": props.city.country })} style={{ "backgroundColor": "var(--bs-gray-800) !important" }}><Icons.Math />&nbsp;More Details</Accordion.Header>
                            <Accordion.Body>
                                <table className='w-100'>
                                    <tbody>
                                        <tr><td>Max <Icons.HighTemp /> <strong>{(props.tempFormat === "C") ? props.city.temp.max : toFahrenheit(props.city.temp.max)}°{props.tempFormat} </strong></td>
                                            <td>Min <Icons.LowTemp /> <strong>{(props.tempFormat === "C") ? props.city.temp.min : toFahrenheit(props.city.temp.min)}°{props.tempFormat}</strong></td></tr>
                                        <tr><td colSpan={2}><hr className='text-black' /></td></tr>
                                        <tr><td><strong><Icons.Clouds /> 25% </strong></td><td><strong><Icons.Wind /> 15m/s</strong></td></tr>
                                        <tr><td><strong><Icons.Humidity /> {props.city.humidity}% </strong></td><td><strong> <Icons.Pressure /> {props.city.pressure} hPa</strong></td></tr>
                                        <tr><td colSpan={2}><hr className='text-black' /></td></tr>
                                        <tr><td>Sunrise <strong><Icons.SunRise /> {props.city.sun.rise}</strong></td><td> Sunset <strong><Icons.SunSet /> {props.city.sun.set}</strong></td></tr>
                                        <tr><td colSpan={2}><hr className='text-black' /></td></tr>
                                        <tr><td colSpan={2} style={{ "fontSize": "12pt" }}>Geo Coords <strong><Icons.Pin /></strong> [lon: <strong>{props.city.coord.lon}</strong>, lat: <strong>{props.city.coord.lat}</strong>]</td></tr>
                                    </tbody>
                                </table>
                            </Accordion.Body>
                        </Accordion>
                    </Container>
                </div>
            }
        </td></tr>
    );
}