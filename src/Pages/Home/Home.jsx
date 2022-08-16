import React from 'react';

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

const items = [
    {
        title: 'Smartwatch1',
        image: img1,
        price: 100,
        type: 'new release',
        description: 'Garmin 010-02173-11 Venu, GPS Smartwatch with Bright Touchscreen Display, Features Music, Body Energy Monitoring, Animated Workouts, Pulse Ox Sensor and More, Black',
        specs: [
            { spec: 'Beautiful, bright amoled display and up to five-day battery life in smartwatch mode; Up to six hours in GPS and music mode' },
            { spec: 'The broadest range of all-day health monitoring features keeps track of your energy levels, respiration, menstrual cycle, stress, sleep, estimated heart rate and more' },
            { spec: 'Easily download songs to your watch, including playlists from Spotify, Amazon music or Deezer (may require a premium subscription With a third-party music provider), and connect with headphones (sold separately) for phone-free listening' },
            { spec: 'Record all the ways to move with more than 20 preloaded GPS and indoor sports apps, including yoga, running, pool swimming and more' },
            { spec: 'Get easy-to-follow, animated cardio, strength, yoga and Pilates workouts right on your watch screen. Smartphone compatibility-iPhone, Android' }
        ]
    },
    {
        title: 'Alienware Notebook',
        image: img2,
        price: 200,
        type: 'new release',
        description: 'Alienware m15 R4 RTX 3070 Gaming Laptop Full HD (FHD), 15.6 inch - Intel Core i7-10870H, 16GB DDR4 RAM, 1TB SSD, NVIDIA GeForce RTX 3070 8GB GDDR6, Windows 10 Home - Lunar Light',
        specs: [
            { spec: '15.6-inch FHD (Full HD 1920 x 1080) 300Hz 3ms 300-nits 100% sRGB color gamut' },
            { spec: '10th Generation Intel Core i7-10870H (8-Core, 16MB Cache, up to 5.0GHz Max Turbo Frequency)' },
            { spec: '16GB 2933MHz DDR4 , 1 TB PCIe SSD' },
            { spec: 'NVIDIA GeForce RTX 3070 8GB GDDR6' },
            { spec: 'Killer Wi-Fi 6 AX1650i 802.11ax 2x2 Wireless LAN + Bluetooth 5.1' }
        ]
    },
    {
        title: 'Nexus 7',
        image: img3,
        price: 300,
        type: 'new release',
        description: 'Nexus 7 from Google (7-Inch, 16 GB, Black) by ASUS (2013) Tablet',
        specs: [
            { spec: '7-inch tablet screen, 1200x1920 (323 ppi), LED-backlit IPS LCD capacitive touchscreen' },
            { spec: 'Powerful 3950 mAh battery, 10 hours, 15Wh Li-polymer Battery' },
            { spec: 'Qualcomm Snapdragon S4 Pro 8064 Quad-Core, 1.5 GHz' },
            { spec: 'Memory: 2GB, 1.2 MP Front Camera, 5 MP Rear Camera, Auto focus (rear), Large f2.4 aperture. (rear camera)' },
            { spec: 'Output:5.2V 1.35A/7W for other USB device, Input:100-240V AC, 50/60Hz universal, Support Wireless Charging' }
        ]
    },
    {
        title: 'Nexus 7 4G LTE by ASUS',
        image: img4,
        price: 400,
        type: 'new release',
        description: 'Google Nexus 7 4G LTE Tablet by ASUS, Black 7-Inch 32GB (Verizon Wireless)',
        specs: [
            { spec: 'Display: 7.0-inches' },
            { spec: 'Camera: 5-MP' },
            { spec: 'Processor Speed: 1.5 GHz' },
            { spec: 'OS: Android 4.4 (KitKat)' },
        ]
    },
    {
        title: 'Google Nexus 10',
        image: img5,
        price: 400,
        type: 'new release',
        description: 'Google Nexus 10 (Wi-Fi only, 32 GB)',
        specs: [
            { spec: 'Dual-core A15 processor' },
            { spec: '2GB of system memory and 32GB on-board storage memory, Android 4.2 (Jelly Bean) OS' },
            { spec: '10.55" touchscreen, 2560 x 1600 resolution' },
            { spec: 'Built-in 802.11b/g/n WiFi and Bluetooth' },
            { spec: 'Back 5MP webcam and front 1.9MP webcam' }
        ]
    },
    {
        title: 'LG G Pad 4G LTE',
        image: img6,
        price: 500,
        type: 'new release',
        description: 'LG G Pad 4G LTE Tablet, Black 10.1-Inch 16GB (Verizon Wireless)',
        specs: [
            { spec: 'Display: 10.1-inches' },
            { spec: 'Camera: 5-MP' },
            { spec: 'Processor Speed: 1.2 GHz' },
            { spec: 'OS: Android 4.4 (KitKat)' },
        ]
    },
    {
        title: 'Lenovo Tab M8 Tablet',
        image: img7,
        price: 600,
        type: 'new release',
        description: 'Lenovo Tab M8 Tablet, HD Android Tablet, Quad-Core Processor, 2GHz, 32GB Storage, Full Metal Cover, Long Battery Life, Android 10 Pie, Slate Black',
        specs: [
            { spec: 'Stunning performance and stylish design combine in this quick, powerful Android tablet, powered by a Quad-Core, 2.0 GHz processor and Android 9 Pie' },
            { spec: 'The modern, refined look and feel are accentuated by the full metal cover and 82% panel-to-body ratio' },
            { spec: 'The stunning 8" HD (1280 x 800) display brings you a crisper and brighter image, so you can watch your favorite movies and shows without missing a detail' },
            { spec: 'Stay connected with built-in Bluetooth 5.0 and Wi-Fi 802.11 a/b/g/n/ac (2.4/5 GHz), and capture the moment with front and rear cameras' },
            { spec: 'Long-life battery – Watch or browse all day long without the need to recharge with 5000 mAh battery capacity' }
        ],
    },
    {
        title: 'SAMSUNG Galaxy Watch 5',
        image: img8,
        price: 700,
        type: 'new release',
        description: 'SAMSUNG Galaxy Watch 5 40mm Bluetooth Smartwatch w/Body, Health, Fitness and Sleep Tracker, Improved Battery, Sapphire Crystal Glass, Enhanced GPS Tracking, US Version, Gray',
        specs: [
            { spec: 'ADVANCED SLEEP COACHING: Manage your overall sleep quality with an advanced sleep tracker that detects and analyzes sleep stages while you rest; Plus, Advanced Sleep Coaching helps you develop better sleep habits by analyzing your sleep patterns*' },
            { spec: 'BODY COMPOSITION ANALYSIS (BIA)**: Galaxy Watch5 provides body composition data right on your wrist; On your own schedule, you can now get readings on body fat, skeletal muscle, body water, basal metabolic rate and Body Mass Index (BMI)' },
            { spec: 'IMPROVED SENSOR ACCURACY: Stay up to date on your wellness; Get an accurate heart rate thanks to an improved, curved Samsung BioActive Sensor that gets closer to your skin***' },
            { spec: 'AUTO WORKOUT TRACKING: Make the most of every adventure with Auto Workout Tracking — from running to rowing to swimming — automatically in just minutes, and manually tracking more than 90 exercises, including complex activities like HIIT****' },
            { spec: 'IMPROVED BATTERY & GALAXY CONNECTED EXPERIENCE: Meet the watch that goes as long as you do; Galaxy Watch5’s improved battery keeps up with your busiest day***** Do more with synced Galaxy devices that work in perfect harmony******' }
        ]
    },
    {
        title: 'Garmin 010-02173-11 Venu',
        image: img9,
        price: 800,
        type: 'new release',
        description: 'Garmin 010-02173-11 Venu, GPS Smartwatch with Bright Touchscreen Display, Features Music, Body Energy Monitoring, Animated Workouts, Pulse Ox Sensor and More, Black',
        specs: [
            { spec: 'Beautiful, bright amoled display and up to five-day battery life in smartwatch mode; Up to six hours in GPS and music mode' },
            { spec: 'The broadest range of all-day health monitoring features keeps track of your energy levels, respiration, menstrual cycle, stress, sleep, estimated heart rate and more' },
            { spec: 'Easily download songs to your watch, including playlists from Spotify, Amazon music or Deezer (may require a premium subscription With a third-party music provider), and connect with headphones (sold separately) for phone-free listening' },
            { spec: 'Record all the ways to move with more than 20 preloaded GPS and indoor sports apps, including yoga, running, pool swimming and more' },
            { spec: 'Get easy-to-follow, animated cardio, strength, yoga and Pilates workouts right on your watch screen. Smartphone compatibility-iPhone, Android' }
        ]
    }
]

const Home = () => {

    return (
        <>
            <AppBar />
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1100px', margin: 'auto', padding: '10px' }}>
                <h1 style={{ marginLeft: '20px', fontFamily: 'Roboto, sans-serif' }}>New Items!</h1>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {
                        items.map((item, index) => (<Card key={index} price={item.price} specs={item.specs}
                            image={item.image} title={item.title} type={item.type} description={item.description} />))
                    }
                </div>
            </div>
        </>
    )
}

export default Home;