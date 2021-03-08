import React from 'react'
import './style.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class UpdateCompany extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: "",
      cityName: "",
      stateName: "",
      startDate: "",
      loading: false,
      error: ""
    };
    this.updateCompany = this.updateCompany.bind(this);
    this.setFormField = this.setFormField.bind(this);
  }

  companyId = () => {
    return this.props.match.params.id;
  }

  setFormField(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get(`/api/v1/companies/${this.companyId()}`).then(res => {
      const { name, description, city_name, state_name, start_date } = res.data;
      this.setState({
        loading: false,
        name,
        description,
        cityName: city_name,
        stateName: state_name,
        startDate: start_date,
      });
    }).catch(error => {
      this.setState({ loading: false });
    })
  }

  updateCompany() {
    this.setState({ loading: true });

    return axios.put(`/api/v1/companies/${this.companyId()}`, {
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
      return <p className="error">{error}</p>
    }
  }

  render() {
    const { name, description, startDate, cityName, stateName } = this.state;
    return (
      <div>
        <Link to="/companies"><button className="button">All Companies</button></Link>
        <Link to={`/companies/${this.companyId()}`}><button className="button">Show Company details</button></ Link>
        <div className="border-solid">
          <h2>Update company #{name}</h2>

          {this.renderError()}
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={this.setFormField} />
          </label>
          <label>
            Description:
            <input type="text" name="description" value={description} onChange={this.setFormField} />
          </label>
          <label>
            City:
            <input type="text" name="cityName" value={cityName} onChange={this.setFormField} />
          </label>
          <label>
            State:
            <input type="text" name="stateName" value={stateName} onChange={this.setFormField} />
          </label>
          <label>
            Founded Date:
            <input type="date" name="startDate" value={startDate} onChange={this.setFormField} />
          </label>
          <input type="submit" value="Update" onClick={this.updateCompany} />
        </div>
      </div>
    );
  }
}