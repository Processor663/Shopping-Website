// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCube, Navigation, Autoplay, Pagination } from 'swiper/modules';

// STYLED COMPONENTS
import { Wrapper } from './Hero.styles';

// IMAGES
import hero1 from "../../assets/hero-image1.webp"
import hero2 from "../../assets/hero-image2.webp"



const Hero = () => {
    return (
        <>
            <Wrapper>
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: false,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    speed={2000}
                    pagination={true}
                    loop={true}
                    navigation={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCube, Navigation, Autoplay, Pagination]}
                >
                  
                        <SwiperSlide>
                            <div style={{ background: `url(${hero1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%", padding: '6em 0' }}>
                            <div className="slider-container" style={{ position: "relative", left: "33%" }}>
                                    <div className="slider-content">
                                        <div className="sub-title">Silver Aluminium</div>
                                        <h1 className="title">Apple Watch</h1>
                                        <input type="text" placeholder='White Sport Band & 30% off First Order' />
                                        <br /><br />
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{ background: `url(${hero2})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%", padding: '6em 0' }}>
                                <div className="slider-container" style={{position: "relative", right:"13%", textAlign: "right"}}>
                                    <div className="slider-content">
                                        <div className="sub-title">Silver Aluminium</div>
                                        <h1 className="title">Apple Phones</h1>
                                        <input type="text" placeholder='White Sport Band & 30% off First Order' />
                                        <br /><br />
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </Wrapper>
        </>
    )
}

export default Hero