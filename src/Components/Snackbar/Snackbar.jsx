import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SimpleSnackbar(props) {

    const action = (
        <React.Fragment>
            <WhatsAppIcon/>
            <InstagramIcon/>
            <FacebookIcon/>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={props.handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Snackbar
                open={props.open}
                autoHideDuration={3000}
                onClose={props.handleClose}
                message="Share:"
                action={action}
            />
        </div>
    );
}