class CompanyForm extends React.Component {
  constructor(props){
    super(props)
    this.form = React.createRef()
    this.validate = this.validate.bind(this)
  }

  render() {
    return (
      <div className="container-form">
        <div className="form-nav">
          <button className="close" onClick={this.props.toggle_add_company}>X</button>
        </div>
        <h1>Create A Company</h1>
        <form className="form" ref={this.form} >
          <div className="input-group">
            <label className="label">Company Name</label>
            <input
              className="input" 
              name="name" 
              type="text" 
              value={this.props.values ? this.props.values.name : ''}
              onChange={this.props.on_change} 
              required/>
          </div>
          
          <div className="input-group">
            <label className="label">City</label>
            <input
              className="input" 
              name="city" 
              type="text" 
              value={this.props.values ? this.props.values.city : ''}
              onChange={this.props.on_change} 
              required/>
          </div>
         
          <div className="input-group">
            <label className="label">State</label>
            <input
              className="input" 
              name="state" 
              type="text" 
              value={this.props.values ? this.props.values.state : ''}
              onChange={this.props.on_change} 
              required/>
          </div>
          
          <div className="input-group">
            <label className="label">Short Description</label>
            <input
              className="input" 
              name="short_description" 
              type="text" 
              value={this.props.values ? this.props.values.short_description : ''}
              onChange={this.props.on_change} 
              required/>
          </div>
          
          <div className="input-group">
          <label className="label">Long Description</label>
          <input
            className="input" 
            name="long_description" 
            type="text" 
            value={this.props.values ? this.props.values.long_description : ''}
            onChange={this.props.on_change}/>
          </div>
          
          <div className="input-group">
          <label className="label">Logo Image URL</label>
          <input
            className="input" 
            name="logo_url" 
            type="url" 
            value={this.props.values ? this.props.values.logo_url : ''}
            onChange={this.props.on_change}
            required/>
          </div>

          <div className="input-group">
            <label className="label">Date Founded</label>
            <input
              className="input" 
              type="date" 
              name="founded_date"
              value={this.props.values && this.props.values.founded_date ? this.props.values.founded_date : ''}
              onChange={this.props.on_change}
              required/>
          </div>

          <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
          <input className="button" type="submit" onClick={this.validate} />
        </form>
      </div>
      
    )
  }

  validate() {
    var valid = this.form.current.reportValidity()
    if(!valid) return valid
    else this.props.on_submit()
  }
}