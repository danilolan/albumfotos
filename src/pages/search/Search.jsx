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
import LoadMore from '../../components/loadmore/LoadMore';

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
    const [photosArray, setPhotosArray] = useState()
    const [totalResults, setTotalResults] = useState()

    //Submit
    function onSubmit(e){
        e.preventDefault();

        //Search photos
        if(query.text !== ''){
            api.photos.search({
                per_page: 40,
                page: currentPage,
                query: query.text,   
                orientation: query.orientation, 
                size: query.size, 
                color: query.color
            }).then(photos => {
                setPhotosArray(photos.photos) 
                setTotalResults(photos.total_results)
            });
        }
    }

    //Listening parameter change
    useEffect(() => {
        if(query.text !== ''){
            api.photos.search({
                per_page: 40,
                page: currentPage,
                query: query.text,   
                orientation: query.orientation, 
                size: query.size, 
                color: query.color
            }).then(photos => {
                setPhotosArray(photos.photos) 
            });
        }
    }, [query.orientation,query.size,query.color])

    //Get parameters
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

    //loadMore
    const [currentPage, setCurrentPage] = useState(1)
    console.log(photosArray)
    function getDataLoadMore(data){
        setPhotosArray(photosArray.concat(data))
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

            <div 
                className="total-results"
                style={ totalResults ? {} : {display:'none'}}
            >
                Total results: {totalResults}
            </div>

            <PhotosList photos={photosArray}/>
            <LoadMore 
                loadMore={() => setCurrentPage(currentPage + 1)} 
                query={query} 
                page={currentPage}
                getData={getDataLoadMore} 
                isRender={photosArray ? true : false}
            />
 
        </div>
     );
}

export default Search;