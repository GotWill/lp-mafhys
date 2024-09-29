import { Link, useLocation } from "react-router-dom";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { useEffect, useState } from "react";




const NavLink = () => {

    const { pathname } = useLocation()

    const [drop, setDrop] = useState(false)

    const { hash } = useLocation();

    console.log(hash)

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1)); 
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    const handleScrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setDrop(false)
        }
    };

    return (
        <nav>
            <ul className="flex gap-4 max-lg:flex-col max-lg:items-end max-xl:mt-5">
                <li className={` ${pathname === '/' ? 'bg-primary_web text-white' : 'border-2 border-primary_web text-primary_web'}  p-3 text-sm rounded-[15px] text-center  w-[181px] arial-rounded-bold h-fit`}><Link to='/'>HOME</Link></li>
                <li className="border-2 border-primary_web text-primary_web p-3 text-sm rounded-[15px]  text-center w-[181px]  h-fit arial-rounded-bold"><Link to="/#about" onClick={() => handleScrollToSection('about')}>QUEM SOMOS</Link ></li>
                <li className="border-2 border-primary_web text-primary_web p-3 text-sm rounded-[15px]  text-center w-[181px]  h-fit arial-rounded-bold">
                    <DropdownMenu open={drop} onOpenChange={setDrop}>
                        <DropdownMenuTrigger className="flex items-center gap- text-sm arial-rounded-bold h-fit" onClick={() => setDrop(!drop)}>NOSOS SERVIÇOS <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 0H0L10 13L22 0Z" fill="#0A3047" />
                        </svg>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="min-w-[181px] mt-3 bg-transparent border-none shadow-none flex flex-col gap-2">
                            <DropdownMenuItem className="arial-rounded-bold bg-transparent border-2 border-primary_web text-primary_web p-1 text-xs rounded-[15px]  text-center w-[181px] h-[47px] gradient"><Link to='/#cestas' onClick={() => handleScrollToSection('cestas')}>CESTAS PERSONALIZADAS</Link></DropdownMenuItem>
                            <DropdownMenuItem className="arial-rounded-bold flex justify-center bg-transparent border-2  border-primary_web text-primary_web p-1 text-xs rounded-[15px]  text-center w-[181px] h-[47px] gradient"><Link to='/#festa-pets' onClick={() => handleScrollToSection('festa-pets')}>FESTAS PETs</Link></DropdownMenuItem>
                            <DropdownMenuItem className="arial-rounded-bold flex justify-center bg-transparent border-2 border-primary_web text-primary_web p-1 text-xs rounded-[15px]  text-center w-[181px] h-[47px] gradient"><Link to="/#modelos-pet" onClick={() => handleScrollToSection('modelos-pet')}>MODELOS PETS</Link></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </li>
                <li className={` ${drop && 'max-lg:mt-40'} border-2 border-primary_web text-primary_web p-3 text-sm rounded-[15px]  text-center w-[181px] arial-rounded-bold h-fit`}><Link to='/#contact' onClick={() => handleScrollToSection('modelos-pet')}>FALE CONOSCO</Link></li>
                <li className={`${pathname === '/faq' && 'bg-primary_web text-white'} border-2 border-primary_web text-primary_web p-3 text-sm rounded-[15px]  text-center leading-[0.8] w-[181px]  arial-rounded-bold h-fit`}><Link to='/faq'>Perguntas frequentes<br></br>(FAQ)</Link></li>

            </ul>
        </nav>
    );
}

export default NavLink;