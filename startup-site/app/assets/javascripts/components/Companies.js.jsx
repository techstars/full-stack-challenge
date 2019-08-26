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
                      <button onClick={this.props.edit_company}>Edit</button>
                      <button onClick={this.props.delete_company}>Delete</button>
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

