import React from 'react'
import './style.css';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

export default class AddFounder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: "",
      email: "",
      title: "",
      loading: false,
      error: ""
    };
    this.createFounder = this.createFounder.bind(this);
    this.setFormField = this.setFormField.bind(this);
  }

  setFormField(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createFounder() {
    this.setState({ loading: true });

    return axios.post(`/api/v1/companies/${this.props.companyId}/founders`, {
      full_name: this.state.fullName,
      email: this.state.email,
      title: this.state.title
    })
      .then(res => {
        this.setState({ loading: false });
        this.props.appendFounder(res.data);
      }).catch(error => {
        this.setState({ loading: false, error: error.response.data });
      });
  };

  renderError() {
    const { error } = this.state;
    if (error) {
      return <p className="error">{error}</p>
    }
  }

  render() {
    const { fullName, email, title } = this.state;
    return (
      <div>
        {this.renderError()}
        <div className="founder-form">
          <label>
            Full Name:
            <input type="text" name="fullName" value={fullName} onChange={this.setFormField} />
          </label>

          <label>
            Email:
            <input type="email" name="email" value={email} onChange={this.setFormField} />
          </label>

          <label>
            Title:
            <input type="text" name="title" value={title} onChange={this.setFormField} />
          </label>

          <input type="submit" value="Submit" onClick={this.createFounder} />
        </div>
      </div>
    );
  }
}