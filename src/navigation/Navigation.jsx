import React from "react"
import { Link } from "react-router-dom"

import CusNavitem from "./Navitem"
import CusDropdownMenu from "./DropdownMenu"
import CusSearchBox from "./SearchBox"
import * as Icons from '../helpers/icons'
import './css/Navbar.css'
import './css/Navigation.css'


export default function Navigation(props) {
  const pushstyle = {} = { "marginTop": "7px" };

  return (
    <div className="cus-nav-bar-main">
      <nav className="cus-navbar">
        <ul className="cus-navbar-nav">
          <Link to="/home" style={pushstyle} className="Color-spin"><CusNavitem icon={<Icons.Home />}></CusNavitem></Link>
          <Link to="/map" style={pushstyle} className="Color-spin"><CusNavitem icon={<Icons.World />}></CusNavitem></Link>
          <CusNavitem icon={<Icons.Caret />}>
            <CusDropdownMenu cityId={props.cityId} />
          </CusNavitem>
         
          <CusSearchBox />
        </ul>
      </nav>
    </div>
  )
}