import React from 'react';
import "./ActionBar.css";
import { IconFilter, IconArrowsSort, IconTag, IconPlus } from '@tabler/icons';


const ActionBar = (props, value) => {
	return (
		<div className = "ActionBar">

		<div className="Btn-Group">
			<label htmlFor="Filter"><IconFilter size={20} />Filter</label>
			<select selected= {value} onChange={props.handleFilterStructure} id="Filter">
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
		</div>

		<div className="Btn-Group">
			<label htmlFor="Sort"><IconArrowsSort size={20}/>Sort</label>
			<button value="name" id="Sort" onClick={props.handleSort}>Name</button>
			<button value="founded" onClick={props.handleSort}>Founded</button>
			<button value="size" onClick={props.handleSort}>Size</button>
		</div>

		<div className="Btn-Group">
			<label htmlFor="Tags"><IconTag size={20}/>Tags</label>
			<button value="Exemplar" id="Tags" onClick={props.handleTags}>Exemplars</button>
			<button value="design/build" id="Tags" onClick={props.handleTags}>design/build</button>
			<button className="compare-button" onClick={props.handleCompare}><IconPlus size={15}/>Compare ({props.counter})</button>
		</div>

		<div className="Btn-Group-Search">
			<input placeholder="Search Practices" onChange={props.handleSearch} type="text"/>
		</div>
</div>
)

}


export default ActionBar
