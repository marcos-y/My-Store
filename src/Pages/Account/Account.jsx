import React from 'react';
import AppBar from '../../Components/AppBar/AppBar';
import TextfieldPassword from '../../Components/TextfieldPassword/TextfieldPassword';
import Button from '@mui/material/Button';

const Account = () => {

    return (
        <>
            <AppBar />
            <div style={{padding:'8px'}}>
                <div style={{
                    maxWidth: '600px', margin: 'auto', padding: '8px', marginTop: '40px', 
                    backgroundColor: 'white', borderRadius: '10px', fontFamily: 'roboto', display: 'flex',
                    alignItems: 'center'
                }}>
                    <div style={{ margin: 'auto' }}>
                        <h1>Account</h1>
                        <h2>Change Password</h2>
                        <TextfieldPassword />
                        <h3>Repeat password:</h3>
                        <TextfieldPassword />
                        <Button style={{ marginTop: '20px',marginBottom:'20px' }} variant='contained'>Submit</Button>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default Account;