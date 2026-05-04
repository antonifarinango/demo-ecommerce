// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';

import { bannerLists } from '../../utils';
import { Link } from 'react-router-dom';


const HeroBanner = () => {
    return (
        <div className='rounded-[50px] overflow-hidden sm-h-[750px] flex items-center justify-center'>
            <Swiper
                grabCursor={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                slidesPerView={1}>

                {bannerLists.map((item, i) => (
                    <SwiperSlide key={item.id}>
                        <div className={`carousel-item flex justify-center rounded-md sm:h-[750px] rounded-[50px] h-96 bg-container bg-no-repeat bg-[length:130%_100%] sm:bg-cover sm:bg-center sm:bg-no-repeat`}
                            style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%), url(${item.image})` }}>
                            <div className='flex items-center justify-center'>
                                <div className='hidden lg:flex justify-center w-3/3 p-8'>
                                    <div className='text-center flex flex-col items-center'>
                                        <h3 className='text-4xl text-white font-bold'>
                                            {item.title}
                                        </h3>
                                        <h1 className='text-7xl text-white font-bold mt-2'>
                                            {item.subtitle}
                                        </h1>
                                        <p className='text-2xl text-white font-bold mt-4'>
                                            {item.description}
                                        </p>
                                        <Link
                                            className="mt-6 sm:text-2xl sm:w-70 font-bold flex items-center justify-center sm:h-16 border border-white/30 text-white text-xl py-2 px-4 rounded-[25px] bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                                            to="/products">
                                                Explorar colección
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}


export default HeroBanner;