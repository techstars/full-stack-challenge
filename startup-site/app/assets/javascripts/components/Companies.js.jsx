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
              <p>{company.short_description}</p>
              <a href="#">See more...</a>
            </div>
          </div>
        </div>
      )
    })
  }
}

