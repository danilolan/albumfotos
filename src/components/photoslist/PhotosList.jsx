import React from 'react';

//---Styles---
import './photoslist.scss'

//---Components---
import Photo from '../../components/photo/Photo'

function PhotosList(props) {
    const photos = props.photos

    if(photos){
        const length = photos.length
        return ( 
                <div className="photoslist">
                    <div className="column-1">
                        {photos.map( (photo, index) => {
                            if(index < (length * 0.25))
                                return <Photo photoData={photo} type='large' showAutor={true}/>                     
                            else 
                                return <></>
                        })}
                    </div>
                    <div className="column-2">
                        {photos.map( (photo, index) => {
                            if(index >= (length * 0.25) && index < (length * 0.5))
                            return <Photo photoData={photo} type='large' showAutor={true}/>                     
                            else 
                                return <></>
                        })}
                    </div>
                    <div className="column-3">
                        {photos.map( (photo, index) => {
                            if(index >= (length * 0.5) && index < (length * 0.75))
                            return <Photo photoData={photo} type='large' showAutor={true}/>                     
                            else 
                                return <></>
                        })}
                    </div>
                    <div className="column-4">
                        {photos.map( (photo, index) => {
                            if(index >= (length * 0.75) && index < length)
                            return <Photo photoData={photo} type='large' showAutor={true}/>                     
                            else 
                                return <></>
                        })}
                    </div>
                </div>
        );
    } 
    return <></>
}

export default PhotosList;