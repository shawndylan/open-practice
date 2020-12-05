import React, { Component } from 'react';
import PracticeList from "../practiceList";
import ProjectList from "../projectList"
import ActionBar from "./ActionBar";
import "./cardContainer.css";

const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyi2cyYWlGXpGrSW'}).base('appk1zUKf5TWFYhRM');

function SearchingFor(searchValue) {
	return function (x) {
		return x.fields.Name.toLowerCase().includes(searchValue.toLowerCase()) || !searchValue ;
	}

}

class CardContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			practices: [],
			projects:[],
			searchValue: '',
			isLoadingPractices: true,
			isLoadingProjects: true,
			key: '',
			projectKey:'',
			value:'',
			filterMot:'',
			sort:'',
			show: false,
			selectedValue: [],
			showPractices: true,
			showProjects: false
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.openModel = this.openModal.bind(this)
	}

	componentDidMount() {

//---------------------------------fetch practices

		base('Practices')
		.select({
			view: "Gallery",
			maxRecords: 50,
		})

		.eachPage((records, fetchNextPage) => {
			this.setState({
				practices: records,
				value: records,
				isLoadingPractices: false,
				key: records.id
			});

			fetchNextPage();
			console.log(records);
		});

//---------------------------------fetch projects

		base('Projects')
		.select({
			view: "Gallery",
			maxRecords: 50,
		})

		.eachPage((records, fetchNextPage) => {
			this.setState({
				projects: records,
				value: records,
				projectKey: records.id,
				isLoadingProjects: false
			});

			fetchNextPage();
			console.log(records);
		});

	}

	handleSearch = (e) => {
		e.preventDefault();
		this.setState({searchValue: e.target.value});
		console.log(e.target.value);
	}


	handleSort = (e) => {
		this.setState({sort: e.target.value})
		console.log(e.target.value)
	}


	openModal = (id) => {
		const selectedValue = id !== this.state.selectedValue ? id : undefined
		this.setState({selectedValue})
		console.log(selectedValue)
	}

	closeModal = (id) => {
		this.setState({selectedValue: 0})
		console.log("yes")
	}


	handleClick = (e) => {
		e.preventDefault();

		if (e.target.value === "All") {
			this.setState({value: this.state.practices});

		} else {
			this.setState({value: this.state.practices.filter(record => record.fields.["Practice Structure"] === e.target.value)});
			console.log(e.target.value);
		}
	}

	handleFilterMot = (e) => {
		e.preventDefault();
		if (e.target.value === "All") {
			this.setState({value: this.state.practices});
		} else {

			this.setState({value: this.state.practices.filter(record => record.fields.Motivation === e.target.value)});
			console.log(e.target.value);
		}
	}

	showProjects =() => {
		this.setState ({
			showPractices: false,
			showProjects: true
		})
	}

	showPractices =() => {
		this.setState ({
			showPractices: true,
			showProjects: false
		})
	}


	render() {

		if (this.state.isLoadingPractices || this.state.isLoadingProjects) {
			return (
				<div><h1 className ="Loading">Loading...</h1>
				</div>
				);
		}

		else {

			const sortedPractices = this.state.value.sort((a,b) => {
				if (this.state.sort === "founded") {
					return parseInt(a.fields.["Year Founded"]) - parseInt(b.fields.["Year Founded"])
				}

				else if (this.state.sort === "size") {
					return a.fields.["Actual Size"] - b.fields.["Actual Size"]
				}

				else if (this.state.sort === "name") {
					return a.fields.Name.localeCompare(b.fields.Name)
				}

			})


			return (
				<div className = "cardContainer">

				<button onClick = {this.showPractices}>Practices</button>
				<button onClick={this.showProjects}>Projects</button>


				{this.state.showPractices ?
					[
					<div>
					<ActionBar 
					handleClick={this.handleClick} 
					handleSearch={this.handleSearch} 
					value={this.state.value} 
					handleSort={this.handleSort} 
					handleFilterMot = {this.handleFilterMot}
					/>

					<PracticeList
					practices={sortedPractices.filter(SearchingFor(this.state.searchValue))} 
					key={this.state.key}
					openModal={this.openModal}
					show={this.state.show} 
					closeModal={this.closeModal}
					selectedValue={this.state.selectedValue}
					/>
					</div>

					]
					: null}


				{this.state.showProjects ?
					[
					<div>
					<ActionBar 
					handleClick={this.handleClick} 
					handleSearch={this.handleSearch} 
					value={this.state.value} 
					handleSort={this.handleSort} 
					handleFilterMot = {this.handleFilterMot}
					/>

					<ProjectList
					projects={this.state.projects}
					key={this.state.projectKey}
					/>
					</div>

					]
					: null}

					</div>


			)
		}
	}
}


export default CardContainer