class CompanyForm extends React.Component {
  constructor(props){
    super(props)
    this.form = React.createRef()
    this.validate = this.validate.bind(this)
  }

  render() {
    console.log("form props", this.props)
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
            <form ref={this.form} onSubmit={e => e.preventDefault()}>
              <label>Company Name</label>
              <input 
                name="name" 
                type="text" 
                value={this.props.values ? this.props.values.name : ''}
                onChange={this.props.on_change} 
                required/>
              
              <label>City</label>
              <input 
                name="city" 
                type="text" 
                value={this.props.values ? this.props.values.city : ''}
                onChange={this.props.on_change} 
                required/>
            
              <label>State</label>
              <input 
                name="state" 
                type="text" 
                value={this.props.values ? this.props.values.state : ''}
                onChange={this.props.on_change} 
                required/>
              
              <label>Short Description</label>
              <input 
                name="short_description" 
                type="text" 
                value={this.props.values ? this.props.values.short_description : ''}
                onChange={this.props.on_change} 
                required/>
              
              <label>Long Description</label>
              <input 
                name="long_description" 
                type="text" 
                value={this.props.values ? this.props.values.long_description : ''}
                onChange={this.props.on_change}/>
              
              <label>Logo Image URL</label>
              <input 
                name="logo_url" 
                type="url" 
                value={this.props.values ? this.props.values.logo_url : ''}
                onChange={this.props.on_change}
                required/>

              <label>Date Founded</label>
              <input 
                type="date" 
                name="founded_date"
                value={this.props.values && this.props.values.founded_date ? this.props.values.founded_date : ''}
                onChange={this.props.on_change}
                required/>

              <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
              <input className="button" type="submit" onClick={this.validate} />
            </form>
          </div>
        </div>
      </div>
      
    )
  }

  validate() {
    var valid = this.form.current.reportValidity()
    if(!valid) return valid
    else this.props.on_submit()
  }
}