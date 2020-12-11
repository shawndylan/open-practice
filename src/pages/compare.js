import React from 'react';
import './compare.css';


function Compare(props) {
    return (
        <div className="compare-page">
            <div className="compare-container">
                <h3 className="compare-page-header">Name</h3>
                <h1 className="compare-page-title">{props.name}</h1>
            </div>
            <div className="compare-container" >
                <h3 className="compare-page-header">Year Founded</h3>
                <h1 className="compare-page-item">{props.foundingYear}</h1>
            </div>
            <div className="compare-container">
                <h3 className="compare-page-header">Location</h3>
                <h1 className="compare-page-item">{props.Location}</h1>
                <img className="country-diagram" src={props.countryDiagram} alt="diagram"></img>
            </div>
            <div className="compare-container">
                <h3 className="compare-page-header">Structure</h3>
                <h1 className="compare-page-item">{props.Structure}</h1>
            </div>
            <div className="compare-container">
                <h3 className="compare-page-header">Motivation</h3>
                <h1 className="compare-page-item">{props.Motivation}</h1>
            </div>
            <div className="compare-container">
                <h3 className="compare-page-header">Method</h3>
                <h1 className="compare-page-item">{props.Method}</h1>
            </div>
            <div className="compare-container">
                <h3 className="compare-page-header">Practice Size</h3>
                <h1 className="compare-page-item">{props.Size}</h1>
            </div>
            <div className="org-container">
                <h3 className="compare-page-header">Org Chart</h3>
                <img className="org-chart" src={props.orgChart} alt="diagram"></img>
            </div>
            <div className="Locality">
                <h3 className="compare-page-header">{props.Locality}</h3>
            </div>
        </div>
    );
}

export default Compare;