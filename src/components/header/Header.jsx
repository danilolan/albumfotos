import React, {useState} from 'react';
//---Styles---
import './header.scss'

//---Assets---
import searchIcon from '../../assets/search.png'
import menuIcon from '../../assets/menu.png'

function Header() {
    const [menuIsActive, setMenuIsActive] = useState(false)
    return ( 
        <div className="header">

            <a href='/search' className="search-link">
                <img src={searchIcon} alt='loading...' />
                &nbsp; Search
            </a>

            <div className="mobile-menu-icon" onClick={ () => {setMenuIsActive(!menuIsActive)}}>
                <img src={menuIcon} alt="loading..." />
            </div>

            <ul className={`other-links ${menuIsActive ? 'active': ''}`}>
                <li>
                    <a href='/support' className="support">
                        Support
                    </a>
                </li>
                <li>
                    <a href='/community' className="community">
                        Community
                    </a>
                </li>
                <li>
                    <a href='/home' className="home">
                         Home
                    </a>
                </li>                
            </ul>

        </div>
     );
}

export default Header