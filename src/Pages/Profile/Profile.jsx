import React, {useState} from 'react';
import AppBar from '../../Components/AppBar/AppBar';
import Avatar from '@mui/material/Avatar';
import profileImage from '../../Images/ed.jpg';
import TextField from '@mui/material/TextField';
import TextfieldPassword from '../../Components/TextfieldPassword/TextfieldPassword';
import Button from '@mui/material/Button';

const Profile = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [adress,setAdress] = useState('');
    const [city,setCity] = useState('');
    const [zipCode,setZipCode] = useState('');
    const [country,setCountry] = useState('');
    const [state,setState] = useState('');

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

    const handleClick = () =>{
        console.log(firstName,lastName,email,phone,password,adress,city,zipCode,country,state);
    }

    return (
        <>
            <AppBar/>
            <div style={{ maxWidth: '600px', margin: 'auto', padding:'8px',marginTop:'6px',
            backgroundColor:'white',borderRadius:'10px',fontFamily: 'Roboto, sans-serif' }}>
                <h1 >My Profile</h1>
                <div style={{display:'flex', maxWidth:'500px'}}>
                    <h2>Edit profile</h2>
                    <Avatar sx={{ width: 100, height: 100}} alt="Profile" src={profileImage} />
                </div>
                <div style={{display:'flex',marginTop:'30px'}}>
                    <TextField value={firstName} onChange={handleChangeFirstName} id="outlined-basic1" label="First name" variant="outlined" />
                    <TextField value={lastName} onChange={handleChangeLastName} style={{marginLeft:'30px'}} id="outlined-basic" label="Last name" variant="outlined" />
                </div>
                <TextField value={email} onChange={handleChangeEmail} style={{width:'475px',marginTop:'30px'}} id="outlined-basic2" label="Email" variant="outlined" />
                <TextField value={adress} onChange={handleChangeAdress} style={{width:'475px',marginTop:'30px'}} id="outlined-basic3" label="Address" variant="outlined" />
                <TextField value={phone} onChange={handleChangePhone} style={{width:'475px',marginTop:'30px'}} id="outlined-basic4" label="Phone" variant="outlined" />
                <div style={{display:'flex',marginTop:'30px'}}></div>
                <div style={{display:'flex',marginTop:'30px'}}>
                    <TextField value={city} onChange={handleChangeCity} id="outlined-basic5" label="City" variant="outlined" />
                    <TextField value={state} onChange={handleChangeState} style={{marginLeft:'30px'}} id="outlined-basic" label="State" variant="outlined" />
                </div>
                <div style={{display:'flex',marginTop:'30px'}}>
                    <TextField value={zipCode} onChange={handleChangeZipCode} id="outlined-basic6" label="Zip Code" variant="outlined" />
                    <TextField value={country} onChange={handleChangeCountry} style={{marginLeft:'30px'}} id="outlined-basic7" label="Country" variant="outlined" />
                </div>
                <TextfieldPassword width={'100%'} />
                <Button onClick={handleClick} style={{marginTop:'10px'}} variant="contained">Save</Button>
            </div>
        </>
    )
}

export default Profile;