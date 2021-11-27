import React, {useState} from 'react';
import ReactDOM from 'react-dom';

//---Styles---
import './photomodal.scss'
import closeImg from '../../../assets/close.png'

const portalRoot = document.getElementById('portal-root')

const PhotoModal = ({isOpen, click, data}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const aspectRatio = `${data.width} / ${data.height}`
    if(!isOpen){
        return null
    }
    return ReactDOM.createPortal(
        <div className="photomodal">
            <div className="uimodal">
                <button type="button" className="button" onClick={click}>
                    <img src={closeImg} alt="loading..." />
                </button>
                <div className="content">
                    <div className="size">
                        {data.width} x {data.height}
                    </div>

                    {isLoaded ? null : 
                        <div className="place-holder" style={{
                            width: ((data.width * 607) / data.height ),
                            height: '80vh',
                            background: data.avg_color,
                        }}> 
                            <div className="loader"></div> 
                        </div>
                    }
                    <a href={data.url}>
                        <img
                            src={data.src.original} 
                            alt="loading..." 
                            style={isLoaded ? {aspectRatio: aspectRatio} : {display: 'none'}}
                            onLoad={ () => setIsLoaded(true)}
                        />
                    </a>

                    
                    <div className="autor">
                        <a href={data.photographer_url}>{data.photographer}</a>
                    </div>
    
                </div>
            </div>
        </div>,
        portalRoot
    )
}

export default PhotoModal;