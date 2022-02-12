import { useState, useEffect } from 'react'
import _ from 'lodash'
import SearchCard from './SearchCard'
import WeatherCardPage from './WeatherCardPage'
import parseComp from '../helpers/parseComponents'

export default function Home(props) {
    const [cities, setCities] = useState(null);
    const [error, setError] = useState(false);
    const [tempFormat, setTempFormat] = useState("C");

    useEffect(()=> tempControl(), [tempFormat]);

    function tempControl() {
        let components = [];
        _.forEach(cities, (ctProp) => components.unshift(ctProp.props.city));
        if(components?.length === 0) return;
        _.forEach(components, (ct) => {
            ct.temp.value = convertTemp(ct.temp.value, tempFormat);
            ct.temp.feel = convertTemp(ct.temp.feel, tempFormat);
            ct.temp.min = convertTemp(ct.temp.min, tempFormat);
            ct.temp.max = convertTemp(ct.temp.max, tempFormat);
        })
        setCities(parseComp(components, tempFormat));
    }

    function convertTemp(temp, CF) {
        let conversion = Number(temp);
        conversion = (CF === "F") ? conversion * 9 / 5 + 32 : (conversion - 32) * 5 / 9;
        return conversion.toFixed(2);
    }
    
    return (
        <div>
            <SearchCard 
            tempHandler={setTempFormat} 
            tempFormat={tempFormat}
            errorhandler={setError}
            cardHandler={setCities}
            components={cities}
            />

            <WeatherCardPage error={error} cities={cities}/>
        </div>
    );
}