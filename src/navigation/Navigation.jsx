import React from "react"
import { Link } from "react-router-dom"

import './css/Navigation.css'
import CusNavbar from "./Navbar"
import CusNavitem from "./Navitem"
import CusDropdownMenu from "./DropdownMenu"
import CusSearchBox from "./SearchBox"
import * as Icons from '../helpers/icons'


export default function Navigation(props) {
  const pushstyle = {} = { "marginTop": "7px" };

  return (
    <div className="cus-nav-bar-main">
      <CusNavbar>
        <Link to="/home" style={pushstyle} className="Color-spin"><CusNavitem icon={<Icons.Home />}></CusNavitem></Link>
        <Link to="/map" style={pushstyle} className="Color-spin"><CusNavitem icon={<Icons.World />}></CusNavitem></Link>
        <CusNavitem icon={<Icons.Caret />}>
          <CusDropdownMenu cityId={props.cityId} />
        </CusNavitem>
        <CusSearchBox />
      </CusNavbar>
    </div>
  )
}