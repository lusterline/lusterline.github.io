"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    let mounted = true
    const video = videoRef.current

    const handleLoadedData = () => {
      if (mounted) {
        setVideoLoaded(true)
        video?.play().catch(console.error)
      }
    }

    const handleVideoError = (event: Event) => {
      console.error("Video error:", (event.target as HTMLVideoElement).error)
      if (mounted) {
        setVideoError(true)
        setVideoLoaded(false)
      }
    }

    if (video) {
      // Reset video state
      video.load()
      
      // Add event listeners with correct types
      video.addEventListener('loadeddata', handleLoadedData)
      video.addEventListener('error', handleVideoError)
    }

    return () => {
      mounted = false
      if (video) {
        video.removeEventListener('loadeddata', handleLoadedData)
        video.removeEventListener('error', handleVideoError)
      }
    }
  }, [])

  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 80, // Additional offset to account for header height
        behavior: "smooth",
      })
    }
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {(!videoLoaded || videoError) && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900" />
        )}
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className={`video-background ${
              videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/placeholder.jpg"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-background/80" />
        </div>
      </div>
      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center gap-16 px-6 text-center">
        <div className="flex flex-col gap-6">
          <div className="animate-fade-up space-y-4">
            <h1 className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-800 bg-clip-text text-5xl font-bold font-orbitron text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:text-7xl md:text-8xl lg:text-9xl">
              LUSTER LINE
            </h1>
            <h2 className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-700 bg-clip-text text-2xl font-bold font-orbitron text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] sm:text-3xl md:text-4xl lg:text-5xl">
              CAR DETAILING WORKS
            </h2>
          </div>
          <div className="animate-fade-up animation-delay-200">
            <p className="text-xl text-muted-foreground sm:text-2xl">
              Professional Car Detailing at Its Finest
            </p>
          </div>
        </div>
        <div className="animate-fade-up animation-delay-300">
          <Button size="lg" className="px-8 py-6 text-lg">
            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Book Now</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
