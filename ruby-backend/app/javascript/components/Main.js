import React from "react"
import PropTypes from "prop-types"


import Companies from './companies/Companies'

class Main extends React.Component
{
	constructor()
	{
		super();
		this.state =
		{
			apiURL: '', //empty string for current URL!
			apiOnline: null
		}
	}

	componentDidMount()
	{
		this.getStatus();
	}

	getStatus = async () =>
	{
		let response = await fetch(this.state.apiURL + '/api/v1');
		response = await response.json();
		this.setState(
		{
			apiOnline: await response.online
		});
	}

	render ()
	{
		return(
			<div>
				<h1>React is up and running!</h1>
				<p>API status:</p>
				{this.state.apiOnline}
				<br/>
				<Companies apiURL={this.state.apiURL}></Companies>
			</div>
		);
	}
}

export default Main
