import React, { useRef, useEffect, useState } from 'react';
import { select, line, curveCardinal, axisBottom, axisRight, scaleLinear} from "d3";
import "./atlas.css";


function Atlas() {
	const [data, setData] = useState([25,35,30,40,65,15,20,28]);
	const svgRef = useRef();

	// will be called initially and on every data change
	useEffect((props) => {

		const svgWidth = 1000
		const svgHeight = 250

		const svg = select(svgRef.current);
		svg
			.style("width", svgWidth)
			.style("height", svgHeight)

		const xScale = scaleLinear()
			.domain([0,data.length -1])
			.range([0,svgWidth]);

		const yScale = scaleLinear()
			.domain([0,150])
			.range([svgHeight,0]);

		const xAxis = axisBottom(xScale).ticks(data.length).tickFormat( index => index +1)
		svg
			.select(".x-axis")
			.style("transform", "translateY(250px)")
			.call(xAxis);

		const yAxis = axisRight(yScale);
		svg
			.select(".y-axis")
			.style("transform", "translateX(1000px)")
			.call(yAxis);


	},[data])

  return (
    <div className="Atlas">
    	<h1>Atlas</h1>
    	<svg className="svgMain" ref={svgRef} style={{background:"lightgray", overflow:"visible", display:"block"}}>
    		<g className="x-axis"></g>
    		<g className="y-axis"></g>

    	</svg>
    	<button onClick={() => setData(data.filter(value => value <55))}>Filter
    	</button>
    	<button onClick={() => setData(data.map(value => value = value +10))}>Update
    	</button>

 
    </div>
      );
}

export default Atlas