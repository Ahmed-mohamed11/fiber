import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const OurStory = () => {
    const qualityIndicators = [
        { label: "الجودة", value: 100 },
        { label: "الدقة", value: 99 },
        { label: "المواصفات القياسية", value: 99 },
        { label: "خدمات ما بعد البيع", value: 99 },
    ];

    const [animatedValues, setAnimatedValues] = useState(
        Array(qualityIndicators.length).fill(0)
    );

    useEffect(() => {
        qualityIndicators.forEach((item, index) => {
            const timeout = setTimeout(() => {
                setAnimatedValues((prev) => {
                    const updated = [...prev];
                    updated[index] = item.value;
                    return updated;
                });
            }, 600 + index * 400);

            return () => clearTimeout(timeout);
        });
    });

    return (
        <section className="bg-gradient-to-b from-blue-50 via-white to-blue-100 text-right font-sans py-16">
            <div className="container mx-auto px-6 md:px-12 space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
                >
                    <motion.div
                        className="bg-white  shadow-xl rounded-3xl p-8 md:p-10 border lg:min-h-[350px] border-blue-200 flex flex-col justify-between min-h-[400px]"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
                            قصتنا
                        </h2>
                        <p
                            className="text-gray-700 xl:text-lg xl:py-4 lg:py-2   md:text-sm font-semibold lg:leading-loose text-justify"
                            dir="rtl"
                        >
                            بدأت قصتنا مع الفيبر جلاس و تلبية متطلبات السادة العملاء من تصنيع جميع منتجات الفيبر جلاس التي تخدم السادة العملاء و تصب في مصلحة بلادنا الحبيبة مصر مثل أكشاك الحراسة المصممة بطريقة ديكورية ماهرة لتلبية رغبة العميل و تحتوي شكلاً جمالياً و كذلك قمنا بتصنيع الخزانات بأشكالها و أحجامها المختلفة و استخداماتها المتنوعة و أتممنا رحلتنا في مجالات متنوعة تخدم اقتصاد بلادنا مثل أعمدة الإنارة حيث قمنا بتصنيع أعمدة الإنارة بأشكال ديكورية لتعطي جمالاً على المكان الذي توجد فيه قمنا بعمل قسم خاص لتصنيع أعمدة الإنارة بدأً من أصغر عامود ٦٠ سم حتى ١٢ م أعمدة الحدائق و النوادي و الشوارع و قمنا بعمل تصميمات جديدة للأعمدة و موقع خاص ليعرض منتجاتنا لعملائنا و أصبحنا مصنع مختص لتلبية طلبات العملاء
                        </p>
                    </motion.div>

                     <motion.div
                        className="bg-white shadow-xl rounded-3xl border border-blue-200 flex flex-col lg:min-h-[350px] min-h-[400px]"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-5 px-3 text-center rounded-t-3xl shadow-inner">
                            <h2 className="text-xl font-extrabold">مؤشرات الجودة</h2>
                        </div>
                        <div className="p-6 space-y-6" dir="rtl">
                            {qualityIndicators.map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-md font-semibold text-blue-800">{item.label}</span>
                                        <motion.span
                                            className="text-md font-semibold"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: index * 0.5 }}
                                        >
                                            {animatedValues[index]}%
                                        </motion.span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                                        <motion.div
                                            className="bg-gradient-to-r from-blue-500 to-blue-700 h-4 rounded-full"
                                            initial={{ width: "0%" }}
                                            animate={{ width: `${animatedValues[index]}%` }}
                                            transition={{ duration: 1, delay: index * 0.4 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                         <div className="px-6 pb-6 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurStory;
