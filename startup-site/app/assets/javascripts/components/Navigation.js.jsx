class Navigation extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <nav className="nav row align-items-center">
        <div className="col-sm-9">
          <a className="logo" href="#companies">Startup Site</a>
          <a className="link" onClick={this.props.set_active_tab.bind(null, "companies")}>Companies</a>
          <a className="link" onClick={this.props.set_active_tab.bind(null, "founders")} href="#">Founders</a>
        </div>
        <div className="col-sm-3" onClick={this.props.toggle_add_company}>
          <button className="button">Add Company</button>
        </div>       
      </nav>
    )
  }

}