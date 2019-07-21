import React from 'react';
import Header from './Header';
import Businesses from './businessComponents/Businesses';
import BusinessEdit from './businessComponents/BusinessEdit';
import AddBusiness from './createComponents/AddBusiness';

export default class FullStackApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      business: { id: 0, name: '', location: '', description: '', founded: 0 },
      create: false
    };
  }

  componentDidMount() {
    this.getBus();
  }

  getPhoto = async () => {
    const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let sig = numsArr[Math.floor(Math.random() * numsArr.length)];
    let response = await fetch(
      `https://source.unsplash.com/collection/7669791/480x480/?sig=${sig}`
    );
    return response.url;
  };

  getBus = async () => {
    let response = await fetch('/businesses.json');
    let resJson = await response.json();
    for (let i = 0; i < resJson.length; i++) {
      resJson[i] = { ...resJson[i], photo: await this.getPhoto() };
    }
    console.log('resJs:', resJson);
    return this.setState({ businesses: resJson });
  };

  deleteCallback = async id => {
    if (confirm('Are you sure on this delete?') === true) {
      let response = await fetch(`/businesses/${id}.json`, {
        method: 'delete'
      });
      if (response.status !== 204) {
        alert(`Delete for item ${id} failed`);
      } else {
        alert(`Business ${id} deleted`);
        return this.getBus();
      }
    } else {
      return this.setState({ create: false });
    }
  };

  editCallback = async id => {
    let busArr = this.state.businesses;
    let business = {};
    for (let i = 0; i < busArr.length; i++) {
      if (busArr[i].id === id) {
        business = busArr[i];
      }
    }
    console.log('edit call hit:', business);
    return this.setState({ business: business });
  };

  editSubmitCallback = async (editBody, id) => {
    let response = await fetch(`/businesses/${id}.json`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: editBody.name,
        description: editBody.description,
        location: editBody.location,
        founded: editBody.founded
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    });
    if (response.status !== 200) {
      alert(`Edit for item ${id} error`);
    } else {
      this.setState({ business: { id: 0 } });
      return this.getBus();
    }
  };

  cancelEditCallback = () =>
    this.setState({ business: { id: 0 }, create: false });

  toggleCreate = () => {
    return this.setState({ create: true });
  };

  createCallback = async postBody => {
    let response = await fetch(`/businesses.json`, {
      method: 'POST',
      body: JSON.stringify({
        name: postBody.name,
        description: postBody.description,
        location: postBody.location,
        founded: postBody.founded
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    });
    if (response.status === 201) {
      this.getBus();
      return this.setState({ create: false });
    }
  };

  render() {
    return (
      <div className='landing-container'>
        <Header />
        {!this.state.create && this.state.business.id !== 0 ? (
          <BusinessEdit
            business={this.state.business}
            id={this.state.business.id}
            editSubmitCallback={this.editSubmitCallback}
            cancelEditCallback={this.cancelEditCallback}
          />
        ) : this.state.create ? (
          <AddBusiness
            createCallback={this.createCallback}
            cancelEditCallback={this.cancelEditCallback}
          />
        ) : (
          <div>
            <button onClick={() => this.toggleCreate()}>Create Business</button>
            <Businesses
              businesses={this.state.businesses}
              editCallback={this.editCallback}
              deleteCallback={this.deleteCallback}
            />
          </div>
        )}
      </div>
    );
  }
}
