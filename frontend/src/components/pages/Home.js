import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner'

const Home = () => {
  const API = 'https://api-tech-stars.herokuapp.com' //'http://localhost:7010'
  const [company, setCompany] = useState([]);
  const [showLoader, setLoader] = useState(null)
  const loader = showLoader ? <Loader
    type="TailSpin"
    color="#00BFFF"
    width="100%"
  /> : ''
  useEffect(() => {
    loadCompany();
  }, []);

  const loadCompany = async () => {
    setLoader(true);
    const result = await axios.get(`${API}/api/company/list`);
    setLoader(false);
    setCompany(result.data.data);
  };

  const deleteCompany = async id => {
    await axios.delete(`${API}/api/company/delete/${id}`);
    loadCompany();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {company.map((c, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{c.name}</td>
                <td>{c.location}</td>
                <td>
                  {c.description && c.description.length > 50 ?
                    `${c.description.substring(0, 50)}...` : c.description}
                </td>


                <td>
                  <Link class="btn btn-primary mr-2" to={`/company/${c._id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/company/edit/${c._id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteCompany(c._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loader}
      </div>
    </div>
  );
};

export default Home;
