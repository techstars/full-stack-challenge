class Founder extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    var founder = this.props.founder
    return (
      <div className="founder-card">
        <div className="founder-image">
          <img src={founder.image_url}/>
        </div>
        <div className="founder-content">
          <div className="description card-row">{founder.full_name}</div>
          <div className="description card-row">{founder.bio}</div>
        </div>
      </div>
    )
  }

}