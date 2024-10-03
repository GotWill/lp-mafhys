const Mission = () => {
    return (
        <section className='bg-about h-[700px] bg-center bg-no-repeat bg-cover max-md:h-auto max-md:bg-about-mobol max-md:pt-12 max-md:pb-72'>
            <div className='grid grid-cols-12 h-full place-content-center'>
                <div className='col-span-5 max-md:hidden'></div>
                <div className='grid col-span-7 gap-4 max-md:col-span-12 max-md:px-4'>
                    <h2 className='arial-rounded-bold text-primary_web text-3xl max-md:text-2xl'>
                        A NOSSA <span className='text-secondary_web'>MISSÃO...</span>
                    </h2>
                    <p className='max-w-[500px]  text-primary_web text-2xl max-md:text-sm'>
                        ...é criar momentos mágicos e inesquecíveis para todos os seus queridos companheiros, sejam eles cães, gatos, pássaros ou qualquer outro animal de estimação que faça parte da sua família. Junte-se a nós nessa jornada de cuidado e carinho pelos seus Pets.
                    </p>
                    <p className='text-primary_web text-2xl flex flex-col max-md:text-sm'>
                        Sejam todos bem-vindos à família <span className='font-bold'>MAFHYS - BEST FOR PETS</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Mission;