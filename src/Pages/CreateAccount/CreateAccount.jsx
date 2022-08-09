import React, {useState} from 'react';
import AppBar from '../../Components/AppBar/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CreateAccount = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const handleChangeFirstName = (event) => setFirstName(event.target.value);
    const handleChangeLastName = (event) => setLastName(event.target.value);
    const handleChangeEmail = (event) => setEmail(event.target.value);
    const handleChangePhone = (event) => setPhone(event.target.value);
    const handleChangePassword = (event) => setPassword(event.target.value);
    const handleChangeConfirmPassword = (event) => setConfirmPassword(event.target.value);

    const handleClick = () =>{
        console.log(firstName,lastName,email,phone,password,confirmPassword);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <>
        <AppBar/>
            <div style={{display:'flex',flexDirection:'column',maxWidth:'800px',margin:'auto',
            marginTop:'17px',borderRadius:'5px',padding:'10px',backgroundColor:'#e0edf4'}}>
                <h1 style={{fontFamily: 'Roboto, sans-serif'}}>Create a new Account</h1>
                <TextField onChange={handleChangeFirstName} value={firstName} id="outlined-basic" label="First Name" variant="outlined" />
                <TextField onChange={handleChangeLastName} value={lastName} style={{marginTop:'15px'}} id="outlined-basic" label="Last Name" variant="outlined" />
                <TextField onChange={handleChangeEmail} value={email} style={{marginTop:'15px'}} id="outlined-basic" label="Email" variant="outlined" />
                <TextField onChange={handleChangePhone} value={phone} style={{marginTop:'15px'}} id="outlined-basic" label="Phone Number" variant="outlined" />
                <TextField onChange={handleChangePassword} value={password} style={{marginTop:'15px'}} id="outlined-basic" label="Password" variant="outlined" />
                <TextField onChange={handleChangeConfirmPassword} value={confirmPassword} style={{marginTop:'15px'}} id="outlined-basic" label="Confirm Password" variant="outlined" />
                <Button onClick={handleClick} style={{marginTop:'10px',float:'left',width:'30px'}} variant="contained">Submit</Button>
            </div>
            <br></br>
            <br></br>
        </>
    )
}

export default CreateAccount;