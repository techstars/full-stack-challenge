class Companies extends React.Component{
  constructor(props) {
     super(props)
  }
  render() {
    return (
      this.renderCompanies()
    )
  }

  renderCompanies() {
    return this.props.companies.map(company => {
      return (
        <div key={company.id} className="card">
          <div className="row">
            <div className="col-sm-2">
              <img src={company.logo_url} />
            </div>
            <div className="col-sm-10">
              <h5 className="header">{company.name}</h5>
              <p>{company.city}</p>
              <p>{company.state}</p>
              <div>
                <a onClick={this.props.expand_details.bind(null, company.id)}>
                  { company.show_details ? 'Show less...' : 'Show more...' }
                </a>
              </div>
              
              { company.show_details 
                  ? <div>
                      <p>{company.short_description}</p>
                      <p>{company.long_description}</p>
                      <button onClick={this.props.edit_company.bind(null, company)}>Edit</button>
                      <button onClick={this.props.delete_company.bind(null, company)}>Delete</button>
                      <div>
                        <h5>Founders</h5>
                        { company.founders.length 
                          ? company.founders.map(founder => <p>{founder.full_name}</p>)
                          : <p>No founders</p>
                        }
                        <button onClick={this.props.toggle_add_founder.bind(null, company.id)}>Add Founder</button>
                        {
                          company.show_company_form 
                            ? <FounderForm
                                company_id={company.id}
                                on_change={this.props.on_change_founders}
                                on_submit={this.props.on_submit_founders}/>
                            : ''
                        }
                      </div>
                    </div>
                  : ''
              }
            </div>
          </div>
        </div>
      )
    })
  }
}

