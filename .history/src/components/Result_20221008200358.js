import React from 'react'

const Results = (props) => {
    return (
        <div>
            {props.results.country && <div className='results-city'>{props.results.country}</div>}
            {props.results.temperature && <div className='results-condition'>{props.results.temperature}</div>}
            {props.results.conditionText && 
                <div>
                    <img src={props.results.icon} alt="icon"/>
                    <span>{props.results.conditionText}</span>
                </div>}

        </div>
    );
};

export default Results;