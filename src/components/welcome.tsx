import Logo from '../assets/logo-2.png'


const Welcome = () => {
    return (
        <section className="bg-hero h-[760px] bg-center	bg-no-repeat bg-cover max-md:h-auto max-md:bg-hero-mobol max-md:pt-40 max-md:pb-96">

            <div className='max-w-[1200px] m-auto pt-16 flex justify-between mt-20 max-md:flex-col max-md:mt-0 max-md:pt-0'>
                <div className='flex flex-col items-baseline gap-10 max-md:items-center'>
                    <img src={Logo} alt="" className='w-[300px]' />

                    <div className='flex flex-col gap-5 max-md:px-4'>
                        <h1 className='arial-rounded-bold text-primary_web text-3xl max-md:text-2xl'>
                            SEJA <span className='text-secondary_web'>BEM-VINDO...</span>
                        </h1>
                        <p className='max-w-[420px] text-primary_web text-2xl max-md:text-sm'>
                            ...ao universo dos Pets na <strong>MAFHYS</strong>, onde todos os nossos melhores amigos são tratados com amor, carinho e o respeito que merecem. Aqui <strong>felicidade</strong> e o <strong>bem-estar</strong> dos seus pets são a nossa prioridade, independentemente se eles têm pelos, penas ou bigodes.
                        </p>
                    </div>
                </div>
                <div>
                    <p className='text-primary_web max-w-[220px] mt-20 max-md:px-4 max-md:my-4 max-md:max-w-fit'>
                        “ <span className='text-secondary_web max-md:text-sm'>Cuidar do bem-estar do seu
                            Pet é investir em suas memórias
                            e momentos de alegria.</span> ”
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Welcome;