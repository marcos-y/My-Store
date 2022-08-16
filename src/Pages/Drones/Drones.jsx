import React from 'react';

//COMPONENTS
import AppBar from '../../Components/AppBar/AppBar';
import Card from '../../Components/Card/Card';

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

const items = [
    {
        title: 'DJI Mavic 3',
        image: img1,
        price: 100,
        type: 'drone',
        description:'DJI Mavic 3 - Camera Drone with 4/3 CMOS Hasselblad Camera, 5.1K Video, Omnidirectional Obstacle Sensing, 46-Min Flight, RC Quadcopter with Advanced Auto Return, Max 15km Video Transmission',
        specs: [
            {spec: 'Backed by DJI customer support - Includes Full DJI USA WARRANTY'},
            {spec: 'Up to 30 Minutes of Flight Time'},
            {spec: 'Stream HD Video From up to 2.5 Miles'},
            {spec: 'Includes Controller & Flight Battery'},
            {spec: '12MP/2.7K Quad HD 3-Axis Gimbal Camera'},
        ]
    },
    {
        title: 'EVO Lite',
        image: img2,
        price: 200,
        type: 'drone',
        description:'Autel Robotics EVO Lite+ Standard Package- Drone Quadcopter UAV with 3-Axis Gimbal Camera, 6K Camera, 20MP Photo, 40 Mins Flight Time Max 7.4 mi. Video SkyLink Transmission, 1-Inch CMOS Sensor',
        specs: [
            {spec: 'Equipped with a high-quality image processor, the Tello drone shoots incredible photos and videos. Even if you don’t know how to fly, you can record pro-level videos with EZ Shots and share them on social media from your smartphone.'},
            {spec: 'Camera features 5MP (2592x1936) photos and HD720 videos at a maximum flight time of 13 minutes.'},
            {spec: 'Tello has two antennas that make video transmission extra stable and a high-capacity battery that offers impressively long flight times.'},
            {spec: 'Thanks to all the tech that Tello’s packing, like a flight controller powered by DJI, you can perform awesome tricks with this mini drone. Flying has never been so fun and easy.'},
            {spec: 'What you get: RyzeTech Tello powered by DJI, 4x Propellers (Pair), Propeller Guards (Set), Battery, Micro USB Cable, Propeller Removal Tool'}
        ]
    },
    {
        title: 'Parrot PF728000 ',
        image: img3,
        price: 300,
        type: 'drone',
        description:'Parrot PF728000 ANAFI Drone, Foldable Quadcopter Drone with 4K HDR Camera, Compact, Silent & Autonomous, Realize your shots with a 180° vertical swivel camera, Dark Grey',
        specs: [
            {spec: 'HD Rotating Camera: Our RC quadcopter is equipped with a motorized HD camera that can rotate up to 180 degrees when recording allowing you to capture every moment making it the perfect choice for catching action scenes or just for casual everyday use'},
            {spec: 'Adjustable Speed Modes: We combine GPS technology with a powerful brushless motor to bring you drones with camera for adults that allow you to choose from 3 speed settings (Slow, Medium, and Fast) while maintaining stability for clearer shots and recordings'},
            {spec: 'GPS And WIFI Support: The long distance drones with cameras use GPS positioning to follow you as you move and use a headless mode function to return to you. It offers Wi-Fi streaming to provide you with a live feed of the recording directly to your phone through the app'},
            {spec: 'Versatile And Multi-Purpose: The professional drones with camera provide altitude hover and location lock functions which coupled with the rotating camera allows you to record videos and take images at just the right angle making them ideal for recording action scenes, parties, aerial shots, etc.'},
            {spec: 'Longer Flight And Coverage: Our HD video recording drones for adults provide up to 32 minutes of flight time on a full charge and maintain a stable connection up to 3500 meters. It can be folded and comes with a carry bag to make traveling simpler. The drove can be recharged through a USB Adaptor within 4-5 hours even when on the gym'}
        ]
    },
    {
        title: 'DJI Air 2S',
        image: img4,
        price: 400,
        type: 'drone',
        description:'DJI Air 2S - Drone Quadcopter UAV with 3-Axis Gimbal Camera, 5.4K Video, 1-Inch CMOS Sensor, 4 Directions of Obstacle Sensing, 31-Min Flight Time, Max 7.5-Mile Video Transmission, MasterShots, Gray',
        specs: [
            {spec: 'Equipped with a high-quality image processor, the Tello drone shoots incredible photos and videos. Even if you don’t know how to fly, you can record pro-level videos with EZ Shots and share them on social media from your smartphone.'},
            {spec: 'Camera features 5MP (2592x1936) photos and HD720 videos at a maximum flight time of 13 minutes.'},
            {spec: 'Tello has two antennas that make video transmission extra stable and a high-capacity battery that offers impressively long flight times.'},
            {spec: 'Thanks to all the tech that Tello’s packing, like a flight controller powered by DJI, you can perform awesome tricks with this mini drone. Flying has never been so fun and easy.'},
            {spec: 'What you get: RyzeTech Tello powered by DJI, 4x Propellers (Pair), Propeller Guards (Set), Battery, Micro USB Cable, Propeller Removal Tool'}
        ]
    },
    {
        title: ' Mini Drone Quadcopter UAV',
        image: img5,
        price: 400,
        type: 'drone',
        description:'Ryze Tech Tello - Mini Drone Quadcopter UAV for Kids Beginners 5MP Camera HD720 Video 13min Flight Time Education Scratch Programming Toy Selfies, powered by DJI, White',
        specs: [
            {spec: 'FPV Adjustable Camera Drone:You can take photos and videos through the 4k high-quality camera assist you to catch every wonderful moment from a birds-eye perspective. You can see real time first-person-view on the App with WiFi transmission,Whether you re shooting at a deserted beach or capturing the details of a fun family reunion.'},
            {spec: 'Drones Core Functions: Dual cameras,Smart hover,Gesture photo,Beauty filter,altitude hold, the aircraft can be folded, six pass with gyroscope, headless mode, voice control,Trajectory flight,music，Multiple functions bring you endless fun'},
            {spec: 'Flight time and appearance: 2 batteries, flight time is about 15 minutes per battery. Modular batteries are easier to install and safer to use. In addition to operating the drone through the remote control, you can also operate it on the APP, which is convenient, fast and fun.'},
            {spec: 'Simple operation: one key to take off/landing , three speeds adjustable, more suitable for beginners and children. Reading the instruction manual can fully understand the functions and usage of the drone.'},
            {spec: 'Appearance design: beautiful body, ABS high-tough chassis, super anti-drop, all-round LED lights. It is more suitable for beginners to learn and use.'}
        ]
    },
    {
        title: 'Vivitar Phoenix Long Flight Time Drone',
        image: img6,
        price: 500,
        type: 'drone',
        description:'Vivitar Phoenix Long Flight Time Drone for Adults, HD Action Camera Quadcopter with Brushless Motor and Wide Range, Foldable WiFi GPS with 3 Speeds, Follow Me, 32 Minutes Flight',
        specs: [
            {spec: 'HD Rotating Camera: Our RC quadcopter is equipped with a motorized HD camera that can rotate up to 180 degrees when recording allowing you to capture every moment making it the perfect choice for catching action scenes or just for casual everyday use'},
            {spec: 'Adjustable Speed Modes: We combine GPS technology with a powerful brushless motor to bring you drones with camera for adults that allow you to choose from 3 speed settings (Slow, Medium, and Fast) while maintaining stability for clearer shots and recordings'},
            {spec: 'GPS And WIFI Support: The long distance drones with cameras use GPS positioning to follow you as you move and use a headless mode function to return to you. It offers Wi-Fi streaming to provide you with a live feed of the recording directly to your phone through the app'},
            {spec: 'Versatile And Multi-Purpose: The professional drones with camera provide altitude hover and location lock functions which coupled with the rotating camera allows you to record videos and take images at just the right angle making them ideal for recording action scenes, parties, aerial shots, etc.'},
            {spec: 'Longer Flight And Coverage: Our HD video recording drones for adults provide up to 32 minutes of flight time on a full charge and maintain a stable connection up to 3500 meters. It can be folded and comes with a carry bag to make traveling simpler. The drove can be recharged through a USB Adaptor within 4-5 hours even when on the go'}
        ]
    },
    {
        title: 'Foldable RC Quadcopters WiFi FPV',
        image: img7,
        price: 600,
        type: 'drone',
        description:'Drones with Dual Camera for Adults Beginners ,Foldable RC Quadcopters WiFi FPV,APP Control,Altitude Hold,One-click Take-off and Landing,Headless Mode,3D Flip,Gesture and voice control,2 Batteries',
        specs: [
            {spec: '【1-INCH IMAGE SENSOR】Equipped with a 1-inch image sensor and large 2.4μm pixels, DJI Air 2S is capable of 5.4K/30fps and 4K/60fps video.'},
            {spec: '【MASTERSHOTS】The next evolution of QuickShots, MasterShots is an advanced intelligent feature that gives users the best shots in any location with just a tap.'},
            {spec: '【THE CENTER OF ATTENTION】FocusTrack features Spotlight 2.0, ActiveTrack 4.0, and Point of Interest 3.0, making it a breeze for DJI Air 2S to follow or circle your subject. Max Service Ceiling Above Sea Level : 5000 m'},
            {spec: 'ONE BILLION COLORS】The 10-bit Dlog-M color profile can record up to one billion colors while retaining all the little details that make footage pop'},
            {spec: '【7.5 MILES MAX VIDEO TRANSMISSION】DJI Air 2S features DJIs most advanced O3 (OcuSync 3.0) image transmission technology, giving you an ultra smooth, clear, and reliable image feed every time you fly.'}
        ]
    },
    {
        title: 'DJI Mavic Mini Portable Drone Quadcopter',
        image: img8,
        price: 700,
        type: 'drone',
        description:'DJI Mavic Mini Portable Drone Quadcopter Fly More Combo Ultimate 128GB Bundle - CP.MA.00000123.01',
        specs: [
            {spec: 'Light as a Smartphone - Weighing less than 0 55lbs / 249 grams, DJI Mini SE is roughly the same weight as the smartphone. In the United States and Canada, you can fly this camera drone without the need to register your drone with the local government.'},
            {spec: 'Capture on the Go - The lightweight and powerful DJI Mini SE camera drone is the ideal for creators on the move. The ultra-portable design allows you to effortlessly capture moments in unforgettable ways.'},
            {spec: 'More Time in the Sky - DJI Mini SEs weight allows it to stay in the air longer than similar consumer drones on the market. Enjoy up to 30 minutes of flight time with a fullycharged battery.'},
            {spec: 'Capture the Detail - DJI Mini SE supports 12MP aerial photos and 2.7K HD videos. A 3-axis motorized gimbal provides superior camera stability and ensures clear ultra-smooth footage.'},
            {spec: 'Upgraded Wind Resistance - DJI Mini SE can resist 29-38kph winds and take off at a max altitude of 4,000 meters, so your footage is stable even when flying along a windy coastline or high above an alpine forest.'}
        ]
    }
]


const Drones = () => {

    return (
        <>
            <AppBar/>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '1100px', margin: 'auto', padding: '10px' }}>
                <h1 style={{ marginLeft: '20px',fontFamily: 'Roboto, sans-serif' }}>Drones</h1>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {
                        items.map((item, index) => (<Card key={index} price={item.price} specs={item.specs}
                        image={item.image} title={item.title} type={item.type} description={item.description}/>))
                    }
                </div>
            </div>
        </>
    )
}

export default Drones;