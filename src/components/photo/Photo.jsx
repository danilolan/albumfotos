import React, {useState} from 'react';

//---Styles---
import './photo.scss'

//---Others---

function Photo(props) {
    const photoData = props.photoData
    const type = props.type
    const showAutor = props.showAutor

    function myHandleImageLoadEvent(){
        console.log('loaded')
    }

    const [isLoaded, setIsLoaded] = useState(false)
    if(photoData){
        const aspectRatio = `${photoData.width} / ${photoData.height}`
        return (
            <li className="photo" key={photoData.id.toString()}>
                {isLoaded ? null : 
                    <div  className="place-holder" style={{
                        aspectRatio: aspectRatio,
                        background: 'rgb(78, 78, 78)',
                    }}/>}
                <img
                    src={photoData.src[type]} 
                    alt="loading..." 
                    style={isLoaded ? {} : {display: 'none'}}
                    onLoad={ () => setIsLoaded(true)}
                />
                {showAutor ? <a className="autor" href={photoData.photographer_url}>{photoData.photographer}</a> : <></>}
            </li>
         );
    }
}

export default Photo;