import { Phone } from "lucide-react";

const heroImage = "/images/gfx/mockup-header2.webp";

export default function Hero() {
    return (
        <section className="bg-gray-50" dir="ltr">
            <div className="container mx-auto  px-8 font-sans">


                <div className="grid md:grid-cols-2 gap-12 items-center">


                    <div className="order-1 md:order-2 animate-zoom-in">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-yellow-400 group transition-transform duration-500 hover:scale-105">
                            <img
                                src={heroImage}
                                alt="خزانات فيبر جلاس"
                                className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl"
                            />
                            <div className="absolute bottom-0 w-full bg-gradient-to-t from-blue-900/80 to-transparent p-5 text-white text-center">
                                <h2 className="text-2xl font-bold drop-shadow-md">خزانات فيبر جلاس</h2>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <button className="bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-bold shadow-md transition-all duration-300 hover:scale-105">
                                منتجات الشركة
                            </button>
                            <button className="border border-blue-700 text-blue-700 hover:bg-blue-50 py-3 rounded-xl font-bold shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                                <Phone className="h-5 w-5" />
                                اتصل بنا
                            </button>
                        </div>
                    </div>
                    <div className="space-y-8 order-2 md:order-1 animate-fade-in-up">
                        <header className="mb-14 text-center">
                            <h1 className="text-2xl  font-extrabold text-blue-800 mb-2 animate-fade-in">
                                لماذا شركة الرواد للفيبر جلاس؟
                            </h1>
                            <div className="h-1 w-32 mx-auto bg-blue-600 rounded-full animate-wiggle" />
                        </header>
                        {[...Array(2)].map((_, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-4 rounded-2xl shadow-md border hover:shadow-lg transition-shadow duration-300"
                            >

                                {idx === 0 ? (
                                    <>
                                        <p className="text-gray-700 leading-loose text-right">
                                            تأسست شركة شوشه جروب للفيبر جلاس و هى شركة رائدة في مجال الفيبر جلاس استطاعت الشركة خلال فترة قصيرة أن تتقدم في مجال الفيبر جلاس و تصدير منتجاتها الى الخارج تتميز الشركة بأنها شركة رائدة في تصنيع الفيبر المسلح بالألياف الزجاجية و المدهونة بمادة الجليكوت الملساء و التي تتميز بتحملها العوامل الجوية و للشركة اسم مميز داخل السوق المصري و العربي بما تقدمه من منتجات متعددة و بأسعار مناسبة و جودة عالية تتميز الشركة بأن لديها المتخصصين الذين يستطيعون بفضل الله ثم كفائتهم العالية و خبرتهم الطويلة من تنفيذ و تصميم أى رسومات أو مواصفات خاصة للمنتجات المطلوبة طبقاً للمواصفات القياسية العالمية و المصرية و كذلك طبقاً لرغبة العملاء
                                        </p>

                                    </>
                                ) : (
                                    <>
                                        <p className="text-gray-700 leading-loose text-right space-y-5 ">
                                            بدأت قصتنا مع الفيبر جلاس و تلبية متطلبات السادة العملاء من تصنيع جميع منتجات الفيبر جلاس التي تخدم السادة العملاء و تصب في مصلحة بلادنا الحبيبة مصر مثل أكشاك الحراسة المصممة بطريقة ديكورية ماهرة لتلبية رغبة العميل و تحتوي شكلاً جمالياً و كذلك قمنا بتصنيع الخزانات بأشكالها و أحجامها المختلفة و استخداماتها المتنوعة و أتممنا رحلتنا في مجالات متنوعة تخدم اقتصاد بلادنا مثل أعمدة الإنارة حيث قمنا بتصنيع أعمدة الإنارة بأشكال ديكورية لتعطي جمالاً على المكان الذي توجد فيه قمنا بعمل قسم خاص لتصنيع أعمدة الإنارة بدأً من أصغر عامود ٦٠ سم حتى ١٢ م أعمدة الحدائق و النوادي و الشوارع و قمنا بعمل تصميمات جديدة للأعمدة و موقع خاص ليعرض منتجاتنا لعملائنا و أصبحنا مصنع مختص لتلبية طلبات العملاء                                        </p>

                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
