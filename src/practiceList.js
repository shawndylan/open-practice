import React from 'react';
import Card from './components/card';
import './practiceList.css';
import Window from './components/window';

function PracticeList(props) {

	return (

		<>

			<div className ="practiceList">
				{props.practices.map((practice,key) => 
					<div key={key}>
						<Card 
							Name={practice.fields.Name}
							Location={practice.fields.Location}
							Structure={practice.fields["Practice Structure"]}
							Motivation={practice.fields.Motivation}
							Method={practice.fields.Method}
							Size={practice.fields.Size}
							Image={practice.fields["Cover Image"][0].url}
							Founded={practice.fields["Period Active"]}
							openModal={props.openModal}
							id={practice.id}
						/>

							{props.selectedValue === practice.id ? (
							<div className="window">
								<Window 
									show={props.show} 
									closeModal={props.closeModal} 
									Name={practice.fields.Name}
									Location={practice.fields.Location}
									Structure={practice.fields["Practice Structure"]}
									Motivation={practice.fields.Motivation}
									Method={practice.fields.Method}
									Size={practice.fields.Size}
									Image={practice.fields["Cover Image"][0].url}
									Founded={practice.fields["Period Active"]}
									id={practice.id}
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


export default PracticeList