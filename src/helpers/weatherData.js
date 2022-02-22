import _ from 'lodash'
import moment from 'moment'

export default async function fetchData(qString) {
    if (qString === "" || qString === "undefined") return;
    let weatherCards = [];

    const res = await fetch(`https://pro.openweathermap.org/data/2.5/${(isNaN(qString)) ? "find?q=" : "weather?id="}${qString.split(' ').join(' ')}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric&mode=xml&cnt=50`);
    let data = await res.text();
    data = new window.DOMParser().parseFromString(data, "text/xml");

    if (data === 'undefined' || !data) return weatherCards;

    if (data.getElementsByTagName("current").length > 0) weatherCards.unshift(parseXML(data));
    else if (Number(data.getElementsByTagName("cod")[0]?.innerHTML) === 404 || Number(data.getElementsByTagName("cod")[0]?.innerHTML) === 400) return weatherCards;
    else if (Number(data.getElementsByTagName("count")[0].innerHTML) > 0)
        _.forEach(data.getElementsByTagName("item"), (city) => {
            weatherCards.unshift(parseXML(city));
        })
    return weatherCards;
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

function parseXML(XMLdata) {
    let wt_data = {};
    wt_data = {
        id:             Number(XMLdata.getElementsByTagName("city")[0].getAttribute("id")),
        background:     genBackground(XMLdata.getElementsByTagName("weather")[0].getAttribute("number")),
        name:           XMLdata.getElementsByTagName("city")[0].getAttribute("name"),
        country:        XMLdata.getElementsByTagName("country")[0].innerHTML,
        flag:           `https://flagcdn.com/${XMLdata.getElementsByTagName("country")[0].innerHTML.toLowerCase()}.svg`,
        icon:           `https://openweathermap.org/img/wn/${XMLdata.getElementsByTagName("weather")[0].getAttribute("icon")}@2x.png`,
        desc:           XMLdata.getElementsByTagName("weather")[0].getAttribute("value"),
        temp: {
            value:      Number(XMLdata.getElementsByTagName("temperature")[0].getAttribute("value")),
            feel:       Number(XMLdata.getElementsByTagName("feels_like")[0].getAttribute("value")),
            min:        Number(XMLdata.getElementsByTagName("temperature")[0].getAttribute("min")),
            max:        Number(XMLdata.getElementsByTagName("temperature")[0].getAttribute("max"))
        },
        pressure:       XMLdata.getElementsByTagName("pressure")[0].getAttribute("value"),
        humidity:       XMLdata.getElementsByTagName("humidity")[0].getAttribute("value"),
        clouds:         XMLdata.getElementsByTagName("clouds")[0].getAttribute("value"),
        wind: {
            speed:      XMLdata.getElementsByTagName("speed")[0].getAttribute("value"),
            direction : XMLdata.getElementsByTagName("direction")[0].getAttribute("code")
        },
        sun: {
            rise:       moment(XMLdata.getElementsByTagName("sun")[0].getAttribute("rise") + "Z").format("hh:mm a"),
            set:        moment(XMLdata.getElementsByTagName("sun")[0].getAttribute("set") + "Z").format("hh:mm a")
        },
        coord: {
            lon:        Number(XMLdata.getElementsByTagName("coord")[0].getAttribute("lon")),
            lat:        Number(XMLdata.getElementsByTagName("coord")[0].getAttribute("lat"))
        }
    }
    return wt_data;
}