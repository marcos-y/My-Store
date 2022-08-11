import React from 'react';
import AppBar from '../../Components/AppBar/AppBar';
import BuyedCard from '../../Components/BuyedCard/BuyedCard';
import img1 from '../../Images/drones/dron1.jpg';
import img2 from '../../Images/drones/dron2.jpg';
import img3 from '../../Images/drones/dron3.png';
import img4 from '../../Images/drones/dron4.jpg';
import img5 from '../../Images/drones/dron5.png';
import img6 from '../../Images/drones/dron6.jpg';
import img7 from '../../Images/drones/dron7.png';
import img8 from '../../Images/drones/dron8.png';
import img9 from '../../Images/drones/dron9.png';

const Dashboard = () =>{

    //Receive from the database
    const items = (JSON.parse(sessionStorage.getItem('myShopping')));
    console.log('Items:',items);

    return(
        <>
            <AppBar/>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1100px', margin: 'auto', padding: '10px' }}>
                <h1 style={{ marginLeft: '20px',fontFamily: 'Roboto, sans-serif' }}>My Latest Shopping</h1>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {
                        items.map((item, index) => ( 
                            Object.entries(item).length === 0 ?
                            null
                            :
                            <BuyedCard key={index} price={item.price} image={item.image} quantity={item.quantity} 
                            title={item.name} type={item.type}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard;