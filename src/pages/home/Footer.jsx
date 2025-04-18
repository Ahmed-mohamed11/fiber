 
export default function Footer() {
    return (
        <footer className="bg-gray-200   py-16 px-4">
            <div className=" max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Programs</h2>
                        <ul className="space-y-3 text-gray-800">
                            <li className="hover:text-white transition-colors">Corporate</li>
                            <li className="hover:text-white transition-colors">One to One</li>
                            <li className="hover:text-white transition-colors">Consulting</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Service</h2>
                        <ul className="space-y-3 text-gray-800">
                            <li className="hover:text-white transition-colors">Training</li>
                            <li className="hover:text-white transition-colors">Coaching</li>
                            <li className="hover:text-white transition-colors">Consulting</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Contact</h2>
                        <ul className="space-y-3 text-gray-800">
                            <li className="hover:text-white transition-colors">Home</li>
                            <li className="hover:text-white transition-colors">About</li>
                            <li className="hover:text-white transition-colors">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Newsletter</h2>
                        <form className="flex flex-col space-y-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-gray-100 text-black placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-md py-2">
                                Subscribe
                            </button>
                        </form>
                        
                    </div>
                </div>
               
                <hr className="border-gray-700 my-8" />

            </div>
        </footer>
    );
}
 