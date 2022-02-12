import { useState } from 'react'
import {CSSTransition} from 'react-transition-group'
import './css/DropdownMenu.css'
import './css/DropdownItem.css'
import * as Icons from '../helpers/icons'


export default function CusDropdownMenu(props) {
    const [m_active, setActive] = useState("main");
    const [m_height, setHeight] = useState();

    function calcHeight(e) {
        const ht = e.offsetHeight;
        setHeight(ht);
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
        <div className='cus-dropdown' style={{height : m_height}}>
            <CSSTransition in={m_active === 'main'} unmountOnExit timeout={500} classNames={`cus-menu-primary`} onEnter={calcHeight}>
                <div className='cus-menu'>
                    <CusDropdownItem>My Profile</CusDropdownItem>
                    <CusDropdownItem leftIcon={<Icons.Cog/>} rightIcon=">" goToMenu="settings">Settings</CusDropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition in={m_active === 'settings'} unmountOnExit timeout={500} classNames={`cus-menu-secondary`} onEnter={calcHeight}>
                <div className='cus-menu'>
                    <CusDropdownItem leftIcon={<Icons.Arrow/>} goToMenu="main"><u><b>Back</b></u></CusDropdownItem>
                    <CusDropdownItem leftIcon={<Icons.Find/>}><u>Recent Cities</u></CusDropdownItem>
                    <CusDropdownItem leftIcon={<Icons.CityID/>} >CityID</CusDropdownItem>
                    <CusDropdownItem leftIcon={<Icons.CityID/>} >CityID</CusDropdownItem>
                    <CusDropdownItem leftIcon={<Icons.CityID/>} >CityID</CusDropdownItem>
                    <CusDropdownItem leftIcon={<Icons.CityID/>} >CityID</CusDropdownItem>
                    <CusDropdownItem leftIcon={<Icons.CityID/>} >CityID</CusDropdownItem>
                    <CusDropdownItem leftIcon={<Icons.CityID/>} >CityID</CusDropdownItem>

                </div>
            </CSSTransition>
        </div>
    );
}