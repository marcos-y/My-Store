import React from 'react';
import AppBar from '../../Components/AppBar/AppBar';
import Card from '../../Components/Card/Card';
import img1 from '../../Images/drones/dron1.jpg';
import img2 from '../../Images/drones/dron2.jpg';
import img3 from '../../Images/drones/dron3.png';
import img4 from '../../Images/drones/dron4.jpg';
import img5 from '../../Images/drones/dron5.png';
import img6 from '../../Images/drones/dron6.jpg';
import img7 from '../../Images/drones/dron7.png';
import img8 from '../../Images/drones/dron8.png';
import img9 from '../../Images/drones/dron9.png';

const items = [
    {
        title: 'Drone1',
        image: img1,
        price: 100,
        type: 'drone'
    },
    {
        title: 'Drone2',
        image: img2,
        price: 200,
        type: 'drone'
    },
    {
        title: 'Drone3',
        image: img3,
        price: 300,
        type: 'drone'
    },
    {
        title: 'Drone4',
        image: img4,
        price: 400,
        type: 'drone'
    },
    {
        title: 'Drone5',
        image: img5,
        price: 400,
        type: 'drone'
    },
    {
        title: 'Drone6',
        image: img6,
        price: 500,
        type: 'drone'
    },
    {
        title: 'Drone7',
        image: img7,
        price: 600,
        type: 'drone'
    },
    {
        title: 'Drone8',
        image: img8,
        price: 700,
        type: 'drone'
    }
]


const Drones = () => {

    return (
        <>
            <AppBar></AppBar>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1100px', margin: 'auto', padding: '10px' }}>
                <h1 style={{ marginLeft: '20px',fontFamily: 'Roboto, sans-serif' }}>Drones</h1>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {
                        items.map((item, index) => (<Card key={index} price={item.price} 
                        image={item.image} title={item.title} type={item.type}></Card>))
                    }
                </div>
            </div>
        </>
    )
}

export default Drones;