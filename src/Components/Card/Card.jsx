import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

//COMPONENTS
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SnackbarShare from '../../Components/SnackbarShare/SnackbarShare';
import SnackbarAdded from '../../Components/SnackbarAdded/SnackbarAdded';

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

//THEME PROVIDER
import { createTheme, ThemeProvider } from '@mui/material/styles';


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

const theme = createTheme({
  typography: {
    color: 'black',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

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

  //OPEN AND CLOSE SNACKBAR1
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
  const type = props.type;
  const quantity = 1;
  const description = { name, price, image, quantity, type };

  //ADD PRODUCT and TOTAL to CART
  const handleClickAddToCart = (item) => {
    setOpen2(true);

    //Get Item list from STORAGE
    let storage = JSON.parse(sessionStorage.getItem('Items'));

    //Search if the product has already been added to Array
    const searchItem = (storage.find(({ name }) => name === item.name));
    console.log('searchItem', searchItem);

    //--> In case it's been already added
    if ((searchItem !== undefined) && (searchItem.name === item.name)) {
      alert('Product already added to cart!');
      setOpen2(false);
    }
    //--> In case it's not in the array
    if (searchItem === undefined) {
      //console.log('Items', storage);
      //Save in the STORAGE New Item
      sessionStorage.setItem('item:', JSON.stringify(item.name));
      sessionStorage.setItem('price', JSON.stringify(item.price));
      sessionStorage.setItem('image', JSON.stringify(item.image));
      sessionStorage.setItem('type', JSON.stringify(item.type));
      //console.log('new item name', item.name);
      //console.log('new item price', item.price);
      //console.log('new item image', item.image);
      //console.log('new item quantity:', item.quantity);
      storage.push(item);
      sessionStorage.setItem('Items', JSON.stringify(storage));
      //console.log(storage);
      //adding product price to total
      let total = JSON.parse(sessionStorage.getItem(('Total')));
      total = total + item.price;
      sessionStorage.setItem('Total', total);
    }
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
        <ThemeProvider theme={theme}>
          <Typography>
            {props.description}
            Price: ${props.price}
          </Typography>
        </ThemeProvider>
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
          <Typography paragraph>About this item:</Typography>
          <Typography paragraph>
            {
              props.specs.map((spec) => {
                return (
                  <>
                    <li key={spec} >{spec.spec}</li>
                  </>
                )
              })
            }
          </Typography>
        </CardContent>
      </Collapse>
      <SnackbarAdded open2={open2} handleClose2={handleCloseSnackbar2} />
      <SnackbarShare open={open} handleClose={handleCloseSnackbar} />
    </Card>
  );
}