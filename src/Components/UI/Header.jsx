import { FaChevronRight } from 'react-icons/fa';

function Header() {
    return (
        <>
        <header className="center">
            <h1 className="logo" alt=''>Gif<span className="logo-color">Scroller</span></h1>
        </header>
        <div className="filter-buttons">
        <a href="index.html"><button className="filter-btn c-btn btn-primary">Home</button></a>
        <a href="people.html"><button className="filter-btn">LOL</button></a>
        <a href="things.html"><button className="filter-btn">Random</button></a>
                <button className="filter-btn login-btn btn-primary">Log In <FaChevronRight /> </button>
            </div>
            </>
    )
}

export default Header
