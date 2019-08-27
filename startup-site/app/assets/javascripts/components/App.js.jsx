class App extends React.Component{
  constructor(props) {
    super(props)

    var companies = []
    if(this.props.companies){
      companies = this.props.companies.map(company => {
        company.show_details = false
        company.show_founder_form = false
        return company
      })
    }

    this.state = {
      companies: companies,
      founders: this.props.founders || [],
      show_company_form: false,
      is_edit: false,
      form_in_progress: false,
      active_tab: true,
      path: this.props.path,
      founder_path: this.props.founder_path,
      new_company: {
        name: '',
        city: '',
        state: '',
        short_description: '',
        long_description: '',
        logo_url: '',
        show_details: false,
      },
      new_founder: {
        full_name: '',
        bio: '',
        image_url: ''
      }  
    }
    this.set_active_tab = this.set_active_tab.bind(this)
    this.toggle_add_company = this.toggle_add_company.bind(this)
    this.toggle_add_founder = this.toggle_add_founder.bind(this)
    this.expand_details = this.expand_details.bind(this)
    this.on_change = this.on_change.bind(this)
    this.on_change_founders = this.on_change_founders.bind(this)
    this.on_submit = this.on_submit.bind(this)
    this.on_submit_founders = this.on_submit_founders.bind(this)
    this.delete_company = this.delete_company.bind(this)
    this.edit_company = this.edit_company.bind(this)
    
  }
  render() {
    return this.state.show_company_form 
      ? <CompanyForm 
          {...this.props}
          values={this.state.new_company}
          toggle_add_company={this.toggle_add_company}
          on_change={this.on_change}
          on_submit={this.on_submit}
        /> 
      : <div className="container">
          <Navigation 
            toggle_add_company={this.toggle_add_company}
            set_active_tab={this.set_active_tab}/>
          <Companies 
            {...this.props}
            companies={this.state.companies}
            expand_details={this.expand_details}
            edit_company={this.edit_company}
            delete_company={this.delete_company}
            toggle_add_founder={this.toggle_add_founder}
            on_change_founders={this.on_change_founders}
            on_submit_founders={this.on_submit_founders}/>                
        </div>
  }

  set_active_tab(tab) {
    var show = true
    if(tab === 'founders') show = false
    this.setState({ active_tab: show })
  }

  toggle_add_company() {
    this.setState({show_company_form: !this.state.show_company_form})
  }

  toggle_add_founder(id) {
    var companies = this.state.companies.map(company => {
      if(company.id === id){
        company.show_company_form = !company.show_company_form
      }
      return company
    })
    this.setState({ 
      companies: companies,
      form_in_progress: true
     })
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
    var new_company = {...this.state.new_company}
    new_company[event.target.name] = event.target.value
    this.setState({
      new_company: new_company
    })
  }

  on_change_founders(event) {
    var new_founder = {...this.state.new_founder}
    new_founder[event.target.name] = event.target.value
    this.setState({
      new_founder: new_founder
    })
  }

  on_submit_founders(id) {
    var self = this
    var request_body = {
      new_founder: {
        ...self.state.new_founder,
        company_id: id
      }
    }
    var path = self.state.founder_path
    fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(request_body),
    }).then(response => response.json())
    .then(response_json=> {
      self.setState({
        companies: response_json.companies,
        is_edit: false
      })
    })   
  }

  edit_company(company) {
    this.setState({
      show_company_form: true,
      new_company: company,
      is_edit: true
    })
  }

  delete_company(company) {
    var self = this
    fetch(`${this.state.path}/${company.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    }).then(response => response.json())
    .then(response_json => {
      this.setState({
        companies: response_json.companies
      })
    }) 
  }

  on_submit() {
    var self = this
    var request_body = {
      new_company: self.state.new_company
    }
    var path = self.state.is_edit ? `${self.state.path}/${self.state.new_company.id}` : self.state.path
    fetch(path, {
      method: this.state.is_edit ? 'PATCH' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(request_body),
    }).then(response => response.json())
    .then(response_json=> {
      self.setState({
        show_company_form: false,
        companies: response_json.companies,
        new_company: {},
        new_founder: {},
        is_edit: false
      })
    }) 
  }
}