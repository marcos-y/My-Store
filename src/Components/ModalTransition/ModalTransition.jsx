import React,{useState} from 'react';
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
    marginTop:'43px',
    borderRadius:'10px',
};

export default function ModalTransition(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    //EN ESTE MODAL TENGO QUE RECIBIR EL ARRAY DE PRODUCTOS QUE SE VAN AGREGANDO A LA CESTA - EL ARRAY DEBE SER GLOBAL
    const [items,setItems] = useState([
        {
            name: 'Iphone7',
            price:900,
        },
        {
            name:'Samusmg Galaxy',
            price:1000,
        },
        {
            name:'Lg L1',
            price:700,
        }
    ]);
    localStorage.setItem('Items',items);

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
                            <CloseIcon size="small"></CloseIcon>
                        </IconButton>
                        {/*
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                        */}
                        <h1>MY ITEMS</h1>
                        {
                            items.map((item,index)=>{
                                return(
                                    <Item price={item.price} name={item.name}></Item>
                                )
                            })
                        }
                        <h4>Total: $100</h4>
                        <Button variant="contained">Buy</Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}