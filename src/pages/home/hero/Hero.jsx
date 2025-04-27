import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../../../images/gfx/Untitled_design[1].png";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-blue-50 via-white to-blue-100 relative top-20" dir="ltr">
            <div className="container mx-auto px-6 md:px-12 font-sans">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-stretch min-h-[600px]">
                    <motion.div
                        className="order-1 md:order-2 flex flex-col justify-between h-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400 group transition-transform duration-500 hover:scale-105">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-full h-64 sm:h-96 md:h-[500px] object-cover rounded-3xl"
                            />
                        </div>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                    <motion.div
                        className="space-y-10 order-2 md:order-1 h-full self-stretch flex flex-col justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <header className="text-center md:text-right" dir="rtl">
                            <h1 className="text-3xl md:text-4xl font-extrabold py-2 text-blue-900 border-b-2 border-b-black border-dashed border-l-blue-700 w-fit mx-auto md:mx-0">
                                لماذا شوشه جروب للفيبر جلاس؟
                            </h1>
                        </header>

                        {[...Array(2)].map((_, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                viewport={{ once: false, amount: 0.5 }}
                            >
                                <p dir="rtl" className="text-gray-800 leading-loose text-justify text-sm md:text-base">
                                    {idx === 0 ? (
                                        `تأسست شركة شوشه جروب للفيبر جلاس و هى شركة رائدة في مجال الفيبر جلاس استطاعت الشركة خلال فترة قصيرة أن تتقدم في مجال الفيبر جلاس و تصدير منتجاتها الى الخارج تتميز الشركة بأنها شركة رائدة في تصنيع الفيبر المسلح بالألياف الزجاجية و المدهونة بمادة الجليكوت الملساء و التي تتميز بتحملها العوامل الجوية و للشركة اسم مميز داخل السوق المصري و العربي بما تقدمه من منتجات متعددة و بأسعار مناسبة و جودة عالية تتميز الشركة بأن لديها المتخصصين الذين يستطيعون بفضل الله ثم كفائتهم العالية و خبرتهم الطويلة من تنفيذ و تصميم أى رسومات أو مواصفات خاصة للمنتجات المطلوبة طبقاً للمواصفات القياسية العالمية و المصرية و كذلك طبقاً لرغبة العملاء.`
                                    ) : (
                                        `بدأت قصتنا مع الفيبر جلاس و تلبية متطلبات السادة العملاء من تصنيع جميع منتجات الفيبر جلاس التي تخدم السادة العملاء و تصب في مصلحة بلادنا الحبيبة مصر مثل أكشاك الحراسة المصممة بطريقة ديكورية ماهرة لتلبية رغبة العميل و تحتوي شكلاً جمالياً و كذلك قمنا بتصنيع الخزانات بأشكالها و أحجامها المختلفة و استخداماتها المتنوعة و أتممنا رحلتنا في مجالات متنوعة تخدم اقتصاد بلادنا مثل أعمدة الإنارة حيث قمنا بتصنيع أعمدة الإنارة بأشكال ديكورية لتعطي جمالاً على المكان الذي توجد فيه قمنا بعمل قسم خاص لتصنيع أعمدة الإنارة بدأً من أصغر عامود ٦٠ سم حتى ١٢ م أعمدة الحدائق و النوادي و الشوارع و قمنا بعمل تصميمات جديدة للأعمدة و موقع خاص ليعرض منتجاتنا لعملائنا و أصبحنا مصنع مختص لتلبية طلبات العملاء `
                                    )}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
