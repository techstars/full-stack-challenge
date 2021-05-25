import { useState } from "react";
import "../css/CreateNewCompany.css";
import Card from '@material-ui/core/Card';
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';
import axios from 'axios';

const CreateNewCompany = () => {
    const [name, setName] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [description, setDescription] = useState("")
    const [foundedDate, setFoundedDate] = useState("")
    // const [founder, setFounder] = useState("")

    const [companyList, setCompanyList] = useState([])
    // const [newName, setNewName] = useState("")
    // const [newLocation, setNewLocation] = useState("")
    // const [newState, setNewState] = useState("")
    // const [newCity, setNewCity] = useState("")
    // const [newDescription, setNewDescription] = useState("")


    const addCompany = () => {
        axios.post('http://localhost:3001/create', {
            name: name,
            state: state,
            city: city,
            foundedDate: foundedDate,
            description: description
        }).then((result) => {
            console.log('RESULT', result)
            setCompanyList([
                ...companyList,
                {
                    name: name,
                    state: state,
                    city: city,
                    foundedDate: foundedDate,
                    description: description
                },
            ])
        })
    }



    return (
        <Card className="new-company-container">
            <form className="form">
                <TextField label="Company Name" variant="outlined" fullWidth required onChange={(event) => {
                    setName(event.target.value);
                }} />
                <TextField label="State" variant="outlined" required onChange={(event) => {
                    setState(event.target.value);
                }} />
                <TextField label="City" variant="outlined" required onChange={(event) => {
                    setCity(event.target.value);
                }} />
                <TextField label="Founded Date" variant="outlined" onChange={(event) => {
                    setFoundedDate(event.target.value);
                }} />
                <TextField label="Company Description" variant="outlined" fullWidth multiLine required onChange={(event) => {
                    setDescription(event.target.value);
                }} />

                <Button variant="outlined" onClick={addCompany}>Save Company</Button>
            </form>
            {/* <div className="information">
                <label>Company Name:</label>
                <input type="text" onChange={(event) => {
                    setName(event.target.value);
                }}></input>
                <label>Company Location:</label>
                <input type="text" onChange={(event) => {
                    setLocation(event.target.value);
                }}></input>
                <label>Description:</label>
                <input type="text" onChange={(event) => {
                    setDescription(event.target.value);
                }}></input>
                <Button onClick={addCompany}>Add Company</Button>
            </div> */}
        </Card>
    )


}

// class CreateNewCompany extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: '',
//             location: '',
//             description: '',
//             founders: ''
//         }
//     }

//     const handle

//     render() {
//         return <div>This is the Create Company card</div>
//     }
// }

export default CreateNewCompany;