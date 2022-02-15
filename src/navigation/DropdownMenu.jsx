import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import './css/DropdownMenu.css'
import './css/DropdownItem.css'
import * as Icons from '../helpers/icons'


export default function CusDropdownMenu(props) {
    const [m_active, setActive] = useState("main");
    const [m_height, setHeight] = useState();

    function cityTags(cityDetails) {
        if (!cityDetails || cityDetails === undefined) return;
        const tags = [];
        let i = 0;
        for (; i < cityDetails.length; ++i) {
            tags.push(
                <Link key={500 + i} to={"/home/" + cityDetails[i].id}><CusDropdownItem leftIcon={<Icons.CityID />}
                    rightIcon={<img className='ms-auto' style={{ "height": "1rem", "width": "auto" }}
                        src={"https://flagcdn.com/" + cityDetails[i].country.toLowerCase() + ".svg"} />}
                >
                    {cityDetails[i].name}, {cityDetails[i].country}
                </CusDropdownItem>
                </Link>
            )
        }
        return tags;
    }

    function calcHeight(e) {
        setHeight(e.offsetHeight);
    }

    function CusDropdownItem(props) {
        return (
            <span className='cus-menu-item' onClick={() => props.goToMenu && setActive(props.goToMenu)}>
                <span className='cus-icon-button'>{props.leftIcon}</span>
                {props.children}
                <span className='cus-icon-right'>{props.rightIcon}</span>
            </span>
        );
    }

    return (
        <div className='cus-dropdown' style={{ height: m_height }}>
            <CSSTransition in={m_active === 'main'} unmountOnExit timeout={500} classNames={`cus-menu-primary`} onEnter={calcHeight}>
                <div className='cus-menu'>
                    <CusDropdownItem leftIcon={<Icons.Globe />}>World Map</CusDropdownItem>
                    <CusDropdownItem leftIcon={<Icons.Eye />} rightIcon=">" goToMenu="settings">Recently Viewed Cities</CusDropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition in={m_active === 'settings'} unmountOnExit timeout={500} classNames={`cus-menu-secondary`} onEnter={calcHeight}>
                <div className='cus-menu'>
                    <CusDropdownItem leftIcon={<Icons.Arrow />} goToMenu="main"><u><b>Back</b></u></CusDropdownItem>
                    <CusDropdownItem onClick={calcHeight} className="text-center" leftIcon={<Icons.Find />} rightIcon="v"><u>Recent Cities Appear Here</u></CusDropdownItem>
                    {props.cityId && cityTags(props.cityId)}
                </div>
            </CSSTransition>
        </div>
    );
}