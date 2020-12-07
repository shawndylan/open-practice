import React from 'react';
import Card from './components/card';
import './practiceList.css';
import Window from './components/window';

function ProjectList (props) {

return (


		<>
			<div className ="practiceList">
				{props.projects.map((project, projectKey) => 
					<div key={projectKey}>
						<Card 
							Name={project.fields.Name}
							Location={project.fields.["Project Location"]}
							Type={project.fields["Project Type"]}
							Size={project.fields.Scale}
							id={project.id}
							Image={project.fields["Project Cover Image"][0].url}
						/>

							{props.selectedValue === project.id ? (
							<div className="window">
								<Window 
								/>
								</div>
							) 
						:null}

					</div>

				)}

			</div>
		</>
		)
}


export default ProjectList