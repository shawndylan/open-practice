import React, { useState }from 'react';
import './card.css';
import FlipIcon from '../svg/flip-icon'



function Card({openModal, Name, Location, Structure, Size, Motivation, Method, Image, Founded, id}) {

 const [flipped, setFlipped] = useState(false);


const handleClick = () => {
	setFlipped (!flipped)
}




	return (

			<div className="card" >
				<div className={flipped ? "flip-card flipped" : "flip-card"}>
					<div className="card-front" >
						<div className="card-front-top">
							<img src={Image} className="cover-image"></img>
						</div>
						<div className="card-front-details">
							<div onClick = {() => openModal(id)} className="card-front-details-title">
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
							<FlipIcon handleClick={handleClick}/>
						</div>
						</div>
					</div>
					<div className="card-back">
						<div className="card-back-top">
							this is the top
						</div>
						<div className="card-back-details">
							<div onClick = {() => openModal(id)} className="card-back-details-title">
							{Name}
							</div>

							<div className="card-back-details-a">
								<div className="card-heading">Years Active</div>
								<div>{Founded}</div>
							</div>

							<div className="card-back-details-b">
								<div className="card-heading">Location</div>
								<div>{Location}</div>
							</div>

							<div className="card-back-details-c">
								<div className="card-heading">Structure</div>
								<div className="Founded">{Structure}</div>
							</div>
						<div className="card-bottom">
							<FlipIcon handleClick={handleClick}/>
						</div>
					</div>
				</div>
			</div>
			</div>
			);
}

export default Card;