import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const policies = [
    {
        title: "احترام العمل",
        description: "العمل علي احترام المواصفات القياسية العالمية و أصول الصناعة"
    },
    {
        title: "خدمة العملاء",
        description: "تقديم أعلى مستوى من خدمة العملاء وتلقي الملاحظات والتعامل معها بفعالية"
    },
    {
        title: "الجودة",
        description: "ضمان جودة المنتجات باستخدام أفضل الخامات وطرق التصنيع"
    },
    {
        title: "متابعة ما بعد البيع",
        description: "التواصل المستمر مع العميل بعد البيع للتأكد من رضاهم التام"
    }
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const fadeInPolicy = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const policyParentVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};
import axios from "axios";

export default function OurProducts() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("/public/products.json")
            .then((res) => setCategories(res.data))
            .catch((err) => console.error("Error fetching categories:", err));
    }, []);
    return (
        <section className="bg-gradient-to-b from-blue-50 mt-16 via-white to-blue-100 text-right" >
            <div className="container space-y-2 mx-auto px-6 md:px-12 font-sans">


                <motion.h4
                    className="text-center md:text-3xl font-extrabold text-red-700 tracking-wide"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    منتجات مصنع شوشه للفيبرجلاس
                </motion.h4>

                <div className="h-1 w-48 mx-auto md:ml-auto bg-red-700 rounded-full animate-bounce" />
                <div dir="rtl">
                    <Swiper
                        dir="rtl"
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        loop={true} 
                        className="mySwiper py-12"
                    >
                        {categories.map((product, index) => (
                            <SwiperSlide key={index}>
                                <Link to={`/products/${product.slug}`}>
                                    <motion.div
                                        className="bg-white border border-red-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                                        variants={fadeInUp}
                                        whileInView="visible"
                                        initial="hidden"
                                        viewport={{ once: true }}
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-3xl"
                                        />
                                        <div className="p-4 text-center">
                                            <p className="text-red-700 font-bold text-lg group-hover:text-red-900 transition-colors duration-300">
                                                {product.name}
                                            </p>
                                        </div>
                                    </motion.div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">

                    <motion.div
                        className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        variants={fadeInPolicy}
                    >
                        <div className="bg-blue-700 text-white p-5 text-center">
                            <h2 className="text-2xl font-bold">السياسة العامة لشركة شوشه</h2>
                        </div>
                        <motion.div
                            className="p-6 space-y-5 text-gray-700"
                            variants={policyParentVariants}
                        >
                            {policies.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="border rounded-xl shadow-md p-4 cursor-pointer"
                                    onClick={() => toggleAccordion(index)}
                                    variants={fadeInUp}
                                >
                                    <h3 className="text-lg font-semibold text-blue-800">
                                        {item.title}
                                    </h3>

                                    <AnimatePresence initial={false}>
                                        {openIndex === index && (
                                            <motion.p
                                                className="mt-2 text-gray-600"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                            >
                                                {item.description}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        variants={fadeInPolicy}
                    >
                        <div className="bg-blue-700 text-white p-5 text-center">
                            <h2 className="text-2xl font-bold">مؤشرات الجودة</h2>
                        </div>
                        <div className="p-6 space-y-6 " dir="rtl">
                            {[{ label: "الجودة", value: 100 }, { label: "الدقة", value: 99 }, { label: "المواصفات القياسية", value: 99 }, { label: "خدمات ما بعد البيع", value: 99 }].map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-lg font-semibold text-blue-800">{item.label}</span>
                                        <span className="text-lg font-semibold">{item.value}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-4">
                                        <div
                                            className="bg-blue-600 h-4 rounded-full"
                                            style={{ width: `${item.value}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
