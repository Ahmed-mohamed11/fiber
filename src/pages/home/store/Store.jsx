import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
        <section className="bg-gradient-to-b from-blue-50 pt-16 via-white to-blue-100 text-right" >
            <div className="container space-y-8 mx-auto px-6 md:px-12 font-sans">
              


                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 my-8 relative">
                    لماذا تختار شوشه للفيبرجلاس؟
                    <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-red-600 rounded-full transform -translate-x-1/2"></span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-12" dir="rtl">
                    {[
                        {
                            title: "صمم من أجل الأفضل",
                            text: "من مقرنا الرئيسي و فروعنا المتعدده داخل مصر نسعى الى عمل تصميمات راقية تحقق متطلبات السادة عملائنا الكرام هو إنتاج منتج ذو صناعة مصرية بأيادي مصرية و بمواصفات اوروبية لننافس داخل مصر.",
                            circle: "متوفر في 1 دولة",
                            color: "from-red-100 to-white",
                            titleColor: "text-red-600",
                        },
                        {
                            title: "سياستنا ✅",
                            text: "سياستنا تسعى الى ارضاء العميل و تحقيق متطلباته نسعى الى عمل تصميمات تحقق أهداف العميل نهتم بجودة المنتجات و جودة التركيبات و كفاءة الفنيين.",
                            circle: "أكثر من 890 مشروع",
                            color: "from-yellow-100 to-white",
                            titleColor: "text-yellow-600",
                        },
                        {
                            title: "دورنا",
                            text: "نصنع منتج عالي الجودة مطابق للمواصفات الأوروبية يصلح لبلدنا الحبيبة و يصلح للتصدير خارج البلاد، و نوفر فرص عمل للأيدي العاملة.",
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
                                <p className="text-sm text-gray-700 leading-loose">
                                    {card.text}
                                </p>
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
                    dir="rtl"
                    ref={ctaRef}
                    className="flex flex-col md:flex-row items-center gap-6 px-6 py-10 bg-white rounded-2xl shadow-xl border"
                >
                    <Link
                        to="https://wa.me/+201010195337"
                        target="_blank"
                    className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-lg font-bold shadow-md transition duration-300">
                        اطلب منتجاتنا الآن
                    </Link>
                    <p className="text-sm font-medium text-gray-700 text-center md:text-right">
                        لطلب منتجات شركة شوشة للفيبرجلاس
                        <br />
                        اكشاك حراسة - اكوابارك - ألعاب أطفال - خزانات - كرافانات - كبائن سيارات - طفطف
                    </p>
                </div>
            </div>
        </section>
    );
}
