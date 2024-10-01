import Insta from '../assets/images/icons/insta.svg'
import Whats from '../assets/images/icons/whats.svg'
import Logo from '../assets/images/logo/logo.png'
import NavLink from './nav-link';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import LogoSheet from '../assets/images/logo/logo-2.png'

const Header = () => {
    return (
        <div className="gradient px-4 py-6 fixed w-full z-50 top-0">
            <div className="flex justify-end gap-2 max-lg:hidden">
                <a href="https://www.instagram.com/mafhysbestforpets/">
                    <img src={Insta} alt="" className='w-5 h-5' />
                </a>
                <a href="">
                    <img src={Whats} alt="" className='w-5 h-5' />
                </a>
            </div>


            <div className='max-w-[1280px] w-full m-auto'>
                <div className="grid grid-cols-9 max-lg:flex max-lg:justify-between">
                    <div className='col-span-1'>
                        <a href="/">
                            <img src={Logo} alt="" className='w-[193px]' />
                        </a>
                    </div>
                    <div className='col-span-8 m-auto max-lg:hidden'>
                        <NavLink />
                    </div>



                    <div className='hidden max-lg:block'>
                        <Sheet>
                            <SheetTrigger className='border-2 border-primary_web'>
                                <Menu />
                            </SheetTrigger>
                            <SheetContent className='gradient '>
                                <SheetHeader>
                                    <img src={LogoSheet} alt="" className='w-full' />
                                </SheetHeader>
                                <NavLink />

                                <div className="flex gap-3 mt-4 justify-end">
                                    <a href="https://www.instagram.com/mafhysbestforpets/" target='_blank'>
                                        <img src={Insta} alt="" className='w-5 h-5' />
                                    </a>
                                    <a href="">
                                        <img src={Whats} alt="" className='w-5 h-5' />
                                    </a>
                                </div>

                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Header;