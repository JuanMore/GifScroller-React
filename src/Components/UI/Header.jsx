import { FaChevronRight } from 'react-icons/fa';
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
        <header className="center">
            <h1 className="logo" alt=''>Gif<span className="logo-color">Scroller</span></h1>
        </header>
        <div className="filter-buttons">

        <Link to="/"><button className="filter-btn">Home</button></Link>
        <Link to="/funny"><button className="filter-btn">Funny</button></Link>
        <Link to="/random"><button className="filter-btn">Random</button></Link>
                <button className="login-btn btn-primary">Log In <FaChevronRight className="chevron" /> </button>
            </div>
            </>
    )
}

export default Header
