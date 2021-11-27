import React from 'react';

//---Styles---
import './footer.scss'

function Footer() {
    return ( 
        <footer>
            <div className="rights">
                © COMPANY 2021 All rights reserved
            </div>
            <div className="credits">
                Developed by <a href="https://www.linkedin.com/in/danilo-herculano-3906761b4/">DaniloHerc</a>
            </div>
        </footer>
     );
}

export default Footer;