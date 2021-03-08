import React from 'react'
import './style.css';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class CompanyList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      companies: [],
      loading: false
    };
    this.getCompanyList = this.getCompanyList.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getCompanyList();
  }

  getCompanyList() {
    axios.get("/api/v1/companies")
      .then(res => {
        this.setState({
          companies: res.data,
          loading: false
        });
      }).catch(error => {
        this.setState({
          loading: false
        });
      });
  };

  renderCompanies() {
    return this.state.companies.map(company => {
      return (
        <div className="border-solid" key={company.id}>
          <p className="float-right">
            <Link to={`/companies/${company.id}`}>more...</Link>
          </p>
          <span className="h1">{company.name} </span>

          <span className="description">
            <span className="h1"> | </span>
            {company.city_name}, {company.state_name}
          </span>

          <p>{company.short_description}</p>

        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <p className="float-right">
          <Link to={"/companies/new"}>
            <button className="button">Add Company</button>
          </Link>
        </p>
        <h2>Companies List:</h2>
        {this.renderCompanies()}
      </div>
    );
  }
}