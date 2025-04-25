import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

export default function CategoryProducts() {
    const { slug } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        axios.get("/public/products.json")
            .then(res => {
                const matchedCategory = res.data.find(cat => cat.slug === slug);
                setCategory(matchedCategory);
            })
            .catch(err => console.error("Error fetching category:", err));
    }, [slug]);

    if (!category) {
        return <p className="text-center mt-20">جاري التحميل...</p>;
    }

    return (
        <section className="container mx-auto px-6 md:px-12 mt-16">
            <motion.h2
                className="text-3xl font-extrabold font-sans text-center  text-red-700 mb-10"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
            >
                منتجات <span className="border-b-2 border-dashed border-gray-800 pb-2">{category.name}</span> 
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {category.products.map((product, index) => (
                    <motion.div
                        key={index}
                        className="bg-white border border-red-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        <img
                            src={`/${product.image}`}
                            alt={product.name}
                            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                        />
                        <div className="p-4 text-center">
                            <p className="text-red-700 font-bold text-lg group-hover:text-red-900 transition-colors duration-300">
                                {product.name}
                            </p>
                            <p className="text-sm text-gray-600">{product.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
