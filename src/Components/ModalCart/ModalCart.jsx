import React,{useState,useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Item from '../Item/Item';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height:'100%',
    overflow:'scroll',
    display:'block',
    marginTop:'30px',
    borderRadius:'10px',
};

export default function ModalTransition(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [click,setClick] = useState(0);
    const handleClick = () => setClick(click+1);

    //ARRAY OF PRODUCTS ADDED TO CART - 'GLOBAL' ARRAY
    const [items,setItems] = useState([{}]);
    const [total,setTotal] = useState(0);

    //Buy button
    const handleClickBuy = () =>{
        //verify form STORAGE if user is Logged
        const isLogged = (sessionStorage.getItem('isLogged'));
        console.log(isLogged);
        if(isLogged==='true'){
            alert('buyed');

            //Get items from STORAGE
            const myShopping = (JSON.parse(sessionStorage.getItem('Items')));
            console.log('my Shopping:',myShopping);

            //Save itmes into STORAGE (SHOULD BE SAVED IN DATABASE) 
            sessionStorage.setItem('myShopping',JSON.stringify(myShopping));

            //Empty cart after buying
            setItems([{}]);
            setTotal(0);
        }
        else{
            alert('Please Login before shopping');
        }
    }

    useEffect(()=>{
        //1__get item list from STORAGE
        setItems(JSON.parse(sessionStorage.getItem('Items')));
        
        //2__get total from STORAGE
        setTotal(JSON.parse(sessionStorage.getItem('Total'))); 

    },[props.open, click]);
 
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <Box sx={style}>
                        <IconButton size="small" onClick={props.handleClose} style={{ float: 'right' }}>
                            <CloseIcon size="small"/>
                        </IconButton>
                        {/*
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                        */}
                        <h1 style={{fontFamily:'roboto'}}>My items</h1>
                        {
                            items.map((item,index)=>{
                                return(
                                    Object.entries(item).length === 0 ?
                                    null
                                    :
                                    <Item key={index} quantity={item.quantity} image={item.image} price={item.price} 
                                    name={item.name} handleClick={handleClick} />
                                )
                            })
                        }
                        <h4 style={{fontFamily:'roboto'}}>Total: {total}$</h4>
                        {
                            total == 0 ? null : (<Button onClick={handleClickBuy} variant="contained">Buy</Button>)
                        }
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}