"use client"
import Link from "next/link"
import { ArrowDown, Clock, Target, Mail, Instagram, Twitter } from "lucide-react"
import WaitlistForm from "@/components/waitlist-form"
import PricingCard from "@/components/pricing-card"
import TestimonialCard from "@/components/testimonial-card"
import UseCaseCard from "@/components/use-case-card"
import ValueCard from "@/components/value-card"
import { motion } from "framer-motion"

export default function Home() {
  const scrollToForm = () => {
    const formElement = document.getElementById("waitlist-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-white">
      <header className="container mx-auto py-4 md:py-6 px-4 flex items-center justify-between sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <Link href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          이지투 퍼널
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">
            홈
          </Link>
          <Link href="#features" className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">
            퍼널 특징
          </Link>
          <Link href="#use-cases" className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">
            사용 사례
          </Link>
          <Link href="#automation" className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">
            자동화 퍼널
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">
            랜딩페이지 생성기
          </Link>
          <Link href="#faq" className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-cyan-600 transition-colors">
            로그인
          </Link>
          <Link
            href="#waitlist-form"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-3 md:px-5 py-1.5 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all shadow-md hover:shadow-lg whitespace-nowrap"
          >
            무료 시작하기
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
          className="relative py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 px-3 md:px-5 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8 shadow-sm"
            >
              소상공인과 지식창업자를 위한 마케팅 솔루션
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2"
            >
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">5분 만에</span> 나만의 퍼널 완성
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto font-medium px-3 sm:px-4 leading-tight whitespace-nowrap overflow-hidden text-ellipsis"
            >
              AI가 대신 설계해주는 랜딩페이지 & 마케팅 자동화 툴
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={scrollToForm}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-medium transition-all shadow-lg hover:shadow-xl flex items-center mx-auto"
            >
              얼리버드 안내받기
              <ArrowDown className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </motion.button>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 md:mt-20 max-w-4xl mx-auto px-2"
            >
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                <span className="block md:inline">랜딩페이지 제작부터 CRM까지 자동화해주는</span>
                <span className="block md:inline">완벽한 마케팅 퍼널 시스템.</span>
                <span className="block md:inline">5분 내에 전문가 수준의 마케팅을 시작하세요.</span>
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-6 md:mt-10">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-medium transition-all shadow-lg hover:shadow-xl">
                  무료로 시작하기
                </button>
                <button className="border border-gray-300 hover:border-gray-400 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-medium transition-all hover:bg-gray-50">
                  데모 살펴보기
                </button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Key Value Section */}
        <motion.section 
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          id="features" 
          className="py-16 md:py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent px-2">
              Easy2Funnel로 가능한 일들
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-10">
              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all">
                <ValueCard
                  icon={<Clock className="h-10 w-10 md:h-12 md:w-12 text-cyan-500" />}
                  title="⏱ 5분 안에 완성"
                  description="입력만 하면 퍼널이 자동 생성돼요."
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all">
                <ValueCard
                  icon={<Target className="h-10 w-10 md:h-12 md:w-12 text-cyan-500" />}
                  title="🎯 전환 중심 구조"
                  description="고객 행동을 유도하는 카피와 디자인이 자동으로!"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all">
                <ValueCard
                  icon={<Mail className="h-10 w-10 md:h-12 md:w-12 text-cyan-500" />}
                  title="📩 자동 후속 액션"
                  description="SMS/이메일 자동 연결로 리드 관리도 끝!"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Use Case Simulation */}
        <motion.section 
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          id="use-cases" 
          className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container mx-auto px-4">
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent px-2">
              이렇게 사용돼요
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-10">
              <motion.div variants={fadeInUp} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <UseCaseCard
                  title="1인 강사 김마케터"
                  description="전자책 판매용 퍼널 자동 생성"
                  imageSrc="/kim1.png"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <UseCaseCard
                  title="디자인 없이 런칭하는 창업자"
                  description="제품 상세페이지 자동 완성"
                  imageSrc="/45666666.png"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <UseCaseCard
                  title="마케팅 자동화 입문자"
                  description="자동 발송 메시지까지 설정 완료"
                  imageSrc="/1233333.png"
                />
              </motion.div>
            </div>
            <p className="text-xs md:text-sm text-gray-500 text-center mt-6 md:mt-10">
              💡 유저가 클릭해도 작동하지 않음. 단순 데모용 UI입니다.
            </p>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section 
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          id="pricing" 
          className="py-16 md:py-24 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent px-2">
              당신의 규모에 맞춰 골라보세요
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <PricingCard
                  title="Free"
                  price="0원"
                  features={["기본 퍼널 1개", "기본 템플릿 접근", "월 100명 방문자", "이메일 지원"]}
                  isPopular={false}
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-cyan-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium">
                  인기
                </div>
                <PricingCard
                  title="Starter"
                  price="29,000원"
                  period="월"
                  features={["퍼널 5개", "모든 템플릿 접근", "월 1,000명 방문자", "이메일/채팅 지원", "기본 자동화 기능"]}
                  isPopular={true}
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <PricingCard
                  title="Pro"
                  price="79,000원"
                  period="월"
                  features={[
                    "퍼널 무제한",
                    "커스텀 템플릿 제작",
                    "방문자 무제한",
                    "우선 지원",
                    "고급 자동화 기능",
                    "API 연동",
                  ]}
                  isPopular={false}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          id="testimonials" 
          className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="container mx-auto px-4">
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent px-2">
              후기 및 기대평
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all">
                <TestimonialCard
                  quote="디자인 없이도 이 정도 퀄리티라니… 놀랍네요!"
                  author="@solobiz_maker"
                  avatarSrc="/placeholder.svg?height=50&width=50"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all">
                <TestimonialCard
                  quote="클릭 몇 번으로 이메일 마케팅까지 끝. 완전 혁명!"
                  author="@booklaunch_101"
                  avatarSrc="/placeholder.svg?height=50&width=50"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA & Waitlist Form */}
        <motion.section 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          id="waitlist-form" 
          className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50"
        >
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent px-2">
              정식 출시, 제일 먼저 알려드릴게요!
            </motion.h2>
            <motion.div variants={fadeInUp} className="text-center mb-6 md:mb-10">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-medium transition-all shadow-lg hover:shadow-xl">
                웨이팅 리스트 등록하기 🚀
              </button>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
              <WaitlistForm />
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Easy2Funnel</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                AI 기반 원클릭 마케팅 솔루션으로 랜딩페이지 제작부터 CRM까지 자동화해주는 완벽한 마케팅 퍼널
                시스템입니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">링크</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base">
                    홈
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base">
                    특징
                  </Link>
                </li>
                <li>
                  <Link href="#use-cases" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base">
                    사용 사례
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base">
                    요금제
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">연락처</h3>
              <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">문의사항이 있으시면 언제든지 연락주세요.</p>
              <Link href="mailto:contact@easy2funnel.com" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm md:text-base">
                contact@easy2funnel.com
              </Link>
              <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-6">
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Twitter className="h-5 w-5 md:h-6 md:w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-500 text-xs md:text-sm">
            <p>&copy; {new Date().getFullYear()} Easy2Funnel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
