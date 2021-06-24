import React, { useState, useEffect } from 'react';
import {textService} from './firstRxService'


function FirstRx(){
    const [textArray,setTextArray] = useState([])

    useEffect(() => {
            //side effect

        const subscriptionval = textService.onMessage().subscribe( text => {
            if(text){
                setTextArray(text => [...text,text])
            }
        }

        )
        return subscriptionval.unsubscribe;

    }, [] );


 
    return(
        <div>
                {
                    textArray.map((text,index) => {
                        <div>{text.text} </div>
                    })
                }
        </div>
    )
}


