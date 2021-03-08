import React, { useDebugValue } from 'react'
import './style.css';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

export default class AddCompany extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: "",
      cityName: "",
      stateName: "",
      startDate: "",
      loading: false,
      error: ''
    };
    this.createCompany = this.createCompany.bind(this);
    this.setFormField = this.setFormField.bind(this);
  }

  setFormField(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createCompany() {
    this.setState({ loading: true });

    return axios.post("/api/v1/companies", {
      name: this.state.name,
      description: this.state.description,
      city_name: this.state.cityName,
      state_name: this.state.stateName,
      start_date: this.state.startDate
    })
      .then(res => {
        this.setState({ loading: false });
        this.props.history.push(`/companies/${res.data.id}`);
      }).catch(error => {
        this.setState({ loading: false, error: error.response.data });
      });
  };

  renderError() {
    const { error } = this.state;
    if (error) {
      return (
        <p className="error">
          {error}
        </p>
      )
    }
  }

  render() {
    const { name, description, startDate, cityName, stateName } = this.state;
    return (
      <div className="border-solid">
        <span className="h2">Create New Company:</span>

        {this.renderError()}

        <div className="grid-16">
          <label for="name">Company Name</label>
          <input type="text" id="name" name="name" value={name} onChange={this.setFormField} placeholder="Company name.." />
        </div>

        <div className="grid-3">
          <label for="city">City</label>
          <input type="text" id="city" name="cityName" value={cityName} placeholder="City name.." onChange={this.setFormField} />

          <label for="state">State</label>
          <input type="text" id="state" name="stateName" value={stateName} placeholder="State name.." onChange={this.setFormField} />

          <label for="foundedDate">Founded Date:</label>
          <input type="date" id="foundedDate" name="startDate" value={startDate} onChange={this.setFormField} />
        </div>

        <div className="grid-16">
          <label for="description">Description</label>
          <input type="textarea" id="description" placeholder="Company description.." name="description" value={description} onChange={this.setFormField} />
        </div>

        <input type="submit" value="Submit" onClick={this.createCompany} />
      </div>
    );
  }
}