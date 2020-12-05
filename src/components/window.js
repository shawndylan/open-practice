import React, { Component } from 'react';
import './window.css';


class window extends Component {
 	constructor(props) {
 		super(props);
 
 		this.state = {
 			diffX:0,
 			diffY:0,
 			dragging:false,
 			styles: {}
 		}
 	}
 
 	dragStart = (e) => {
 		this.setState({
 			diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
 			diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
 			dragging: true
 		});
 	}
 
 
 	dragEnd = () => {
 		this.setState({
 			dragging: false,
 		});
 	}
 
 
 	dragging = (e) => {
 
 		if(this.state.dragging) {
 
 			var left = e.screenX - this.state.diffX;
 			var top = e.screenY - this.state.diffY;
 
 			this.setState ({
 				styles: {
 					left: left,
 					top: top
 				}
 			});
 		}
 	}
 
 	render() {

 
 		return(
 			<div className ="Window" style={this.state.styles} onMouseDown={this.dragStart} onMouseMove={this.dragging} onMouseUp={this.dragEnd}>
 
 			<h1>{this.props.Name}</h1>
 			<button onClick={this.props.closeModal}>close</button>
 			</div>

 			);
 	}
 }


export default window