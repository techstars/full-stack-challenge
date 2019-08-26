class CreateCompany extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <button className="close" onClick={this.props.toggle_add_company}>X</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h1>Create A Company</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <label>Company Name</label>
            <input name="name" type="text" onChange={this.props.on_change} required/>
            <label>City</label>
            <input name="city" type="text" onChange={this.props.on_change}/>
            <label>State</label>
            <input name="state" type="text" onChange={this.props.on_change}/>
            <label>Short Description</label>
            <input name="short_description" type="text" onChange={this.props.on_change}/>
            <label>Long Description</label>
            <input name="long_description" type="text" onChange={this.props.on_change}/>
            <label>Logo Image URL</label>
            <input name="logo_url" type="text" onChange={this.props.on_change}/>
            <label>Date Founded</label>
            <input type="date" name="bdaytime"/>
            <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
            <input className="button" type="submit" value="submit" onClick={this.props.on_submit} />
          </div>
            
        </div>
      </div>
      
    )
  }
}