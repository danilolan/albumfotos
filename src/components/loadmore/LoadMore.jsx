import React from 'react';
import './loadmore.scss'

function LoadMore(props) {
    return ( 
        <button className="load-more" onClick={() => props.loadMore()}>
            Load more
        </button>
     );
}

export default LoadMore;