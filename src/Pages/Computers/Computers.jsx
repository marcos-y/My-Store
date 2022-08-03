import React from 'react';
import AppBar from '../../Components/AppBar/AppBar';
import Card from '../../Components/Card/Card';
import img1 from '../../Images/computers/asus1.jpg';
import img2 from '../../Images/computers/asus2.jpg';
import img3 from '../../Images/computers/dell.jpeg';
import img4 from '../../Images/computers/dell2.jpg';
import img5 from '../../Images/computers/hp1.jpg';
import img6 from '../../Images/computers/hp2.jpg';
import img7 from '../../Images/computers/hp3.jpg';
import img8 from '../../Images/computers/lenovo1.png';
import img9 from '../../Images/computers/lenovo2.png';

const Computers = () => {

    const items = [
        {
            title: 'Asus1',
            image: img1,
            price: 100,
            type: 'computer'
        },
        {
            title: 'Asus2',
            image: img2,
            price: 200,
            type: 'computer'
        },
        {
            title: 'Dell1',
            image: img3,
            price: 300,
            type: 'computer'
        },
        {
            title: 'Dell2',
            image: img4,
            price: 400,
            type: 'computer'
        },
        {
            title: 'Hp1',
            image: img5,
            price: 400,
            type: 'computer'
        },
        {
            title: 'Hp2',
            image: img6,
            price: 500,
            type: 'computer'
        },
        {
            title: 'Hp3',
            image: img7,
            price: 600,
            type: 'computer'
        },
        {
            title: 'Lenovo1',
            image: img8,
            price: 700,
            type: 'computer'
        },
        {
            title: 'Lenovo2',
            image: img9,
            price: 800,
            type: 'computer'
        }
    ]

    return (
        <>
            <AppBar></AppBar>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1100px', margin: 'auto', padding: '10px' }}>
                <h1 style={{ marginLeft: '20px' }}>Computers</h1>
                {/*
                <div style={{ display: 'flex', justifyContent: 'center',flexWrap:'wrap' }}>
                    <Card img={img1} title={title1} price={price1} type={productType}></Card>
                    <Card img={img2} title={title2} price={price2} type={productType}></Card>
                    <Card img={img3} title={title3} price={price3} type={productType}></Card>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center',flexWrap:'wrap' }}>
                    <Card img={img4} title={title4} price={price4} type={productType}></Card>
                    <Card img={img5} title={title5} price={price5} type={productType}></Card>
                    <Card img={img6} title={title6} price={price6} type={productType}></Card>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center',flexWrap:'wrap' }}>
                    <Card img={img7} title={title7} price={price7} type={productType}></Card>
                    <Card img={img8} title={title8} price={price8} type={productType}></Card>
                    <Card img={img9}title={title9} price={price9} type={productType}></Card>
                </div>
                */}
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {
                        items.map((item, index) => (<Card key={index} price={item.price} img={item.image} title={item.title}
                        type={item.type}></Card>))
                    }
                </div>
            </div>


        </>
    )
}

export default Computers