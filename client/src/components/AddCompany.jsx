import React from 'react';

const AddCompany = () => {
  return (
    <div className="add-company-wrapper">

      <form>

        <div className="form-line-one">
          <label>
            Name: <br/>
            <input type="text" name="name" className="form-input line-one-input"/>
          </label>
        </div>

        <div className="form-line-two">
          <label className="line-two-label">
            City: <br/>
            <input type="text" name="city" className="form-input line-two-input" />
          </label><br/>

          <label className="line-two-label">
            State: <br/>
            <input type="text" name="state" className="form-input line-two-input"/>
          </label><br/>

          <label className="line-two-label">
            Founded Date: <br/>
            <input type="date" name="founded-date" className="form-input line-two-input"/>
          </label>
        </div>

        <div className="form-line-three">
          <label>
            Description: <br/>
            <textarea name="description" className=" form-input line-three-input"/>
          </label>
        </div>

      </form>

    </div>
  )
}

export default AddCompany;