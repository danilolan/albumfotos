import React from 'react';

//---Styles---
import './photo.scss'

function Photo(props) {
    const photoData = props.photoData
    const type = props.type
    const showAutor = props.showAutor

    return ( photoData ? 
        <div className="photo">
            <img src={photoData.src[type]} alt="loading..." loading="lazy"/>
            {showAutor ? <a className="autor" href={photoData.photographer_url}>{photoData.photographer}</a> : <></>}
        </div>
        :
        <></>
     );
}

export default Photo;