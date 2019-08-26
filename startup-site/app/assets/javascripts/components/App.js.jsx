class App extends React.Component{
  constructor(props) {
    super(props)

    var companies = []
    if(this.props.companies){
      companies = this.props.companies.map(company => {
        company.show_details = false
        return company
      })
    }

    this.state = {
      companies: companies,
      founders: this.props.founders || [],
      show_form: false,
      active_tab: true,
      new_company: {
        name: '',
        city: '',
        state: '',
        short_description: '',
        long_description: '',
        logo_url: '',
        show_details: false,
      }  
    }
    this.set_active_tab = this.set_active_tab.bind(this)
    this.toggle_add_company = this.toggle_add_company.bind(this)
    this.expand_details = this.expand_details.bind(this)
    this.on_change = this.on_change.bind(this)
    this.on_submit = this.on_submit.bind(this)
    this.delete_company = this.delete_company.bind(this)
    this.edit_company = this.edit_company.bind(this)
    
  }
  render() {
    // console.log("state", this.state)
    // console.log("props", this.props)
    return this.state.show_form 
      ? <CompanyForm 
          {...this.props}
          values={this.state.new_company}
          toggle_add_company={this.toggle_add_company}
          on_change={this.on_change}
          on_submit={this.on_submit}
        /> 
      : <div className="container-fluid site">
              <Navigation 
                toggle_add_company={this.toggle_add_company}
                set_active_tab={this.set_active_tab}/>
              <div className="col-sm-12">
                { this.state.active_tab
                    ? <Companies 
                        companies={this.state.companies}
                        expand_details={this.expand_details}
                        edit_company={this.edit_company}
                        delete_company={this.delete_company}/>
                    : <Founders 
                        founders={this.state.founders}
                        expand_details={this.expand_details}
                        edit_company={this.edit_company}
                        delete_company={this.delete_company}/>
                }  
              </div>
            </div>
  }

  set_active_tab(tab) {
    var show = true
    if(tab === 'founders') show = false
    this.setState({ active_tab: show })
  }

  toggle_add_company() {
    this.setState({show_form: !this.state.show_form})
  }

  expand_details(id) {
    var companies = this.state.companies.map(company => {
      if(company.id === id) company.show_details = !company.show_details
      return company
    })
    this.setState({
      companies: companies
    })
  }

  on_change(event) {
    console.log("required?", event.target.required)
    var new_company = {...this.state.new_company}
    new_company[event.target.name] = event.target.value
    this.setState({
      new_company: new_company
    })
  }

  edit_company(company) {
    console.log("company to edit", company)
    this.setState({
      show_form: true,
      new_company: company
    })
  }

  delete_company(company) {
    console.log("company to delete", company)
    var self = this
    fetch(`http://localhost:3000/companies/${company.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    }).then(response => response.json())
    .then(response_json => {
      console.log("post response", response_json)
      this.setState({
        companies: response_json.companies
      })
    }) 
  }

  on_submit() {
    console.log("submit me", this.state.new_company)
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
    .then(response_json=> {
      console.log("post response", response_json)
      self.setState({
        show_form: false,
        companies: response_json.companies
      })
    }) 
  }
}