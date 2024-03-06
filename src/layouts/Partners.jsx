// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Css
import 'swiper/css';
const Parterns = () => {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1000,
                }}
                modules={[Autoplay]}
                className="partner-slide py-10"
            >
                <SwiperSlide className='py-5'>
                    <img src={"../assets/images/partners/abb.png"} alt="" />
                </SwiperSlide>
                <SwiperSlide className='py-5'>
                    <img src={"../assets/images/partners/apple.png"} alt="" />
                </SwiperSlide>
                <SwiperSlide className='py-5'>
                    <img src={"../assets/images/partners/baseus.png"} alt="" />
                </SwiperSlide>
                <SwiperSlide className='py-5'>
                    <img src={"../assets/images/partners/bosch.png"} alt="" />
                </SwiperSlide>
                <SwiperSlide className='py-5'>
                    <img src={"../assets/images/partners/braun.png"} alt="" />
                </SwiperSlide>
                <SwiperSlide className='py-5'>
                    <img src={"../assets/images/partners/canon.png"} alt="" />
                </SwiperSlide>
                <SwiperSlide className='py-5'>
                    <img src={"../assets/images/partners/kapital.png"} alt="" />
                </SwiperSlide>
                <SwiperSlide className='py-5'>
                    <img src={"../assets/images/partners/unibank.png"} alt="" />
                </SwiperSlide>
                <SwiperSlide className='py-5'>
                    <img src={"../assets/images/partners/lg.png"} alt="" />
                </SwiperSlide>
                <SwiperSlide className='py-5'>
                    <img src={"../assets/images/partners/asus.png"} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Parterns;