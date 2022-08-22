import React, { useEffect,useState } from 'react';
import axios from "axios";

//COMPONENTS
import Card from '../../Components/Card/Card';
import AppBar from '../../Components/AppBar/AppBar';

//IMAGES
import img1 from '../../Images/new/watch1.jpg';
import img2 from '../../Images/new/gamer.jpg';
import img3 from '../../Images/new/tablet1.jpg';
import img4 from '../../Images/new/tablet2.png';
import img5 from '../../Images/new/tablet3.jpg';
import img6 from '../../Images/new/tablet4.jpg';
import img7 from '../../Images/new/tablet5.jpg';
import img8 from '../../Images/new/watch1.jpg';
import img9 from '../../Images/new/watch3.jpg';

const Home = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.
            get('http://localhost:8080/products/newitems')
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
                <h1 style={{ marginLeft: '20px', fontFamily: 'Roboto, sans-serif' }}>New Items!</h1>
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

export default Home;