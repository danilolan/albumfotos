import React from 'react';

//---Styles---
import './photoslist.scss'

//---Components---
import Photo from '../../components/photo/Photo'

function PhotosList(props) {
    const photos = props.photos
    const col1 = []
    const col2 = []
    const col3 = []
    const col4 = []
    let indexCol = 1

    if(photos){
        //Creating each column
        photos.forEach( photo => {
            switch(indexCol){
                case (1):
                    indexCol = 2
                    return col1.push(photo)
                    
    
                case (2):
                    indexCol = 3
                    return col2.push(photo)
    
                case (3): 
                    indexCol = 4
                    return col3.push(photo)
    
                case (4):
                    indexCol = 1
                    return col4.push(photo)
            }
        })
        return ( 
                <div className="photoslist">
                    <div className="column-1">
                        {col1.map( (photo, index) => {
                            return <Photo photoData={photo} type='large' showAutor={true}/>                     
                        })}
                    </div>
                    <div className="column-2">
                        {col2.map( (photo, index) => {
                            return <Photo photoData={photo} type='large' showAutor={true}/>                     
                        })}
                    </div>
                    <div className="column-3">
                        {col3.map( (photo, index) => {
                            return <Photo photoData={photo} type='large' showAutor={true}/>
                        })}
                    </div>
                    <div className="column-4">
                        {col4.map( (photo, index) => {
                            return <Photo photoData={photo} type='large' showAutor={true}/>
                        })}
                    </div>
                </div>
        );
    } 
    return <></>
}

export default PhotosList;