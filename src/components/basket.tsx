import basket from '../assets/basket.png'
import basket1 from '../assets/basket/1.png'
import basket2 from '../assets/basket/2.png'
import basket3 from '../assets/basket/3.png'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../assets/css/swiper.css'
import { Navigation, Pagination } from 'swiper/modules';


import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'


const Basket = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <section className='gradient_basket  pt-[51px] pb-[39px]' id='cestas'>
            <div className='flex justify-between max-md:flex-col'>
                <div></div>
                <div></div>
                <div className='flex items-center gap-5 max-md:px-3'>
                    <img src={basket} alt="" className='w-[120px]' />
                    <h2 className='arial-rounded-bold text-secondary_web text-3xl text-center max-md:text-lg'>
                        CESTAS<br></br> <span className='text-primary_web'>PERSONALIZADAS</span>
                    </h2>
                </div>
                <div className='border-2 border-r-transparent border-primary_web  h-fit p-4 rounded-s-full max-md:w-fit max-md:ml-auto'>
                    <p className='text-paragrafh text-xl font-semibold leading-normal mx-4'>
                        Entrega em todo o<br></br> território nacional
                    </p>
                </div>
            </div>

            <div className='max-md:px-2'>
                <div className='bg-[#F1F2F2] max-w-[1400px] m-auto mt-[43px] rounded-xl flex flex-col justify-center items-center pt-[49px] pb-[37px] max-md:pt-2' >
                    <div className="w-full max-md:px-4 max-md:mt-5 relative">
                        <Swiper
                            slidesPerView={1}
                            pagination={pagination}
                            modules={[Pagination, Navigation]}
                            navigation={true}
                            className="mySwiper"
                        >
                            <SwiperSlide className='flex flex-col'>

                                <div className='flex items-center mb-20 max-md:mb-8'>
                                    <div className='max-md:text-xs max-md:text-center max-md:w-[295px] bg-secondary_web p-3  w-[485px] text-white font-bold rounded-full text-2xl relative after:absolute after:bg-white after:top-0 after:h-[52px] after:w-[20px] after:right-0 after:rounded-s-lg after:rounded-tl-[50px] after:rounded-bl-[50px] max-md:after:h-[44px]'>
                                        CAIXA DE PAPEL ESTRUTURADO AZUL
                                    </div>
                                    <div className='bg-paragrafh text-white font-bold w-[56px] h-[56px] rounded-full flex justify-center items-center text-[40px] -ml-4 z-10 max-md:w-[44px] max-md:h-[44px] max-md:text-xl'>1</div>
                                </div>

                                <SlideshowLightbox className="grid grid-cols-3 gap-4 place-items-center" theme="lightbox">
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket2} alt="" className="w-[400px]" />
                                    <img src={basket3} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                </SlideshowLightbox >
                            </SwiperSlide>

                            <SwiperSlide className='flex flex-col'>
                                <div className='flex items-center mb-20 max-md:mb-8'>
                                    <div className='text-center max-md:text-xs max-md:w-[245px] bg-secondary_web p-3  w-[485px] text-white font-bold rounded-full text-2xl relative after:absolute after:bg-white after:top-0 after:h-[52px] after:w-[20px] after:right-0 after:rounded-s-lg after:rounded-tl-[50px] after:rounded-bl-[50px] max-md:after:h-[44px]'>
                                        CESTA DE PALHA COM ALÇA
                                    </div>
                                    <div className='bg-paragrafh text-white font-bold w-[56px] h-[56px] rounded-full flex justify-center items-center text-[40px] -ml-4 z-10 max-md:w-[44px] max-md:h-[44px] max-md:text-xl'>2</div>
                                </div>
                                <SlideshowLightbox className="grid grid-cols-3 gap-4 place-items-center" theme="lightbox">
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                </SlideshowLightbox>
                            </SwiperSlide>
                            <SwiperSlide className='flex flex-col'>
                                <div className='flex items-center mb-20 max-md:mb-8'>
                                    <div className='text-center max-md:text-xs max-md:w-[295px] bg-secondary_web p-3  w-[495px] text-white font-bold rounded-full text-2xl relative after:absolute after:bg-white after:top-0 after:h-[52px] after:w-[20px] after:right-0 after:rounded-s-lg after:rounded-tl-[50px] after:rounded-bl-[50px] max-md:after:h-[44px]'>
                                        CESTA TAMANHO MÉDIO DE MADEIRA
                                    </div>
                                    <div className='bg-paragrafh text-white font-bold w-[56px] h-[56px] rounded-full flex justify-center items-center text-[40px] -ml-4 z-10 max-md:w-[44px] max-md:h-[44px] max-md:text-xl'>3</div>
                                </div>
                                <SlideshowLightbox className="grid grid-cols-3 gap-4 place-items-center" theme="lightbox">
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                </SlideshowLightbox>
                            </SwiperSlide>
                            <SwiperSlide className='flex flex-col'>
                                <div className='flex items-center mb-20 max-md:mb-8'>
                                    <div className='text-center max-md:text-xs  max-md:w-[200px] bg-secondary_web p-3  w-[495px] text-white font-bold rounded-full text-2xl relative after:absolute after:bg-white after:top-0 after:h-[52px] after:w-[20px] after:right-0 after:rounded-s-lg after:rounded-tl-[50px] after:rounded-bl-[50px] max-md:after:h-[44px]'>
                                    CESTA VERDE DE TECIDO
                                    </div>
                                    <div className='bg-paragrafh text-white font-bold w-[56px] h-[56px] rounded-full flex justify-center items-center text-[40px] -ml-4 z-10 max-md:w-[44px] max-md:h-[44px] max-md:text-xl'>4</div>
                                </div>
                                <SlideshowLightbox className="grid grid-cols-3 gap-4 place-items-center" theme="lightbox">
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                </SlideshowLightbox>
                            </SwiperSlide>
                            <SwiperSlide className='flex flex-col'>
                                <div className='flex items-center mb-20 max-md:mb-8'>
                                    <div className='text-center max-md:text-xs max-md:w-[250px] bg-secondary_web p-3  w-[495px] text-white font-bold rounded-full text-2xl relative after:absolute after:bg-white after:top-0 after:h-[52px] after:w-[20px] after:right-0 after:rounded-s-lg after:rounded-tl-[50px] after:rounded-bl-[50px] max-md:after:h-[44px]'>
                                    CESTAS MADEIRA CINZA  P, M e G
                                    </div>
                                    <div className='bg-paragrafh text-white font-bold w-[56px] h-[56px] rounded-full flex justify-center items-center text-[40px] -ml-4 z-10 max-md:w-[44px] max-md:h-[44px] max-md:text-xl'>5</div>
                                </div>
                                <SlideshowLightbox className="grid grid-cols-3 gap-4 place-items-center" theme="lightbox">
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                    <img src={basket1} alt="" className="w-[400px]" />
                                </SlideshowLightbox>
                            </SwiperSlide>


                        </Swiper>

                    </div>
                </div>
            </div>



        </section>
    );
}

export default Basket;