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
        <div className='w-full rounded-[50px] overflow-hidden h-96 sm:h-[750px]'>
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
                        <div className={`carousel-item flex items-center justify-center rounded-md h-96 sm:h-[750px] rounded-[50px] bg-container bg-no-repeat bg-cover bg-center`}
                            style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%), url(${item.image})` }}>
                            <div className='flex items-center justify-center w-full p-4 sm:p-8'>
                                <div className='text-center flex flex-col items-center max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-none'>
                                    <h3 className='text-xl sm:text-3xl lg:text-4xl text-white font-bold drop-shadow-md'>
                                        {item.title}
                                    </h3>
                                    <h1 className='text-3xl sm:text-5xl lg:text-7xl text-white font-bold mt-1 sm:mt-2 drop-shadow-lg'>
                                        {item.subtitle}
                                    </h1>
                                    <p className='text-sm sm:text-lg lg:text-2xl text-white font-medium mt-2 sm:mt-4 drop-shadow-md px-2 max-w-xs sm:max-w-none'>
                                        {item.description}
                                    </p>
                                    <Link
                                        className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-2xl sm:w-70 font-bold flex items-center justify-center h-10 sm:h-16 border border-white/30 text-white py-2 px-4 rounded-[25px] bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 ease-in-out shadow-lg"
                                        to="/products">
                                            Explorar colección
                                    </Link>
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