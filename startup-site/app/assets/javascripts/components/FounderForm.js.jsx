class FounderForm extends React.Component {
  constructor(props){
    super(props)
    this.form = React.createRef()
    this.validate = this.validate.bind(this)
  }

  render() {
    return (
      <div className="nested-container">
        <form ref={this.form}>
          <div className="input-group">
            <label className="label">Full Name</label>
            <input
              className="input" 
              name="full_name" 
              type="text" 
              onChange={this.props.on_change} 
              required/>
          </div>
          <div className="input-group">
            <label className="label">Bio</label>
            <input
              className="input" 
              name="bio" 
              type="text" 
              onChange={this.props.on_change} 
              required/>
          </div>
          
          <div className="input-group">
            <label className="label">Headshot URL</label>
            <input
              className="input" 
              name="image_url" 
              type="url" 
              onChange={this.props.on_change}
              required/>
          </div>

          <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
          <div>
            <input className="nested-button" type="submit" onClick={this.validate.bind(null, this.props.company_id)} />
          </div>
        </form>
      </div>
      
    )
  }

  validate(id) {
    var valid = this.form.current.reportValidity()
    if(!valid) return valid
    else this.props.on_submit(id)
  }
}