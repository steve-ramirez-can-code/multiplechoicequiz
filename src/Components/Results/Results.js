import React from 'react';
import { getMessage } from '../Messages/Messages';


 const Results = (props) => {
        return (
        <div className="resultsPage">
            <h4>Here are the calculations</h4>
            
            
            <div className="messageContainer"> 
                <h1>
                    {getMessage() }
                </h1>
            </div>
        </div>
        )
    }
export default Results