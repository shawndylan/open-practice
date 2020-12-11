import React from 'react';
import ProjectCard from './components/projectCard';
import './practiceList.css';
import Window from './components/window';

function ProjectList (props) {

return (


		<>
			<div className ="practiceList">
				{props.projects.map((project, projectKey) => 
					<div key={projectKey}>
						<ProjectCard 
							Name={project.fields.Name}
							PracticeName={project.fields.PracticeName}
							Location={project.fields.["Project Location"]}
							Type={project.fields["Project Type"]}
							Size={project.fields.Scale}
							id={project.id}
							Image={project.fields["Project Cover Image"][0].url}
							ProjectType={project.fields["Project Type"]}
							YearEnd={project.fields["Year End"]}
							Tools={project.fields.ToolsUsed}
							ProjectMethod={project.fields.ProjectMethod}
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