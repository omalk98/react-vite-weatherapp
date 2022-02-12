/********************************************************************************* 
 * * BTI425 – Assignment 1 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
 * * No part of this assignment has been copied manually or electronically from any other source 
 * * (including web sites) or distributed to other students. * 
 * * Name: Omar Hussein Student ID: 118073204 Date: 24, Jan 2022 * 
 * * ********************************************************************************/


function searchHandler() {
    let srch = "", cityID = "";
    srch = $("#wt_input").val();
    if (!srch.includes(",")) {
        if(cards.xml)
            createWTCard(srch, true, srch);
        else
            $.ajax({
                url: "city.json",
                dataType: "json",
                success: function (data) {
                    cityID = _.filter(data, function (cities) {
                        return cities.name.toLowerCase() === srch.toLowerCase();
                    });
                    cityID = _.map(cityID, "id");
                    cityID = _.join(cityID, ",");

                    createWTCard(cityID, true, srch);
                },
                error: function (err) {
                    console.error(err);
                    genError("Unable to load resource.", "E");
                }
            });
    }
    else {
        let target = _.split(srch, ",");
        createWTCard(srch, false, target[0]);
    }
}

function APICall(qstring, multi) {
    if (!qstring) {
        genError("No Search String Provided.", "E");
        return;
    }
    qstring = (multi) ? ((cards.xml) ? "find?q=" : "group?id=") + qstring : "weather?q=" + qstring;
    qstring = `https://pro.openweathermap.org/data/2.5/find?${qstring}&appid=f7b7c86c8d83af5ce929fe37a40aa052&units=metric${(cards.xml) ? "&mode=xml" : ""}`;

    $.ajax({
        url: qstring,
        method: "GET",
        dataType: `${(cards.xml) ? "xml" : "json"}`,
        success: function (data) {
            if (typeof (data.list) === "undefined" && data.getElementsByTagName("list").length < 1) cards.current.unshift(data);
            else 
            _.forEach((cards.xml) ? data.getElementsByTagName("item") : data.list, function (member) { cards.current.unshift(member) });

            genWeatherComponent(cards.current);
        },
        error: function (err) {
            console.error(err);
            genError("No data found.", "E");
        }
    })
}

function searchSubmit(event){
    event.preventDefault();
    searchHandler()
}

function scanArchive(qstring) {
    return _.filter(cards[`archive${(cards.xml) ? "_xml" : ""}`], function (city) { return (((cards.xml) ? getElementsByTagName("city")[0].getAttribute("name") : city.name).toLowerCase() === qstring.toLowerCase()); });
}

function loadArchive() {
    clearCards(); 
    genWeatherComponent(cards[`archive${(cards.xml) ? "_xml" : ""}`]);
}

function genError(err, type) {
    $("#wt_error").html(`<div class="alert alert-${(type === "E") ? "danger" : "warning"} alert-dismissible fade show">
    <strong>${(type === "E") ? "Error" : "Warning"}!</strong> ${err}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>`);
}