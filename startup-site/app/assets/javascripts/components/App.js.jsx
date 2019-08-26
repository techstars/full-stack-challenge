class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      companies: this.props.companies || [],
      show_form: false,
      new_company: {
        name: '',
        city: '',
        state: '',
        short_description: '',
        long_description: '',
        logo_url: ''
      }  
    }
     this.toggle_add_company = this.toggle_add_company.bind(this)
     this.on_change = this.on_change.bind(this)
     this.on_submit = this.on_submit.bind(this)
  }
  render() {
    return this.state.show_form 
      ? <CreateCompany 
          {...this.props}
          toggle_add_company={this.toggle_add_company}
          on_change={this.on_change}
          on_submit={this.on_submit}
        /> 
      : <div className="container-fluid site">
          <Navigation toggle_add_company={this.toggle_add_company}/>
          <div className="col-sm-12">
            <Companies companies={this.state.companies}/>
          </div>
        </div>    
  }

  toggle_add_company() {
    this.setState({show_form: !this.state.show_form})
  }

  on_change(event) {
    var new_company = {...this.state.new_company}
    new_company[event.target.name] = event.target.value
    this.setState({
      new_company: new_company
    })
  }

  on_submit() {
    var self = this
    var request_body = {
      new_company: self.state.new_company
    }
    fetch('http://localhost:3000/companies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(request_body),
    }).then(response => response.json())
    .then(company=> {
      console.log("company", company)
      self.setState({
        show_form: false,
        companies: company.companies
      })
    }) 
  }
}