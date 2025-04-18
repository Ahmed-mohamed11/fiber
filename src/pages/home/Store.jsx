import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Store() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(
            ".store-heading",
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".store-heading",
                    start: "top 80%",
                    end: "bottom 50%",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            ".store-paragraph",
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".store-paragraph",
                    start: "top 75%",
                    end: "bottom 50%",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            ".store-buttons img",
            {
                scale: 0.8,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                stagger: 0.2,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".store-buttons",
                    start: "top 70%",
                    end: "bottom 50%",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            ".store-image",
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".store-image",
                    start: "top 65%",
                    end: "bottom 50%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <section className="bg-white py-16 text-gray-800" dir="rtl">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                     <div className="bg-gray-100 shadow-lg rounded-xl p-8 min-h-[350px] flex flex-col items-center transition-transform transform hover:scale-105">
                        <h3 className="text-red-600 font-bold text-lg mb-4">صمم من أجل الأفضل</h3>
                        <p className="text-sm text-gray-700 leading-loose mb-6">
                            من مقرنا الرئيسي و فروعنا المتعدده داخل مصر و خارجها نسعى الى عمل تصميمات راقية تحقق متطلبات السادة عملائنا الكرام
                            هو إنتاج منتج ذو صناعة مصرية بأيادي مصرية و بمواصفات اوروبية لننافسنا داخل مصر.
                        </p>
                        <div className="w-28 h-28 rounded-full border-[10px] border-blue-800 flex items-center justify-center text-center text-sm font-bold text-gray-800">
                            متوفر في 12 دولة
                        </div>
                    </div>

                    <div className="bg-gray-100 shadow-lg rounded-xl p-8 min-h-[350px] flex flex-col items-center transition-transform transform hover:scale-105">
                        <h3 className="text-black font-bold text-lg mb-4">سياستنا ✅</h3>
                        <p className="text-sm text-gray-700 leading-loose mb-6">
                            سياستنا تسعى الى ارضاء العميل و تحقيق متطلباته نسعى الى عمل تصميمات تحقق أهداف العميل نهتم بجودة المنتجات
                            و جودة التركيبات و كفاءة الفنيين.
                        </p>
                        <div className="w-28 h-28 rounded-full border-[10px] border-blue-800 flex items-center justify-center text-center text-sm font-bold text-gray-800">
                            أكثر من 890 مشروع
                        </div>
                    </div>

                    <div className="bg-gray-100 shadow-lg rounded-xl p-8 min-h-[350px] flex flex-col items-center transition-transform transform hover:scale-105">
                        <h3 className="text-red-600 font-bold text-lg mb-4">دورنا</h3>
                        <p className="text-sm text-gray-700 leading-loose mb-6">
                            نصنع منتج عالي الجودة مطابق للمواصفات الأوروبية يصلح لبلدنا الحبيبة و يصلح للتصدير خارج البلاد، و نوفر فرص عمل
                            للأيدي العاملة.
                        </p>
                        <div className="w-28 h-28 rounded-full border-[10px] border-blue-800 flex items-center justify-center text-center text-sm font-bold text-gray-800">
                            أكثر من 500 عميل
                        </div>
                    </div>
                </div>

                <div className="flex  items-center shadow-lg gap-5 px-5 py-8 mt-10">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-16 py-3 rounded-lg font-bold shadow-lg transition">
                        اطلب منتجاتنا الآن
                    </button>

                    <p className="mb-4 text-sm font-medium text-gray-700">
                        لطلب منتجات شركة الرواد للفيبرجلاس
                        <br />
                        اكشاك حراسة - اكوابارك - ألعاب أطفال - خزانات - كرافانات - كبائن سيارات - طفطف
                    </p>
                </div>
            </div>
        </section>
    );
}
