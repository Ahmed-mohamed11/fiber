import Footer from "../../components/Footer";
import Hero from "./hero/Hero";
import OurProducts from "./products/OurProducts";
import Store from "./store/Store";

 export default function index() {
    return (
        <>
            <div className='bg-gray-200'>
                <Hero />
                <Store />
                <OurProducts />
             </div>
   
            <Footer />
        </>
    )
}