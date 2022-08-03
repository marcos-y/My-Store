import React from 'react';
import AppBar from '../../Components/AppBar/AppBar';
import Card from '../../Components/Card/Card';
import img1 from '../../Images/cellphones/iphone1.jpg';
import img2 from '../../Images/cellphones/iphone2.jpg';
import img3 from '../../Images/cellphones/iphone3.jpg';
import img4 from '../../Images/cellphones/motorola1.jpg';
import img5 from '../../Images/cellphones/motorola2.jpg';
import img6 from '../../Images/cellphones/motorola3.jpg';
import img7 from '../../Images/cellphones/samsumg2.jpg';
import img8 from '../../Images/cellphones/samsumg3.jpg';
import img9 from '../../Images/cellphones/samsumg1.jpg';

const items = [
    {
        title: 'Smarthpone',
        image: img1,
        price: 100,
        type: 'smartphone'
    },
    {
        title: 'Smarthpone',
        image: img2,
        price: 200,
        type: 'smartphone'
    },
    {
        title: 'Smarthpone',
        image: img3,
        price: 300,
        type: 'smartphone'
    },
    {
        title: 'Smarthpone',
        image: img4,
        price: 400,
        type: 'smartphone'
    },
    {
        title: 'Smarthpone',
        image: img5,
        price: 400,
        type: 'smartphone'
    },
    {
        title: 'Smarthpone',
        image: img6,
        price: 500,
        type: 'smartphone'
    },
    {
        title: 'Smarthpone',
        image: img7,
        price: 600,
        type: 'smartphone'
    },
    {
        title: 'Smarthpone',
        image: img8,
        price: 700,
        type: 'smartphone'
    },
    {
        title: 'Smarthpone',
        image: img9,
        price: 800,
        type: 'smartphone'
    }
]


const Smartphones = () => {

    return (
        <>
        <AppBar></AppBar>
        <div style={{display:'flex',flexDirection:'column', maxWidth:'1100px',margin:'auto',padding:'10px'}}>
            <h1 style={{marginLeft:'20px'}}>Smartphones</h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {
                        items.map((item, index) => (<Card key={index} price={item.price} 
                        img={item.image} title={item.title} type={item.type}></Card>))
                    }
            </div>
        </div>
        </>
    )
}

export default Smartphones;