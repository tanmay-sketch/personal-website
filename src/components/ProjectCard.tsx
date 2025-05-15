import { ArrowUpRight } from "lucide-react"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  duration: string
  tags: string[]
  background: string
  link: string
}

export default function ProjectCard({ title, description, image, duration, tags, background, link }: ProjectCardProps) {
  // Debug image path
  useEffect(() => {
    console.log(`Image path for ${title}:`, image)
  }, [image, title])
  
  // Fix any gradient syntax issues
  const fixedBackground = background.endsWith(';') 
    ? background.substring(0, background.length - 1) 
    : background;
  
  return (
    <div className="group relative flex flex-col h-full w-full overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg">
      {/* Background color */}
      <div className="absolute inset-0 bg-black/90 z-0 rounded-xl" />

      {/* Card content */}
      <div className="relative z-10 flex flex-col h-full p-3">
        {/* Card header with gradient background and tag */}
        <div 
          className="relative w-full flex-grow-0 flex-shrink-0 rounded-xl overflow-hidden" 
          style={{ 
            backgroundImage: fixedBackground,
            height: '280px' 
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Tag label */}
          <div className="relative z-20 p-2">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-black/50 backdrop-blur-sm text-white rounded-md">
              {tags[0] || "Web Dev"}
            </span>
          </div>
          
          {/* Image container */}
          <div className="absolute inset-0 top-8 flex items-center justify-center p-2 z-10">
            <div className="relative w-full h-4/5 flex items-center justify-center">
              <Image 
                src={image} 
                alt={title}
                width={500}
                height={300}
                className="object-contain drop-shadow-xl max-h-full max-w-full"
                style={{ width: 'auto', height: 'auto', maxWidth: '90%', maxHeight: '90%' }}
                onError={() => console.error(`Error loading image: ${image}`)}
              />
            </div>
          </div>
        </div>

        {/* Card body with title and description */}
        <div className="pt-4 flex-grow">
          <div className="flex items-center justify-between mb-2">
            <Link href={link} className="text-md font-medium text-gray-300 flex items-center group-hover:text-blue-300 transition-colors">
              {title}<ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
            <p className="text-md font-medium text-blue-400 flex items-center">
              {duration}
            </p>
          </div>
          
          <p className="text-white/80 text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  )
}
