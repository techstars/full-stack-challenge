import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Loader from 'react-loader-spinner'

const EditCompany = () => {
  const API = 'https://api-tech-stars.herokuapp.com' // 'http://localhost:7010'
  let history = useHistory();
  const { id } = useParams();
  const [company, setUser] = useState({
    name: "",
    city: "",
    state: "",
    description: "",
    foundedAt: "",
    founder: ""
  });

  const [showLoader, setLoader] = useState(null)
  const loader = showLoader ? <Loader
    type="TailSpin"
    color="#00BFFF"
    width="100%"
  /> : ''

  const [error, setError] = useState(null)
  const errorDiv = error
    ? <div className="error">
      {error}
    </div>
    : '';

  const { name, city, state, description, foundedAt, founder } = company;
  const onInputChange = e => {
    setUser({ ...company, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    try {
      e.preventDefault();
      setLoader(true);
      await axios.put(`${API}/api/company/update/${id}`, company);
      setLoader(false);
      setError(null);
      history.push("/");
    } catch (error) {
      setError('Company already exist!.');
    }
  };

  const loadUser = async () => {
    setLoader(true);
    const result = await axios.get(`${API}/api/company/${id}`);
    setLoader(false);
    setUser(result.data.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit a Company</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
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
              placeholder="Enter Your Phone Number"
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
          <button className="btn btn-warning btn-block">Update company</button>
        </form>
      </div>

    </div>
  );
};

export default EditCompany;
