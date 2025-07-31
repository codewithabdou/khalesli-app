"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Building2,
  Users,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  CreditCard,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  UserCheck,
  Smartphone,
  Globe,
  Lock,
  ChevronDown,
  ChevronUp,
  Play,
} from "lucide-react"

export default function BNPLBankingLanding() {
  const [activeTab, setActiveTab] = useState("overview")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    bankName: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  })

  const stats = [
    { label: "زيادة في رضا العملاء", value: "85%", icon: Users },
    { label: "نمو في الإيرادات", value: "40%", icon: TrendingUp },
    { label: "تحسن في الاحتفاظ بالعملاء", value: "60%", icon: UserCheck },
    { label: "سرعة التكامل", value: "48 ساعة", icon: Zap },
  ]

  const features = [
    {
      icon: Shield,
      title: "أمان متقدم",
      description: "تشفير من الدرجة المصرفية وحماية البيانات وفقاً للمعايير الدولية",
    },
    {
      icon: Zap,
      title: "تكامل سريع",
      description: "API سهل التكامل مع أنظمة البنوك الحالية في أقل من 48 ساعة",
    },
    {
      icon: BarChart3,
      title: "تحليلات متقدمة",
      description: "لوحة تحكم شاملة لمراقبة الأداء وتحليل سلوك العملاء",
    },
    {
      icon: Globe,
      title: "تغطية شاملة",
      description: "شبكة واسعة من التجار المعتمدين في جميع أنحاء الجزائر",
    },
    {
      icon: Lock,
      title: "امتثال كامل",
      description: "متوافق مع لوائح البنك المركزي الجزائري والمعايير الشرعية",
    },
    {
      icon: Smartphone,
      title: "تجربة رقمية",
      description: "واجهة مستخدم حديثة ومتجاوبة لجميع الأجهزة",
    },
  ]

  const benefits = [
    {
      title: "زيادة الإيرادات",
      description: "إيرادات إضافية من رسوم المعاملات والشراكات التجارية",
      percentage: "40%",
    },
    {
      title: "جذب عملاء جدد",
      description: "استقطاب الشباب والعملاء الرقميين الباحثين عن حلول مرنة",
      percentage: "65%",
    },
    {
      title: "تحسين الولاء",
      description: "زيادة استخدام الخدمات المصرفية والاحتفاظ بالعملاء",
      percentage: "60%",
    },
  ]

  const testimonials = [
    {
      bank: "بنك الجزائر الخارجي",
      contact: "مدير الخدمات الرقمية",
      quote: "خلصلي ساعدنا في تقديم خدمة متميزة لعملائنا وزيادة حصتنا في السوق بشكل ملحوظ",
      rating: 5,
    },
    {
      bank: "القرض الشعبي الجزائري",
      contact: "رئيس قسم التطوير",
      quote: "التكامل كان سلساً والنتائج فاقت توقعاتنا من ناحية رضا العملاء والإيرادات",
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: "كيف يتم التكامل مع أنظمة البنك الحالية؟",
      answer: "نوفر API متقدم وفريق تقني متخصص لضمان التكامل السلس مع جميع الأنظمة المصرفية الحالية خلال 48 ساعة فقط.",
    },
    {
      question: "ما هي تكلفة الخدمة؟",
      answer: "نقدم نماذج تسعير مرنة تناسب حجم البنك وعدد المعاملات، مع إمكانية تخصيص الباقة حسب احتياجاتكم.",
    },
    {
      question: "هل الخدمة متوافقة مع الأحكام الشرعية؟",
      answer: "نعم، خدمتنا معتمدة من هيئة الرقابة الشرعية وتتوافق مع جميع الأحكام الإسلامية في المعاملات المالية.",
    },
    {
      question: "ما مستوى الدعم التقني المتاح؟",
      answer: "نوفر دعماً تقنياً على مدار الساعة، بالإضافة إلى فريق مخصص لكل بنك شريك لضمان أفضل خدمة.",
    },
  ]

  return (
    <div className="min-h-screen bg-white font-arabic" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-reverse space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">خلصلي</h1>
              <Badge className="bg-blue-100 text-blue-800">للبنوك</Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-reverse space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                المميزات
              </a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">
                الفوائد
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
                آراء العملاء
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                تواصل معنا
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">احجز عرضاً تقديمياً</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-l from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">الحل المصرفي الأول في الجزائر</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                امنح عملاءك تجربة
                <span className="text-blue-600"> دفع مرنة </span>
                مع خلصلي
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                حل الدفع بالتقسيط المتكامل الذي يساعد البنوك على تقديم خدمات مالية عصرية لعملائها وزيادة الإيرادات
                بطريقة آمنة ومتوافقة مع الشريعة
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  <Play className="w-5 h-5 ml-2" />
                  شاهد العرض التقديمي
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 bg-transparent">
                  <Phone className="w-5 h-5 ml-2" />
                  تحدث مع خبير
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">لوحة تحكم البنك</h3>
                  <Badge className="bg-green-100 text-green-800">مباشر</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">2,847</p>
                    <p className="text-sm text-gray-600">معاملة اليوم</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">98.5%</p>
                    <p className="text-sm text-gray-600">معدل النجاح</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">معاملات جديدة</span>
                    <span className="text-sm font-semibold text-gray-900">+15%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">رضا العملاء</span>
                    <span className="text-sm font-semibold text-gray-900">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">لماذا تختار البنوك خلصلي؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              حل متكامل يجمع بين التكنولوجيا المتقدمة والامتثال المصرفي لتقديم أفضل تجربة للعملاء
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">فوائد مباشرة لبنكك</h2>
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-reverse space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                        <Badge className="bg-green-100 text-green-800">+{benefit.percentage}</Badge>
                      </div>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">عائد الاستثمار</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">زيادة الإيرادات السنوية</span>
                  <span className="text-2xl font-bold text-green-600">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">تكلفة التكامل</span>
                  <span className="text-lg font-semibold text-gray-900">منخفضة</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">فترة الاسترداد</span>
                  <span className="text-lg font-semibold text-blue-600">3 أشهر</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">صافي الربح المتوقع</span>
                  <span className="text-2xl font-bold text-blue-600">+250%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">ثقة البنوك الرائدة</h2>
            <p className="text-xl text-gray-600">شركاؤنا يحققون نتائج استثنائية</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center ml-4">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.bank}</p>
                      <p className="text-gray-600">{testimonial.contact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">الأسئلة الشائعة</h2>
            <p className="text-xl text-gray-600">إجابات على أهم استفساراتكم</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="mb-4 border-0 shadow-sm">
                <CardContent className="p-0">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 text-right flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-l from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">ابدأ رحلتك مع خلصلي اليوم</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                انضم إلى البنوك الرائدة التي تثق في خلصلي لتقديم أفضل خدمات الدفع بالتقسيط لعملائها
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-reverse space-x-3">
                  <Phone className="w-6 h-6 text-blue-200" />
                  <span className="text-blue-100">+213 21 123 456</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3">
                  <Mail className="w-6 h-6 text-blue-200" />
                  <span className="text-blue-100">banks@khalasli.dz</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3">
                  <MapPin className="w-6 h-6 text-blue-200" />
                  <span className="text-blue-100">الجزائر العاصمة، الجزائر</span>
                </div>
              </div>
            </div>
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">احجز عرضاً تقديمياً</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">اسم البنك</label>
                    <Input
                      value={formData.bankName}
                      onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                      placeholder="اسم البنك"
                      className="text-right"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">اسم المسؤول</label>
                    <Input
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="الاسم الكامل"
                      className="text-right"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@bank.dz"
                        className="text-right"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+213 XX XXX XXX"
                        className="text-right"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">رسالة إضافية</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="أخبرنا عن احتياجات بنكك..."
                      className="w-full p-3 border border-gray-300 rounded-lg text-right resize-none h-24"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4">
                    <ArrowRight className="w-5 h-5 ml-2" />
                    احجز العرض التقديمي
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-reverse space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">خلصلي</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">الحل المصرفي الأول للدفع بالتقسيط في الجزائر</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">الخدمات</h4>
              <ul className="space-y-2 text-gray-400">
                <li>حلول الدفع بالتقسيط</li>
                <li>تكامل الأنظمة المصرفية</li>
                <li>التحليلات والتقارير</li>
                <li>الدعم التقني</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">الشركة</h4>
              <ul className="space-y-2 text-gray-400">
                <li>من نحن</li>
                <li>فريق العمل</li>
                <li>الشراكات</li>
                <li>الأخبار</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+213 21 123 456</li>
                <li>banks@khalasli.dz</li>
                <li>الجزائر العاصمة</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 خلصلي. جميع الحقوق محفوظة.</p>
            <div className="flex space-x-reverse space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
