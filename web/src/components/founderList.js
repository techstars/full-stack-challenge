import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import AddFounder from './addFounder';
import axios from 'axios';

export default class FounderList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      showAddFounderForm: false
    };
    this.showAddFounderForm = this.showAddFounderForm.bind(this);
    this.appendFounder = this.appendFounder.bind(this);
  }

  appendFounder(founder){
    this.setState({ showAddFounderForm: false }, () => {
      this.props.appendFounder(founder);
    })
  }

  showAddFounderForm() {
    this.setState({ showAddFounderForm: true });
  }

  renderFounders() {
    return this.props.founders.map((founder, index) => {
      return (
        <div className="founders-list" key={founder.id}>
          {index + 1}. {founder.full_name} ({founder.email}): {founder.title}
        </div>
      )
    })
  }

  renderAddFounderForm() {
    if (this.state.showAddFounderForm) {
      return (
        <div className="add-founder">
          <AddFounder {...this.props} appendFounder={this.appendFounder}/>
        </div>
      )
    }
  }

  render() {
    if (this.props.founders.length == 0) return (
      <>
        <button onClick={this.showAddFounderForm} className="button add-founder">Add Founder</button>
        { this.renderAddFounderForm() }
      </>
    );

    return (
      <div>
        <div className="founder-details" >
          <h3>
            <i>{this.props.founders.length > 0 && "Founders:"}</i>
          </h3>
          {this.renderFounders()}
        </div>
        <button onClick={this.showAddFounderForm} className="button add-founder">Add Founder</button>
        { this.renderAddFounderForm() }
      </div>
    );
  }
}