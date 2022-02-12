import './css/Navbar.css'

export default function CusNavbar(props) {

    return(
        <nav className="cus-navbar">
            <ul className="cus-navbar-nav">
                {props.children}
            </ul>
        </nav>
    );
}