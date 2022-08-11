import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

//ICONS
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TabletIcon from '@mui/icons-material/Tablet';
import ComputerIcon from '@mui/icons-material/Computer';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BuyedCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{
      maxWidth: 345, marginTop: '30px', marginLeft: '20px', backgroundColor: '#e0edf4',
      borderRadius: '10px'
    }}>
      <CardHeader
        avatar={
          props.type === 'computer' ?
            <ComputerIcon /> : (props.type === 'drone' ?
              <PrecisionManufacturingIcon /> : (props.type === 'smartphone' ?
                <SmartphoneIcon /> : (props.type === 'tablet' ?
                  <TabletIcon /> : (props.type === 'new release' ?
                    <NewReleasesIcon /> : null))))
        }
        title={props.title}
        subheader="Available"
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="Gadget"
      />
      <CardContent>
        <Typography fontStyle='roboto' variant="body2" fontWeight='500' fontSize='12' color="text.primary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
        <Typography ontStyle='roboto' variant="body2" fontWeight='500' fontSize='12' color="text.primary">Price: ${props.price}</Typography>
        <Typography ontStyle='roboto' variant="body2" fontWeight='500' fontSize='12' color="text.primary">Quantity: {props.quantity}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Specs:</Typography>
          <Typography paragraph>
            <li>Windows 11 Home - ASUS recommends Windows 11 Pro for business</li>
            <li>12th Intel® Core™ i5 processor</li>
            <li>8 GB memory</li>
            <li>512 GB SSD storage</li>
            <li>14'' 3-sided NanoEdge display</li>
            <li>360° hinge convertible laptop</li>
            <li>Optional ASUS Pen2.0 support</li>
            <li>WiFi 6 (802.11ax)</li>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}