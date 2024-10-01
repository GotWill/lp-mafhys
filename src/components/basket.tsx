import basket from '../assets/basket.png'
import basket1 from '../assets/images/basket/1.png'
import basket2 from '../assets/images/basket/2.png'
import basket3 from '../assets/images/basket/3.png'
import basket4 from '../assets/images/basket/4.png'
import basket5 from '../assets/images/basket/5.png'
import basket6 from '../assets/images/basket/6.png'
import basket7 from '../assets/images/basket/7.png'
import basket8 from '../assets/images/basket/8.png'
import basket9 from '../assets/images/basket/9.png'
import basket10 from '../assets/images/basket/10.png'
import basket11 from '../assets/images/basket/11.png'
import basket12 from '../assets/images/basket/12.png'
import basket13 from '../assets/images/basket/13.png'
import basket14 from '../assets/images/basket/14.png'
import basket15 from '../assets/images/basket/15.png'
import basket16 from '../assets/images/basket/16.png'
import basket17 from '../assets/images/basket/17.png'
import basket18 from '../assets/images/basket/18.png'
import basket19 from '../assets/images/basket/19.png'
import basket20 from '../assets/images/basket/20.png'
import basket21 from '../assets/images/basket/21.png'
import basket22 from '../assets/images/basket/22.png'
import basket23 from '../assets/images/basket/23.png'
import basket24 from '../assets/images/basket/24.png'
import basket25 from '../assets/images/basket/25.png'
import basket26 from '../assets/images/basket/26.png'
import basket27 from '../assets/images/basket/27.png'
import basket28 from '../assets/images/basket/28.png'
import basket29 from '../assets/images/basket/29.png'
import basket30 from '../assets/images/basket/31.png'
import basket31 from '../assets/images/basket/31.png'
import basket32 from '../assets/images/basket/32.png'
import basket33 from '../assets/images/basket/33.png'
import basket34 from '../assets/images/basket/34.png'
import basket35 from '../assets/images/basket/35.png'
import basket36 from '../assets/images/basket/36.png'
import basket37 from '../assets/images/basket/37.png'
import basket38 from '../assets/images/basket/38.png'
import basket39 from '../assets/images/basket/39.png'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../assets/css/swiper.css'
import { Navigation, Pagination } from 'swiper/modules';


import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import { useState, useRef } from 'react'


const Basket = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    const [title, setTitle] = useState('CESTAS MADEIRA CINZA  P, M e G')
    const [weight, setWeight] = useState('')

    const divRef = useRef<HTMLDivElement | null>(null);

    

    const handleScroll = () => {

        if (!divRef.current) return;

        const scrollTop = divRef.current.scrollTop; // Posição de rolagem
        const maxScroll = divRef.current.scrollHeight - divRef.current.clientHeight;


        if (scrollTop === 0) {
            setWeight("")
            setTitle("CESTAS MADEIRA CINZA P, M e G");
        } else if (scrollTop < maxScroll / 3) {
            setTitle("CESTAS MADEIRA CINZA  P");
            setWeight('P')
        } else if (scrollTop < (2 * maxScroll) / 3) {
            setTitle("CESTAS MADEIRA CINZA  M");
            setWeight('M')
        } else {
            setWeight("G")
            setTitle("CESTAS MADEIRA CINZA  G");
        }



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
                <div className=' mt-[43px] rounded-xl flex flex-col justify-center items-center pt-[49px] pb-[37px] max-md:pt-2 max-w-[1400px] m-auto' >
                    <div className="w-full max-md:px-4 max-md:mt-5 relative">
                        <Swiper
                            slidesPerView={1}
                            pagination={pagination}
                            modules={[Pagination, Navigation]}
                            navigation={true}
                            className="mySwiper"
                        >
                            <SwiperSlide className='flex flex-col bg-[#F1F2F2] py-16'>

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
                                    <img src={basket4} alt="" className="w-[400px]" />
                                    <img src={basket5} alt="" className="w-[400px]" />
                                    <img src={basket6} alt="" className="w-[400px]" />
                                </SlideshowLightbox >
                            </SwiperSlide>

                            <SwiperSlide className='flex flex-col bg-[#F1F2F2] py-16'>
                                <div className='flex items-center mb-20 max-md:mb-8'>
                                    <div className='text-center max-md:text-xs max-md:w-[245px] bg-secondary_web p-3  w-[485px] text-white font-bold rounded-full text-2xl relative after:absolute after:bg-white after:top-0 after:h-[52px] after:w-[20px] after:right-0 after:rounded-s-lg after:rounded-tl-[50px] after:rounded-bl-[50px] max-md:after:h-[44px]'>
                                        CESTA DE PALHA COM ALÇA
                                    </div>
                                    <div className='bg-paragrafh text-white font-bold w-[56px] h-[56px] rounded-full flex justify-center items-center text-[40px] -ml-4 z-10 max-md:w-[44px] max-md:h-[44px] max-md:text-xl'>2</div>
                                </div>
                                <SlideshowLightbox className="grid grid-cols-3 gap-4 place-items-center" theme="lightbox">
                                    <img src={basket7} alt="" className="w-[400px]" />
                                    <img src={basket8} alt="" className="w-[400px]" />
                                    <img src={basket9} alt="" className="w-[400px]" />
                                    <img src={basket10} alt="" className="w-[400px]" />
                                    <img src={basket11} alt="" className="w-[400px]" />
                                    <img src={basket12} alt="" className="w-[400px]" />
                                </SlideshowLightbox>
                            </SwiperSlide>
                            <SwiperSlide className='flex flex-col bg-[#F1F2F2] py-16'>
                                <div className='flex items-center mb-20 max-md:mb-8'>
                                    <div className='text-center max-md:text-xs max-md:w-[295px] bg-secondary_web p-3  w-[495px] text-white font-bold rounded-full text-2xl relative after:absolute after:bg-white after:top-0 after:h-[52px] after:w-[20px] after:right-0 after:rounded-s-lg after:rounded-tl-[50px] after:rounded-bl-[50px] max-md:after:h-[44px]'>
                                        CESTA TAMANHO MÉDIO DE MADEIRA
                                    </div>
                                    <div className='bg-paragrafh text-white font-bold w-[56px] h-[56px] rounded-full flex justify-center items-center text-[40px] -ml-4 z-10 max-md:w-[44px] max-md:h-[44px] max-md:text-xl'>3</div>
                                </div>
                                <SlideshowLightbox className="grid grid-cols-3 gap-4 place-items-center" theme="lightbox">
                                    <img src={basket13} alt="" className="w-[400px]" />
                                    <img src={basket14} alt="" className="w-[400px]" />
                                    <img src={basket15} alt="" className="w-[400px]" />
                                    <img src={basket16} alt="" className="w-[400px]" />
                                    <img src={basket17} alt="" className="w-[400px]" />
                                    <img src={basket18} alt="" className="w-[400px]" />
                                </SlideshowLightbox>
                            </SwiperSlide>
                            <SwiperSlide className='flex flex-col bg-[#F1F2F2] py-16'>
                                <div className='flex items-center mb-20 max-md:mb-8'>
                                    <div className='text-center max-md:text-xs  max-md:w-[200px] bg-secondary_web p-3  w-[495px] text-white font-bold rounded-full text-2xl relative after:absolute after:bg-white after:top-0 after:h-[52px] after:w-[20px] after:right-0 after:rounded-s-lg after:rounded-tl-[50px] after:rounded-bl-[50px] max-md:after:h-[44px]'>
                                        CESTA VERDE DE TECIDO
                                    </div>
                                    <div className='bg-paragrafh text-white font-bold w-[56px] h-[56px] rounded-full flex justify-center items-center text-[40px] -ml-4 z-10 max-md:w-[44px] max-md:h-[44px] max-md:text-xl'>4</div>
                                </div>
                                <SlideshowLightbox className="grid grid-cols-3 gap-4 place-items-center" theme="lightbox">
                                    <img src={basket19} alt="" className="w-[400px]" />
                                    <img src={basket20} alt="" className="w-[400px]" />
                                    <img src={basket21} alt="" className="w-[400px]" />
                                    <img src={basket22} alt="" className="w-[400px]" />
                                    <img src={basket23} alt="" className="w-[400px]" />
                                    <img src={basket24} alt="" className="w-[400px]" />
                                </SlideshowLightbox>
                            </SwiperSlide>
                            <SwiperSlide className='flex flex-col h-[800px] bg-[#F1F2F2] max-w-[1400px] m-auto'>
                                <div className='flex items-baseline gap-10 max-md:flex-col-reverse max-md:gap-0 max-md:items-center'>
                                    <div className='font-bold text-5xl'>{weight}</div>
                                    <div className='flex items-center mb-20 max-md:mb-8'>
                                        <div className='text-center max-md:text-xs max-md:w-[250px] bg-secondary_web p-3  w-[495px] text-white font-bold rounded-full text-2xl relative after:absolute after:bg-white after:top-0 after:h-[52px] after:w-[20px] after:right-0 after:rounded-s-lg after:rounded-tl-[50px] after:rounded-bl-[50px] max-md:after:h-[44px]'>
                                            {title}
                                        </div>
                                        <div className='bg-paragrafh text-white font-bold w-[56px] h-[56px] rounded-full flex justify-center items-center text-[40px] -ml-4 z-10 max-md:w-[44px] max-md:h-[44px] max-md:text-xl'>5</div>
                                    </div>
                                </div>
                                <div className='max-h-[440px] overflow-auto pr-5' onScroll={handleScroll} ref={divRef}>
                                    <div className='flex justify-around max-w-[700px] m-auto mb-5'>
                                        <p className='font-bold text-5xl'>P</p>
                                        <p className='font-bold text-5xl'>M</p>
                                        <p className='font-bold text-5xl'>G</p>
                                    </div>
                                    <img src={basket25} alt="" className="w-[1040px]" />


                                    <div className='grid grid-cols-2 mt-10 gap-5'>
                                        <img src={basket26} alt="" className="w-[400px]" />
                                        <img src={basket27} alt="" className="w-[400px]" />
                                        <img src={basket28} alt="" className="w-[400px]" />
                                        <img src={basket29} alt="" className="w-[400px]" />
                                    </div>


                                    <div className='grid grid-cols-2 mt-20 gap-5'>
                                        <img src={basket30} alt="" className="w-[400px]" />
                                        <img src={basket31} alt="" className="w-[400px]" />
                                        <img src={basket32} alt="" className="w-[400px]" />
                                        <img src={basket33} alt="" className="w-[400px]" />
                                    </div>

                                    <div className='grid grid-cols-3 mt-20 gap-5'>
                                        <img src={basket34} alt="" className="w-[400px]" />
                                        <img src={basket35} alt="" className="w-[400px]" />
                                        <img src={basket36} alt="" className="w-[400px]" />
                                        <img src={basket37} alt="" className="w-[400px]" />
                                        <img src={basket38} alt="" className="w-[400px]" />
                                        <img src={basket39} alt="" className="w-[400px]" />
                                    </div>
                                </div>
                            </SwiperSlide>


                        </Swiper>

                    </div>
                </div>
            </div>



        </section>
    );
}

export default Basket;