import React, { useState } from 'react';

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

    const handleChangeFirstName = (event) => setFirstName(event.target.value);
    const handleChangeLastName = (event) => setLastName(event.target.value);
    const handleChangeEmail = (event) => setEmail(event.target.value);
    const handleChangePhone = (event) => setPhone(event.target.value);
    const handleChangePassword = (event) => setPassword(event.target.value);
    const handleChangeConfirmPassword = (event) => setConfirmPassword(event.target.value);

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
        style: { marginTop: '15px' },
        id:'outlined-basic2',
        label:'Last Name',
        variant:'outlined',
    },
    {
        handle: handleChangeEmail,
        value: email,
        style: { marginTop: '15px' },
        id:'outlined-basic3',
        label:'Email',
        variant:'outlined'
    },
    {
        handle: handleChangePhone,
        value: phone,
        style: { marginTop: '15px' },
        id:'outlined-basic4',
        label:'Phone',
        variant:'outlined'
    },
    {
        handle: handleChangePassword,
        value: password,
        style: { marginTop: '15px' },
        id:'outlined-basic5',
        label:'Password',
        variant:'outlined'
    },
    {
        handle: handleChangeConfirmPassword,
        value: confirmPassword,
        style: { marginTop: '15px' },
        id:'outlined-basic6',
        label:'Confirm Password',
        variant:'outlined'
    },
]

    const handleClick = () => {
        console.log(firstName, lastName, email, phone, password, confirmPassword);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
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
                                <TextField key={index} onChange={textfield.handle} value={textfield.value} style={textfield.style} id={textfield.id} label={textfield.label}  variant={textfield.variant} />
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