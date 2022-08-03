import React from 'react';
import Card from '../../Components/Card/Card';
import AppBar from '../../Components/AppBar/AppBar';
import img1 from '../../Images/new/watch1.jpg';
import img2 from '../../Images/new/gamer.jpg';
import img3 from '../../Images/new/tablet1.jpg';
import img4 from '../../Images/new/tablet2.png';
import img5 from '../../Images/new/tablet3.jpg';
import img6 from '../../Images/new/tablet4.jpg';
import img7 from '../../Images/new/tablet5.jpg';
import img8 from '../../Images/new/watch1.jpg';
import img9 from '../../Images/new/watch3.jpg';

const items = [
    {
        title: '',
        image: img1,
        price: 100,
        type: 'new release'
    },
    {
        title: '',
        image: img2,
        price: 200,
        type: 'new release'
    },
    {
        title: '',
        image: img3,
        price: 300,
        type: 'new release'
    },
    {
        title: '',
        image: img4,
        price: 400,
        type: 'new release'
    },
    {
        title: '',
        image: img5,
        price: 400,
        type: 'new release'
    },
    {
        title: '',
        image: img6,
        price: 500,
        type: 'new release'
    },
    {
        title: '',
        image: img7,
        price: 600,
        type: 'new release'
    },
    {
        title: '',
        image: img8,
        price: 700,
        type: 'new release'
    },
    {
        title: '',
        image: img9,
        price: 800,
        type: 'new release'
    }
]

const Home = () => {

    return (
        <>
        <AppBar></AppBar>
        <div style={{display:'flex',flexDirection:'column', maxWidth:'1100px',margin:'auto',padding:'10px'}}>
            <h1 style={{marginLeft:'20px'}}>New Items!</h1>
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

export default Home;