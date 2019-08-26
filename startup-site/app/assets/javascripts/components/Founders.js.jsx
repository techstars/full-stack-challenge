class Founders extends React.Component{
  constructor(props) {
     super(props)
  }
  render() {
    return (
      this.renderFounders()
    )
  }

  renderFounders() {
    return this.props.founders.map(company => {
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
              <a onClick={this.props.expand_details.bind(null, company.id)}>
                { company.show_details ? 'Show less...' : 'Show more...' }
              </a>
              { company.show_details 
                  ? <div>
                      <p>{company.short_description}</p>
                      <p>{company.long_description}</p>
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

