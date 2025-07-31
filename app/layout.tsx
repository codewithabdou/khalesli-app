import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "خلصلي للبنوك - حل الدفع بالتقسيط المتكامل",
  description: "حل الدفع بالتقسيط الأول في الجزائر للبنوك والمؤسسات المالية - زيادة الإيرادات وتحسين تجربة العملاء",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className="font-arabic">{children}</body>
    </html>
  )
}
