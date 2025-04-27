import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
    const footerRef = useRef(null);

    useEffect(() => {
        const cols = gsap.utils.toArray(".footer-col");
        gsap.from(cols, {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 80%",
            }
        });
    }, []);

    return (
        <footer ref={footerRef} className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 pt-20 pb-10  shadow-2xl" dir="rtl">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                <div className="footer-col">
                    <h2 className="text-3xl font-bold text-white mb-4">شوشه جروب للفيبرجلاس</h2>
                    <p className="text-sm leading-7 text-gray-400">
                        نقدم أفضل حلول الفيبرجلاس بخبرة وجودة عالية، ونتميز في تنفيذ المشاريع الصناعية والسكنية بتقنيات متقدمة.
                    </p>
                </div>

                <div className="footer-col">
                    <h3 className="text-xl font-semibold text-white mb-5 border-b border-gray-600 pb-2">روابط مهمة</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        {["الصفحة الرئيسية", "المنتجات", "عن الشركة", "تواصل معنا"].map((link, i) => (
                            <li key={i}>
                                <a href="#" className="hover:text-white transition duration-300">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h3 className="text-xl font-semibold text-white mb-5 border-b border-gray-600 pb-2">معلومات الاتصال</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>📞 الهاتف: 01010195337</li>
                        <li>📧 البريد: samamdouh214@gmail.com</li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} جميع الحقوق محفوظة لشوشه جروب للفيبرجلاس.
            </div>
        </footer>
    );
}
