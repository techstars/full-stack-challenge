class Companies extends React.Component{
  constructor(props) {
     super(props)
  }
  render() {
    return (
      <div className="content">
        { this.renderCompanies() }
      </div>
    )
  }

  renderCompanies() {
    return this.props.companies.map(company => {
      return (
        <div key={company.id} className="card">
          <div className="card-image">
            <img src={company.logo_url} />
          </div>
          <div className="card-content">
            <div className="card-row">
              <span className="name">{company.name}</span><span className="location"> — {company.city}, {company.state}</span>
            </div>
            <div className="card-row description">
              {company.short_description}
            </div>
            <div className="card-row show-more" onClick={this.props.expand_details.bind(null, company.id)}>
                { company.show_details ? 'Show less...' : 'Show more...' }
            </div>
              { company.show_details 
                  ? <ShowDetails 
                      company={company}
                      {...this.props}/>
                  : ''
              }
          </div>        
        </div>
      )
    })
  }
}