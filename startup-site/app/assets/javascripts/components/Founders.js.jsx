class Founders extends React.Component{
  constructor(props) {
     super(props)
  }
  render() {
    return this.props.founders.map(founder => {
      return (
        <div key={founder.id} className="card">
          <div className="row">
            <div className="col-sm-2">
              <img src={founder.image_url} />
            </div>
            <div className="col-sm-10">
              <h5 className="header">{founder.full_name} - <em>{founder.title}, {founder.company}</em></h5>
              <p>{founder.bio}</p>
            </div>
          </div>
        </div>
      )
    })
  }
}

