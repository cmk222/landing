import Image from "next/image"

interface UseCaseCardProps {
  title: string
  description: string
  imageSrc: string
}

export default function UseCaseCard({ title, description, imageSrc }: UseCaseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
