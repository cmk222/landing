import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  avatarSrc: string
}

export default function TestimonialCard({ quote, author, avatarSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-start space-x-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image src={avatarSrc || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <p className="text-gray-700 mb-2">"{quote}"</p>
          <p className="text-cyan-600 font-medium">{author}</p>
        </div>
      </div>
    </div>
  )
}
