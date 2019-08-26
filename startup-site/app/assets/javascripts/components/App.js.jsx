class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      companies: this.props.companies || [],
      show_form: false,
      active_tab: 'companies',
      new_company: {
        name: '',
        city: '',
        state: '',
        short_description: '',
        long_description: '',
        logo_url: ''
      }  
    }
    this.set_active_tab = this.set_active_tab.bind(this)
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
      : this.state.active_tab 
          ? <div className="container-fluid site">
              <Navigation 
                toggle_add_company={this.toggle_add_company}
                set_active_tab={this.set_active_tab}/>
              <div className="col-sm-12">
                <Companies companies={this.state.companies}/>
              </div>
            </div>       
          : <div className="container-fluid site">
              <Navigation 
                toggle_add_company={this.toggle_add_company}
                onChangeActiveTab={this.onChangeActiveTab}/>
              <div className="col-sm-12">
                {/* <Founders companies={this.state.companies}/> */}
              </div>
            </div>    
  }

  set_active_tab(tab) {
    this.setState({ active_tab: tab })
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