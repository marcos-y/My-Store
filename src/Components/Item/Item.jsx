import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import img1 from '../../Images/iphone.jpg';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Item = (props) => {

    const [counter, setCounter] = useState(1);
    const handleClickAdd = () => {
        setCounter(counter + 1);
        //ADDING PRODUCT QUANTITY TO TOTAL
        let total = total + props.price;
        console.log(total);
        sessionStorage.setItem('Total', total);
    }
    const handleClickSubstract = () => {
        setCounter(counter - 1);
        //SUBSTRACTING PRODUCT QUANTITY TO TOTAL
        let total = total - props.price;
        console.log(total);
        sessionStorage.setItem('Total', total);
    }

    return (
        <>
            <div style={{
                display: 'flex', flexDirection: 'column', backgroundColor: '#e0edf4',
                marginBottom: '10px', padding: '8px', borderRadius: '10px',fontFamily:'roboto'
            }}>
                <h5 >{props.name}</h5>
                <div style={{ display: 'flex', maxWidth: '200px' }}>
                    <img src={props.image} style={{ maxWidth: '100px', marginRight: '5px', borderRadius: '5px' }}></img>
                    <div style={{
                        display: 'flex', backgroundColor: 'wheat',
                        borderRadius: '5px', maxHeight: '60px', textAlign: 'center'
                    }}>
                        <IconButton onClick={handleClickAdd}>
                            <AddIcon></AddIcon>
                        </IconButton>
                        <h4 style={{ marginBottom: '10px' }}>{counter}</h4>
                        <IconButton onClick={counter >= 1 ? handleClickSubstract : null}>
                            <RemoveIcon></RemoveIcon>
                        </IconButton>
                    </div>
                    <IconButton style={{ float: 'right', height: '40px', marginRight: '10px' }}>
                        <DeleteForeverIcon ></DeleteForeverIcon>
                    </IconButton>
                </div>
                <h5>Price: ${(props.price) * counter}</h5>
            </div>
        </>
    )
}

export default Item;