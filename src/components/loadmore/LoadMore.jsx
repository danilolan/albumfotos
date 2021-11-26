import React,{useState, useEffect} from 'react';

//---Styles---
import './loadmore.scss'

//---Services---
import api from '../../services/api'

function LoadMore(props) {
    const [isDone, setisDone] = useState(true)
    const query = props.query
    const page = props.page

    useEffect(() => {
        if(query.text !== ''){
            setisDone(false)
            api.photos.search({
                per_page: 20,
                page: page,
                query: query.text,   
                orientation: query.orientation, 
                size: query.size, 
                color: query.color
            }).then(photos => {
                props.getData(photos.photos)
                setisDone(true)
            });
        }
    }, [page]);

    if(isDone){
        return ( 
            <button className="load-more" onClick={() => props.loadMore()} style={props.isRender ? {display: 'block'}:{display: 'none'}}>
                Load more
            </button>
         );
    }
    else{
        return(
            <div className="loader"></div>
        )
    }
}

export default LoadMore;