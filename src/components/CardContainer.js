import React, { Component } from 'react';
import PracticeList from "../practiceList";
import ProjectList from "../projectList";
import ActionBar from "./ActionBar";
import ActionBarProjects from "./ActionBarProjects";
import Compare from '../pages/compare';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { IconArrowBack } from '@tabler/icons';
import "./cardContainer.css";

const Airtable = require('airtable');
const base = new Airtable({apiKey: 'keyi2cyYWlGXpGrSW'}).base('appk1zUKf5TWFYhRM');

function SearchingFor(searchValue) {
	return function (x) {
		return x.fields.Name.toLowerCase().includes(searchValue.toLowerCase()) || !searchValue ;
	}

}

function SearchingForProjects(searchValueProjects) {
	return function (x) {
		return x.fields.Name.toLowerCase().includes(searchValueProjects.toLowerCase()) || !searchValueProjects ;
	}

}

class CardContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			practices: [],
			projects:[],
			value:[],
			valueB:[],
			isLoadingPractices: true,
			isLoadingProjects: true,
			key: '',
			projectKey:'',
			filterMot:'',
			sort:'',
			searchValue: '',
			searchValueProjects: '',
			show: false,
			selectedValue: [],
			toggleTagsPractices: true,
			toggleTagsProjects: true,
			selectedPractice: [],
			showCompare: false,
			addBorder: false
		}
		this.handleSearch = this.handleSearch.bind(this)
	}

	componentDidMount() {

//---------------------------------fetch practices

		base('Practices')
		.select({
			view: "Gallery",
			maxRecords: 100,
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
				valueB: records,
				projectKey: records.id,
				isLoadingProjects: false
			});

			fetchNextPage();
			console.log(records);
		});

	}

	// ---------------------- SEARCHING-------------------------

	handleSearch = (e) => {
		e.preventDefault();
		this.setState({searchValue: e.target.value});
		console.log(e.target.value);
	}

	handleSearchProjects = (f) => {
		f.preventDefault();
		this.setState({searchValueProjects: f.target.value});
		console.log(f.target.value);
	}

	// ---------------------- SORTING -------------------------


	handleSortPractices = (e) => {
		this.setState({sort: e.target.value})
		console.log(e.target.value)
	}

	handleSortProjects = (f) => {
		this.setState({sort: f.target.value})
		console.log(f.target.value)
	}

	// openModal = (id) => {
	// 	const selectedValue = id !== this.state.selectedValue ? id : undefined
	// 	this.setState({selectedValue})
	// 	console.log(selectedValue)
	// }

	// closeModal = (id) => {
	// 	this.setState({selectedValue: 0})
	// 	console.log("yes")
	// }

	// ---------------------- COMPARING -------------------------

	addToSelected = (practice) => {
		this.setState(prevState => ({
			selectedPractice: [...prevState.selectedPractice, practice]
		  }))
		  this.setState({addBorder:true})

		console.log(this.state.selectedPractice)
		console.log(this.state.selectedPractice.length)
	}

	handleCompare = (e) => {
		e.preventDefault();
		this.setState({showCompare:true})
	}

	// ---------------------- FILTERING -------------------------

	handleFilterStructure = (e) => {
		e.preventDefault();
		if (e.target.value === "All") {
			this.setState({practices: this.state.practices});
		} else {
			this.setState({value: this.state.practices.filter(record => record.fields["Practice Structure"][0] === e.target.value)});
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

	handleFilterProjectType = (f) => {
		f.preventDefault();
		if (f.target.value === "All") {
			this.setState({valueB: this.state.projects});
		} else {
			this.setState({valueB: this.state.projects.filter(record => record.fields["Project Type"][0] === f.target.value)});
			console.log(f.target.value);
		}
	}

	// ---------------------- TAGGING -------------------------

	handleTagsPractices = (e) => {
		e.preventDefault();
		this.setState({toggleTagsPractices: !this.state.toggleTagsPractices})
		console.log(this.state.toggleTagsPractices)

		if (this.state.toggleTagsPractices === true) {
		this.setState({value: this.state.practices.filter(record => record.fields.Tags ? record.fields.Tags[0] === e.target.value : null)})
		}
		else {this.setState({value: this.state.practices})}
	}

	handleTagsProjects = (e) => {
		e.preventDefault();
		this.setState({toggleTagsProjects: !this.state.toggleTagsProjects})
		console.log(this.state.toggleTagsProjects)

		if (this.state.toggleTagsProjects === true) {
		this.setState({valueB: this.state.projects.filter(record => record.fields.Tags ? record.fields.Tags[0] === e.target.value : null)})
		}
		else {this.setState({valueB: this.state.projects})}
	}

	// ---------------------- RENDER -------------------------

	render() {

		if (this.state.isLoadingPractices || this.state.isLoadingProjects) {
			return (
				<div><h1 className ="Loading">Loading...</h1>
				</div>
				);
		}

		if (this.state.showCompare === true) {
			return(
				<div>
					<div className="ActionBar">
						<button className="back-button" onclick={this.handleCompare}><a className="back-button-link" id="back" href ="/index"><IconArrowBack size={20}/>Back to Index</a></button>
					</div>
					<div className="compare-card">
						{this.state.selectedPractice.map(item =>
							<Compare key={item.id}
								name={item.fields.Name}
								foundingYear={item.fields["Year Founded"]}
								Location={item.fields.Location}
								Structure={item.fields["Practice Structure"]}
								Motivation={item.fields.Motivation}
								Method={item.fields.Method}
								Size={item.fields.Size}
								Image={item.fields.CoverImage[0].url}
								Founded={item.fields["Period Active"]}
								keyPeople={item.fields["Key People"]}
								keyProjects={item.fields["Key Projects"]}
								url={item.fields["Website URL"]}
								counter={this.state.selectedPractice.length}
								orgChart={item.fields["Org Chart"][0].url}
								countryDiagram={item.fields["Country Diagram"][0].url}
							/>
						)}
					</div>
				</div>
			)
		}

			const sortedPractices = this.state.value.sort((a,b) => {
				if (this.state.sort === "founded") {
					return parseInt(a.fields["Year Founded"]) - parseInt(b.fields["Year Founded"])
				}

				else if (this.state.sort === "size") {
					return a.fields["Actual Size"] - b.fields["Actual Size"]
				}

				else if (this.state.sort === "name") {
					return a.fields.Name.localeCompare(b.fields.Name)
				}
			})

			const sortedProjects = this.state.valueB.sort((a,b) => {
				if (this.state.sort === "founded") {
					return parseInt(a.fields["Year Start"]) - parseInt(b.fields["Year Start"])
				}
				else if (this.state.sort === "name") {
					return a.fields.Name.localeCompare(b.fields.Name)
				}
			})


			return (
				<div className = "cardContainer">
					

					<Tabs forceRenderTabPanel defaultIndex={0}>
						<TabList>
							<Tab>Practices</Tab>
							<Tab>Projects</Tab>
						</TabList>

						<TabPanel>
						<div>

							<ActionBar 
								handleFilterStructure={this.handleFilterStructure}
								handleFilterMot = {this.handleFilterMot}
								handleSearch={this.handleSearch}
								value={this.state.value} 
								handleSort={this.handleSortPractices} 
								handleTags= {this.handleTagsPractices}
								handleCompare={this.handleCompare}
								counter={this.state.selectedPractice.length}
							/>

							<PracticeList
								practices={sortedPractices.filter(SearchingFor(this.state.searchValue))} 
								key={this.state.key}
								openModal={this.openModal}
								show={this.state.show} 
								closeModal={this.closeModal}
								selectedValue={this.state.selectedValue}
								addToSelected={this.addToSelected}
								isLoadingPractices={this.state.isLoadingPractices}
								addBorder={this.state.addBorder}
							/>
						</div>
						</TabPanel>
						<TabPanel>
						<div>
							<ActionBarProjects
								handleClick={this.handleClick} 
								handleSearch={this.handleSearchProjects} 
								handleTags= {this.handleTagsProjects}
								handleSort={this.handleSortProjects} 
								handleFilterA = {this.handleFilterProjectType}
							/>

							<ProjectList
								projects={sortedProjects.filter(SearchingForProjects(this.state.searchValueProjects))} 
								key={this.state.projectKey}
							/>
						</div>
						</TabPanel>
					</Tabs>

				</div>
			)
		
		
	}
}


export default CardContainer