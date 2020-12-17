import React, { useState }from 'react';
import './card.css';
import { IconPlus, IconArrowBarToRight } from '@tabler/icons';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';


function Card({ Name, Location, Structure, Size, Motivation, Method, Image, Founded, id, keyPeople, keyProjects, url, addToSelected, practice, Locality, Autonomy, Conventionality}) {

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
								<div className="card-text">{Location}</div>
							</div>
							<div className="card-front-details-c">
								<div className="card-heading">Structure</div>
								<div className="highlighted">{Structure}</div>
							</div>
							<div className="card-front-details-d">
								<div className="card-heading">Size</div>
								<div className="card-text">{Size}</div>
							</div>
							<div className="card-front-details-e">
								<div className="card-heading">Motivation</div>
								<div className="card-text">{Motivation}</div>
							</div>
							<div className="card-front-details-f">
								<div className="card-heading">Method</div>
								<div className="card-text">{Method}</div>
							</div>
						</div>
						<div className="card-bottom">
							<button className="add-button" onClick={() => addToSelected(practice)}><IconPlus className="plusIcon" size={20} stroke={2} /></button>
							<button className="flip-button" onClick={handleClick}><IconArrowBarToRight className="flipIcon" size={20} stroke={2} /></button>
						</div>
					</div>
					<div className="card-back">
						<div className="card-back-top">
							<div className="card-back-top-title">{Name}</div>
						</div>

						<div className="card-back-details">
							<div className="card-back-details-slider">
								<div className="slider-headingA">Global</div>
								<div className="slider-headingB">Local</div>
								<RangeSlider className="slider"
									value={Locality}
									min={0}
									max={10}
									tooltip={"off"}
								/>
								<br></br>
							
							
								<div className="slider-headingA">Unconventional</div>
								<div className="slider-headingB">Conventional</div>
								<RangeSlider className="slider"
									value={Conventionality}
									min={0}
									max={10}
									tooltip={"off"}
								/>
								<br></br>
							
							
								<div className="slider-headingA">Dependant</div>
								<div className="slider-headingB">Autonomous</div>
								<RangeSlider className="slider"
									value={Autonomy}
									min={0}
									max={10}
									tooltip={"off"}
								/>
								<br></br>
							</div>
							<div className="card-back-details-a">
							`	<div className="card-heading">Key People</div>
								<div className="card-text">{keyPeople}</div>
							</div>
							<div className="card-back-details-b">
								<div className="card-heading">Key Projects</div>
								<div className="card-text">{keyProjects}</div>
							</div>		
							<div className="card-back-details-c">
								<div className="card-heading">URL</div>
								<div className="card-text"><a href={url} target="_blank">{url}</a></div>
							</div>
						</div>
						<div className="card-bottom">
							<button className="add-button" onClick={() => addToSelected(practice)}><IconPlus className="plusIcon" size={20} stroke={2} /></button>
							<button className="flip-button" onClick={handleClick}><IconArrowBarToRight className="flipIcon" size={20} stroke={2} /></button>
						</div>
					</div>
				</div>
			</div>
			);
}

export default Card;