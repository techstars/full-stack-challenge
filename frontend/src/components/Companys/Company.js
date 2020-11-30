import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Loader from 'react-loader-spinner'

let isEdit = false;
let tempFounders = {};

const Company = () => {
  const API = 'https://api-tech-stars.herokuapp.com' // 'http://localhost:7010'
  let history = useHistory();
  const [company, setCompany] = useState({
    name: "",
    location: "",
    description: "",
    foundedAt: "",
    founder: [{ name: "", title: "" }]
  });
  const { id } = useParams();
  const { founder } = company;
  const [showLoader, setLoader] = useState(null)
  const loader = showLoader ? <Loader
    type="TailSpin"
    color="#00BFFF"
    width="50%"
  /> : ''
  const [error, setError] = useState(null)
  const errorDiv = error
    ? <div className="error">
      {error}
    </div>
    : '';
  useEffect(() => {
    loadCompany();
  }, []);

  const onInputChange = e => {
    tempFounders[e.target.name] = e.target.value
  };

  const loadCompany = async () => {
    isEdit = false
    setLoader(true);
    const res = await axios.get(`${API}/api/company/${id}`);
    setLoader(false);
    setCompany(res.data.data);
  };
  const addFounder = async () => {
    isEdit = true
  };
  const updateFounder = async () => {
    try {
      await axios.put(`${API}/api/company/add-founder/${id}`, { name: tempFounders.name, title: tempFounders.title });
      tempFounders = {};
      setError(null);
      loadCompany();
    } catch (error) {
      setError('This Founder already belongs to a company!.');
    }
  };
  const backToHome = async () => {
    console.log('clicked back to home');
    isEdit = false
  };
  return (
    <div className="container py-4">

      <Link className="btn btn-primary" to="/" onClick={() => backToHome()}>
        back to Home
      </Link>
      <Link
        class="btn btn-primary mr-4 float-right"
        to={`/company/edit/${company._id}`}
      > Edit
       </Link>

      <h2>Details:</h2>
      <hr />
      {loader ? null :
        <ul className="list-group w-50">
          <li className="list-group-item"><strong>Name:</strong> {company.name}</li>
          <li className="list-group-item"><strong>Location: </strong>{company.location}</li>
          <li className="list-group-item"><strong>Description: </strong>{company.description}</li>
          <li className="list-group-item"><strong>Founded Date:</strong> {company.foundedAt}</li>
        </ul>
      }

      <br />

      {loader ? loader : company.founder && company.founder.length > 0 ? <div>

        <h2>Founders:</h2>
        <hr />
        {company.founder.map((c, i) =>
          <ul className="list-group w-50">
            <li className="list-group-item"><strong>{c.name} :</strong>  {c.title}</li>
          </ul>
        )}<br /></div> : null}

      {isEdit ? (
        <div className="list-group w-50">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter name"
            name="name"
            value={founder.name}
            onChange={e => onInputChange(e)}
          />
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter title"
            name="title"
            value={founder.title}
            onChange={e => onInputChange(e)}
          />
        </div>) : null}
      <br />
      {errorDiv}
      {loader ? null : !isEdit ? (
        <Link class="btn btn-outline-primary mr-2" onClick={() => addFounder()}>
          Add Founder
        </Link>) :
        <Link class="btn btn-outline-primary mr-2" to={`/company/${company._id}`} onClick={() => updateFounder()}>
          Update
        </Link>
      }



    </div>

  );
};

export default Company;
