import React from 'react';

class CompanyForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted');
    }

    render() {
        return (
            <div>
                <h2>New Event</h2>
                <form className="CompanyForm" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">
                            <strong>CompanyName: </strong>
                            <input type="text" id="name" name="name" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="city">
                            <strong>city:</strong>
                            <input type="text" id="city" name="city" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="state">
                            <strong>State: </strong>
                            <input type="text" id="state" name="state" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="founded_date">
                            <strong>Founded Date:</strong>
                            <input type="text" id="founded_date" name="founded_date" />
                        </label>
                    </div>
                    <div className="form-actions">
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CompanyForm;