import React from 'react';
import "./ActionBar.css";


const ActionBar = (props, value) => {
	return (
		<div className = "ActionBar">

		<label htmlFor="Filter">Filter</label>

		<select selected= {value} onChange={props.handleClick} id="Filter">
		<option value="All">Structure</option>
		<option value="Collective">Collective</option>
		<option value="Cooperative">Cooperative</option>
		<option value="Platform">Platform</option>
		<option value="Network">Network</option>
		<option value="Non-Profit">Non-Profit</option>
		<option value="Office">Office</option>
		</select>

		<select selected={value} onChange={props.handleFilterMot} id="">
			<option value="All">Motivation</option>
			<option value="Social">Social</option>
			<option value="Political">Political</option>
			<option value="Ecological">Ecological</option>
			<option value="Pedagogical">Pedagogical</option>
			<option value="Professional">Professional</option>
		</select>

		<label htmlFor="Sort">Sort</label>
		<button value="name" id="Sort" onClick={props.handleSort}>Name</button>
		<button value="founded" onClick={props.handleSort}>Founded</button>
		<button value="size" onClick={props.handleSort}>Size</button>
		
		
	
	{/* <select value="FilterByMethod" id=""> */}
{/* 	<option value="All">All</option> */}
{/* 	<option value="Appropriation">Appropriation</option> */}
{/* 	<option value="Dissemination">Dissemination</option> */}
{/* 	<option value="Empowerment">Empowerment</option> */}
{/* 	<option value="Networking">Networking</option> */}
{/* 	<option value="Subversion">Subversion</option> */}
{/* </select> */}
<input placeholder="Search Practices" onChange={props.handleSearch} type="text"/>
</div>
)

}


export default ActionBar
