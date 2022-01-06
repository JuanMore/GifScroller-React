import { FaChevronRight } from 'react-icons/fa';
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
        <header className="center">
            <h1 className="logo" alt=''>Gif<span className="logo-color">Scroller</span></h1>
        </header>
        <div className="filter-buttons">
<<<<<<< HEAD
        <Link to="/"><button className="filter-btn c-btn btn-primary">Home</button></Link>
        <Link to="/funny"><button className="filter-btn">Funny</button></Link>
        <Link to="/random"><button className="filter-btn">Random</button></Link>
=======
        <a href="index.html"><button className="filter-btn c-btn btn-primary">Home</button></a>
        <a href="people.html"><button className="filter-btn">LOL</button></a>
        <a href="things.html"><button className="filter-btn">Random</button></a>
>>>>>>> 60474fae7068f8162be0d68848858631c4f224f7
                <button className="filter-btn login-btn btn-primary">Log In <FaChevronRight /> </button>
            </div>
            </>
    )
}

export default Header
