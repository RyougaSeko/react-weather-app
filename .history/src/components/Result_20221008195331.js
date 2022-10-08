import React from 'react'

const Results = (props) => {
    return (
        <div>
            {props.results.country && <div>{props.results.country}</div>}
            {props.results.temperature && <div>{props.results.temperature}</div>}
            {props.results.conditionText && 
                <div>
                    <img src={props.results.conditionText} alt="icon"/>
                    <span>{props.results.conditionText}</span>
                </div>}

        </div>
    );
};

export default Results;