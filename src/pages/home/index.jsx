import ContactUs from '../home/ContactUs'
import Store from './Store'
import Footer from './Footer'
import Hero from './hero/Hero'

export default function index() {
    return (
        <>
            <div className='bg-gray-200'>
                <Hero />
                <Store />
            </div>
            <div className="  max-w-7xl mx-auto sm:px-6 lg:px-8 md:px-4">
                <ContactUs />
            </div>
            <Footer />
        </>
    )
}