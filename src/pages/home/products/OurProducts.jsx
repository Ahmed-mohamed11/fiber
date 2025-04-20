import { motion } from "framer-motion";
import image1 from "../../../images/gfx/download.jpeg";
import image2 from "../../../images/gfx/download (1).jpeg";
import image3 from "../../../images/gfx/download (2).jpeg";
import image4 from "../../../images/gfx/download (3).jpg";

const products = [
    {
        title: "اكشاك حراسة فيبر جلاس",
        image: image1,
    },
    {
        title: "المباني سابقة التجهيز",
        image: image2,
    },
    {
        title: "اكوا بارك",
        image: image3,
    },
    {
        title: "خزانات فيبر جلاس",
        image: image4,
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const parentVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export default function OurProducts() {
    return (
        <section className="bg-gradient-to-b from-blue-50 via-white to-blue-100 text-right"  >
            <div className="container space-y-8 mx-auto px-6 md:px-12 font-sans">
                <motion.h4
                    className="text-center md:text-3xl font-extrabold text-red-700 tracking-wide"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    منتجات مصنع الرواد للفيبرجلاس
                </motion.h4>
                <div className="h-1 w-48 mx-auto md:ml-auto bg-red-700 rounded-full animate-bounce" />
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
                    variants={parentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-red-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                            variants={fadeInUp}
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                            <div className="p-4 text-center">
                                <p className="text-red-700 font-bold text-lg group-hover:text-red-900 transition-colors duration-300">{product.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                        className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <div className="bg-blue-700 text-white p-5 text-center">
                            <h2 className="text-2xl font-bold">السياسة العامة لشركة الرواد</h2>
                        </div>
                        <div className="p-6 space-y-5 text-gray-700">
                            <div>
                                <h3 className="text-lg font-semibold text-blue-800">احترام العمل</h3>
                                <p>العمل علي احترام المواصفات القياسية العالمية و أصول الصناعة</p>
                            </div>
                            <h3 className="text-lg font-semibold shadow-lg p-3 rounded-xl text-blue-800">خدمة العملاء</h3>
                            <h3 className="text-lg font-semibold shadow-lg p-3 rounded-xl text-blue-800">الجودة</h3>
                            <h3 className="text-lg font-semibold shadow-lg p-3 rounded-xl text-blue-800">متابعة ما بعد البيع</h3>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
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
