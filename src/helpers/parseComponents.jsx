import _ from "lodash"
import CityCard from '../home/CityCard'

export default function parseComp(cities, format) {
    let i = 0, newComps = [];
    _.forEach(cities, (ct) => { newComps.unshift(<CityCard city={ct} tempFormat={format} key={i++}/>) });
    return newComps;
}
