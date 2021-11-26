import React from 'react';

//---Styles---
import './photo.scss'

function Photo(props) {
    const photoData = props.photoData
    let type = props.type
    const showAutor = props.showAutor

    return ( photoData ? 
        <li className="photo" key={photoData.id.toString()}>
            <img src={photoData.src[type]} alt="loading..." loading="lazy"/>
            {showAutor ? <a className="autor" href={photoData.photographer_url}>{photoData.photographer}</a> : <></>}
        </li>
        :
        <></>
     );
}

export default Photo;