import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  period?: string
  features: string[]
  isPopular?: boolean
}

export default function PricingCard({ title, price, period, features, isPopular = false }: PricingCardProps) {
  return (
    <div
      className={`
      bg-white rounded-xl shadow-lg overflow-hidden
      ${isPopular ? "ring-2 ring-cyan-500 scale-105 z-10" : ""}
    `}
    >
      {isPopular && (
        <div className="bg-cyan-500 text-white text-center py-1 text-sm font-medium">가장 인기 있는 플랜</div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-gray-500">/{period}</span>}
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-cyan-500 mr-2 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full bg-gray-800 hover:bg-gray-900">가입은 출시 후 가능해요!</Button>
      </div>
    </div>
  )
}
