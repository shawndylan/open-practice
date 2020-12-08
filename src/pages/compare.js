import React from 'react';
import './compare.css';


function Compare(props) {
    return (
        <div className="compare-page">
            <div >
                <h3 className="compare-page-header">Name</h3>
                <h1 className="compare-page-title">{props.name}</h1>
            </div>
            <div >
                <h3 className="compare-page-header">Year Founded</h3>
                <h1 className="compare-page-item">{props.foundingYear}</h1>
            </div>
            <div>
                <h3 className="compare-page-header">Location</h3>
                <h1 className="compare-page-item">{props.Location}</h1>
            </div>
            <div>
                <h3 className="compare-page-header">Structure</h3>
                <h1 className="compare-page-item">{props.Structure}</h1>
            </div>
            <div>
                <h3 className="compare-page-header">Motivation</h3>
                <h1 className="compare-page-item">{props.Motivation}</h1>
            </div>
            <div>
                <h3 className="compare-page-header">Method</h3>
                <h1 className="compare-page-item">{props.Method}</h1>
            </div>
            <div>
                <h3 className="compare-page-header">Practice Size</h3>
                <h1 className="compare-page-item">{props.Size}</h1>
            </div>
        </div>
    );
}

export default Compare;