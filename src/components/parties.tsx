import basket from '../assets/basket.png'
import Pets1 from '../assets/images/parties/1.png'
import Pets2 from '../assets/images/parties/2.png'
import Pets3 from '../assets/images/parties/3.png'
import Pets4 from '../assets/images/parties/4.png'
import Pets5 from '../assets/images/parties/5.png'
import Pets6 from '../assets/images/parties/6.png'
import Pets7 from '../assets/images/parties/7.png'
import Pets8 from '../assets/images/parties/8.png'
import Pets9 from '../assets/images/parties/9.png'
import Pets10 from '../assets/images/parties/10.png'
import Pets11 from '../assets/images/parties/11.png'
import Pets12 from '../assets/images/parties/12.png'
import Pets13 from '../assets/images/parties/13.png'
import Pets14 from '../assets/images/parties/14.png'
import Pets15 from '../assets/images/parties/15.png'


const Parties = () => {
    return (
        <section className='gradient_basket  pt-[51px] pb-[39px]' id='festa-pets'>
            <div className='flex justify-between max-md:flex-col max-md:gap-5'>
                <div className='max-md:hidden'></div>
                <div className='max-md:hidden'></div>
                <div className='flex items-center gap-5 max-md:justify-center'>
                    <img src={basket} alt="" className='w-[120px]' />
                    <h2 className='arial-rounded-bold text-secondary_web text-3xl text-center max-md:text-lg'>
                        FESTA <span className='text-primary_web'>PETs</span>
                    </h2>
                </div>
                <div className='border-2 border-r-transparent border-primary_web  h-fit p-4 rounded-s-full max-md:w-fit max-md:ml-auto'>
                    <p className='text-paragrafh text-xl font-semibold text-right leading-normal mx-4 max-md:text-sm'>
                        Realizamos eventos<br></br>
                        personalizados na região<br></br>
                        metropolitana de São Paulo.<br></br>
                    </p>
                </div>
            </div>

            <div className='max-w-[1400px] m-auto mt-[43px] rounded-xl flex flex-col justify-center items-center pt-[49px] pb-[37px] max-md:px-3 max-md:pt-0'>
                <div className='flex items-center bg-primary_web p-3  text-white font-bold rounded-full text-2xl max-md:text-lg max-md:text-center'>
                    “Festa de Aniversário para Pet com Tema São João”
                </div>


                <div className="grid grid-cols-3 gap-6 pt-10 place-items-center px-5 max-md:grid-cols-2 max-md:px-0">
                    <img src={Pets1} alt="" />
                    <img src={Pets2} alt="" />
                    <img src={Pets3} alt="" />

                    <img src={Pets4} alt="" />
                    <img src={Pets5} alt="" />
                    <img src={Pets6} alt="" />

                    <img src={Pets7} alt="" />
                    <img src={Pets8} alt="" />
                    <img src={Pets9} alt="" />

                    <img src={Pets10} alt="" />
                    <img src={Pets11} alt="" />
                    <img src={Pets12} alt="" />

                    <img src={Pets13} alt="" />
                    <img src={Pets14} alt="" />
                    <img src={Pets15} alt="" />

                </div>
            </div>
        </section>
    );
}

export default Parties;