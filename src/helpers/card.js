var cards = {
    current: [],
    archive: [],
    state: "C",
    xml: false,
    archive_xml: []
};

function XMLHandler() {
    clearCards();
    if (cards.xml) $("#wt_xml").prop("checked", false);
    cards.xml = !cards.xml;
}

// Generates HTML cards describing weather
function genWeatherComponent(cities) {
    clearCards(false);
    pageState.data = cities;
    let pageData = parsePages(pageState);

    _.forEachRight(pageData.data, genCardHTML);
    genButtons(pageData.no_pages);
}

function createWTCard(qstring, multi, target) {
    let cache = scanArchive(target);
    (cache.length) ? genWeatherComponent(cache) : APICall(qstring, multi);
}

function unitHandler() {
    cards.state = (cards.state === "C") ? "F" : "C";
    if (pageState.data.length) {
        genWeatherComponent(pageState.data);
    }
}

function genCardHTML(city) {
    genContainer(genData(city));
}

function genBackground(condition) {
    let bg = "https://mdbgo.io/ascensus/mdb-advanced/img/";

    if(condition >= 200 && condition <= 232)
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

function genContainer(city) {
    // Weather Card Component
    $("#wt_cards").prepend(`<tr><td><div class="card shadow-0 border"
            style="background-image: url('${city.background}'); background-repeat: no-repeat; background-size: cover; font-size: 10pt; color: white; text-shadow: 1px 2px 5px black;">
            <div class="card-body p-4">
                <h4 id="wt_ctcr" class="mb-1 sfw-normal">${city.name}, ${city.country} <img id="wt_flag"
                        style="width: 25px; height: 20px;" src="${city.flag}" alt="flag.svg" />
                </h4>
                <div style="font-size: 13pt; text-decoration: underline;">
                    <p>Condition: <strong id=wt_cond>${city.desc}</strong><img id="wt_flag"
                    style="width: 30px; height: 30px;" src="${city.icon}" alt="icon.png" /></p>
                    <p>Temperature: <strong id="wt_ctemp">${city.temp.value}°${cards.state} |</strong> Feels like: <strong
                            id="wt_rfeel">${city.temp.feel}°${cards.state}</strong></p>
                </div>
                <p>Max: <strong id="wt_max">${city.temp.max}°${cards.state} |</strong> Min: <strong
                        id="wt_min">${city.temp.min}°${cards.state}</strong></p>
                <p>Clouds: <strong id="wt_cloud">25% |</strong> Wind Speed: <strong
                        id="wt_wspeed">15m/s</strong></p>
                <p>Humidity: <strong id="wt_humid">${city.humidity}% |</strong> Pressure: <strong
                        id="wt_press"> ${city.pressure}
                        hPa</strong></p>
                <p>Sunrise: <strong id="wt_srise">${city.sun.rise}
                        |</strong> Sunset: <strong id="wt_sset">${city.sun.set}</strong></p>
                <p>Geo Coords: [<strong id="wt_geo">${city.coord.lon}, ${city.coord.lat}</strong>]</p></div></div></tr></td>`);

}

function genData(data) {
    let wt_data = {};
    if (cards.xml) {
        wt_data = {
            background: genBackground(data.getElementsByTagName("weather")[0].getAttribute("number")),
            name: data.getElementsByTagName("city")[0].getAttribute("name"),
            country: data.getElementsByTagName("country")[0].innerHTML,
            flag: `https://flagcdn.com/${data.getElementsByTagName("country")[0].innerHTML.toLowerCase()}.svg`,
            icon : `http://openweathermap.org/img/wn/${data.getElementsByTagName("weather")[0].getAttribute("icon")}@2x.png`,
            desc : data.getElementsByTagName("weather")[0].getAttribute("value"),
            temp : { 
                value :(cards.state === "C") ? data.getElementsByTagName("temperature")[0].getAttribute("value") : toFahrenheit(data.getElementsByTagName("temperature")[0].getAttribute("value")),
                feel : (cards.state === "C") ? data.getElementsByTagName("feels_like")[0].getAttribute("value") : toFahrenheit(data.getElementsByTagName("feels_like")[0].getAttribute("value")),
                min : (cards.state === "C") ? data.getElementsByTagName("temperature")[0].getAttribute("min") : toFahrenheit(data.getElementsByTagName("temperature")[0].getAttribute("min")),
                max : (cards.state === "C") ? data.getElementsByTagName("temperature")[0].getAttribute("max") : toFahrenheit(data.getElementsByTagName("temperature")[0].getAttribute("max"))
        },
            pressure : data.getElementsByTagName("pressure")[0].getAttribute("value"),
            humidity : data.getElementsByTagName("humidity")[0].getAttribute("value"),
            sun : {
                rise : moment(data.getElementsByTagName("sun")[0].getAttribute("rise") + "z").format("HH:mm"),
                set : moment(data.getElementsByTagName("sun")[0].getAttribute("set") + "z").format("HH:mm")
            },
            coord : {
                lon : data.getElementsByTagName("coord")[0].getAttribute("lon"),
                lat : data.getElementsByTagName("coord")[0].getAttribute("lat")
            }
        }
    }
    else {
        wt_data = {
            background: genBackground(data.weather[0].id),
            name: data.name,
            country: data.sys.country,
            flag: `https://flagcdn.com/${data.sys.country.toLowerCase()}.svg`,
            icon : `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            desc: data.weather[0].description,
            temp: {
                value: (cards.state === "C") ? data.main.temp : toFahrenheit(data.main.temp),
                feel : (cards.state === "C") ? data.main.feels_like : toFahrenheit(data.main.feels_like),
                min : (cards.state === "C") ? data.main.temp_min : toFahrenheit(data.main.temp_min),
                max : (cards.state === "C") ? data.main.temp_max : toFahrenheit(data.main.temp_max)
            },
            pressure : data.main.pressure,
            humidity : data.main.humidity,
            sun : {
                rise : moment(data.sys.sunrise * 1000).format("HH:mm"),
                set : moment(data.sys.sunset * 1000).format("HH:mm")
            },
            coord : {
                lon : data.coord.lon,
                lat : data.coord.lat
            }
        }
    }
    return wt_data;
}

function toFahrenheit(celcius) {
    let fahrenheit = Number(celcius) * 9 / 5 + 32;
    return fahrenheit.toFixed(2);
}

function clearCards(flush = true) {
    if (flush) {
        _.forEach(cards.current, function (member) { cards[`archive${(cards.xml) ? "_xml" : ""}`].unshift(member); });
        cards.current = [];
        pageState.current_page = 1;
    }
    $("#wt_cards").html("");
    $("#wt_error").html("");
    $("#wt_paginate").html("");
};