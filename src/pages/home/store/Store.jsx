import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Store() {
    const cardsRef = useRef([]);
    const circlesRef = useRef([]);
    const ctaRef = useRef(null);

    useEffect(() => {
        cardsRef.current.forEach((card) => {
            gsap.fromTo(
                card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "restart none none reset",
                    },
                }
            );
        });

        circlesRef.current.forEach((circle) => {
            gsap.fromTo(
                circle,
                { scale: 0, opacity: 0, rotate: -90 },
                {
                    scale: 1,
                    rotate: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: circle,
                        start: "top 90%",
                        toggleActions: "restart none none reset",
                    },
                }
            );
        });

        gsap.fromTo(
            ctaRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 90%",
                    toggleActions: "restart none none reset",
                },
            }
        );
    }, []);

    return (
        <section className="bg-gradient-to-b from-blue-50 mt-16 via-white to-blue-100 text-right" >
            <div className="container space-y-8 mx-auto px-6 md:px-12 font-sans">
                <motion.div
                    className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-6 md:gap-12 items-stretch text-right"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white flex-1 shadow-lg rounded-3xl p-6 md:p-10 border border-blue-200 flex flex-col justify-between">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 text-center">قصتنا</h2>
                        <p className="text-gray-700 leading-loose text-md md:text-lg font-medium text-justify" dir="rtl">
                            بدأت قصتنا مع الفيبر جلاس و تلبية متطلبات السادة العملاء من تصنيع جميع منتجات الفيبر جلاس التي تخدم السادة العملاء و تصب في مصلحة بلادنا الحبيبة مصر مثل أكشاك الحراسة المصممة بطريقة ديكورية ماهرة لتلبية رغبة العميل و تحتوي شكلاً جمالياً و كذلك قمنا بتصنيع الخزانات بأشكالها و أحجامها المختلفة و استخداماتها المتنوعة و أتممنا رحلتنا في مجالات متنوعة تخدم اقتصاد بلادنا مثل أعمدة الإنارة حيث قمنا بتصنيع أعمدة الإنارة بأشكال ديكورية لتعطي جمالاً على المكان الذي توجد فيه قمنا بعمل قسم خاص لتصنيع أعمدة الإنارة بدأً من أصغر عامود ٦٠ سم حتى ١٢ م أعمدة الحدائق و النوادي و الشوارع و قمنا بعمل تصميمات جديدة للأعمدة و موقع خاص ليعرض منتجاتنا لعملائنا و أصبحنا مصنع مختص لتلبية طلبات العملاء
                        </p>
                    </div>

                    <div className="bg-white flex-1 shadow-lg rounded-3xl p-6 md:p-10 border border-blue-200 flex flex-col justify-between">
                        <div
                            dir="rtl"
                            ref={ctaRef}
                            className="flex flex-col md:flex-row items-center gap-6 px-3 py-8 bg-white rounded-2xl shadow-md border"
                        >
                            <Link
                                to="https://wa.me/+201010195337"
                                target="_blank"
                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-3 rounded-lg font-bold shadow-md transition duration-300"
                            >
                                اطلب منتجاتنا
                            </Link>
                            <p className="text-sm font-medium text-gray-700 text-center md:text-right">
                                لطلب منتجات شركة الرواد للفيبرجلاس<br />
                                اكشاك حراسة - اكوابارك - ألعاب أطفال - خزانات - كرافانات - كبائن سيارات - طفطف
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
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


                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 my-8 relative">
                    لماذا تختار شوشه للفيبرجلاس؟
                    <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-red-600 rounded-full transform -translate-x-1/2"></span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                        {
                            title: "صمم من أجل الأفضل",
                            text: "من مقرنا الرئيسي و فروعنا المتعدده داخل مصر و خارجها...",
                            circle: "متوفر في 12 دولة",
                            color: "from-red-100 to-white",
                            titleColor: "text-red-600",
                        },
                        {
                            title: "سياستنا ✅",
                            text: "سياستنا تسعى الى ارضاء العميل و تحقيق متطلباته...",
                            circle: "أكثر من 890 مشروع",
                            color: "from-yellow-100 to-white",
                            titleColor: "text-yellow-600",
                        },
                        {
                            title: "دورنا",
                            text: "نصنع منتج عالي الجودة مطابق للمواصفات الأوروبية...",
                            circle: "أكثر من 500 عميل",
                            color: "from-blue-100 to-white",
                            titleColor: "text-blue-600",
                        },
                    ].map((card, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className={`bg-gradient-to-tr ${card.color} rounded-3xl p-8 shadow-lg transition-transform hover:scale-105 border flex flex-col justify-between min-h-[330px]`}
                        >
                            <div>
                                <h3 className={`text-lg font-bold mb-4 ${card.titleColor}`}>
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-700 leading-loose">{card.text}</p>
                            </div>
                            <div
                                ref={(el) => (circlesRef.current[i] = el)}
                                className="w-28 h-28 mt-8 mx-auto rounded-full border-[10px] border-blue-800 flex items-center justify-center text-center text-sm font-bold text-blue-900 shadow-inner bg-white"
                            >
                                {card.circle}
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    ref={ctaRef}
                    dir="rtl"
                    className="flex flex-col md:flex-row items-center gap-6 px-6 py-10 bg-white rounded-2xl shadow-xl border"
                >
                    <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-lg font-bold shadow-md transition duration-300">
                        اطلب منتجاتنا الآن
                    </button>
                    <p className="text-sm font-medium text-gray-700 text-center md:text-right">
                        لطلب منتجات شركة الرواد للفيبرجلاس
                        <br />
                        اكشاك حراسة - اكوابارك - ألعاب أطفال - خزانات - كرافانات - كبائن سيارات - طفطف
                    </p>
                </div>
            </div>
        </section>
    );
}
