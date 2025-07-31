"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  Home,
  CreditCard,
  Phone,
  Plus,
  ArrowLeft,
  Calendar,
  User,
  Clock,
  CheckCircle,
  AlertCircle,
  Wallet,
  Receipt,
  Settings,
  Bell,
  Eye,
  EyeOff,
  QrCode,
  Fingerprint,
  Bot,
  BarChart3,
  TrendingUp,
  Target,
  Lightbulb,
  Shield,
  Camera,
  Scan,
  X,
} from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

type Screen =
  | "dashboard"
  | "checkout"
  | "profile"
  | "transactions"
  | "support"
  | "analytics"
  | "qr-scanner"
  | "ai-assistant"
  | "biometric-setup"

export default function BNPLMobileApp() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("dashboard")
  const [showBalance, setShowBalance] = useState(true)
  const [checkoutStep, setCheckoutStep] = useState(1)
  const [selectedMerchant, setSelectedMerchant] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [installments, setInstallments] = useState(3)
  const [biometricEnabled, setBiometricEnabled] = useState(false)
  const [isScanning, setIsScanning] = useState(false)
  const [aiChatMessages, setAiChatMessages] = useState([
    { type: "ai", message: "مرحباً! أنا مساعدك المالي الذكي. كيف يمكنني مساعدتك اليوم؟" },
  ])
  const [aiInput, setAiInput] = useState("")

  // Mock data for analytics
  const spendingData = [
    { month: "يناير", amount: 25000 },
    { month: "فبراير", amount: 32000 },
    { month: "مارس", amount: 18000 },
    { month: "أبريل", amount: 45000 },
    { month: "مايو", amount: 38000 },
    { month: "يونيو", amount: 52000 },
  ]

  const categoryData = [
    { name: "إلكترونيات", value: 45, color: "#3B82F6" },
    { name: "ملابس", value: 25, color: "#10B981" },
    { name: "منزل", value: 20, color: "#F59E0B" },
    { name: "أخرى", value: 10, color: "#EF4444" },
  ]

  const NavigationBar = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center">
        <button
          onClick={() => setCurrentScreen("dashboard")}
          className={`flex flex-col items-center p-2 ${
            currentScreen === "dashboard" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">الرئيسية</span>
        </button>
        <button
          onClick={() => setCurrentScreen("transactions")}
          className={`flex flex-col items-center p-2 ${
            currentScreen === "transactions" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <CreditCard className="w-6 h-6" />
          <span className="text-xs mt-1">المعاملات</span>
        </button>
        <button
          onClick={() => setCurrentScreen("analytics")}
          className={`flex flex-col items-center p-2 ${
            currentScreen === "analytics" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <BarChart3 className="w-6 h-6" />
          <span className="text-xs mt-1">التحليلات</span>
        </button>
        <button
          onClick={() => setCurrentScreen("support")}
          className={`flex flex-col items-center p-2 ${
            currentScreen === "support" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          <Phone className="w-6 h-6" />
          <span className="text-xs mt-1">الدعم</span>
        </button>
      </div>
    </div>
  )

  const DashboardScreen = () => (
    <div className="pb-20" dir="rtl">
      {/* Header */}
      <div className="bg-gradient-to-l from-blue-600 to-blue-700 text-white p-6 rounded-b-3xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">مرحباً، محمد!</h1>
            <p className="text-blue-100">أهلاً بك في خلصلي</p>
          </div>
          <div className="flex space-x-reverse space-x-3">
            <button
              onClick={() => setCurrentScreen("ai-assistant")}
              className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center"
            >
              <Bot className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentScreen("qr-scanner")}
              className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"
            >
              <QrCode className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentScreen("profile")}
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center"
            >
              <User className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Balance Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-blue-100 text-sm">الرصيد المتاح</p>
                <div className="flex items-center space-x-reverse space-x-2">
                  <p className="text-2xl font-bold">{showBalance ? "120,000" : "••••••"} دج</p>
                  <button onClick={() => setShowBalance(!showBalance)}>
                    {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <Wallet className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button
            onClick={() => setCurrentScreen("checkout")}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 h-auto flex-col space-y-2"
          >
            <Plus className="w-6 h-6" />
            <span>شراء جديد</span>
          </Button>
          <Button
            onClick={() => setCurrentScreen("qr-scanner")}
            variant="outline"
            className="p-4 h-auto flex-col space-y-2 bg-transparent"
          >
            <QrCode className="w-6 h-6" />
            <span>مسح QR</span>
          </Button>
        </div>

        {/* AI Insights */}
        <Card className="mb-6 bg-gradient-to-l from-purple-50 to-indigo-50 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-reverse space-x-3 mb-3">
              <Bot className="w-6 h-6 text-purple-600" />
              <h3 className="font-semibold text-purple-900">نصائح ذكية</h3>
            </div>
            <p className="text-sm text-purple-700 mb-3">
              لقد لاحظت أن إنفاقك على الإلكترونيات زاد بنسبة 20% هذا الشهر. هل تريد وضع حد أقصى للإنفاق؟
            </p>
            <Button
              size="sm"
              onClick={() => setCurrentScreen("ai-assistant")}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              تحدث مع المساعد الذكي
            </Button>
          </CardContent>
        </Card>

        {/* Active Installments */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">الأقساط النشطة</h2>

        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">شراء هواوي</h3>
                <p className="text-sm text-gray-600">3 أقساط متبقية</p>
                <div className="flex items-center space-x-reverse space-x-2 mt-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-600">القسط التالي: 1 أغسطس</span>
                </div>
              </div>
              <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200">
                نشط
              </Badge>
            </div>
            <div className="mt-3">
              <Progress value={25} className="h-2" />
            </div>
            <p className="text-xs text-gray-500 mt-1">تم دفع قسط واحد من 4</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">متجر كاشي</h3>
                <p className="text-sm text-gray-600">قسط واحد متبقي</p>
                <div className="flex items-center space-x-reverse space-x-2 mt-2">
                  <Calendar className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">القسط التالي: 15 أغسطس</span>
                </div>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                قريب الانتهاء
              </Badge>
            </div>
            <div className="mt-3">
              <Progress value={75} className="h-2" />
            </div>
            <p className="text-xs text-gray-500 mt-1">تم دفع 3 أقساط من 4</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const AnalyticsScreen = () => (
    <div className="pb-20" dir="rtl">
      {/* Header */}
      <div className="bg-gradient-to-l from-blue-600 to-blue-700 text-white p-6">
        <h1 className="text-xl font-bold">تحليلات الإنفاق</h1>
        <p className="text-blue-100">تتبع عاداتك المالية</p>
      </div>

      <div className="p-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">52,000</p>
              <p className="text-sm text-gray-600">إنفاق هذا الشهر</p>
              <Badge className="bg-green-100 text-green-800 mt-1">+15%</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">68,000</p>
              <p className="text-sm text-gray-600">الهدف الشهري</p>
              <Badge className="bg-blue-100 text-blue-800 mt-1">76%</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Spending Trend */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">اتجاه الإنفاق (6 أشهر)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={spendingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Line type="monotone" dataKey="amount" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">الإنفاق حسب الفئة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-reverse space-x-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: category.color }}></div>
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <span className="text-sm text-gray-600">{category.value}%</span>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${category.value}%`,
                          backgroundColor: category.color,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="bg-gradient-to-l from-purple-50 to-indigo-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-lg flex items-center space-x-reverse space-x-2">
              <Bot className="w-5 h-5 text-purple-600" />
              <span>رؤى ذكية</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-reverse space-x-3">
                <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
                <p className="text-sm text-gray-700">
                  يمكنك توفير 8,000 دج شهرياً عبر تقليل مشتريات الإلكترونيات بنسبة 20%
                </p>
              </div>
              <div className="flex items-start space-x-reverse space-x-3">
                <TrendingUp className="w-5 h-5 text-green-500 mt-0.5" />
                <p className="text-sm text-gray-700">أفضل وقت للشراء هو نهاية الشهر حيث تحصل على خصومات أكبر</p>
              </div>
              <div className="flex items-start space-x-reverse space-x-3">
                <Target className="w-5 h-5 text-blue-500 mt-0.5" />
                <p className="text-sm text-gray-700">أنت على الطريق الصحيح لتحقيق هدفك المالي لهذا الشهر</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const QRScannerScreen = () => (
    <div className="pb-20 bg-black" dir="rtl">
      {/* Header */}
      <div className="bg-black text-white p-4 flex items-center">
        <button onClick={() => setCurrentScreen("dashboard")} className="ml-4 text-white">
          <X className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">مسح رمز QR</h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-white">
        {/* Camera View Simulation */}
        <div className="relative w-80 h-80 bg-gray-800 rounded-2xl mb-6 flex items-center justify-center">
          <div className="absolute inset-4 border-2 border-white rounded-xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 border-t-2 border-l-2 border-white absolute -top-8 -left-8"></div>
            <div className="w-4 h-4 border-t-2 border-r-2 border-white absolute -top-8 -right-8"></div>
            <div className="w-4 h-4 border-b-2 border-l-2 border-white absolute -bottom-8 -left-8"></div>
            <div className="w-4 h-4 border-b-2 border-r-2 border-white absolute -bottom-8 -right-8"></div>
          </div>
          <QrCode className="w-16 h-16 text-gray-400" />
        </div>

        <p className="text-center text-lg mb-2">وجه الكاميرا نحو رمز QR</p>
        <p className="text-center text-gray-300 mb-8">سيتم المسح تلقائياً عند اكتشاف الرمز</p>

        {/* Action Buttons */}
        <div className="flex space-x-reverse space-x-4">
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            <Camera className="w-5 h-5 ml-2" />
            تبديل الكاميرا
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            <Scan className="w-5 h-5 ml-2" />
            من المعرض
          </Button>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white/10 rounded-lg p-4 w-full max-w-sm">
          <h3 className="font-semibold mb-2">نصائح للمسح الأفضل:</h3>
          <ul className="text-sm space-y-1 text-gray-300">
            <li>• تأكد من وجود إضاءة كافية</li>
            <li>• احتفظ بالهاتف ثابتاً</li>
            <li>• تأكد من وضوح رمز QR</li>
          </ul>
        </div>
      </div>
    </div>
  )

  const BiometricSetupScreen = () => (
    <div className="pb-20" dir="rtl">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center">
        <button onClick={() => setCurrentScreen("profile")} className="ml-4">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">المصادقة البيومترية</h1>
      </div>

      <div className="p-6">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Fingerprint className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">تأمين حسابك</h2>
          <p className="text-gray-600">استخدم بصمة الإصبع أو التعرف على الوجه لحماية حسابك وتسريع عملية تسجيل الدخول</p>
        </div>

        {/* Security Features */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-reverse space-x-3 p-4 bg-green-50 rounded-lg">
            <Shield className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-900">حماية متقدمة</h3>
              <p className="text-sm text-green-700">تشفير البيانات البيومترية محلياً على جهازك</p>
            </div>
          </div>

          <div className="flex items-center space-x-reverse space-x-3 p-4 bg-blue-50 rounded-lg">
            <Clock className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold text-blue-900">دخول سريع</h3>
              <p className="text-sm text-blue-700">تسجيل دخول فوري بدون كلمة مرور</p>
            </div>
          </div>

          <div className="flex items-center space-x-reverse space-x-3 p-4 bg-purple-50 rounded-lg">
            <CheckCircle className="w-6 h-6 text-purple-600" />
            <div>
              <h3 className="font-semibold text-purple-900">سهولة الاستخدام</h3>
              <p className="text-sm text-purple-700">لمسة واحدة للوصول إلى حسابك</p>
            </div>
          </div>
        </div>

        {/* Toggle Switch */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-900">تفعيل المصادقة البيومترية</h3>
                <p className="text-sm text-gray-600">استخدم بصمة الإصبع أو الوجه</p>
              </div>
              <button
                onClick={() => setBiometricEnabled(!biometricEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  biometricEnabled ? "bg-blue-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    biometricEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </CardContent>
        </Card>

        {biometricEnabled && (
          <Card className="mb-6 bg-green-50 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-reverse space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-900">تم التفعيل بنجاح</h3>
                  <p className="text-sm text-green-700">يمكنك الآن استخدام المصادقة البيومترية</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Button
          onClick={() => setCurrentScreen("profile")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4"
        >
          {biometricEnabled ? "تم الحفظ" : "تخطي الآن"}
        </Button>
      </div>
    </div>
  )

  const AIAssistantScreen = () => (
    <div className="pb-20" dir="rtl">
      {/* Header */}
      <div className="bg-gradient-to-l from-purple-600 to-indigo-700 text-white p-4 flex items-center">
        <button onClick={() => setCurrentScreen("dashboard")} className="ml-4 text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-reverse space-x-3">
          <Bot className="w-8 h-8" />
          <div>
            <h1 className="text-xl font-bold">المساعد المالي الذكي</h1>
            <p className="text-purple-100 text-sm">متصل الآن</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 space-y-4 max-h-96 overflow-y-auto">
        {aiChatMessages.map((message, index) => (
          <div key={index} className={`flex ${message.type === "user" ? "justify-start" : "justify-end"}`}>
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.type === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
              }`}
            >
              <p className="text-sm">{message.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2 mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setAiChatMessages([
                ...aiChatMessages,
                { type: "user", message: "ما هو رصيدي المتاح؟" },
                {
                  type: "ai",
                  message: "رصيدك المتاح حالياً هو 120,000 دج. يمكنك استخدام هذا المبلغ لمشتريات جديدة بالتقسيط.",
                },
              ])
            }}
            className="text-xs bg-transparent"
          >
            رصيدي المتاح؟
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setAiChatMessages([
                ...aiChatMessages,
                { type: "user", message: "نصائح لتوفير المال" },
                {
                  type: "ai",
                  message:
                    "إليك بعض النصائح: 1) ضع ميزانية شهرية 2) قارن الأسعار قبل الشراء 3) استفد من العروض والخصومات 4) تجنب الشراء الاندفاعي",
                },
              ])
            }}
            className="text-xs bg-transparent"
          >
            نصائح التوفير
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setAiChatMessages([
                ...aiChatMessages,
                { type: "user", message: "متى موعد القسط القادم؟" },
                {
                  type: "ai",
                  message: "لديك قسطان قادمان: 1) شراء هواوي - 1 أغسطس (11,250 دج) 2) متجر كاشي - 15 أغسطس (3,000 دج)",
                },
              ])
            }}
            className="text-xs bg-transparent"
          >
            الأقساط القادمة
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setAiChatMessages([
                ...aiChatMessages,
                { type: "user", message: "أفضل العروض الحالية" },
                {
                  type: "ai",
                  message:
                    "العروض المميزة اليوم: 1) خصم 25% على الإلكترونيات في تاجر التكنولوجيا 2) توصيل مجاني من جوميا 3) خصم 30% على الملابس في كاشي",
                },
              ])
            }}
            className="text-xs bg-transparent"
          >
            العروض الحالية
          </Button>
        </div>

        {/* Chat Input */}
        <div className="flex space-x-reverse space-x-2">
          <Input
            value={aiInput}
            onChange={(e) => setAiInput(e.target.value)}
            placeholder="اكتب رسالتك هنا..."
            className="flex-1 text-right"
            onKeyPress={(e) => {
              if (e.key === "Enter" && aiInput.trim()) {
                setAiChatMessages([
                  ...aiChatMessages,
                  { type: "user", message: aiInput },
                  { type: "ai", message: "شكراً لك على سؤالك. أعمل على تحليل طلبك وسأقدم لك الإجابة المناسبة قريباً." },
                ])
                setAiInput("")
              }
            }}
          />
          <Button
            onClick={() => {
              if (aiInput.trim()) {
                setAiChatMessages([
                  ...aiChatMessages,
                  { type: "user", message: aiInput },
                  { type: "ai", message: "شكراً لك على سؤالك. أعمل على تحليل طلبك وسأقدم لك الإجابة المناسبة قريباً." },
                ])
                setAiInput("")
              }
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            إرسال
          </Button>
        </div>
      </div>
    </div>
  )

  const CheckoutScreen = () => (
    <div className="pb-20" dir="rtl">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center">
        <button
          onClick={() => {
            if (checkoutStep > 1) {
              setCheckoutStep(checkoutStep - 1)
            } else {
              setCurrentScreen("dashboard")
              setCheckoutStep(1)
            }
          }}
          className="ml-4"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">شراء جديد</h1>
      </div>

      {/* Progress Bar */}
      <div className="p-4 bg-gray-50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">الخطوة {checkoutStep} من 4</span>
          <span className="text-sm text-blue-600">{Math.round((checkoutStep / 4) * 100)}%</span>
        </div>
        <Progress value={(checkoutStep / 4) * 100} className="h-2" />
      </div>

      <div className="p-6">
        {checkoutStep === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">أدخل سعر المنتج</h2>
            <p className="text-gray-600 mb-6">كم تريد أن تدفع بالتقسيط؟</p>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">سعر المنتج (دج)</label>
              <Input
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                placeholder="0"
                className="text-right text-2xl h-16 text-center"
              />
            </div>

            <Button
              onClick={() => setCheckoutStep(2)}
              disabled={!productPrice || Number.parseInt(productPrice) < 1000}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4"
            >
              التالي
            </Button>

            {productPrice && Number.parseInt(productPrice) < 1000 && (
              <p className="text-red-500 text-sm mt-2 text-center">الحد الأدنى للشراء 1,000 دج</p>
            )}
          </div>
        )}

        {checkoutStep === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">اختر التاجر</h2>
            <p className="text-gray-600 mb-6">من أين تريد الشراء؟</p>

            <div className="space-y-3 mb-6">
              {["متجر كاشي", "جوميا الجزائر", "أوريدو", "متجر التكنولوجيا"].map((merchant) => (
                <Card
                  key={merchant}
                  className={`cursor-pointer transition-all ${
                    selectedMerchant === merchant
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedMerchant(merchant)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-reverse space-x-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Receipt className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{merchant}</h3>
                          <p className="text-sm text-gray-600">تاجر معتمد</p>
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 ${
                          selectedMerchant === merchant ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}
                      >
                        {selectedMerchant === merchant && <CheckCircle className="w-3 h-3 text-white m-0.5" />}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              onClick={() => setCheckoutStep(3)}
              disabled={!selectedMerchant}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4"
            >
              التالي
            </Button>
          </div>
        )}

        {checkoutStep === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">اختر عدد الأقساط</h2>
            <p className="text-gray-600 mb-6">كم شهر تريد أن تدفع؟</p>

            <div className="space-y-3 mb-6">
              {[2, 3, 4].map((months) => {
                const monthlyPayment = Math.ceil(Number.parseInt(productPrice) / months)
                return (
                  <Card
                    key={months}
                    className={`cursor-pointer transition-all ${
                      installments === months ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setInstallments(months)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{months} أشهر</h3>
                          <p className="text-sm text-gray-600">{monthlyPayment.toLocaleString()} دج شهرياً</p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border-2 ${
                            installments === months ? "border-blue-500 bg-blue-500" : "border-gray-300"
                          }`}
                        >
                          {installments === months && <CheckCircle className="w-3 h-3 text-white m-0.5" />}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Button onClick={() => setCheckoutStep(4)} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4">
              التالي
            </Button>
          </div>
        )}

        {checkoutStep === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">جدول السداد</h2>
            <p className="text-gray-600 mb-6">راجع تفاصيل الدفع قبل التأكيد</p>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">ملخص الشراء</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">التاجر:</span>
                    <span className="font-semibold">{selectedMerchant}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">المبلغ الإجمالي:</span>
                    <span className="font-semibold">{Number.parseInt(productPrice).toLocaleString()} دج</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">عدد الأقساط:</span>
                    <span className="font-semibold">{installments} أشهر</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-600">القسط الشهري:</span>
                    <span className="font-bold text-blue-600">
                      {Math.ceil(Number.parseInt(productPrice) / installments).toLocaleString()} دج
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">جدول الأقساط</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Array.from({ length: installments }, (_, i) => {
                    const date = new Date()
                    date.setMonth(date.getMonth() + i + 1)
                    const monthlyPayment = Math.ceil(Number.parseInt(productPrice) / installments)

                    return (
                      <div key={i} className="flex justify-between items-center py-2">
                        <div>
                          <p className="font-medium">القسط {i + 1}</p>
                          <p className="text-sm text-gray-600">
                            {date.toLocaleDateString("ar-DZ", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                        <span className="font-semibold">{monthlyPayment.toLocaleString()} دج</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={() => {
                setCurrentScreen("dashboard")
                setCheckoutStep(1)
                setProductPrice("")
                setSelectedMerchant("")
                setInstallments(3)
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4"
            >
              تأكيد الشراء
            </Button>
          </div>
        )}
      </div>
    </div>
  )

  const ProfileScreen = () => (
    <div className="pb-20" dir="rtl">
      {/* Header */}
      <div className="bg-gradient-to-l from-blue-600 to-blue-700 text-white p-6">
        <div className="flex items-center space-x-reverse space-x-4">
          <button onClick={() => setCurrentScreen("dashboard")} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">الملف الشخصي</h1>
        </div>
      </div>

      <div className="p-6">
        {/* User Info */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center space-x-reverse space-x-4 mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">محمد أحمد</h2>
                <p className="text-gray-600">mohamed.ahmed@email.com</p>
                <p className="text-gray-600">+213 555 123 456</p>
              </div>
            </div>
            <div className="flex items-center space-x-reverse space-x-2">
              <Badge className="bg-green-100 text-green-800">حساب مفعل</Badge>
              {biometricEnabled && (
                <Badge className="bg-blue-100 text-blue-800">
                  <Fingerprint className="w-3 h-3 ml-1" />
                  مؤمن بيومترياً
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setCurrentScreen("biometric-setup")}
          >
            <CardContent className="p-4 text-center">
              <Fingerprint className="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <p className="text-sm font-medium">الأمان البيومتري</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <Settings className="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <p className="text-sm font-medium">الإعدادات</p>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <Receipt className="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <p className="text-sm font-medium">الفواتير</p>
            </CardContent>
          </Card>
          <Card
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setCurrentScreen("analytics")}
          >
            <CardContent className="p-4 text-center">
              <BarChart3 className="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <p className="text-sm font-medium">التحليلات</p>
            </CardContent>
          </Card>
        </div>

        {/* Transaction History */}
        <h3 className="text-lg font-bold text-gray-900 mb-4">سجل المعاملات</h3>

        <div className="space-y-3">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">شراء هواوي P50</h4>
                  <p className="text-sm text-gray-600">تاجر التكنولوجيا</p>
                  <p className="text-sm text-gray-500">15 يوليو 2024</p>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">45,000 دج</p>
                  <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200">
                    <Clock className="w-3 h-3 ml-1" />
                    قيد السداد
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">ملابس صيفية</h4>
                  <p className="text-sm text-gray-600">متجر كاشي</p>
                  <p className="text-sm text-gray-500">2 يوليو 2024</p>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">12,000 دج</p>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    <CheckCircle className="w-3 h-3 ml-1" />
                    مكتمل
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">أحذية رياضية</h4>
                  <p className="text-sm text-gray-600">جوميا الجزائر</p>
                  <p className="text-sm text-gray-500">20 يونيو 2024</p>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">8,500 دج</p>
                  <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
                    <AlertCircle className="w-3 h-3 ml-1" />
                    مرفوض
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const TransactionsScreen = () => (
    <div className="pb-20" dir="rtl">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <h1 className="text-xl font-bold text-gray-900">المعاملات</h1>
      </div>

      <div className="p-6">
        {/* Filter Tabs */}
        <div className="flex space-x-reverse space-x-2 mb-6">
          <Button variant="default" size="sm" className="bg-blue-600 text-white">
            الكل
          </Button>
          <Button variant="outline" size="sm" className="bg-transparent">
            نشط
          </Button>
          <Button variant="outline" size="sm" className="bg-transparent">
            مكتمل
          </Button>
          <Button variant="outline" size="sm" className="bg-transparent">
            مرفوض
          </Button>
        </div>

        {/* Transactions List */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">شراء هواوي P50</h3>
                  <p className="text-sm text-gray-600">تاجر التكنولوجيا</p>
                </div>
                <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200">
                  نشط
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-bold text-gray-900">45,000 دج</p>
                  <p className="text-sm text-gray-500">القسط التالي: 1 أغسطس</p>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">3 أقساط متبقية</p>
                  <Progress value={25} className="w-20 h-2 mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">ملابس صيفية</h3>
                  <p className="text-sm text-gray-600">متجر كاشي</p>
                </div>
                <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200">
                  نشط
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-bold text-gray-900">12,000 دج</p>
                  <p className="text-sm text-gray-500">القسط التالي: 15 أغسطس</p>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">قسط واحد متبقي</p>
                  <Progress value={75} className="w-20 h-2 mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">جهاز كمبيوتر محمول</h3>
                  <p className="text-sm text-gray-600">أوريدو</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                  مكتمل
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-bold text-gray-900">85,000 دج</p>
                  <p className="text-sm text-gray-500">اكتمل في: 10 يوليو</p>
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">تم السداد بالكامل</p>
                  <Progress value={100} className="w-20 h-2 mt-1" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const SupportScreen = () => (
    <div className="pb-20" dir="rtl">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <h1 className="text-xl font-bold text-gray-900">الدعم والمساعدة</h1>
      </div>

      <div className="p-6">
        {/* Quick Help */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium">اتصل بنا</p>
              <p className="text-xs text-gray-600">متاح 24/7</p>
            </CardContent>
          </Card>
          <Card
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setCurrentScreen("ai-assistant")}
          >
            <CardContent className="p-4 text-center">
              <Bot className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-medium">المساعد الذكي</p>
              <p className="text-xs text-gray-600">إجابات فورية</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <h3 className="text-lg font-bold text-gray-900 mb-4">الأسئلة الشائعة</h3>

        <div className="space-y-3">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2">كيف يعمل الدفع بالتقسيط؟</h4>
              <p className="text-sm text-gray-600">
                يمكنك شراء المنتجات ودفع 25% كقسط أول، ثم دفع الباقي على أقساط شهرية بدون فوائد.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2">ما هو الحد الأدنى للشراء؟</h4>
              <p className="text-sm text-gray-600">الحد الأدنى للشراء بالتقسيط هو 1,000 دج والحد الأقصى 500,000 دج.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2">هل الخدمة متوافقة مع الشريعة؟</h4>
              <p className="text-sm text-gray-600">نعم، خدمتنا معتمدة من علماء الشريعة وبدون أي فوائد ربوية.</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">تواصل معنا</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-reverse space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+213 21 123 456</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <Receipt className="w-5 h-5 text-blue-600" />
                <span>support@dafeeli.dz</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen font-arabic" dir="rtl">
      {currentScreen === "dashboard" && <DashboardScreen />}
      {currentScreen === "checkout" && <CheckoutScreen />}
      {currentScreen === "profile" && <ProfileScreen />}
      {currentScreen === "transactions" && <TransactionsScreen />}
      {currentScreen === "support" && <SupportScreen />}
      {currentScreen === "analytics" && <AnalyticsScreen />}
      {currentScreen === "qr-scanner" && <QRScannerScreen />}
      {currentScreen === "ai-assistant" && <AIAssistantScreen />}
      {currentScreen === "biometric-setup" && <BiometricSetupScreen />}

      <NavigationBar />
    </div>
  )
}
