class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      companies: this.props.companies || [],
      showForm: false,
      newCompany: {
        name: '',
        city: '',
        state: '',
        short_description: '',
        long_description: '',
        image_url: ''
      }  
    }
     this.toggleAddCompany = this.toggleAddCompany.bind(this)
     this.onChange = this.onChange.bind(this)
     this.onSubmit = this.onSubmit.bind(this)
  }
  render() {
    return this.state.showForm 
      ? <CreateCompany 
          toggleAddCompany={this.toggleAddCompany}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        /> 
      : <div className="container-fluid site">
          <Navigation toggleAddCompany={this.toggleAddCompany}/>
          <div className="col-sm-12">
            <Companies companies={this.state.companies}/>
          </div>
        </div>    
  }

  toggleAddCompany() {
    this.setState({showForm: !this.state.showForm})
  }

  onChange(event) {
    var newCompany = {...this.state.newCompany}
    newCompany[event.target.name] = event.target.value
    this.setState({
      newCompany: newCompany
    })
  }

  onSubmit() {
    console.log("submit this", this.state.newCompany)
    
  }
}