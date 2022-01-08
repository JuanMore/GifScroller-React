import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function NavLinks() {
    return (
        <ul className="nav-list">
        <li className="nav-list-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-list-item"><Link to="/funny" className="nav-link">Funny</Link></li>
        <li className="nav-list-item">
            <Link to="/random" className="nav-link">Random</Link>
        </li>
        <li className="nav-list-item"><Link to="/" className="nav-link">About Us</Link></li>
        <li className="nav-list-item">
            <Link to="/" className="nav-link">Contacts</Link>
            </li>
            <ul className="nav-list-social">
                <li className="nav-social-item"><Link to="/" className="nav-link">
                    <FaFacebook size={25} /></Link>
                </li>
                <li className="nav-social-item"><Link to="/" className="nav-link">
                    <FaTwitter size={25} /></Link>
                </li>
            </ul>
    </ul>
    )
}

export default NavLinks
