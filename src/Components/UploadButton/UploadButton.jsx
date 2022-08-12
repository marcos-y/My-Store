import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function UploadButtons() {
    return (
        <Button style={{marginTop:'15px'}} variant="contained" component="label">
          Upload new profile photo
          <input hidden accept="image/*" multiple type="file" />
        </Button>
    );
  }