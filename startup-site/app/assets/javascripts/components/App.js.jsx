class App extends React.Component{
  constructor(props) {
     super(props)
     this.state = {
       companies: this.props.companies || []
     }

     this.toggleAddCompany = this.toggleAddCompany.bind(this)
  }
  render() {
    // console.log("props", this.props)
    return (
      <div className="container-fluid site">
        <Navigation toggleAddCompany={this.toggleAddCompany}/>
          <div className="col-sm-12">
            <Companies companies={this.state.companies}/>
          </div>
      </div>
    )
  }

  toggleAddCompany(event) {
    console.log("on add company", event.target)
  }
}