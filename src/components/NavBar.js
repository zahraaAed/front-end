import{ Link } from 'react-router-dom';
import '../pages/Navbar.css'
import Logo from '../images/logo.png';
import { useEffect , useState } from 'react';
import { useLocation } from 'react-router-dom';
const NavBar = () => {
    const location = useLocation();

    const [locBac, setLocBac] = useState(location.pathname);
  
    useEffect(() => {
        setLocBac(location.pathname);
    }, [location]);
    return(
<header>
<div className={`nav-container ${locBac === '/' || locBac==='/contact' ? 'nav-h' : ''}`}>
        <img className='logo' src={Logo} alt="blooming-logo" />

        <div className="nav-buttons">
        <Link className='links' to="/">
            <h1>Home</h1>
        </Link>
        <Link className='links' to="/about">
            <h1>About</h1>
        </Link>

        <Link className='links' to="/categories">
            <h1>Menu</h1>
        </Link>

        <Link className='links' to="/contact">
            <h1>Contact Us</h1>
        </Link>
        </div>
    </div>
</header>
    )
}   
export default NavBar;