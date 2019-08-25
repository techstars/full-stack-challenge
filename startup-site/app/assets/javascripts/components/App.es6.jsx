class App extends React.Component{
  constructor(props) {
     super(props)
     this.state = {
       companies: this.props.companies || []
     }
  }
  render() {
    console.log("props", this.props)
    return (
      <div className="container-fluid site">
        <Navigation />
          <div className="col-sm-12">
            <Companies companies={this.state.companies}/>
          </div>
      </div>
    )
  }
}