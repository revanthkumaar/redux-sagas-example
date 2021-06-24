import React from 'react';

import {textService} from './firstRxService'

function secondRxComponent(){

    function sendText(){

        textService.sendText('rx implement')

    }

    function clearText(){
            textService.clearText('')
    }


    return(
        <div>
            <button onClick={sendText}>Send Info to Other comp</button>
                        <button onClick={clearText}>Clear Info</button>

        </div>
    )


}