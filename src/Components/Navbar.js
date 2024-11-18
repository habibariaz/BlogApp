import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const Logout = () => {
        sessionStorage.clear();
        navigate('/')
    }
    return (
        <nav className="navbar sticky-top justify-content-center" style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#e3f2fd", zIndex: 1000 }}>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link active navImgHeading" aria-current="page" to='/Home'>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link navImgHeading" to='/About'>
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link navImgHeading" to='/Contact'>
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link navImgHeading" to='/' onClick={Logout}>
                        Logout
                    </Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar