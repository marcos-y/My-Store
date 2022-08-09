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
import Snackbar from '../../Components/Snackbar/Snackbar';
import Snackbar2 from '../../Components/Snackbar2/Snackbar2';

//ICONS
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //CHANGE LIKE COLOR
  const [color, setColor] = useState(null);
  const handleClickColor = () => {
    setColor('#f44336');
  }

  //OPEN AND CLOSE SNACKBAR
  const [open, setOpen] = React.useState(false);
  const handleClickSnackbar = () => {
    setOpen(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  //OPEN AND CLOSE SNACKBAR2
  const [open2, setOpen2] = React.useState(false);
  const handleClickSnackbar2 = () => {
    setOpen2(true);
  };
  const handleCloseSnackbar2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen2(false);
  };

  //PRODUCT DETAILS
  const image = props.image;
  const name = props.title;
  const price = props.price;
  const quantity = 1;
  const description = { name, price, image, quantity };

  //ADD PRODUCT and TOTAL to CART
  const handleClickAddToCart = (item) => {
    setOpen2(true);

    let storage = JSON.parse(sessionStorage.getItem('Items'));
    console.log('Items', storage);
    sessionStorage.setItem('item:', JSON.stringify(item.name));
    sessionStorage.setItem('price', JSON.stringify(item.price));
    sessionStorage.setItem('image', JSON.stringify(item.image));
    console.log('new item name', item.name);
    console.log('new item price', item.price);
    console.log('new item image', item.image);
    console.log('new item quantity:', item.quantity);
    storage.push(item);
    console.log(storage);
    sessionStorage.setItem('Items', JSON.stringify(storage));

    //adding product price to total
    let total = JSON.parse(sessionStorage.getItem(('Total')));
    total = total + item.price;
    sessionStorage.setItem('Total', total);
  }


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
          Price: ${props.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleClickColor} aria-label="add to favorites">
          <FavoriteIcon style={{ color: color }} />
        </IconButton>
        <IconButton onClick={handleClickSnackbar} aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton onClick={() => handleClickAddToCart(description)}>
          <AddShoppingCartIcon />
        </IconButton>
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
      <Snackbar open={open} handleClose={handleCloseSnackbar} />
      <Snackbar2 open2={open2} handleClose2={handleCloseSnackbar2} />
    </Card>
  );
}