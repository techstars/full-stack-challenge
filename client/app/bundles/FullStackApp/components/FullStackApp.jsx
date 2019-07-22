import React from 'react';
import Header from './Header';
import Businesses from './businessComponents/Businesses';
import BusinessEdit from './businessComponents/BusinessEdit';
import AddBusiness from './createComponents/AddBusiness';
import BusinessSingleView from './businessComponents/BusinessSingleView';
import EditFounders from './foundersComponents/EditFounders';

export default class FullStackApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      business: {
        id: 0,
        name: '',
        location: '',
        description: '',
        founded: 0
      },
      create: false,
      singleview: {},
      view: false,
      founders: [],
      founderset: []
    };
  }

  componentDidMount() {
    this.getBus();
  }

  /**
   * getPhoto() loads a random photo from an Unsplash
   * photo collection w/o needing to use the Unsplash API
   * not ideal for application at 'Load' but works well here!
   */
  getPhoto = async () => {
    let num = Math.floor(Math.random() * 29 + 1);
    let response = await fetch(
      `https://source.unsplash.com/collection/7728984/480x480/?sig=${num}`
    );
    return response.url;
  };

  // Mounting JSON Request for all Businesses
  getFounders = async () => {
    let response = await fetch('/founders.json');
    let resJson = await response.json();
    return this.setState({ founders: resJson });
  };

  getBus = async () => {
    let response = await fetch('/businesses.json');
    let resJson = await response.json();
    for (let i = 0; i < resJson.length; i++) {
      resJson[i] = {
        ...resJson[i],
        photo: await this.getPhoto()
        // photo: 'http://www.clker.com/cliparts/A/Y/O/m/o/N/placeholder.svg'
      };
    }
    this.getFounders();
    return this.setState({ businesses: resJson });
  };

  // For DELETE request with business ID
  deleteCallback = async id => {
    if (confirm('Are you sure on this delete?') === true) {
      let response = await fetch(`/businesses/${id}.json`, {
        method: 'delete'
      });
      if (response.status !== 204) {
        alert(`Delete for item ${id} failed`);
      } else {
        alert(`Business ${id} deleted`);
        this.setState({
          create: false,
          view: false
        });
        return this.getBus();
      }
    } else {
      return this.setState({
        create: false,
        view: false
      });
    }
  };

  // Populate edit component view
  editCallback = async id => {
    let busArr = this.state.businesses;
    let business = {};
    for (let i = 0; i < busArr.length; i++) {
      if (busArr[i].id === id) {
        business = busArr[i];
      }
    }
    return this.setState({ business: business });
  };

  // Submit the PATCH Body Request
  editSubmitCallback = async (editBody, id) => {
    let response = await fetch(`/businesses/${id}.json`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: editBody.name,
        shortdesc: editBody.shortdesc,
        longdesc: editBody.longdesc,
        location: editBody.location,
        founded: editBody.founded,
        founders: editBody.founders
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    });
    if (response.status !== 200) {
      alert(`Edit for item ${id} error`);
    } else {
      for (let i = 0; i < this.state.founderset.length; i++) {
        this.createFounders(this.state.founderset[i], id);
      }
      this.setState({
        business: { id: 0 },
        view: false,
        fouderset: []
      });
      return this.getBus();
    }
  };

  // Initialize Edit Component and prep props
  viewItemCallback = business => {
    return this.setState({
      singleview: business,
      view: true
    });
  };

  // Hide Edit Component
  cancelEditCallback = () =>
    this.setState({
      business: { id: 0 },
      create: false,
      singleview: {},
      view: false
    });

  // Show Create Business Component
  toggleCreate = () => {
    return this.setState({ create: true });
  };

  // Create and send the POST request
  // will need: once ghe response for the business w/ id comes back need to grab that id and send the founders POST create....
  createCallback = async postBody => {
    let response = await fetch(`/businesses.json`, {
      method: 'POST',
      body: JSON.stringify({
        name: postBody.name,
        shortdesc: postBody.shortdesc,
        longdesc: postBody.longdesc,
        location: postBody.location,
        founded: postBody.founded
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    });
    if (response.status === 201) {
      let business = await response.json();
      for (let i = 0; i < this.state.founderset.length; i++) {
        this.createFounders(this.state.founderset[i], business.id);
      }

      this.getBus();
      return this.setState({
        create: false,
        founderset: []
      });
    }
  };

  createFounders = async (founder, id) => {
    let response = await fetch(`/founders.json`, {
      method: 'POST',
      body: JSON.stringify({
        name: founder,
        businessid: id
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    });
  };

  // incomplete method for adding founders - refactor
  addFounderCallback = founder => {
    alert(
      'Founder added:' +
        founder +
        '(Press Edit Entry or Create to submit founder changes)'
    );
    return this.state.founderset.push(founder);
  };

  /**
   * Main View render method with toggling of screens
   */
  render() {
    return (
      <div className='landing-container'>
        <Header />
        {!this.state.create && this.state.business.id !== 0 ? (
          <div>
            <BusinessEdit
              business={this.state.business}
              id={this.state.business.id}
              editSubmitCallback={this.editSubmitCallback}
              cancelEditCallback={this.cancelEditCallback}
              addFounderCallback={this.addFounderCallback}
              founders={this.state.founders}
            />
          </div>
        ) : this.state.create ? (
          <AddBusiness
            createCallback={this.createCallback}
            cancelEditCallback={this.cancelEditCallback}
            addFounderCallback={this.addFounderCallback}
          />
        ) : this.state.view ? (
          <BusinessSingleView
            business={this.state.singleview}
            closeViewCallback={this.cancelEditCallback}
            deleteCallback={this.deleteCallback}
            editCallback={this.editCallback}
            viewItemCallback={this.viewItemCallback}
            founders={this.state.founders}
          />
        ) : (
          <div>
            <button
              style={{ marginLeft: '75%' }}
              onClick={() => this.toggleCreate()}
            >
              Create Business
            </button>
            <Businesses
              businesses={this.state.businesses}
              viewItemCallback={this.viewItemCallback}
            />
          </div>
        )}
      </div>
    );
  }
}
