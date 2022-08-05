import React from 'react';
import AppBar from '../../Components/AppBar/AppBar';
import TextfieldPassword from '../../Components/TextfieldPassword/TextfieldPassword';

const Account = () => {

    return (
        <>
            <AppBar></AppBar>
            <div style={{
                maxWidth: '600px', margin: 'auto', padding: '8px', marginTop: '6px',
                backgroundColor: 'white', borderRadius: '10px', fontFamily:'roboto'
            }}>
            <div style={{margin:'auto'}}>
                <h1>Account</h1>
                <h2>Change Password</h2>
                <TextfieldPassword></TextfieldPassword>
                <h3>Repeat password:</h3>
                <TextfieldPassword></TextfieldPassword>
            </div>
            </div>
        </>
    )
}

export default Account;