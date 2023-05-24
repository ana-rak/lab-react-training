/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function IdCard(props){
    const {firstName, lastName, gender, height, birth, picture} = props 
    return(
            <div>
                <h3>{firstName}</h3>
                <h3>{lastName}</h3>
                <h3>{gender}</h3>
                <h3>{height}</h3>
                <h3>{birth.toLocaleString()}</h3>
                <img src={picture}/>
            </div>
        ) 
    }
    
    export default IdCard;
    
    