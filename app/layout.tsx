import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://easy2funnel.vercel.app"),
  title: "Easy2Funnel - AI 기반 마케팅 퍼널 자동화 솔루션",
  description: "5분 만에 완성하는 나만의 퍼널! 랜딩페이지 제작부터 CRM까지 자동화해주는 완벽한 마케팅 퍼널 시스템",
  openGraph: {
    title: "Easy2Funnel - 5분 만에 완성하는 AI 마케팅 퍼널",
    description: "랜딩페이지 제작부터 CRM까지 자동화해주는 완벽한 마케팅 퍼널 시스템. 디자인 걱정 없이 5분 만에 전문가 수준의 마케팅을 시작하세요.",
    url: "https://easy2funnel.vercel.app",
    siteName: "Easy2Funnel",
    images: [{
      url: "https://easy2funnel.vercel.app/image.png",
      width: 1200,
      height: 630,
      alt: "Easy2Funnel - AI 마케팅 퍼널 자동화",
    }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy2Funnel - 5분 만에 완성하는 AI 마케팅 퍼널",
    description: "랜딩페이지 제작부터 CRM까지 자동화해주는 완벽한 마케팅 퍼널 시스템",
    images: ["https://easy2funnel.vercel.app/image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#0EA5E9",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
