import React from "react"
import PropTypes from "prop-types"

import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import Truncate from 'react-truncate';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


import './bootstrap.min.css'
import './Companies.css'
//import '/Companies.css'

class Companies extends React.Component
{
	constructor()
	{
		super();
		this.state =
		{
			debug: false,			

			ready: false,

			showNewCompanyForm: false,
			newCompanyName: '',
			newCompanyDescription: '',
			newCompanyCity: '',
			newCompanyState: '',
			newCompanyDateFounded: new Date(),

			companyDetails: 0,
			showCompanyDetails: false,

			editCompany: 0,
			showEditCompanyForm: false,
			editCompanyName: '',
			editCompanyDescription: '',
			editCompanyCity: '',
			editCompanyState: '',
			editCompanyDateFounded: new Date(),

			founderToAdd: 0,
			founderToAddTitle: '',

			showNewMemberForm: false,
			newMemberName: ''
		}
	}

	customLog = (s) =>
	{
		//Custom logging function for flexibility
		if (this.state.debug)
		{
			console.log(s);
		}
	}

	toggleDebug = () =>
	{
		this.setState(
		{
			debug: !this.state.debug
		});
	}

	componentDidMount()
	{
		this.getCompanies();
		this.getMembers().then(() =>
		{
			this.addMoreCompanyInfo();
		});
	}

	forceReloadCompanies = () =>
	{
		this.setState(
		{
			ready: false
		});
		this.getCompanies();
		this.getMembers().then(() =>
		{
			this.addMoreCompanyInfo();
		});
	}

	getMembers = async () =>
	{
		//get the members from the API
		this.customLog("getMembers was called");
		let response = await fetch(this.props.apiURL + '/api/v1/members');
		response = await response.json();

		this.setState(
		{
			members: await response,
		});
	}

	getCompanies = async () =>
	{
		//get the companies from the API
		this.customLog("getCompanies was called");
		let response = await fetch(this.props.apiURL + '/api/v1/companies');
		response = await response.json();

		response.forEach(async (company, index) =>
		{
			response[index].founders = await JSON.parse(company.founders);
			
			//The date parsing is so weird in Javascript.
			//It basically forces everything to local time,
			//which really messes things up when you try to convert
			//between string and Date.
			
			this.customLog("new company date: " + company.dateFounded);
			response[index].dateFounded = await new Date(company.dateFounded + "T00:00:00.000");
		});

		this.setState(
		{
			companies: await response
		});
	}

	addMoreCompanyInfo = () =>
	{
		this.customLog("addMoreCompanyInfo was called");

		//add the founder name info to the companies
		//this is something like my 50th try at this.
		//I've been at it for 6 hours now.
		//hopefully it works. async and await can go to hell.

		//update: it works. wow
		//what a massive hack though. If there is a right
		//way to do this, it eludes me right now. The issue is that
		//when I try to do it in getCompanies where it should
		//be, the forEach that adds the founder names isn't being
		//included in the promise for some reason and so
		//the promise gets "fulfilled" before the founder names
		//are added. Only much, much later does it actually
		//happen, and meanwhile the rest of the code is throwing
		//a fit because the founder names aren't present.

		const tempCompanies = this.state.companies;

		tempCompanies.forEach((company, index) =>
		{
			if (tempCompanies[index].founders)
			{
				tempCompanies[index].founders = company.founders.map((founder) =>
				{
					return(
					{
						name: this.getMemberFromState(founder.id).name,
						title: founder.title,
						id: founder.id
					});
				});
			}
			else
			{
				tempCompanies[index].founders = [];
			}
		});

		this.setState(
		{
			companies: tempCompanies,
			ready: true
		});
	}



	getMember = async (id) =>
	{
		let response = await fetch(this.props.apiURL + '/api/v1/members/' + id);
		response = await response.json();
		return(await response);
	}

	getMemberFromState = (id) =>
	{
		for (let i = 0; i < this.state.members.length; i++)
		{
			if (this.state.members[i].id == id)
			{
				return this.state.members[i];
			}
		}

		return false;
	}

	companiesList = () =>
	{
		//return a bunch of list items for the companies:
		
		this.customLog("companiesList was called");


		this.customLog(this.state.companies);
		//this.customLog(this.state.companies[0].founders[0].name);
		//this.customLog(this.state.members);

		return this.state.companies.map((company, index) =>
		{
			return(
				<div key={index} className="company-index-box" onClick={this.toggleShowCompanyDetails.bind(null, index)}>
					<h3>{company.name}</h3>
					{company.city}, {company.state}
					<br/><br/>
					<Truncate lines={3} ellipsis={<span>...</span>}>
						{company.description}
					</Truncate>
				</div>
			);
		});
	}

	toggleShowCompanyDetails = (index, e) =>
	{
		e.persist();
		if (index == undefined || index == null || index == NaN || index < 0)
		{
			index = 0;
		}
		this.setState(
		{
			companyDetails: index,
			showCompanyDetails: !this.state.showCompanyDetails
		});
	}

	toggleNewCompanyForm = () =>
	{
		this.setState(
		{
			showNewCompanyForm: !this.state.showNewCompanyForm
		});
	}

	toggleNewMemberForm = () =>
	{
		this.setState(
		{
			showNewMemberForm: !this.state.showNewMemberForm
		});
	}

	toggleEditCompanyForm = (index, e) =>
	{
		e.persist();
		if (index == undefined || index == null || index == NaN || index < 0)
		{
			index = 0;
		}
		if (!this.state.showEditCompanyForm)
		{
			//add values to state
			this.setState(
			{
				editCompanyName: this.state.companies[index].name,
				editCompanyDescription: this.state.companies[index].description,
				editCompanyCity: this.state.companies[index].city,
				editCompanyState: this.state.companies[index].state,
				editCompanyDateFounded: this.state.companies[index].dateFounded
			});
		}
		this.customLog(this.state.companies[index].dateFounded);
		this.setState(
		{
			editCompany: index,
			showEditCompanyForm: !this.state.showEditCompanyForm
		});
	}

	handleChange = (e) =>
	{
		//e.preventDefault();
		e.persist();
		this.setState(
		{
			[e.target.name]: e.target.value
		});
		//this.customLog(this.state);
	}

	handleNewCompanyDateChange = (date) =>
	{
		this.customLog(date);
		this.setState(
		{
			newCompanyDateFounded: date
		});
	}

	handleEditCompanyDateChange = (date) =>
	{
		this.customLog(date);
		this.setState(
		{
			editCompanyDateFounded: date
		});
	}
	
	submitNewCompany = async (e) =>
	{
		e.preventDefault();
		
		const newCompany =
		{
			name: this.state.newCompanyName,
			description: this.state.newCompanyDescription,
			city: this.state.newCompanyCity,
			state: this.state.newCompanyState,
			dateFounded: this.state.newCompanyDateFounded
		};

		const infoToSend = await JSON.stringify(newCompany);

		let response = await fetch(this.props.apiURL + '/api/v1/companies',
		{
			method: 'POST',
			headers:
			{
				'Content-Type': 'application/json'
			},
			body: await infoToSend,
		});

		response = await response.json();

		this.customLog(await response);

		//force-reload companies:
		this.forceReloadCompanies();
		//turn off the modal:
		this.toggleNewCompanyForm();
	}

	submitEditCompany = async (e) =>
	{
		e.preventDefault();
		
		const editCompany =
		{
			name: this.state.editCompanyName,
			description: this.state.editCompanyDescription,
			city: this.state.editCompanyCity,
			state: this.state.editCompanyState,
			dateFounded: this.state.editCompanyDateFounded
		};

		const infoToSend = await JSON.stringify(editCompany);

		let response = await fetch(this.props.apiURL + '/api/v1/companies/' + this.state.companies[this.state.editCompany].id,
		{
			method: 'PUT',
			headers:
			{
				'Content-Type': 'application/json'
			},
			body: await infoToSend,
		});

		response = await response.json();

		this.customLog(await response);

		//force-reload companies:
		this.forceReloadCompanies();
		//turn off the modal:
		this.toggleEditCompanyForm.bind(null, 0);
	}

	deleteCompany = async (id, e) =>
	{
		e.preventDefault();

		//delete a company from the database

		this.customLog("deleting company with id of " + id);

		//const infoToSend = await JSON.stringify({id: id});

		let response = await fetch(this.props.apiURL + '/api/v1/companies/' + id,
		{
			method: 'DELETE',
			// headers:
			// {
			// 	'Content-Type': 'application/json'
			// },
			// body: await infoToSend,
		});

		response = await response.json();

		this.customLog(await response);

		//force-reload companies:
		this.forceReloadCompanies();
		//close the modal:
		this.toggleShowCompanyDetails();
	}

	handleSubmitFounder = async (e) =>
	{
		//basically this is an update route thing
		//we want to add the member at index this.state.founderToAdd
		//to the company we are viewing (this.state.companyDetails)

		e.preventDefault();


		//OK but first we have to make sure that this person
		//doesn't already belong to some other company

		let proceed = true;

		for (let i = 0; i < this.state.companies.length; i++)
		{
			for (let j = 0; j < this.state.companies[i].founders.length; j++)
			{
				if (this.state.companies[i].founders[j].id == this.state.members[this.state.founderToAdd].id)
				{
					//oops we can't do that!
					alert("This member is already a founder of " + this.state.companies[i].name);
					proceed = false;
				}
			}
		}

		if (this.state.founderToAddTitle == '')
		{
			alert("You must specify a title for this founder!");
			proceed = false;
		}

		if (proceed)
		{
		
			const editCompany =
			{
				founders: JSON.stringify(this.state.companies[this.state.companyDetails].founders.concat([{id: this.state.members[this.state.founderToAdd].id, title: this.state.founderToAddTitle}]))
			};

			const infoToSend = await JSON.stringify(editCompany);

			let response = await fetch(this.props.apiURL + '/api/v1/companies/' + this.state.companies[this.state.companyDetails].id,
			{
				method: 'PUT',
				headers:
				{
					'Content-Type': 'application/json'
				},
				body: await infoToSend,
			});

			response = await response.json();

			this.customLog(await response);

			//force-reload companies:
			this.forceReloadCompanies();
			//turn off the modal:
			this.toggleShowCompanyDetails.bind(null, 0);
		}

		//reset the founderToAdd variables:
		this.setState(
		{
			founderToAdd: 0,
			founderToAddTitle: ''
		});
	}

	submitNewMember = async (e) =>
	{
		e.preventDefault();
		
		const newMember =
		{
			name: this.state.newMemberName,
		};

		const infoToSend = await JSON.stringify(newMember);

		let response = await fetch(this.props.apiURL + '/api/v1/members',
		{
			method: 'POST',
			headers:
			{
				'Content-Type': 'application/json'
			},
			body: await infoToSend,
		});

		response = await response.json();

		this.customLog(await response);

		//force-reload companies:
		this.forceReloadCompanies();
		//turn off the modal:
		this.toggleNewMemberForm();
	}

	formatDate = (date) =>
	{
		//returns a nicely formatted version of a JS date object!
		//Note that getMonth is zero-indexed. Why?!?!
		return(
			<span>
				{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
			</span>
		);
	}

	render ()
	{
		return(
			<div>
				<h2>Techstars Full Stack Challenge</h2>
				<h4>Collin Brockway -- August 24, 2019</h4>
				<button onClick={this.toggleDebug}>Toggle debug logs</button>
				{
					this.state.debug ?
						<p>Debug logs on</p>
					:
						<p>Debug logs off</p>
				}
				{
					this.state.ready ?
						<div>
							<Modal isOpen={this.state.showNewCompanyForm} toggle={this.toggleNewCompanyForm} className='new-company-form' size='lg'>
								<ModalHeader>
									New Company
								</ModalHeader>
								
								<ModalBody>
										<form onSubmit={this.submitNewCompany}>
											<input name="newCompanyName" onChange={this.handleChange} placeholder="Name of company"></input><br/>
											<textarea name="newCompanyDescription" onChange={this.handleChange} placeholder="Description" type="text" rows="10" cols="60"></textarea><br/>
											<input name="newCompanyCity" onChange={this.handleChange} placeholder="City"></input><br/>
											<input name="newCompanyState" onChange={this.handleChange} placeholder="State"></input><br/>
											Date founded:
											<DatePicker name="newCompanyDateFounded" selected={this.state.newCompanyDateFounded} onChange={this.handleNewCompanyDateChange}></DatePicker><br/>
											<button type='submit'>Submit</button>
										</form>
								</ModalBody>

								<ModalFooter>
									<button onClick={this.toggleNewCompanyForm}>Close</button>
								</ModalFooter>
							</Modal>

							<Modal isOpen={this.state.showNewMemberForm} toggle={this.toggleNewMemberForm} className='new-member-form' size='lg'>
								<ModalHeader>
									New Member
								</ModalHeader>
								
								<ModalBody>
										<form onSubmit={this.submitNewMember}>
											<input name="newMemberName" onChange={this.handleChange} placeholder="Name of member"></input><br/>
											<button type='submit'>Submit</button>
										</form>
								</ModalBody>

								<ModalFooter>
									<button onClick={this.toggleNewMemberForm}>Close</button>
								</ModalFooter>
							</Modal>


						{
							this.state.showEditCompanyForm ?
							<Modal isOpen={this.state.showEditCompanyForm} toggle={this.toggleEditCompanyForm.bind(null, 0)} className='edit-company-form' size='lg'>
								<ModalHeader>
									Edit Company
								</ModalHeader>
								
								<ModalBody>
										<form onSubmit={this.submitEditCompany}>
											<input name="editCompanyName" onChange={this.handleChange} value={this.state.editCompanyName} placeholder="Name of company"></input><br/>
											<textarea name="editCompanyDescription" onChange={this.handleChange} value={this.state.editCompanyDescription} placeholder="Description" type="text" rows="10" cols="60"></textarea><br/>
											<input name="editCompanyCity" onChange={this.handleChange} value={this.state.editCompanyCity} placeholder="City"></input><br/>
											<input name="editCompanyState" onChange={this.handleChange} value={this.state.editCompanyState} placeholder="State"></input><br/>
											Date founded:
											<DatePicker name="editCompanyDateFounded" selected={this.state.editCompanyDateFounded} onChange={this.handleEditCompanyDateChange}></DatePicker><br/>
											<button type='submit'>Submit</button>
										</form>
								</ModalBody>

								<ModalFooter>
									<button onClick={this.toggleEditCompanyForm.bind(null, 0)}>Close</button>
								</ModalFooter>
							</Modal>
							:
							null
						}

							{
								this.state.showCompanyDetails ?
								<Modal isOpen={this.state.showCompanyDetails} toggle={this.toggleShowCompanyDetails.bind(null, 0)} className='company-details' size='lg'>
									<ModalHeader>
										{this.state.companies[this.state.companyDetails].name}
									</ModalHeader>
									
									<ModalBody>
										{this.state.companies[this.state.companyDetails].city}, {this.state.companies[this.state.companyDetails].state}
										<br/><br/>
										{this.state.companies[this.state.companyDetails].description}
										<br/><br/>
										Date founded: {this.formatDate(this.state.companies[this.state.companyDetails].dateFounded)}
										<br/><br/>
										<form onSubmit={this.deleteCompany.bind(null, this.state.companies[this.state.companyDetails].id)}>
											<button type="submit">Delete</button>
										</form>
										<button onClick={this.toggleEditCompanyForm.bind(null, this.state.companyDetails)}>Edit</button>
										<br/><br/>
										Company founders:
										<div className="founder-container">
											{
												this.state.companies[this.state.companyDetails].founders.map((founder) =>
												{
													return(
														<div className="founder-box">
															Name: {founder.name}<br/>
															Title: {founder.title}
														</div>
													)
												})
											}
										</div>
										Attach a member to this company as a founder:
										<form onSubmit={this.handleSubmitFounder}>
											<select type='text' name='founderToAdd' onChange={this.handleChange}>
												{
													this.state.members.map((member, index) =>
													{
														return(
															<option key={index} value={index}>{member.name}</option>
														)
													})
												}
											</select>
											<input name="founderToAddTitle" onChange={this.handleChange} placeholder="Title"></input>
											<br/>
											<button type='submit'>Attach As Founder</button>
										</form>
									</ModalBody>

									<ModalFooter>
										<button onClick={this.toggleShowCompanyDetails.bind(null, 0)}>Close</button>
									</ModalFooter>
								</Modal>
								:
								null
							}

							<div className="company-index">
								{this.companiesList()}
								<div className="company-index-new" onClick={this.toggleNewCompanyForm}>
									Create a new company
								</div>
								<div className="company-index-new" onClick={this.toggleNewMemberForm}>
									Create a new member
								</div>
							</div>
							
						</div>
					:
						<div>
							<h3>Loading companies list...</h3>
						</div>
				}

			</div>
		);
	}
}

export default Companies
