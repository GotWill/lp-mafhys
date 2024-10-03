import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className='bg-about-2 h-[700px] bg-center	bg-no-repeat bg-cover max-md:bg-about-mobol-2 max-md:pt-10 max-md:pb-80 max-md:h-auto' id="about">
            <div className='max-w-[1200px] m-auto h-full flex items-center max-md:px-4'>
                <div>
                    <h2 className='arial-rounded-bold text-primary_web text-3xl max-md:text-2xl'>
                        O QUE <span className='text-secondary_web'>FAZEMOS?</span>
                    </h2>
                    <div className="flex flex-col gap-4 mt-[48px]">
                        <div className='bg-primary_web w-fit text-white arial-rounded-bold text-2xl p-2'><Link to="#cestas">Cestas Personalizadas + </Link></div>
                        <div className='bg-secondary_web w-fit text-white arial-rounded-bold text-2xl p-2'><Link to="#festa-pets">Festas Pet + </Link></div>
                    </div>
                    <p className='mt-[34px] text-primary_web text-2xl max-w-[620px] max-md:text-sm'>
                        Criamos cestas personalizadas e festas para o seu Pet de acordo com o motivo da celebração! Na <strong>MAFHYS</strong>, criatividade, paixão e comprometimento são a essência e o combustível que dá vida a cada projeto. Seu Pet é o personagem principal em nossa criação. Entre em contato e faça uma surpresa incrível para seu melhor amigo de quatro patas!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;