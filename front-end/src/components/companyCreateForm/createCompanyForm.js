import React from 'react';
import ErrorBoundary from '../errorBoundary';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import DatePicker from 'react-datepicker';
import STATES from '../states.js';
import { addDays} from 'date-fns';

import { API_URL } from '../../constants';
import axios from 'axios';
import { ErrorMessage, IsRequiredLabel } from '../companyDetail/companyDetail';
import './createCompanyForm.css';

function CompanyName(props) {
    return (
        <Form.Group controlId="formCompanyName">
            <Form.Label>Company Name <span className="isRequired"> * </span></Form.Label>
            <Form.Control type="text" placeholder="Enter company name" onChange={props.handleName} required/> 
        </Form.Group>
    )
}

function CompanyDescription(props) {
    return (
        <Form.Group controlId="formCompanyDescription">
            <Form.Label>Company Description <span className="isRequired"> * </span></Form.Label>
            <Form.Control 
                as="textarea" 
                rows={6}
                placeholder="Enter company description"
                onChange={props.handleDescription}  
                required
            /> 
        </Form.Group>
    )
}

function CompanyCity(props) {
    return (
        <Form.Group controlId="formCompanyCity"> 
            <Form.Label>City <span className="isRequired"> * </span> </Form.Label>
            <Form.Control type="text" placeholder="Enter city" onChange={props.handleCity} required/>
        </Form.Group>
    )
}

function CompanyStates(props) {
    const list = [<option key="0" value="0" defaultValue> Select a State </option>];
    props.states.forEach((state) => {
        list.push(<option key={state} value={state}> {state} </option>)
    })
    
    return (
        <Form.Group controlId="formCompanyStates"> 
            <Form.Label>States <span className="isRequired"> * </span> </Form.Label>
            <Form.Control as="select" onChange={props.handleState} required>
                {list}
            </Form.Control>
        </Form.Group>
    )
}

function CompanyFoundedDate(props) {
    return (
        <Form.Group controlId="formCompanyFoundedDate"> 
            <Form.Label>Founded Date </Form.Label>
            <DatePicker
                isClearable 
                selected={props.foundedDate}
                onChange={(e) => props.handleFoundedDate(e)}
                name="formCompanyFoundedDate" 
                className="form-control"
                maxDate={addDays(new Date(), 0)}
                id="formCompanyFoundedDate"
            />
        </Form.Group>
    )
}

class CreateCompanyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            city : '',
            state : '',
            foundedDate : null,
            description : '',
            errorMessage : '',
            loading : false,
        }
        this.handleSave = this.handleSave.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleState = this.handleState.bind(this);
        this.handleFoundedDate = this.handleFoundedDate.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
    }
    
    handleName(event){
        this.setState({name : event.target.value});
    }

    handleCity(event){
        this.setState({city : event.target.value});
    }
    
    handleState(event){
        this.setState({state : event.target.value});
    }

    handleFoundedDate(date){
        this.setState({foundedDate : date});      
    }
    
    handleDescription(event) {
        this.setState({description : event.target.value});
    }

    handleSave(event){
        event.preventDefault();
        
        this.setState({loading : true});
        let {city, state, description, name} = this.state;
        let data = { 
            city, 
            state, 
            description,
            name,
            date_founded : this.state.foundedDate
        };
        axios.post(`${API_URL}/company/create`, data)
            .then(results => {
                this.setState({
                    loading : false, 
                });
                
                this.props.history.push("/");        
            })
            .catch(error => {
                this.setState({loading : false});
                if(error.response.status === 400){
                    console.log(error.response.data.message)
                    this.setState({errorMessage : error.response.data.message});
                }else if(error.status === 500){
                    this.setState({errorMessage : 'Internal Server Error'});
                }else{
                    this.setState({errorMessage : 'Something went wrong'});
                }
            })
    }

    render () {
        return(
            <Container className="my-container">
                <Form noValidate onSubmit={this.handleSave}>
                    <ErrorBoundary>
                        <fieldset className="my-fieldset">
                            <legend className="w-auto">Create A New Company</legend>
                            <Form.Row>
                                <Col> <CompanyName handleName={this.handleName}/> </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col> <CompanyCity handleCity={this.handleCity}/> </Col>
                                <Col> <CompanyStates states={STATES} handleState={this.handleState}/> </Col>
                                <Col> 
                                    <CompanyFoundedDate 
                                        handleFoundedDate={this.handleFoundedDate}
                                        foundedDate={this.state.foundedDate}
                                    /> 
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col> <CompanyDescription handleDescription={this.handleDescription}/> </Col>
                            </Form.Row>
                            <Form.Row >
                                <Col >
                                    <IsRequiredLabel />
                                </Col>
                                <Col >
                                    <ErrorMessage errorMessage={this.state.errorMessage} />
                                </Col>
                                <Col>
                                    <span className="float-right">
                                        <Button 
                                            type="submit" 
                                            variant="primary"> Save {this.state.loading ? <Spinner animation="border" size="sm"/> : '' }
                                        </Button>    
                                    </span>
                                </Col>
                            </Form.Row>                    
                        </fieldset>
                    </ErrorBoundary>
                </Form>
            </Container>
        )
    }
}

export default CreateCompanyForm;
export { CompanyName, CompanyDescription, CompanyStates, CompanyCity, CompanyFoundedDate }