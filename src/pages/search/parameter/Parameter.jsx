import React, {useState} from 'react';

//---Styles---
import './parameter.scss'

//---Assets---
import noneIcon from '../../../assets/none.png'

function Parameter(props) {
    const [optionSelected, setOptionSelected] = useState()

    function optionClick(option){
        setOptionSelected(option)
        props.getOption(option.toLowerCase())
    }

    return ( 
        <div className='parameter'>
            <div className="title">{optionSelected ? optionSelected : props.title}</div>
            <div className={`options ${props.title}`}>
                {props.options.map( (option,index) => {
                    if(props.title === 'Color'){
                        if(option === 'All')
                            return <img key={index} src={noneIcon} alt="loading..." className="color" onClick={ () => optionClick(option)} style={{boxShadow: 'none'}}/>
                        else
                            return <div key={index} className="color" style={{background: option}} onClick={ () => optionClick(option) }/>                         
                    }
                    else{
                        return <li key={index} onClick={ () => optionClick(option) }> {option} </li> 
                    }
                })}
            </div>
        </div>
     );
}

export default Parameter