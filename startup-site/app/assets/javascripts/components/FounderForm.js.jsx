class FounderForm extends React.Component {
  constructor(props){
    super(props)
    this.form = React.createRef()
    this.validate = this.validate.bind(this)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Add a Founder</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <form ref={this.form} onSubmit={e => e.preventDefault()}>
              <label>Full Name</label>
              <input 
                name="full_name" 
                type="text" 
                onChange={this.props.on_change} 
                required/>
              
              <label>Bio</label>
              <input 
                name="bio" 
                type="text" 
                onChange={this.props.on_change} 
                required/>
              
              <label>Headshot URL</label>
              <input 
                name="image_url" 
                type="url" 
                onChange={this.props.on_change}
                required/>

              <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
              <input className="button" type="submit" onClick={this.validate.bind(null, this.props.company_id)} />
            </form>
          </div>
        </div>
      </div>
      
    )
  }

  validate(id) {
    console.log("company id", id)
    var valid = this.form.current.reportValidity()
    if(!valid) return valid
    else this.props.on_submit(id)
  }
}