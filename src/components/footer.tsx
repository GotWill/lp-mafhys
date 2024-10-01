import Logo from '../assets/images/logo/logo-bt.png'
import Tel from '../assets/images/icons/tel.svg'
import Whats from '../assets/images/icons/whats.svg'
import Mail from '../assets/images/icons/mail.svg'
import Map from '../assets/images/icons/map.svg'
import Insta from '../assets/images/icons/insta.svg'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'


const Footer = () => {
    return (
        <>
            <section className="bg_space py-[58px]" id='contact'>
                <div className="flex justify-center">
                    <img src={Logo} alt="" className='w-[200px]' />
                </div>


                <div className="grid grid-cols-10 pl-[84px] pr-[34px] pt-[50px] max-md:px-4">

                    <div className='col-span-2 max-md:col-span-10'>
                        <p className='text-paragrafh font-bold text-lg'>Link rápido</p>

                        <ul className='mt-[40px] space-y-4 max-md:mt-[20px]'>
                            <li className='text-paragrafh font-bold text-lg max-md:text-sm'><a href="/">Home</a></li>
                            <li className='text-paragrafh font-bold text-lg max-md:text-sm'><a href="/#about">Quem somos</a></li>
                            <li className='text-paragrafh font-bold text-lg max-md:text-sm'><a href="">Serviços</a></li>
                            <li className='text-paragrafh font-bold text-lg max-md:text-sm'><a href="/faq">FAQs</a></li>
                        </ul>
                    </div>
                    <div className='col-span-2 max-md:col-span-10'>
                        <p className='text-paragrafh font-bold text-lg max-md:mt-[20px]'>Fale conosco</p>

                        <ul className='mt-[40px] space-y-4'>
                            <li className='text-paragrafh font-bold text-lg'><a className='flex items-center gap-2 max-md:text-sm' href="">
                                <img src={Tel} alt="" className='w-7' /> (11) 95687-9467</a></li>
                            <li className='text-paragrafh font-bold text-lg'><a href="" className='flex items-center gap-2 max-md:text-sm'>
                                <img src={Whats} alt="" className='w-7' /> (11) 95687-9467</a></li>
                            <li className='text-paragrafh font-bold text-lg'><a href="" className='flex items-center gap-2 max-md:text-sm'>
                                <img src={Mail} alt="" className='w-7' /> mafhysbestforpets@gmail.com</a></li>
                            <li className='text-paragrafh font-bold text-lg'><a href="" className='flex items-center gap-2 max-md:text-sm'>
                                <img src={Map} alt="" className='w-7' /> São paulo - SP</a></li>
                        </ul>
                    </div>
                    <div className='col-span-2 max-md:col-span-10 max-md:mt-[20px]'>
                        <p className='text-paragrafh font-bold text-lg'>Siga-nos</p>

                        <ul className='mt-[40px] space-y-4'>
                            <li className='text-paragrafh font-bold text-lg'><a className='flex items-center gap-2' href="https://www.instagram.com/mafhysbestforpets/" target='_blank'>
                                <img src={Insta} alt="" className='w-6' />
                                @mafhysbestforpets</a></li>

                        </ul>
                    </div>
                    <div className='col-span-4 bg-[#6993A8] rounded-lg p-3 max-md:col-span-10 max-md:mt-[20px]'>
                        <p className='text-white arial-rounded-bold text-4xl text-center max-md:text-lg'>
                            Deixe seus dados que entraremos em contato.
                        </p>
                        <form action="" className='mt-1 flex flex-col gap-2'>
                            <Input type='text' placeholder='Nome' className='text-[#6993A8] arial-rounded-bold leading-normal text-xl rounded-xl' required />
                            <Input type='E-mail' placeholder='E-mail' className='text-[#6993A8] arial-rounded-bold leading-normal text-xl rounded-xl' required />
                            <Input type='text' placeholder='Tel.' className='text-[#6993A8] arial-rounded-bold leading-normal text-xl rounded-xl' required />
                            <Textarea placeholder='Mensagem' className='text-[#6993A8] arial-rounded-bold leading-normal text-xl rounded-xl' />
                            <button type='submit' className='bg-paragrafh text-white arial-rounded-bold text-2xl p-2 rounded-xl w-[200px] m-auto'>Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
            <div className='bg-paragrafh flex justify-center p-2'>
                <p className='text-white arial-rounded-bold text-2xl max-md:text-[10px]'>© 2024 Mafhys best for pets. Todos os direitos reservados.</p>
            </div>
        </>
    );
}

export default Footer;