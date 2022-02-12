import React from "react"
import { Link } from "react-router-dom"

import './css/Navigation.css'
import CusNavbar from "./Navbar"
import CusNavitem from "./Navitem"
import CusDropdownMenu from "./DropdownMenu"
import CusSearchBox from "./SearchBox"
import * as Icons from '../helpers/icons'

const pushstyle = {"marginTop": "7px"};

export default function Navigation() {

  return (
    <div className="cus-nav-bar-main">
      <CusNavbar>
        <Link to="/home" style={pushstyle} className="Color-spin"><CusNavitem icon={<Icons.Home/>}></CusNavitem></Link>
        <Link to="/cities" style={pushstyle} className="Color-spin"><CusNavitem icon={<Icons.City/>}></CusNavitem></Link>
        <CusNavitem icon={<Icons.Caret/>}> 
          <CusDropdownMenu/>
        </CusNavitem>
        <CusSearchBox/>
      </CusNavbar>
    </div>
  )
}