import _ from 'lodash'
import moment from 'moment'

function fetchData(qString) {
    fetch(`https://api.openweathermap.org/data/2.5/${qstring}&appid=${process.env.API_KEY}&units=metric&mode=xml`)
    .then(res => {
        if(res.ok) res.text();
        else console.log('API Failed')
    })
    .then(data => {
        console.log('parsed json data');
        _.forEach(data.list)
    })
    .catch(err => {
        console.log(err);
    });

}

function parseXML(XMLdata) {
    let wt_data = {};
    wt_data = {
        background: genBackground(XMLdata.getElementsByTagName("weather")[0].getAttribute("number")),
        name: XMLdata.getElementsByTagName("city")[0].getAttribute("name"),
        country: XMLdata.getElementsByTagName("country")[0].innerHTML,
        flag: `https://flagcdn.com/${XMLdata.getElementsByTagName("country")[0].innerHTML.toLowerCase()}.svg`,
        icon: `http://openweathermap.org/img/wn/${XMLdata.getElementsByTagName("weather")[0].getAttribute("icon")}@2x.png`,
        desc: XMLdata.getElementsByTagName("weather")[0].getAttribute("value"),
        temp: {
            value: (cards.state === "C") ? XMLdata.getElementsByTagName("temperature")[0].getAttribute("value") : toFahrenheit(XMLdata.getElementsByTagName("temperature")[0].getAttribute("value")),
            feel: (cards.state === "C") ? XMLdata.getElementsByTagName("feels_like")[0].getAttribute("value") : toFahrenheit(XMLdata.getElementsByTagName("feels_like")[0].getAttribute("value")),
            min: (cards.state === "C") ? XMLdata.getElementsByTagName("temperature")[0].getAttribute("min") : toFahrenheit(XMLdata.getElementsByTagName("temperature")[0].getAttribute("min")),
            max: (cards.state === "C") ? XMLdata.getElementsByTagName("temperature")[0].getAttribute("max") : toFahrenheit(XMLdata.getElementsByTagName("temperature")[0].getAttribute("max"))
        },
        pressure: XMLdata.getElementsByTagName("pressure")[0].getAttribute("value"),
        humidity: XMLdata.getElementsByTagName("humidity")[0].getAttribute("value"),
        sun: {
            rise: moment(XMLdata.getElementsByTagName("sun")[0].getAttribute("rise") + "z").format("HH:mm"),
            set: moment(XMLdata.getElementsByTagName("sun")[0].getAttribute("set") + "z").format("HH:mm")
        },
        coord: {
            lon: XMLdata.getElementsByTagName("coord")[0].getAttribute("lon"),
            lat: XMLdata.getElementsByTagName("coord")[0].getAttribute("lat")
        }
    }
    return wt_data;
}

function toFahrenheit(celsius) {
    let fahrenheit = Number(celsius) * 9 / 5 + 32;
    return fahrenheit.toFixed(2);
}