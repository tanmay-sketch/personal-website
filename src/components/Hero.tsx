import { Button } from "@/components/ui/button"
import Image from "next/image"
import { toast } from "sonner"

export default function Hero() {
    return (
      <section className="relative w-full min-h-screen pt-28 pb-16 flex items-center justify-center">
        <div className="relative z-20 w-full max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column - Photo */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-violet-900/20">
              <Image
                src="/images/profilepic.png"
                alt="Tanmay Grandhisiri"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full md:w-1/2 flex flex-col space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
                Tanmay Grandhisiri
              </h1>
              <p className="text-xl text-gray-400">
                I&apos;m passionate about programming, math, and sports
              </p>
              <div className="flex gap-4">
                {/* <Button variant="outline" size="lg">
                  Contact Me
                </Button> */}
                <Button 
                  variant="default" 
                  size="lg" 
                  onClick={() => toast("Resume coming soon!", {
                    description: "I'm currently updating my resume. Check back later!",
                  })}
                >
                  View my Resume
                </Button>
              </div>
              
              {/* Social Media Links */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700" 
                  asChild
                >
                  <a href="https://github.com/tanmay-sketch" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <svg viewBox="0 0 24 24" width="18" height="18" className="mr-2 fill-current">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700" 
                  asChild
                >
                  <a href="https://linkedin.com/in/tanmay-grandhisiri" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <svg viewBox="0 0 24 24" width="18" height="18" className="mr-2 fill-current">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                    LinkedIn
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700" 
                  asChild
                >
                  <a href="mailto:your.email@example.com" className="flex items-center">
                    <svg viewBox="0 0 24 24" width="18" height="18" className="mr-2 fill-current">
                      <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                    </svg>
                    Email
                  </a>
                </Button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}