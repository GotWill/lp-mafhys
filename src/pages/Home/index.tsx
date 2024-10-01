import About from "../../components/about";
import Basket from "../../components/basket";
import Footer from "../../components/footer";
import Mission from "../../components/mission";
import Model from "../../components/model";
import Parties from "../../components/parties";
import Welcome from "../../components/welcome";

const Home = () => {
    return (
        <>
            {/* <Welcome /> */}
            {/* <Mission />
            <About />
            <Basket />
            <div className='bg_space w-full h-[36px]'></div>
            <Parties />
            <div className='bg_space w-full h-[45px]'></div>
            <Model />
            <Footer/> */}
            <Welcome />
            <Mission />
            <About />
            <Basket />
            <div className='bg_space w-full h-[36px]'></div>
            <Parties />
            <div className='bg_space w-full h-[45px]'></div>
            <Model />
            <Footer />
        </>
    );
}

export default Home;