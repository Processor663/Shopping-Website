// STYLED COMPONENTS
import { Wrapper } from "./Testimonial.styles"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// IMPORTED IMAGES
import img1 from "../../../assets/T1.jpg"
import img2 from "../../../assets/T2.jpg"
import img3 from "../../../assets/T3.png"

type Users = {
    name: string,
    discipline: string,
    image: string
}

const users: Users[] = [
    { name: "Amadi Miracle", discipline: "Software Engineer", image: img1 },
    { name: "Favour Hooper", discipline: "Data Scientist", image: img2 },
    { name: "Anthony Jones", discipline: "Cyber Security Expert", image: img3 },
]




const Testimonial = () => {
    return (
        <>
            <Wrapper>
                <h5>Our Testimonials</h5>
                <Swiper
                    // install Swiper modules
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log( 'slide change' )}
                    onSwiper={( swiper ) => console.log( swiper )}
                >
                    {users.map( ( user, index ) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-container">
                                <div className="user-container">
                                    <img src={user.image} alt="testimonial-image" />
                                    <h6 className="user-name">{user.name}</h6>
                                    <small className="user-designation">{user.discipline}</small>
                                </div>
                                <div className="testimonial-desc">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minima!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ) )}

                </Swiper>
            </Wrapper>

        </>
    )
}

export default Testimonial