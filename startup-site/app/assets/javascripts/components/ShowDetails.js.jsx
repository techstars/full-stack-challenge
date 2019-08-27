class ShowDetails extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    var company = this.props.company
    return (
      <div className="show-details">
        <div className="card-row">
          <button className="add-founder" onClick={this.props.edit_company.bind(null, company)}>
              Edit
          </button>
          <button className="add-founder" onClick={this.props.delete_company.bind(null, company)}>
            Delete
          </button>
        </div>
        <div className="card-row description">{company.long_description}</div>
        <hr />
        <div className="founders">
          <div className="founders-header">
            <div className="name heading">Founders</div>
            <div>
              <button 
                className="add-founder"
                onClick={this.props.toggle_add_founder.bind(null, company.id)}>
                + Add Founder
              </button>
            </div>
          </div>

          {
            company.show_company_form 
              ? <FounderForm
                  company_id={company.id}
                  on_change={this.props.on_change_founders}
                  on_submit={this.props.on_submit_founders}/>
              : ''
          }

          { company.founders.length 
            ? company.founders.map(founder => <Founder founder={founder}/>)
            : <div className="no-founders">
                <div className="description location">No founders</div>
              </div>
          }
          
          
        </div>
      </div>
    )
  }

}








