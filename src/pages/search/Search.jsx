import React, {useState, useEffect} from 'react';

//---Styles---
import './search.scss'

//---Assets---
import searchIcon from '../../assets/search.png'

//---Services---
import api from '../../services/api'

//---Components---
import Parameter from './parameter/Parameter';
import PhotosList from '../../components/photoslist/PhotosList'

//Initial state function to query
function initialState(){
    return {
        text: '' ,
        orientation: '' ,
        size: '' ,
        color: ''
    }
}
function Search() {
    const [query, setQuery] = useState(initialState)
    const [photos, setPhotos] = useState()
    console.log(photos)
    console.log(query)

    //Submit
    function onSubmit(e){
        e.preventDefault();

        //Search photos
        if(query.text !== ''){
            api.photos.search({
                query: query.text, 
                per_page: 20, 
                orientation: query.orientation, 
                size: query.size, 
                color: query.color
            }).then(photos => {
                setPhotos(photos) 
            });
        }
    }

    //Listening parameter change
    useEffect(() => {
        if(query.text !== ''){
            api.photos.search({
                query: query.text, 
                per_page: 20, 
                orientation: query.orientation, 
                size: query.size, 
                color: query.color
            }).then(photos => {
                setPhotos(photos) 
            });
        }
    }, [query.orientation,query.size,query.color])


    function getOrientation(option){
        if(option !== 'All')
            setQuery({...query, orientation: option})
    }

    function getSize(option){
        if(option !== 'All')
            setQuery({...query, size: option})
    }

    function getColor(option){
        if(option !== 'All')
            setQuery({...query, color: option})
    }

    return ( 
        <div className="search">
            <form onSubmit={onSubmit}>
                <div className="search-bar">
                    <img src={searchIcon} alt="loading..." />
                    <input 
                        type="text" 
                        value={query.text} 
                        onChange={ e => setQuery({...query, text: e.target.value})}
                        placeholder='Search nature, art, universe, etc.'
                    />
                </div>
                <div className="parameters">
                    <Parameter 
                        title='Orientation' 
                        options={['Landscape','Portrait','Square','All']}
                        getOption={getOrientation}
                    />
                    <Parameter 
                        title='Size' 
                        options={['Large','Medium','Small','All']}
                        getOption={getSize}
                    />
                    <Parameter 
                        title='Color' 
                        options={['All','Red','Orange','Yellow','Green','Turquoise','Blue','Pink','Brown','Black','Gray','White']}
                        getOption={getColor}
                    />
                </div>
            </form>
            <PhotosList photos={photos}/>
        </div>
     );
}

export default Search;