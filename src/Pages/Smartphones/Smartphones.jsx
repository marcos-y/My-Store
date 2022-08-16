import React from 'react';

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

const items = [
    {
        title: 'SAMSUNG Galaxy S21 FE 5G',
        image: img1,
        price: 100,
        type: 'smartphone',
        description:'SAMSUNG Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display Screen, Pro Grade Camera, All Day Intelligent Battery, US Version, White',
        specs: [
            {spec: '8K SUPER STEADY VIDEO: Shoot videos that rival how epic your life is with stunning 8K recording, the highest recording resolution available on a smartphone; Video captured is effortlessly smooth, thanks to Auto Focus Video Stabilization on Galaxy S22 Ultra'},
            {spec: 'NIGHTOGRAPHY plus PORTAIT MODE: Capture the night with crystal clear, bright pics and videos, no matter the lighting with Night Mode; Portrait Mode auto-detects and adjusts to what you want front and center, making all your photos worthy of a frame'},
            {spec: '108MP PHOTO RESOLUTION plus BRIGHT DISPLAY: Capture premium detail with 108MP resolution— the highest available on a cell phone; Your favorite content will look even more epic on our brightest display ever with Vision Booster'},
            {spec: 'ADAPTIVE COLOR CONTRAST: Streaming on the go, working from your patio or binge-watching late into the night. The Galaxy S22 Ultra adaptive screen automatically optimizes color and brightness, outdoors and indoors'},
            {spec: 'LONG LASTING BATTERY plus FAST CHARGING: Power every scroll, click, tap and stream all day long and then some with an intelligent, long-lasting battery; Dive back into action at a moment’s notice with 45W Super-Fast Charging'}
        ]
    },
    {
        title: 'SAMSUNG Galaxy S22 ',
        image: img2,
        price: 200,
        type: 'smartphone',
        description:'SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black',
        specs: [
            {spec: 'SMOOTH SCROLLING: The 120Hz display delivers a super smooth scroll, with optimized refresh rate, and a fast touch response gives seamless visuals in both work and play'},
            {spec: 'REAL DISPLAY VISION: The high quality display with Dynamic AMOLED 2X delivers vibrant color and brightness, even in bright sunlight'},
            {spec: 'PRO-GRADE CAMERA: The powerful pro grade camera delivers high quality photos and videos, with a Rear Camera that boasts 12MP Ultra Wide, Wide-angle cameras and an 8MP Telephoto Camera; It also features a Front Camera that includes a 32MP Selfie Camera'},
            {spec: '30X SPACE ZOOM: 30x SpaceZoom combines a 3x Hybrid Optic Zoom and 30x digital zoom for high resolution close ups, while the EngageZoom Lock reduces shakiness the further your zoom in'},
            {spec: 'SUPERIOR PERFORMANCE: The power-efficient processor chip offers reliability and performance that boosts every experience, from graphic-heavy gaming to multitasking.'}
        ]
    },
    {
        title: 'SAMSUNG Galaxy A03s',
        image: img3,
        price: 300,
        type: 'smartphone',
        description:'SAMSUNG Galaxy A03s Cell Phone, Factory Unlocked Android Smartphone, 32GB, 3 Camera Lenses, Infinity Display Screen, Long Battery Life, Expandable Storage, US Version, Black',
        specs: [
            {spec: 'LONG LASTING BATTERY: The Galaxy A03s smart phone has the 5,000mAh power you can rely on to be prepared for whatever you get into; And 7.75W charging gives you pick-me-up capacity when you need it'},
            {spec: 'DEPENDABLE PERFORMANCE: Galaxy A03s was designed with processing speed in mind; Its reliable processing power makes downloading, streaming, and sharing a breeze'},
            {spec: 'EXPANDABLE STORAGE: Hold on to all the photos, videos, apps, and music you love; If Galaxy A03s’ built-in 32GB of memory isn’t enough, you can easily store up to a full 1TB more by adding a microSD card'},
            {spec: 'VERSATILE CAMERA EXPERIENCE: From snapshots of your culinary masterpieces and everyday adventures to family reels, Galaxy A03s gives you a multi-lens camera to capture lifes awesome moments'},
            {spec: 'INFINITE DISPLAY: Whether you’re chatting with family and friends or watching videos, the crystal clear HD plus Infinity Display makes everything look brilliant; Get 6.5" of crisp visuals with impressive edge-to-edge viewing on Galaxy A03s'}
        ]
    },
    {
        title: 'OnePlus Nord N20 5G ',
        image: img4,
        price: 400,
        type: 'smartphone',
        description:'OnePlus Nord N20 5G |Android Smart Phone |6.43" AMOLED Display|6+128GB |U.S. Unlocked |4500 mAh Battery | 33W Fast Charging | Blue Smoke',
        specs: [
            {spec: '5G Enabled - The OnePlus Nord N20 is the perfect entry-level 5G phone, featuring premium specs and an affordable price. *5G compatible with T-mobile, Google Fi, Mint Mobile, Metro by TMO, Simple Mobile. 5G available in selected areas, please check with your carrier.'},
            {spec: '6.43” Display - Immerse yourself into your favorite content with a large FHD+ AMOLED Display, delivering sharp detail and deep colors.'},
            {spec: 'Qualcomm Snapdragon 695 - With 6GB of powerful RAM & a 5G Snapdragon processor, the N20 5G can handle anything from your favorite content to streaming online games.'},
            {spec: 'Large 4500mAh Battery - Spend less time plugged in with an extra large battery.'},
            {spec: '33W Fast Charging - Get a day’s power in half an hour with 33W Fast Charging'}
        ]
    },
    {
        title: 'Xperia 5 III Smartphone',
        image: img5,
        price: 400,
        type: 'smartphone',
        description:'Xperia 5 III Smartphone with 6.1" 21:9 HDR OLED 120Hz Display with Triple Camera and Four Focal Lengths, 5G – XQBQ62/B',
        specs: [
            {spec: 'Variable tele lens and Dual PD sensor with Real-time Eye AF'},
            {spec: '360 Reality Audio through its speakers, 360 Spatial Sound up-mixing'},
            {spec: '120Hz 6.1” HDR OLED display “powered by CineAlta”'},
            {spec: 'Triple camera with four focal lengths and object tracking'},
            {spec: 'Win with Game Enhancer’s custom display, audio and mic settings'}
        ]
    },
    {
        title: 'Xperia PRO Portable',
        image: img6,
        price: 500,
        type: 'smartphone',
        description:'Xperia PRO Portable High Speed Transmission Device & Smartphone with HDMI Input, 6.5" 4K HDR OLED Screen, 5G mmWave',
        specs: [
            {spec: 'World’s first smartphone w/ HDMI connectivity to capable cameras'},
            {spec: 'Fast reliable signal w/ unique 360-degree 4-way 5G mmWave antenna'},
            {spec: '6.5” 4K HDR 21:9 OLED display doubles as camera monitor via HDMI'},
            {spec: 'Livestream w/ services like YouTube using HDMI connected camera'},
            {spec: 'Fast, easy file transfer w/ USB-C and FTP upload via 5G connectivity'}
        ]
    },
    {
        title: 'OnePlus 9 Winter Mist',
        image: img7,
        price: 600,
        type: 'smartphone',
        description:'OnePlus 9 Winter Mist, 5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage, 120Hz Fluid Display, Hasselblad Triple Camera, 65W Ultra Fast Charge, 15W Wireless Charge, with Alexa Built-in',
        specs: [
            {spec: 'Hasselblad Camera for Mobile- Take your best shot with the OnePlus 9 5G’s Triple Camera system co-developed by Hasselblad, featuring a 48MP main camera, 50MP Ultra-Wide camera, and 2MP monochrome lens'},
            {spec: 'Qualcomm Snapdragon 888 - Powered by the most powerful Snapdragon platform yet, the OnePlus 9 5G delivers fast and smooth performance across every app'},
            {spec: 'A Day’s Power in 15 Minutes - Take wired charging to the next level with Warp Charge 65T. The OnePlus 9 5G also supports Qi wireless charging for those wanting to take their charging wireless'},
            {spec: '120 Hz Fluid Display - 6.55” Full HD display with a 120 Hz refresh rate. Scroll, swipe, and enjoy all your entertainment effortlessly on this stunning display'},
            {spec: '5G Capable – Experience faster upload and download speeds along with lower latency when connected to a 5G network only compatible with T-Mobile 5G'}
        ]
    },
    {
        title: 'Nokia C20',
        image: img8,
        price: 700,
        type: 'smartphone',
        description:'Nokia C20 | Android 11 (Go Edition) | Unlocked Smartphone | 2-Day Battery | Dual SIM | 2/32GB | 6.52-Inch Screen | Dark Blue',
        specs: [
            {spec: 'Enjoy a stylish, reliable design at incredible value'},
            {spec: 'Capture the best of family moments'},
            {spec: 'Be immersed in what you watch, whenever you want'},
            {spec: 'Do more, watch more, listen to more – even as you move more'},
            {spec: 'Get to what’s on your phone faster – but keep it all safer'}
        ]
    },
    {
        title: 'SAMSUNG Galaxy S22+ ',
        image: img9,
        price: 800,
        type: 'smartphone',
        description:'SAMSUNG Galaxy S22+ Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black',
        specs: [
            {spec: '8K SUPER STEADY VIDEO: Shoot videos that rival how epic your life is with stunning 8K recording, the highest recording resolution available on a smartphone; Video captured is effortlessly smooth, thanks to Auto Focus Video Stabilization on Galaxy S22'},
            {spec: 'NIGHTOGRAPHY plus PORTAIT MODE: Capture the night with crystal clear, bright pics and videos, no matter the lighting with Night Mode; Portrait Mode auto-detects and adjusts to what you want front and center, making all your photos worthy of a frame'},
            {spec: '50MP PHOTO RESOLUTION plus BRIGHT DISPLAY: From elaborate landscapes to intricate creations, capture vivid detail with 50MP resolution; Your favorite content will look even more epic on our brightest display ever with Vision Booster'},
            {spec: 'ADAPTIVE COLOR CONTRAST: Streaming on the go, working from your patio or binge-watching late into the night. The Galaxy S22 adaptive screen automatically optimizes color and brightness, outdoors and indoors'},
            {spec: 'LONG LASTING BATTERY plus FAST CHARGING: Power every scroll, click, tap and stream all day long with an intelligent battery that works with you, not against you; Dive back into action at a moment’s notice with 25W Super-Fast Charging'}
        ]
    }
]


const Smartphones = () => {

    return (
        <>
        <AppBar/>
        <div style={{display:'flex',flexDirection:'column', maxWidth:'1100px',margin:'auto',padding:'10px'}}>
            <h1 style={{marginLeft:'20px',fontFamily: 'Roboto, sans-serif'}}>Smartphones</h1>
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

export default Smartphones;