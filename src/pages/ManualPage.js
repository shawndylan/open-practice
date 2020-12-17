import React from 'react';
import './manual.css';

export default function ManualPage(props) {
    return(
        <div className="manual-page">
            <div className="definition">
                <h1>{props.term}</h1>
                <br></br>
                <p>{props.definition}</p>
                <br></br>
                <h2>{props.variantA}</h2>
                <p>{props.variantADefinition}</p>
                <br></br>
                <h2>{props.variantB}</h2>
                <p>{props.variantBDefinition}</p>
                <br></br>
                <h3>{props.variantC}</h3>
                <h1>{props.variantCDefinition}</h1>
                <br></br>
                <h3>{props.variantD}</h3>
                <p>{props.variantDDefinition}</p>
            </div>
            <div className="diagram">
                {props.diagram}
            </div>
        </div>
        
    )
}