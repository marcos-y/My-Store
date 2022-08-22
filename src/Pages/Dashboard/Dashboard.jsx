import React from 'react';

//COMPONENTS
import AppBar from '../../Components/AppBar/AppBar';
import BuyedCard from '../../Components/BuyedCard/BuyedCard';

//IMAGES
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

    //Receive items from the database (shouldn't be from STORAGE!)
    const items = (JSON.parse(sessionStorage.getItem('myShopping')));
    console.log('Buyed Items:',items);

    return(
        <>
            <AppBar/>
            <div style={{width:'100%',backgroundColor:'#c4d8e5', display: 'flex', flexDirection: 'column', margin: 'auto' }}>
                <h1 style={{ marginTop:'40px',marginLeft: '140px',fontFamily: 'Roboto, sans-serif' }}>My Latest Shopping</h1>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap',marginBottom:'20px' }}>
                    {
                        items == null ?
                        null
                        :
                        (
                        items.map((item, index) => ( 
                            <BuyedCard key={index} price={item.price} image={item.image} quantity={item.quantity} 
                            title={item.name} type={item.type}/>
                        ))
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard;