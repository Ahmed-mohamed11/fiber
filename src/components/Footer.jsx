import { useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
        <footer ref={footerRef} className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 pt-20 pb-10 mt-24 shadow-2xl" dir="rtl">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                <div className="footer-col">
                    <h2 className="text-3xl font-bold text-white mb-4">الرواد للفيبرجلاس</h2>
                    <p className="text-sm leading-7 text-gray-400">
                        نقدم أفضل حلول الفيبرجلاس بخبرة وجودة عالية، ونتميز في تنفيذ المشاريع الصناعية والسكنية بتقنيات متقدمة.
                    </p>
                </div>

                <div className="footer-col">
                    <h3 className="text-xl font-semibold text-white mb-5 border-b border-gray-600 pb-2">روابط مهمة</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        {["الرئيسية", "من نحن", "خدماتنا", "منتجاتنا", "اتصل بنا"].map((link, i) => (
                            <li key={i}>
                                <a href="#" className="hover:text-white transition duration-300">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h3 className="text-xl font-semibold text-white mb-5 border-b border-gray-600 pb-2">معلومات الاتصال</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>📍 العنوان: المنطقة الصناعية - القاهرة</li>
                        <li>📞 الهاتف: 0100 123 4567</li>
                        <li>📧 البريد: info@alrowadfiberglass.com</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3 className="text-xl font-semibold text-white mb-5 border-b border-gray-600 pb-2">تابعنا</h3>
                    <div className="flex space-x-4 rtl:space-x-reverse mt-4">
                        <SocialIcon href="#" icon={<FaFacebookF />} color="hover:text-blue-500" />
                        <SocialIcon href="#" icon={<FaTwitter />} color="hover:text-sky-400" />
                        <SocialIcon href="#" icon={<FaInstagram />} color="hover:text-pink-500" />
                        <SocialIcon href="#" icon={<FaLinkedinIn />} color="hover:text-blue-300" />
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} جميع الحقوق محفوظة لمصنع الرواد للفيبرجلاس.
            </div>
        </footer>
    );
}

function SocialIcon({ href, icon, color }) {
    return (
        <a
            href={href}
            className={`bg-gray-700 text-white text-lg p-2 rounded-full shadow-md transition duration-300 hover:bg-white ${color}`}
        >
            {icon}
        </a>
    );
}
