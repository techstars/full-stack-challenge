class Navigation extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log('nav props', this.props)
    return (
      <nav className="nav row align-items-center">
        <div className="col-sm-9">
          <a className="logo" href="#">Startup Site</a>
          <a className="link" href="#">Companies</a>
          <a className="link" href="#">Founders</a>
        </div>
        <div className="col-sm-3" onClick={this.props.toggleAddCompany}>
          <button className="button">Add Company</button>
        </div>       
      </nav>
    )
  }

}