import React from 'react';
import "./ActionBar.css";
import { IconSearch } from '@tabler/icons';


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

		<label htmlFor="Tags">Tags</label>
		<button value="Exemplar" id="Tags" onClick={props.handleTags}>Exemplars</button>
		<button value="design/build" id="Tags" onClick={props.handleTags}>design/build</button>
		
<input placeholder="Search Practices" onChange={props.handleSearch} type="text"/>
</div>
)

}


export default ActionBar
