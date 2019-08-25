import React from "react"
import PropTypes from "prop-types"

import 'bootstrap/dist/css/bootstrap.min.css';


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
				API status: {this.state.apiOnline}
				<br/>
				<Companies apiURL={this.state.apiURL}></Companies>
			</div>
		);
	}
}

export default Main
