import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import FounderList from './founderList';
import axios from 'axios'

export default class CompanyDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      company: {},
      loading: true
    };
    this.getCompanyDetails = this.getCompanyDetails.bind(this);
    this.updateCompanyDetails = this.updateCompanyDetails.bind(this);
    this.deleteCompany = this.deleteCompany.bind(this);
    this.appendFounder = this.appendFounder.bind(this);
  }

  componentDidMount() {
    this.getCompanyDetails();
  }

  appendFounder(founder) {
    const company = {
      ...this.state.company,
      founders: [...this.state.company.founders, founder]
    };

    this.setState({ company });
  }

  getCompanyDetails() {
    axios.get(`/api/v1/companies/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          company: res.data,
          loading: false
        });
      }).catch(error => {
        this.setState({
          loading: false
        });
      });
  };

  updateCompanyDetails() {
    this.props.history.push(`/companies/${this.props.match.params.id}/edit`);
  }

  deleteCompany() {
    if (window.confirm('Are you sure?')) {
      this.setState({ loading: true });
      axios.delete(`/api/v1/companies/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          loading: false
        });
        this.props.history.push(`/`);
      }).catch(error => {
        this.setState({
          loading: false
        });
      });
    }
  }

  renderCompany() {
    const { company, loading } = this.state;

    if (loading) return;
    return (
      <div>
        <div className="company-details">

          <div className="h1">{company.name}</div>
          <div>
            {company.start_date} {company.city_name}, {company.state_name} |
              <button className="button burlywood" onClick={this.updateCompanyDetails}>Edit</button>
              <button className="button firebrick"  onClick={this.deleteCompany}>Delete</button>
          </div>

          <div className="full-description">
            {company.description}
          </div>

          <FounderList
            companyId={company.id}
            founders={company.founders}
            appendFounder={this.appendFounder}
          />
        </div>
        <Link to="/companies">
          <button className="button float-left">All Companies</button>
        </ Link>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderCompany()}
      </div>
    );
  }
}