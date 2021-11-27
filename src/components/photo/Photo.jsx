import React, {useState} from 'react';

//---Styles---
import './photo.scss'

//---Components----
import PhotoModal from './photomodal/PhotoModal';

function Photo(props) {
    
    //Photo props
    const photoData = props.photoData
    const type = props.type
    const showAutor = props.showAutor

    //Modal
    const [photoModalIsOpen, setPhotoModalIsOpen] = useState(false)

    const [isLoaded, setIsLoaded] = useState(false)
    if(photoData){
        const aspectRatio = `${photoData.width} / ${photoData.height}`
        
        return (
            <li className="photo" key={photoData.id.toString()}>
                {isLoaded ? null : 
                    <div  className="place-holder" style={{
                        aspectRatio: aspectRatio,
                        background: photoData.avg_color,
                    }}/>}
                <img
                    src={photoData.src[type]} 
                    alt="loading..." 
                    style={isLoaded ? {} : {display: 'none'}}
                    onLoad={ () => setIsLoaded(true)}
                    onClick={ () => setPhotoModalIsOpen(true) }
                />
                {showAutor ? <a className="autor" href={photoData.photographer_url}>{photoData.photographer}</a> : <></>}

                <PhotoModal 
                    data={photoData}
                    isOpen={photoModalIsOpen} 
                    click={() => setPhotoModalIsOpen(false)}
                />

            </li>
         );
    }
}

export default Photo;