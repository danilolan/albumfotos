import React, {useEffect,useState} from 'react';

//---Styles---
import './home.scss'
import './explorebutton.css'

//---Components---
import PhotosList from '../../components/photoslist/PhotosList';

//---Others---
import api from '../../services/api'

function Home() {
    const [photos, setPhotos] = useState()

    useEffect(() => {
        api.photos.curated({ per_page: 20 }).then(photos => {
           setPhotos(photos) 
        });
    }, [])

    return ( 
        <div className="home">

            <a className="btn-explore" href="/search">
                <ul>
                    <li>
                        Explore
                        <span></span><span></span><span></span><span></span>
                    </li>    
                </ul>
            </a>

            <PhotosList photos={photos}/>             
        </div>
     );
}

export default Home;