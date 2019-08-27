class Navigation extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <nav className="nav">
        <h2 className="logo">Startup Site</h2>
        <div onClick={this.props.toggle_add_company}>
          <button className="button">+ Add Company</button>
        </div>       
      </nav>
    )
  }

}