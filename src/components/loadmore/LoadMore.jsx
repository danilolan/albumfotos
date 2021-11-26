import React,{useState, useEffect} from 'react';

//---Styles---
import './loadmore.scss'

//---Services---
import api from '../../services/api'

function LoadMore(props) {
    const query = props.query
    const page = props.page

    useEffect(() => {
        if(query.text !== ''){
            api.photos.search({
                per_page: 20,
                page: page,
                query: query.text,   
                orientation: query.orientation, 
                size: query.size, 
                color: query.color
            }).then(photos => {
                props.getData(photos.photos) 
            });
        }
    }, [page]);

    return ( 
        <button className="load-more" onClick={() => props.loadMore()}>
            Load more
        </button>
     );
}

export default LoadMore;