import type { ReactNode } from "react"

interface ValueCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
