import { useState } from 'react'
import './css/Navitem.css'

export default function CusNavitem(props) {
    const [open, setOpen] = useState(false);
return (
    <li className='cus-nav-item'>
        <span className='cus-icon-button' onClick={() => setOpen(!open)}>
            {props.icon}
        </span>

        {open && props.children}
    </li>
);
}