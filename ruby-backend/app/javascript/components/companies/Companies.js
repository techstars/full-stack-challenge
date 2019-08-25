import React from "react"
import PropTypes from "prop-types"

class Companies extends React.Component
{
	constructor()
	{
		super();
		this.state =
		{
			//nothing here yet
			ready: false
		}
	}

	componentDidMount()
	{
		this.getCompanies();
		this.getMembers().then(() =>
		{
			this.addMoreCompanyInfo();
		});
	}

	getMembers = async () =>
	{
		//get the members from the API
		console.log("getMembers was called");
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
		console.log("getCompanies was called");
		let response = await fetch(this.props.apiURL + '/api/v1/companies');
		response = await response.json();

		response.forEach(async (company, index) =>
		{
			response[index].founders = await JSON.parse(company.founders);
		});

		this.setState(
		{
			companies: await response
		});
	}

	addMoreCompanyInfo = () =>
	{
		console.log("addMoreCompanyInfo was called");

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
			tempCompanies[index].founders = company.founders.map((founder) =>
			{
				return(
				{
					name: this.getMemberFromState(founder.id).name,
					title: founder.title
				});
			});
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
		
		console.log("companiesList was called");


		console.log(this.state.companies);
		//console.log(this.state.companies[0].founders[0].name);
		//console.log(this.state.members);

		return this.state.companies.map((company, index) =>
		{
			return(
				<li key={index}>{company.name}...{company.description}...{company.city}...{company.state}...
					<ul>
						{
							company.founders.map((founder, index) =>
							{
								console.log("added a founder to the list");
								console.log(founder);
								
								return(
									<li key={index}>name: {founder.name}...title: {founder.title}</li>
								);
							})
						}
					</ul>
				</li>
			);
		});
	}
	
	render ()
	{
		return(
			<div>
				<h2>COMPANIES COMPONENT</h2>
				
				<br/>
				<br/>
				<h2>Companies index</h2>
				{
					this.state.ready ?
						<div>
							<ul>
								{this.companiesList()}
							</ul>
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
