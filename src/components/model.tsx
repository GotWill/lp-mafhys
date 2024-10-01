import model1 from '../assets/model-parties/1.png'
import model2 from '../assets/model-parties/2.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../assets/css/swiper.css'
import { Navigation, Pagination } from 'swiper/modules';

const Model = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <section className='pt-[51px] pb-[39px]' id='modelos-pet'>
            <div className='flex justify-between max-md:flex-col max-md:gap-4'>
                <div className='max-md:hidden'></div>
                <div className='max-md:hidden'></div>
                <div className='flex items-center gap-5 max-md:justify-center'>
                    <h2 className='arial-rounded-bold text-primary_web text-3xl text-center max-md:text-lg'>
                        MODELO DE FESTAS
                        EXCLUSIVAS <br></br> PARA <span className='text-secondary_web'>SEU AMIGO PET</span>
                    </h2>
                </div>
                <div className='border-2 border-r-transparent border-primary_web  h-fit p-4 rounded-s-full max-md:w-fit max-md:ml-auto'>
                    <p className='text-paragrafh text-xl font-semibold leading-normal mx-4 max-md:text-sm'>
                        Realizamos eventos<br></br>
                        personalizados na região<br></br>
                        metropolitana de São Paulo.
                    </p>
                </div>
            </div>

            <div className='max-w-[1400px] m-auto  rounded-xl flex flex-col justify-center items-center pt-[49px] max-md:pt-0'>
                <div className="w-full h-[940px] max-md:h-[350px] max-md:px-3">
                    <Swiper
                        slidesPerView={1}
                        pagination={pagination}
                        modules={[Pagination, Navigation]}
                        navigation={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="relative w-[1200px] flex justify-center">
                                <div className='absolute -top-6 bg-[#DDEBED]  p-4 rounded-full border-2 border-[#9CC7CA] w-[800px] text-center max-md:w-fit'>
                                    <p className='text-secondary_web arial-rounded-bold text-6xl max-md:text-base'>Aniver Dog <span className='text-paragrafh'>#01</span></p>
                                </div>
                                <img src={model1} alt="" className='w-full' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative w-[1200px] flex justify-center">
                                <div className='absolute -top-6 bg-[#DDEBED]  p-4 rounded-full border-2 border-[#9CC7CA] w-[800px] text-center max-md:w-fit'>
                                    <p className='text-secondary_web arial-rounded-bold text-6xl max-md:text-base'>Aniver Dog <span className='text-paragrafh'>#02</span></p>
                                </div>
                                <img src={model2} alt="" className='w-full' />
                            </div>
                        </SwiperSlide>
                       



                    </Swiper>

                </div>


            </div>



        </section>
    );
}

export default Model;