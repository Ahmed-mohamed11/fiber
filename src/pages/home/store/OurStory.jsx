import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const OurStory = () => {
    
  return (
      <section className="bg-gradient-to-b from-blue-50 mt-16 via-white to-blue-100 text-right" >
          <div className="container space-y-8 mx-auto px-6 md:px-12 font-sans">
              <motion.div
                  className="container mx-auto px-6 md:px-12   flex-col  gap-6 md:gap-12 items-stretch text-right"
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

                     
                      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
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
              </div>
              </section>
              
                )
}

export default OurStory