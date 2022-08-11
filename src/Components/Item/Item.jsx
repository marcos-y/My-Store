import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import img1 from '../../Images/iphone.jpg';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';

const Item = (props) => {

    //1__getting product list
    const items = JSON.parse(sessionStorage.getItem('Items'));
    //console.log('items list:', items);
    //2__finding product and getting it's quantity
    const item = (items.find(({ name }) => name === props.name));
    const number = (item === undefined) ? 0 : item.quantity;
    //console.log('item search:', item);
    //console.log('previous item quantity:', item.quantity);

    const [counter, setCounter] = useState(number);

    const handleClickAdd = () => {

        //updating quantity
        item.quantity = item.quantity + 1;
        console.log('NEW QUANTITY', item.quantity);

        //updating list with new quantity
        Object.assign(items, item);
        console.log('Items list with new quantity:', items);
        sessionStorage.setItem('Items', JSON.stringify(items));

        //updating quantity number in ITEM component
        setCounter(counter + 1);

        //Adding product quantity TO TOTAL
        let total = JSON.parse(sessionStorage.getItem('Total')) + (props.price);
        console.log(total);
        sessionStorage.setItem('Total', total);

        //triggers useEffect
        props.handleClick();
    }

    const handleClickSubstract = () => {

        //updating quantity
        item.quantity = item.quantity - 1;
        console.log('NEW QUANTITY', item.quantity);

        //updating list with new quantity
        Object.assign(items, item);
        console.log('Items list with new quantity:', items);
        sessionStorage.setItem('Items', JSON.stringify(items));

        //updating quantity number in ITEM component
        setCounter(counter - 1);

        //Substract from TOTAL
        let total = JSON.parse(sessionStorage.getItem('Total')) - (props.price);
        console.log(total);
        sessionStorage.setItem('Total', total);

        //triggers useEffect
        props.handleClick();
    }

    const handleClickDelete = () => {
        alert('Deleted!');
        const array = JSON.parse(sessionStorage.getItem('Items'));
        const newArray = JSON.stringify(array.filter((item) => item.name !== props.name));
        console.log('NewArray:', newArray);
        sessionStorage.setItem('Items', newArray);
        const total = JSON.parse(sessionStorage.getItem('Total')) - props.price ;
        console.log('TOTal deleted',total);
        sessionStorage.setItem('Total',total);
    }

    return (
        <>
            <div style={{
                display: 'flex', flexDirection: 'column', backgroundColor: '#e0edf4',
                marginBottom: '10px', padding: '8px', borderRadius: '10px', fontFamily: 'roboto'
            }}>
                <h5 >{props.name}</h5>
                <div style={{ display: 'flex', maxWidth: '200px' }}>
                    <img src={props.image} style={{ maxWidth: '100px', marginRight: '5px', borderRadius: '5px' }}></img>
                    <div style={{
                        display: 'flex', backgroundColor: 'wheat',
                        borderRadius: '5px', maxHeight: '60px', textAlign: 'center'
                    }}>
                        <IconButton onClick={handleClickAdd}>
                            <AddIcon />
                        </IconButton>
                        <h4 style={{ marginBottom: '10px' }}>{counter}</h4>
                        <IconButton onClick={counter > 1 ? handleClickSubstract : null}>
                            <RemoveIcon />
                        </IconButton>
                    </div>
                    <IconButton style={{ float: 'right', height: '40px', marginRight: '10px' }}>
                        <DeleteForeverIcon onClick={handleClickDelete} />
                    </IconButton>
                </div>
                <h5>Price: ${(props.price)}</h5>
            </div>
        </>
    )
}

export default Item;