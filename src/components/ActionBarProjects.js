import React from 'react';
import "./ActionBar.css";
import { IconSearch, IconFilter, IconArrowsSort, IconTag, IconPlus } from '@tabler/icons';


const ActionBarProjects = (props, value) => {
	return (
		<div className = "ActionBar">

		<div className="Btn-Group">
			<label htmlFor="Filter"><IconFilter size={20} />Filter</label>
			<select selected= {value} onChange={props.handleFilterA} id="Filter">
				<option value="All">Project Type</option>
				<option value="protest">Protest</option>
				<option value="pavilion">Pavilion</option>
				<option value="performance">Performance</option>
				<option value="installation">Installation</option>
			</select>
		</div>

		<div className="Btn-Group">
			<label htmlFor="Sort"><IconArrowsSort size={20}/>Sort</label>
			<button value="name" id="Sort" onClick={props.handleSort}>Name</button>
			<button value="founded" onClick={props.handleSort}>Year</button>
		</div>

		<div className="Btn-Group">
			<label htmlFor="Tags"><IconTag size={20}/>Tags</label>
			<button value="self-initiated" id="Tags" onClick={props.handleTags}>self-initiated</button>
			<button value="self-funded" id="Tags" onClick={props.handleTags}>self-funded</button>
			<button value="self-built" id="Tags" onClick={props.handleTags}>self-built</button>
			<button className="compare-button" onClick={props.handleCompare}><IconPlus size={15}/>Compare ({props.counter})</button>
		</div>

		<div className="Btn-Group-Search">
			<input placeholder="Search Projects" onChange={props.handleSearch} type="text"/>
		</div>
</div>
)

}


export default ActionBarProjects
