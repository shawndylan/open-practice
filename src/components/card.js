import React, { useState }from 'react';
import './card.css';
import FlipIcon from '../svg/flip-icon';
import { IconPlus, IconArrowBarToRight } from '@tabler/icons';




function Card({openModal, Name, Location, Structure, Size, Motivation, Method, Image, Founded, id, keyPeople, keyProjects, url, addToSelected, practice, addBorder}) {

 const [flipped, setFlipped] = useState(false);



const handleClick = () => {
	setFlipped (!flipped)
}


	return (
			<div className="card" >
				<div className={flipped ? "flip-card flipped" : "flip-card"}>
					<div className="card-front" >
						<div className="card-front-top">
							<img src={Image} alt="practice" className="cover-image"></img>
						</div>
						<div className="card-front-details">
							<div className="card-front-details-title">
							{Name}
							</div>
							<div className="card-front-details-a">
								<div className="card-heading">Years Active</div>
								<div>{Founded}</div>
							</div>
							<div className="card-front-details-b">
								<div className="card-heading">Location</div>
								<div>{Location}</div>
							</div>
							<div className="card-front-details-c">
								<div className="card-heading">Structure</div>
								<div className="structure">{Structure}</div>
							</div>
							<div className="card-front-details-d">
								<div className="card-heading">Size</div>
								<div>{Size}</div>
							</div>
							<div className="card-front-details-e">
								<div className="card-heading">Motivation</div>
								<div>{Motivation}</div>
							</div>
							<div className="card-front-details-f">
								<div className="card-heading">Method</div>
								<div>{Method}</div>
							</div>
						
						<div className="card-bottom">
							
							<IconPlus className="plusIcon" size={20} stroke={2} onClick={() => addToSelected(practice)}/>
							
							<IconArrowBarToRight className="flipIcon" size={20} stroke={2} onClick={handleClick}/>
							
						</div>
						</div>
					</div>
					<div className="card-back">
						<div className="card-back-top">
							<div className="card-back-top-title">{Name}</div>
							<div className="card-heading">Years Active</div>
							<div>{Founded}</div>
							<div className="card-heading">Location</div>
							<div>{Location}</div>
						</div>
						<div className="card-back-details">
							<div onClick = {() => openModal(practice)} className="card-back-details-title">
							</div>

							<div className="card-back-details-a">
							`	<div className="card-heading">Key People</div>
								<div>{keyPeople}</div>`
							</div>

							<div className="card-back-details-b">
								<div className="card-heading">Key Projects</div>
								<div>{keyProjects}</div>
							</div>
							
							<div className="card-back-details-c">
								<div className="card-heading">URL</div>
								<div><a href={url} target="_blank">{url}</a></div>
							</div>
						<div className="card-bottom">
						<IconArrowBarToRight className="flipIcon" size={20} stroke={2} onClick={handleClick}/>
						</div>
					</div>
				</div>
			</div>
			</div>
			);
}

export default Card;