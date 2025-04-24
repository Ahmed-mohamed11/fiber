import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../../../images/gfx/download.jpeg";
import image2 from "../../../images/gfx/download (1).jpeg";
import image3 from "../../../images/gfx/download (2).jpeg";
import image4 from "../../../images/gfx/download (3).jpg";
import { Phone } from "lucide-react";

const products = [
    {
        title: "اكشاك حراسة فيبر جلاس",
        image: image1,
        slug: "security-cabins",
    },
    {
        title: "المباني سابقة التجهيز",
        image: image2,
        slug: "prefabricated-buildings",
    },
    {
        title: "حمامات سباحة",
        image: image3,
        slug: "swimming-pools",
    },
    {
        title: "خزانات فيبر جلاس",
        image: image4,
        slug: "fiberglass-tanks",
    },
];

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

export default function OurProducts() {
    const [openIndex, setOpenIndex] = useState(null);
    const ctaRef = useRef(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gradient-to-b from-blue-50 mt-16 via-white to-blue-100 text-right" >
            <div className="container space-y-8 mx-auto px-6 md:px-12 font-sans">
                <motion.div
                    className="container mx-auto px-6 md:px-12 py-10 flex justify-between items center text-right"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white w-1/2 shadow-lg rounded-3xl p-6 md:p-10 border border-blue-200">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 text-center">قصتنا</h2>
                        <p className="text-gray-700 leading-loose text-md md:text-lg font-medium">
                            بدأت قصتنا مع الفيبر جلاس و تلبية متطلبات السادة العملاء من تصنيع جميع منتجات الفيبر جلاس التي تخدم السادة العملاء و تصب في مصلحة بلادنا الحبيبة مصر مثل أكشاك الحراسة المصممة بطريقة ديكورية ماهرة لتلبية رغبة العميل و تحتوي شكلاً جمالياً و كذلك قمنا بتصنيع الخزانات بأشكالها و أحجامها المختلفة و استخداماتها المتنوعة و أتممنا رحلتنا في مجالات متنوعة تخدم اقتصاد بلادنا مثل أعمدة الإنارة حيث قمنا بتصنيع أعمدة الإنارة بأشكال ديكورية لتعطي جمالاً على المكان الذي توجد فيه قمنا بعمل قسم خاص لتصنيع أعمدة الإنارة بدأً من أصغر عامود ٦٠ سم حتى ١٢ م أعمدة الحدائق و النوادي و الشوارع و قمنا بعمل تصميمات جديدة للأعمدة و موقع خاص ليعرض منتجاتنا لعملائنا و أصبحنا مصنع مختص لتلبية طلبات العملاء
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-3xl p-6 md:p-10 border border-blue-200">
                        <div
                            dir="rtl"
                            ref={ctaRef}
                            className="flex flex-col md:flex-row items-center gap-6 px-6 py-10 bg-white rounded-2xl shadow-xl border"
                        >
                            <button className="bg-red-600 hover:bg-red-700 text-white  p-3 rounded-lg font-bold shadow-md transition duration-300">
                                اطلب منتجاتنا
                            </button>
                            <p className="text-sm font-medium text-gray-700 text-center md:text-right">
                                لطلب منتجات شركة الرواد للفيبرجلاس
                                <br />
                                اكشاك حراسة - اكوابارك - ألعاب أطفال - خزانات - كرافانات - كبائن سيارات - طفطف
                            </p>
                        </div>
                        <div className="mt-16 grid grid-cols-2 gap-4">
                            <Link to="/products">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-bold shadow-lg transition-all duration-300"
                                >
                                    منتجات الشركة
                                </motion.button>
                            </Link>

                            <a
                                href="https://wa.me/+201010195337"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full border border-blue-700 text-blue-700 hover:bg-blue-100 py-3 rounded-xl font-bold shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Phone className="h-5 w-5" />
                                    اتصل بنا
                                </motion.button>
                            </a>
                        </div>

                    </div>
                </motion.div>

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

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
                    variants={policyParentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    {products.map((product, index) => (
                        <Link to={`/products/${product.slug}`} key={index}>
                            <motion.div
                                className="bg-white border border-red-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                                variants={fadeInUp}
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="p-4 text-center">
                                    <p className="text-red-700 font-bold text-lg group-hover:text-red-900 transition-colors duration-300">
                                        {product.title}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>

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
