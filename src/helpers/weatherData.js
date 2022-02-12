import _ from 'lodash'
import moment from 'moment'

 export default async function fetchData(qString, tempFormat) {
    if (qString === "" || qString === "undefined") return;
    let weatherCards = [];

    const res = await fetch(`https://pro.openweathermap.org/data/2.5/find?q=${qString.split(' ').join(' ')}&appid=${import.meta.env.VITE_API_KEY}&units=metric&mode=xml&cnt=50`);
    let data = await res.text();
    data = new window.DOMParser().parseFromString(data, "text/xml");
    
    if (data !== 'undefined' || Number(data.getElementsByTagName("count")[0].innerHTML) > 0)
    _.forEach(data.getElementsByTagName("item"), (city) => {
        weatherCards.unshift(parseXML(city, tempFormat));
    })
    return weatherCards;
}

function toFahrenheit(celsius) {
    let fahrenheit = Number(celsius) * 9 / 5 + 32;
    return fahrenheit.toFixed(2);
}

function genBackground(condition) {
    let bg = "https://mdbgo.io/ascensus/mdb-advanced/img/";

    if (condition >= 200 && condition <= 232)
        bg += "thunderstorm.gif";
    else if ((condition >= 300 && condition <= 321) || (condition >= 500 && condition <= 531))
        bg += "rain.gif";
    else if (condition >= 600 && condition <= 622)
        bg += "snow.gif";
    else if (condition >= 701 && condition <= 781)
        bg += "fog.gif";
    else if (condition >= 801 && condition <= 804)
        bg += "clouds.gif";
    else
        bg += "clear.gif";

    return bg;
}

function parseXML(XMLdata, tempFormat) {
    let wt_data = {};
    wt_data = {
        background: genBackground(XMLdata.getElementsByTagName("weather")[0].getAttribute("number")),
        name: XMLdata.getElementsByTagName("city")[0].getAttribute("name"),
        country: XMLdata.getElementsByTagName("country")[0].innerHTML,
        flag: `https://flagcdn.com/${XMLdata.getElementsByTagName("country")[0].innerHTML.toLowerCase()}.svg`,
        icon: `http://openweathermap.org/img/wn/${XMLdata.getElementsByTagName("weather")[0].getAttribute("icon")}@2x.png`,
        desc: XMLdata.getElementsByTagName("weather")[0].getAttribute("value"),
        temp: {
            value: (tempFormat === "C") ? XMLdata.getElementsByTagName("temperature")[0].getAttribute("value") : toFahrenheit(XMLdata.getElementsByTagName("temperature")[0].getAttribute("value")),
            feel: (tempFormat === "C") ? XMLdata.getElementsByTagName("feels_like")[0].getAttribute("value") : toFahrenheit(XMLdata.getElementsByTagName("feels_like")[0].getAttribute("value")),
            min: (tempFormat === "C") ? XMLdata.getElementsByTagName("temperature")[0].getAttribute("min") : toFahrenheit(XMLdata.getElementsByTagName("temperature")[0].getAttribute("min")),
            max: (tempFormat === "C") ? XMLdata.getElementsByTagName("temperature")[0].getAttribute("max") : toFahrenheit(XMLdata.getElementsByTagName("temperature")[0].getAttribute("max"))
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