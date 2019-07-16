import React from 'react';
import './ClearButton.css';

export const  ClearButton = (props) => (
    /* add additional code to the division tag  */
    /* Set the state to empty again */

    <div className="clear-btn" onClick={props.clearInput}>
        Clear
    </div>
    
)
