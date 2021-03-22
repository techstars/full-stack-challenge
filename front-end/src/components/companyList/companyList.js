import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import capitalizeFirstLetterOfEveryWord from '../../pipes/capitalizeLetter'
import ErrorBoundary from '../errorBoundary'
import { API_URL } from '../../constants';
import axios from 'axios';
import './companyList.css' ;

function ListItem(props) {
    return (
         <Card 
            text="dark"
            border="dark"
            bg="light" 
            className="company-card-container text-center" 
        >
            <Card.Header className="company-card-header" > 
                <Row>
                    <Col col={5}>
                        <h4>{capitalizeFirstLetterOfEveryWord(props.item.name)}</h4>
                    </Col>
                    <Col col={5}>
                        <h4>{capitalizeFirstLetterOfEveryWord(props.item.city)}, {capitalizeFirstLetterOfEveryWord(props.item.state)} </h4>
                    </Col>
                    <Col col={2}>
                        <Link to={`/company-detail/${props.item.id}`}> more... </Link>
                    </Col>
                </Row>
            </Card.Header>
                <Card.Body>
                    <Card.Text className="my-card-text">
                        <p > {props.item.description} </p>
                    </Card.Text>
                </Card.Body>
        </Card>
    )
}

function CompanyBtn(){
    return (
        <Link id="companyBtn" className="btn btn-primary" to="/create-company">
            Add Company
        </Link>
    )
}

function NoContent(){
    return (
        <div style={{textAlign : "center"}}>
            <h3 style={{color: "red"}}> No Companies created, yet!  </h3>
        </div>
    )
}

class CompanyList extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            companies : []
        }
     }

    componentDidMount() {
        axios.get(`${API_URL}/company`)
            .then(results => {
                this.setState({
                    companies : results.data
                })
            })
            .catch(error => {
                console.log('Error: ', error); 
            });
    }

   render() {
        const completeList = this.state.companies.map((item) => 
            <ListItem key={item.id} item={item} />
        )

        return (
            <React.Fragment>
                <ErrorBoundary>
                    <Container className="list-container">
                        { this.state.companies.length === 0 ? <NoContent/> : completeList }
                    </Container>
                    <CompanyBtn />
                </ErrorBoundary>    
            </React.Fragment>
        )
    }
}

export default CompanyList;