import React, { useState } from 'react';
import axios from 'axios';

//COMPONENTS
import AppBar from '../../Components/AppBar/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CreateAccount = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');

    const handleChangeFirstName = (event) => setFirstName(event.target.value);
    const handleChangeLastName = (event) => setLastName(event.target.value);
    const handleChangeEmail = (event) => setEmail(event.target.value);
    const handleChangePhone = (event) => setPhone(event.target.value);
    const handleChangePassword = (event) => setPassword(event.target.value);
    const handleChangeConfirmPassword = (event) => setConfirmPassword(event.target.value);
    const handleChangeAdress = (event) => setAdress(event.target.value);
    const handleChangeCity = (event) => setCity(event.target.value);
    const handleChangeZipCode = (event) => setZipCode(event.target.value);
    const handleChangeCountry = (event) => setCountry(event.target.value);
    const handleChangeState = (event) => setState(event.target.value);

    const textfieldList = [
    {
        handle: handleChangeFirstName,
        value: firstName,
        id:'outlined-basic1',
        label:'First Name',
        variant:'outlined',
    },
    {
        handle: handleChangeLastName,
        value: lastName,
        id:'outlined-basic2',
        label:'Last Name',
        variant:'outlined',
    },
    {
        handle: handleChangeEmail,
        value: email,
        id:'outlined-basic3',
        label:'Email',
        variant:'outlined'
    },
    {
        handle: handleChangePhone,
        value: phone,
        id:'outlined-basic4',
        label:'Phone',
        variant:'outlined'
    },
    {
        handle: handleChangePassword,
        value: password,
        id:'outlined-basic5',
        label:'Password',
        variant:'outlined'
    },
    {
        handle: handleChangeConfirmPassword,
        value: confirmPassword,
        id:'outlined-basic6',
        label:'Confirm Password',
        variant:'outlined'
    },
    {
        handle: handleChangeAdress,
        value: adress,
        id:'outlined-basic7',
        label:'Adress',
        variant:'outlined',
    },
    {
        handle: handleChangeCity,
        value: city,
        id:'outlined-basic8',
        label:'City',
        variant:'outlined',
    },
    {
        handle: handleChangeZipCode,
        value: zipCode,
        id:'outlined-basic9',
        label:'Zip Code',
        variant:'outlined',
    },
    {
        handle: handleChangeCountry,
        value: country,
        id:'outlined-basic10',
        label:'Country',
        variant:'outlined',
    },
    {
        handle: handleChangeState,
        value: state,
        id:'outlined-basic11',
        label:'State',
        variant:'outlined',
    },
]

    const handleClick = () => {
        console.log(firstName, lastName, email, phone, password, confirmPassword,adress,city,zipCode,country,state);
        const user = {firstName,lastName,email,phone,password,adress,city,zipCode,country,state};
        axios.post('http://localhost:8080/users',user)
             .then(res=> {
                console.log(res.data);
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhone('');
                setPassword('');
                setConfirmPassword('');
                setAdress('');
                setCity('');
                setZipCode('');
                setCountry('');
                setState('');
             })
             .catch(e=>console.log(e));
    }

    return (
        <>
            <AppBar />
            <div style={{
                display: 'flex', flexDirection: 'column', maxWidth: '600px', margin: 'auto',
                marginTop: '17px', borderRadius: '5px', padding: '10px', backgroundColor: '#e0edf4'
            }}>
                    <h1 style={{ fontFamily: 'Roboto, sans-serif' }}>Create a new Account</h1>
                    {
                        textfieldList.map((textfield,index)=>{
                            return(
                                <TextField  style={{ marginTop: '15px' }} key={index} onChange={textfield.handle} value={textfield.value} id={textfield.id} label={textfield.label}  variant={textfield.variant} />
                            )
                        })
                    }
                    <Button onClick={handleClick} style={{ marginTop: '10px', float: 'left', width: '30px' }} variant="contained">Submit</Button>
            </div>
            <br></br>
            <br></br>
        </>
    )
}

export default CreateAccount;