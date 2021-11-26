import React from 'react';

//---Styles---
import './photoslist.scss'

//---Components---
import Photo from '../../components/photo/Photo'

function PhotosList(props) {
    const photos = props.photos
    return ( 
        photos ?
            <div className="photoslist">
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

        : <></>
     );
}

export default PhotosList;