import React, {useEffect,useState} from 'react';

//---Styles---
import './home.scss'
import './explorebutton.css'

//---Components---
import Photo from '../../components/photo/Photo'

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

            {photos ?
                <div className="photos">
                    <div className="column-1">
                        {photos.photos.map( (photo, index) => {
                            if(index < 5)
                                return <Photo photoData={photo} type='large' showAutor={true}/>                     
                            else 
                                return <></>
                        })}
                    </div>
                    <div className="column-2">
                        {photos.photos.map( (photo, index) => {
                            if(index >= 5 && index < 10)
                            return <Photo photoData={photo} type='large' showAutor={true}/>                     
                            else 
                                return <></>
                        })}
                    </div>
                    <div className="column-3">
                        {photos.photos.map( (photo, index) => {
                            if(index >= 10 && index < 15)
                            return <Photo photoData={photo} type='large' showAutor={true}/>                     
                            else 
                                return <></>
                        })}
                    </div>
                    <div className="column-4">
                        {photos.photos.map( (photo, index) => {
                            if(index >= 15 && index < 20)
                            return <Photo photoData={photo} type='large' showAutor={true}/>                     
                            else 
                                return <></>
                        })}
                    </div>
                </div>
            : <></>}              
        </div>
     );
}

export default Home;