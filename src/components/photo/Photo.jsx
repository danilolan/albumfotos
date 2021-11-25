import React, { useLayoutEffect, useState } from 'react';

//---Styles---
import './photo.scss'


//Responsivity event listener
function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

//Main function
function Photo(props) {
    const photoData = props.photoData
    let type = props.type
    const showAutor = props.showAutor

    //Dynamic img size
    let maxWidth = '233px'
    const [width] = useWindowSize();
    if(width <= 800){
        maxWidth = '400px'
    }
    else if(width <= 1100){
        maxWidth = '150px'
    }
    else if(width > 1100){
        maxWidth = '233px'
    }

    return ( photoData ? 
        <li className="photo" key={photoData.id.toString()}>
            <img src={photoData.src[type]} alt="loading..." loading="lazy" style={{maxWidth: maxWidth}}/>
            {showAutor ? <a className="autor" href={photoData.photographer_url}>{photoData.photographer}</a> : <></>}
        </li>
        :
        <></>
     );
}

export default Photo;