import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import TextfieldPassword from '../TextfieldPassword/TextfieldPassword';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  backgroundColor: '#e0edf4',
};

export default function BasicModal(props) {

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  const user = [{ email, password }];

  const handleClick = () => {
    console.log(email, password);
    if ((email == 'marcos@gmail') && (password == 123)) {
      setIsLogged(true);
      sessionStorage.setItem('isLogged', true);
    }
    setEmail('');
    setPassword('');
    props.handleClose2();
  }

  const handleClickLogout = () => {
    sessionStorage.setItem('isLogged', false);
  }

  return (
    <div>
      <Modal
        open={props.open2}
        onClose={props.handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '8px' }}>
            <IconButton onClick={props.handleClose2} style={{ float: 'right' }}>
              <CloseIcon/>
            </IconButton>
            <ThemeProvider theme={theme}>
              <Typography id="modal-modal-title" variant="h4" >
                Log In
              </Typography>
            </ThemeProvider>
            <TextField onChange={handleChangeEmail} value={email} style={{ marginTop: '15px' }}
              id="outlined-basic" label="Email" variant="outlined" />

            <TextField onChange={handleChangePassword} value={password} style={{ marginTop: '15px' }}
              id="outlined-basic" label="Password" variant="outlined" />
            {/*
            <TextfieldPassword password={password}></TextfieldPassword>
            */}
            <Button onClick={handleClick} style={{ marginTop: '10px' }} variant="contained">
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}