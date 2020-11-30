import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Loader from 'react-loader-spinner'

const AddCompany = () => {
  const API = 'https://api-tech-stars.herokuapp.com' // 'http://localhost:7010'
  let history = useHistory();
  const [company, setUser] = useState({
    name: "",
    city: "",
    state: "",
    description: "",
    foundedAt: "",
  });

  const [error, setError] = useState(null)
  const [showLoader, setLoader] = useState(null)
  const loader = showLoader ? <Loader
    type="TailSpin"
    color="#00BFFF"
    width="100%"
  /> : ''
  const errorDiv = error
    ? <div className="error">
      {error}
    </div>
    : '';

  const { name, city, state, description, foundedAt, } = company;
  const onInputChange = e => {
    setUser({ ...company, [e.target.name]: e.target.value });
  };


  const onSubmit = async e => {
    try {
      e.preventDefault();
      setError(null);
      setLoader(true);
      const data = await axios.post(`${API}/api/company/create`, company)
      setLoader(false);
      console.log('create success: ', data);
      history.push("/");
    } catch (err) {
      setError('Company already exist!.');
    }

  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add a Company</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Company Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="City"
              name="city"
              value={city}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="State"
              name="state"
              value={state}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Founded date"
              name="foundedAt"
              value={foundedAt}
              onChange={e => onInputChange(e)}
            />
          </div>
          {loader}
          {errorDiv}
          <button className="btn btn-primary btn-block">Save</button>
        </form>
      </div>


    </div>
  );
};

export default AddCompany;
