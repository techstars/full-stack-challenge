class CreateCompany extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <button className="close" onClick={this.props.toggleAddCompany}>X</button>
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
            <input name="name" type="text" onChange={this.props.onChange}/>
            <label>City</label>
            <input name="city" type="text" onChange={this.props.onChange}/>
            <label>State</label>
            <input name="state" type="text" onChange={this.props.onChange}/>
            <label>Short Description</label>
            <input name="short_description" type="text" onChange={this.props.onChange}/>
            <label>Long Description</label>
            <input name="long_description" type="text" onChange={this.props.onChange}/>
            <label>Image URL</label>
            <input name="image_url" type="text" onChange={this.props.onChange}/>
          </div>
            <button onClick={this.props.onSubmit}>Submit</button>
        </div>
      </div>
      
    )
  }
}