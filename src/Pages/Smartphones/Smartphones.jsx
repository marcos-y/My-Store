import React, { useEffect, useState } from 'react';
import axios from 'axios';

//COMPONENTS
import AppBar from '../../Components/AppBar/AppBar';
import Card from '../../Components/Card/Card';

//IMAGES
import img1 from '../../Images/cellphones/iphone1.jpg';
import img2 from '../../Images/cellphones/iphone2.jpg';
import img3 from '../../Images/cellphones/iphone3.jpg';
import img4 from '../../Images/cellphones/motorola1.jpg';
import img5 from '../../Images/cellphones/motorola2.jpg';
import img6 from '../../Images/cellphones/motorola3.jpg';
import img7 from '../../Images/cellphones/samsumg2.jpg';
import img8 from '../../Images/cellphones/samsumg3.jpg';
import img9 from '../../Images/cellphones/samsumg1.jpg';

const Smartphones = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/products/smartphones')
            .then(res => {
                console.log('database data:', res.data.data);
                setItems(res.data.data);
                })
            .catch(e => console.log(e));
    },[])

    return (
        <>
            <AppBar />
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1100px', margin: 'auto', padding: '10px' }}>
                <h1 style={{ marginLeft: '20px', fontFamily: 'Roboto, sans-serif' }}>Smartphones</h1>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {
                        items.map((item, index) => (
                            <Card key={index} 
                            price={item.price}
                            spec1={item.spec1}  
                            spec2={item.spec2}  
                            spec3={item.spec3}  
                            spec4={item.spec4}  
                            spec5={item.spec5}
                            image={item.image} 
                            title={item.title} 
                            type={item.type} 
                            description={item.description} />))
                    }
                </div>
            </div>
        </>
    )
}

export default Smartphones;