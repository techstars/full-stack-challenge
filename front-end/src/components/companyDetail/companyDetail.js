import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import Spinner from 'react-bootstrap/Spinner';
import { useParams, useHistory } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import ErrorBoundary from '../errorBoundary'

import STATES from '../states'
import { 
    CompanyName as FormCompanyName,
    CompanyDescription, 
    CompanyStates,
    CompanyCity,
    CompanyFoundedDate
} from '../companyCreateForm/createCompanyForm';

import capitalizeFirstLetterOfEveryWord from '../../pipes/capitalizeLetter';
import { API_URL } from '../../constants';
import axios from 'axios';
import './companyDetail.css';

function CompanyName(props) {
    return ( 
        <h2> {capitalizeFirstLetterOfEveryWord(props.companyName)}</h2>
    )
}

function FoundedDate(props) {
    return ( 
        <h4> {props.foundedDate} </h4>
    )
}

function Location(props) {
    return ( 
        <h4> {capitalizeFirstLetterOfEveryWord(props.city) + ', ' + capitalizeFirstLetterOfEveryWord(props.state)} </h4>
    )
}

function EditBtn(props) {
    return (
        <Button variant="btn btn-primary" className="edit-btn" onClick={() => props.setModalShow(true)} >
            Edit
        </Button>
    )  
}

function DeleteBtn(props) {
    return (
        <Button variant="btn btn-danger" onClick={props.handleDelete}>
            Delete {props.isLoading ? <Spinner animation="border" size="sm"/> : ''}
        </Button>
    )  
}

function Description(props) {
    return ( 
        <textarea 
            rows="10" 
            value={props.description} 
            className="my-text-area form-control-plaintext"
            readOnly>

        </textarea>
    )
}

function FounderFullName(props) {
    return (
        <Form.Group controlId="founderFullName">
            <Form.Label>Full Name <span className="isRequired"> * </span></Form.Label>
            <Form.Control type="text" placeholder="Enter full name" onChange={props.handleFounderName} required/> 
        </Form.Group>
    )
}

function FounderTitle(props) {
    return (
        <Form.Group controlId="founderTitle">
            <Form.Label>Title <span className="isRequired"> * </span></Form.Label>
            <Form.Control type="text" placeholder="Enter title" onChange={props.handleFounderTitle} required/> 
        </Form.Group>
    )
}

function IsRequiredLabel(){
    return (
        <label className="isRequired"> * Required </label>
    )
}

function ErrorMessage(props) {
    return (
        <label className="isRequired"> <b> {props.errorMessage} </b> </label>
    )
}

function CompanyDoesNotExist() {
    return (
        <div className="no-data-exist-container">
            <h3 > Company does not exist </h3>
        </div>
    )
}

function EditModal(props) {
    function onEntered(){
        let companyInput = document.getElementById('formCompanyName');
        companyInput.value = props.companyNameValue;
        
        let cityInput = document.getElementById('formCompanyCity');
        cityInput.value = props.cityValue;
        
        let descriptionInput = document.getElementById('formCompanyDescription');
        descriptionInput.value = props.descriptionValue;

        let statesInput = document.getElementById('formCompanyStates');
        statesInput.value = props.stateValue;
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        onEntered={onEntered}
      >
        <Modal.Header closeButton={false}>
          <Modal.Title id="container-modal-title-center">
            Edit A Company 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form controlId="edit-form">
                <fieldset className="my-fieldset">
                    <legend className="w-auto">Edit Company</legend>
                    <Form.Row> 
                        <Col> <FormCompanyName 
                                value={props.companynamevalue} 
                                handleName={props.handleName}/> 
                        </Col>
                    </Form.Row> 
                    <Form.Row>
                        <Col> <CompanyCity handleCity={props.handleCity} /> </Col>
                        <Col> <CompanyStates 
                                states={STATES} 
                                handleState={props.handleState} 
                             />
                        </Col>
                        <Col> 
                            <CompanyFoundedDate 
                                isClearable
                                foundedDate={props.foundedDate}
                                handleFoundedDate={props.handleFoundedDate}
                            /> 
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col > <CompanyDescription className="my-textarea" handleDescription={props.handleDescription} /> </Col>
                    </Form.Row>
                    <Form.Row >
                        <Col >
                            <IsRequiredLabel> </IsRequiredLabel>
                        </Col>
                        <Col className="error-message-container">
                            <ErrorMessage errorMessage={props.errorMessage} />
                        </Col>
                    </Form.Row>                    
                </fieldset>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
          <Button 
            variant="primary" 
            onClick={props.handleEditSubmit}> Save {props.isLoading ? <Spinner animation="border" size="sm"/> : ''}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Founders(props) {
    const founderList = props.founders.map(founder => {
        return (
            <Col key={founder.id}>
                <label> {founder.full_name} <b>:</b>  {founder.title} </label>
            </Col>
        )
    });
        
    return (
        <fieldset className="founders-fieldset">
            <legend className="w-auto">Founders</legend>
                {founderList}
                <Col >
                    <Button 
                        variant="primary" 
                        className="" 
                        id="add-founder-btn"
                        onClick={props.setFounderModalShow}
                    > Add Founder  </Button>
                </Col>
        </fieldset>
    )
}

function FoundersModal(props){
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header closeButton={false}>
            <Modal.Title id="container-modal-title-center">
                Add a Founder  
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form controlId="add-founder-form">
                    <Form.Row> 
                        <Col> 
                            <FounderFullName 
                                handleFounderName={props.handleFounderFullName}
                            /> 
                        </Col>
                    </Form.Row>
                    <Form.Row> 
                        <Col> 
                            <FounderTitle 
                                handleFounderTitle={props.handleFounderTitle}
                            /> 
                        </Col>
                    </Form.Row>
                    <Form.Row> 
                        <label id="founderErrorMessage"> {props.errorMessage} </label>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
            <Button 
                variant="primary" 
                onClick={props.handleAddFounder}>Add
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

function ShowToast(props) {
    return (
        <Toast show={props.onShow} onClose={props.onClose} className="my-toast" delay={3000} autohide>
            <Toast.Header>
                <strong className="mr-auto" style={{color: "green"}}>{props.headerText}</strong>
            </Toast.Header>
            <Toast.Body style={{color: "green"}}>{props.bodyText}</Toast.Body>
        </Toast>
    )
}

function CompanyDetail(props){
    let  history = useHistory();
    let { id } = useParams();

    let [modalShow, setModalShow] = useState(false);
    let [modalFounderShow, setFounderModalShow] = useState(false);
    let [toastShow, setToastShow] = useState(false);

    let [editLoading, setEditLoading] = useState(false);
    let [deleteLoading, setDeleteLoading] = useState(false);

    let [doesDataExists, setDataExists] = useState(true);
    let [errorMessage, setErrorMessage] = useState();
    let [founderErrorMessage, setFounderErrorMessage] = useState('');

    let [displayDate, setDisplayDate] = useState();
    let [displayCompanyName, setDisplayCompanyName] = useState();
    let [displayCity, setDisplayCity] = useState();
    let [displayState, setDisplayState] = useState();
    let [displayDescription, setDisplayDescription] = useState();
    
    let [companyName, setCompanyName] = useState();
    let [foundedDate, setFoundedDate] = useState();
    let [city, setCity] = useState();
    let [state, setState] = useState();
    let [description, setDescription] = useState();

    let [founderName, setFounderName] = useState();
    let [founderTitle, setFounderTitle] = useState();
    let [foundersArray, setFounderArray] = useState([]);
    
    useEffect(() => {
        axios.get(`${API_URL}/company/${id}`)
            .then(results => {
                if(results.data.length === 0){
                    setDataExists(false);
                    return;
                }
                let { 
                    date_founded,
                    description,
                    city,
                    state,
                    name,
                    founders,
                    founder_name, 
                    founder_title, 
                } = results.data[0];

                setCompanyName(name);
                setCity(city);
                setState(state);
                setDescription(description);

                let isEmpty = Object.keys(founders[0]).length === 0;

                setFounderArray(isEmpty ? [] : founders);

                // setDisplayFounderName(founder_name);
                // setDisplayFounderTitle(founder_title);

                setDisplayCompanyName(name);
                setDisplayCity(city);
                setDisplayState(state);
                setDisplayDescription(description);
                setDisplayDate('');
                if(date_founded){
                    setFoundedDate(parseISO(date_founded));
                    setDisplayDate(format(new Date(parseISO(date_founded)),'LLL do ,yyyy'));
                }
            })
            .catch(error => {
                console.log('Error : ', error); 
            })
    },[])

    

    function handleEditSubmit(){
        setErrorMessage('');
        const data = { 
            name : companyName,
            date_founded : foundedDate,
            city,
            state,
            description 
        }
        
        setEditLoading(true);
        axios.put(`${API_URL}/company/${id}`, data)
            .then(results => {
                setToastShow(true);
                let { date_founded, description, city, state, name } = results.data[0];
                setEditLoading(false);
                setModalShow(false);
                setCompanyName(name);
                setCity(city);
                setState(state);
                setDescription(description);
                

                setDisplayCompanyName(name);
                setDisplayCity(city);
                setDisplayState(state);
                setDisplayDescription(description);
                setDisplayDate('');
                if(date_founded != null){
                    setFoundedDate(parseISO(date_founded));
                    setDisplayDate(format(new Date(parseISO(date_founded)),'LLL do ,yyyy'));
                }
            })
            .catch(error => {
                setEditLoading(false);
                console.log('error: ', error);
                console.log('error: ', error.response);

                if(error.response.status === 400){
                    console.log(error.response.data.message)
                    setErrorMessage(error.response.data.message)
                }else if(error.status === 500){
                    setErrorMessage('Internal Server Error')
                }else{
                    setErrorMessage('Something went wrong');
                }
            })
    }
    
    function handleDelete() {
        setDeleteLoading(true);
        axios.delete(`${API_URL}/company/${id}`)
            .then( _ => {
                setDeleteLoading(false);
                history.push("/");
            })
            .catch(error => {
                setDeleteLoading(false);
            });
    }

    function handleCity(event){
        let newCity = event.target.value ? event.target.value.trim() : null; 
        setCity(newCity);
    }

    function handleDescription(event){
        let newDescription = event.target.value ? event.target.value.trim() : null; 
        setDescription(newDescription);
    }

    function handleState(event){
        let newState = event.target.value ? event.target.value.trim() : null; 
        setState(newState);
    }

    function handleName(event) {
        let newCompanyName = event.target.value ? event.target.value.trim() : null; 
        setCompanyName(newCompanyName);
    }

    function handleFoundedDate(date) {
        setFoundedDate(date);
    }

    function handleAddFounder(){
        setFounderErrorMessage('');
        axios.put(`${API_URL}/company/founder/${id}`, {full_name : founderName, title: founderTitle, company_id : id})
            .then(results => {
                setFounderArray(results.data[0].founders);
                setFounderModalShow(false)
            })
            .catch(error => {
                if(error.response.status === 400){
                    console.log(error.response.data.message)
                    setFounderErrorMessage(error.response.data.message)
                }else if(error.status === 500){
                    setFounderErrorMessage('Internal Server Error')
                }else{
                    setFounderErrorMessage('Something went wrong');
                }
            })
    }

    function handleFounderFullName(event){
        let newFounderName = event.target.value ? event.target.value.trim() : null; 
        setFounderName(newFounderName);
    }

    function handleFounderTitle(event){
        let newFounderTitle = event.target.value ? event.target.value.trim() : null; 
        setFounderTitle(newFounderTitle);
    }

    return (
        <Container className="edit-container" >
            <ErrorBoundary>
                {doesDataExists ?
                    <React.Fragment>
                        <Row className='my-row'>
                            <CompanyName companyName={displayCompanyName}/>
                        </Row>
                        <Row className='my-row company-info-container'>
                            <Col> <FoundedDate foundedDate={displayDate}/> </Col>
                            <Col> <Location city={displayCity} state={displayState} /> </Col>
                            <Col > 
                                <EditBtn setModalShow={setModalShow} />
                                <DeleteBtn isLoading={deleteLoading} handleDelete={handleDelete} /> 
                            </Col>
                        </Row>
                        <Row>
                            <Col className="description-container">
                                <Description  description={displayDescription} />
                            </Col>
                        </Row>
                        <EditModal 
                            show={modalShow} 
                            onHide={() => setModalShow(false)}
                            handleEditSubmit={handleEditSubmit}
                            companyNameValue={displayCompanyName}
                            foundedDate={foundedDate}
                            cityValue={displayCity}
                            stateValue={displayState}
                            descriptionValue={displayDescription}
                            handleName={handleName}
                            handleFoundedDate={handleFoundedDate}
                            handleCity={handleCity}
                            handleState={handleState}
                            handleDescription={handleDescription}
                            errorMessage={errorMessage}
                            isLoading={editLoading}
                        >
                        </EditModal>
                        <Row>
                            <Founders 
                                handleAddFounder={handleAddFounder} 
                                setFounderModalShow={setFounderModalShow}
                                founders={foundersArray}
                            ></Founders>
                        </Row>
                        <FoundersModal 
                            show={modalFounderShow}
                            onHide={() => {{setFounderModalShow(false); setFounderErrorMessage('')}}}
                            handleFounderFullName={handleFounderFullName}
                            handleFounderTitle={handleFounderTitle}
                            handleAddFounder={handleAddFounder}
                            errorMessage={founderErrorMessage}
                        >

                        </FoundersModal>
                        <ShowToast 
                            onShow={toastShow}
                            onClose={() => setToastShow(false)}
                            headerText="Successful!"
                            bodyText="Company has been updated"
                        >

                        </ShowToast>
                    </React.Fragment>
                : 
                    <CompanyDoesNotExist />
                }
            </ErrorBoundary>
        </Container>
    )
    
}

export default CompanyDetail;
export { ErrorMessage, IsRequiredLabel };