class CreateCompany extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <form className="nav row">
        <label>Company Name</label>
        <input type="text"/>
      </form>
    )
  }
}