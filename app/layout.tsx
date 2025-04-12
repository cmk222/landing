import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Easy2Funnel - AI 기반 마케팅 퍼널 자동화 솔루션",
  description: "랜딩페이지 제작부터 CRM까지 자동화해주는 완벽한 마케팅 퍼널 시스템",
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
