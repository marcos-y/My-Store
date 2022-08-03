import  React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Snackbar from '../../Components/Snackbar/Snackbar';
import Snackbar2 from '../../Components/Snackbar2/Snackbar2';

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
  const [color,setColor] = useState(null);
  const handleClickColor = () =>{
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

  //ADD PRODUCT TO CART
  const handleClickBuy = (item) =>{
    setOpen2(true);
    sessionStorage.setItem('item1:',JSON.stringify(item.title));
    sessionStorage.setItem('price',JSON.stringify(item.price));
  }
  const title = props.title;
  const price = props.price;
  const description = {title,price};

  //ICONS DEPENDING ON THE TYPE OF PRODUCT
  const smartIcon = <SmartphoneIcon></SmartphoneIcon>;
  const tabletIcon = <TabletIcon></TabletIcon>;
  const computerIcon = <ComputerIcon></ComputerIcon>;
  const robotIcon = <PrecisionManufacturingIcon></PrecisionManufacturingIcon>;
  const newRelease = <NewReleasesIcon></NewReleasesIcon>;
  
  return (
    <Card sx={{ maxWidth: 345, marginTop: '30px', marginLeft: '20px',backgroundColor:'#e0edf4', 
    borderRadius:'10px' }}>
      <CardHeader
        avatar={
          props.type === 'computer' ? <ComputerIcon></ComputerIcon> : (props.type==='drone' ? 
          <PrecisionManufacturingIcon></PrecisionManufacturingIcon> : (props.type==='smartphone' ?
          <SmartphoneIcon></SmartphoneIcon> : (props.type=== 'tablet' ? <TabletIcon></TabletIcon> : (props.type==='new release' ?
          <NewReleasesIcon></NewReleasesIcon> : null ))))
        }
        title={props.title}
        subheader="Available"
      />
      <CardMedia
        component="img"
        height="194"
        image={props.img}
        alt="Gadget"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
          Price: ${props.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleClickColor} aria-label="add to favorites">
          <FavoriteIcon style={{color: color}} />
        </IconButton>
        <IconButton onClick={handleClickSnackbar} aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton onClick={()=>handleClickBuy(description)}>
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
      <Snackbar open={open} handleClose={handleCloseSnackbar}></Snackbar>
      <Snackbar2 open2={open2} handleClose2={handleCloseSnackbar2}></Snackbar2>
    </Card>
  );
}