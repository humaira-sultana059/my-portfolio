"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Button from "./button"
import Social from "./social"
import AnimatedBackground from "./AnimatedBackground"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const rotatingImageRef = useRef(null)
  const autoRotatingImageRef = useRef(null)
  const leftCardRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)

    // Scroll-based rotation for right side image
    const handleScroll = () => {
      if (rotatingImageRef.current) {
        const scrollY = window.scrollY
        const rotation = scrollY * 0.2
        rotatingImageRef.current.style.transform = `rotate(${rotation}deg)`
      }
    }

    // Auto rotation for left side image
    let animationId
    let rotationAngle = 0

    const autoRotate = () => {
      if (autoRotatingImageRef.current) {
        rotationAngle += 0.5 // Adjust speed by changing this value
        autoRotatingImageRef.current.style.transform = `rotate(${rotationAngle}deg)`
      }
      animationId = requestAnimationFrame(autoRotate)
    }

    autoRotate()

    // Left card slide-in animation
    if (leftCardRef.current) {
      leftCardRef.current.style.transform = "translateX(0)"
      leftCardRef.current.style.opacity = "1"
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section
      id="home"
      className="min-h-[110vh] lg:min-h-screen md:min-h-[160vh] flex items-center justify-center px-2 sm:px-6 lg:px-8 pt-6 relative overflow-hidden bg-black antialiased"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-[130vh] max-md:h-[162vh] max-lg:h-[224vh] object-cover z-1"
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="mx-auto mt-[-120px] flex flex-col lg:flex-row items-center justify-between w-full gap-8 relative z-10">
        {/* Mobile - Profile Image */}
        <div className="lg:hidden w-full flex justify-center relative mt-[-10px] pt-24">
          {/* Sun ray overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/25 via-transparent to-transparent transform skew-x-12 z-20 mix-blend-overlay"></div>

          {/* Light beam hitting the image */}
          <div className="absolute top-4 right-4 w-40 h-40 bg-gradient-to-br from-pink-400/30 to-transparent transform rotate-45 skew-x-12 blur-sm z-15"></div>

          {/* Main image container */}
          <div className="relative z-10">
            <div className="w-64 h-64 sm:w-70 sm:h-70 relative transition-transform duration-100  bg-transparent rounded-full inset border border-pink-950  shadow-pink-800 shadow-lg">
              <Image src="/Humaira_3.png" alt="Frame" fill className="object-contain z-10   rounded-full" priority />
            </div>
          </div>
        </div>
        {/* Left Side - Auto Rotating Image with Moving Border Card */}
        <div className="lg:w-2/3 w-full flex justify-center">
          <div
            ref={leftCardRef}
            className="card relative w-full max-w-4xl transition-all duration-1000 ease-out"
            style={{
              transform: "translateX(-100px)",
              opacity: 0,
            }}
          >
            {/* Moving orange segment */}
            <div className="border-orange-segment"></div>

            {/* Content container */}
            <div className="content flex flex-row items-center justify-center max-md:items-end gap-8 max-md:gap-3 w-full  max-md:py-3 px-8 py-8">
              {/* Image section */}
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div
                    ref={autoRotatingImageRef}
                    className="w-52 h-52 sm:w-70 sm:h-70 max-sm:w-32 max-sm:h-32 relative transition-transform duration-100"
                  >
                    <Image src="/d_1.png" alt="Portfolio" fill className="object-contain" priority />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 max-md:gap-1 justify-center">
                  <Social />
                </div>
              </div>

              {/* Text section */}
              <div className="flex-1 text-center lg:text-left max-sm:mt-10">
                <h1 className="text-2xl max-sm:text-[18px] sm:text-3xl lg:text-6xl font-bold text-white mb-6 max-md:mb-2">
                  Hi, I'm <span className="text-fuchsia-600">Humaira</span>
                </h1>
                <p className="text-[13px] max-sm:text-[11px] sm:text-lg lg:text-xl text-gray-200 mb-8 max-md:mb-2 italic">
                  Full Stack Web & Mobile App Developer
                </p>
                <p className="text-[15px] max-md:text-[9px] text-gray-300 mb-8 max-w-2xl max-md:mb-6">
                  Full Stack Developer skilled in React Native, React.js, Next.js, Node.js, and MongoDB — crafting
                  scalable, high-performance web and mobile experiences.
                </p>
                <Button />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image with Sun Ray Overlay */}
        <div className="max-lg:hidden lg:w-1/3 w-full flex justify-center relative">
          {/* Sun ray overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/25 via-transparent to-transparent transform skew-x-12 z-20 mix-blend-overlay"></div>

          {/* Light beam hitting the image */}
          <div className="absolute top-4 right-4 w-40 h-40 bg-gradient-to-br from-pink-400/30 to-transparent transform rotate-45 skew-x-12 blur-sm z-15"></div>

          {/* Main image container */}
          <div className="relative z-10">
            <div className="w-64 h-64 sm:w-70 sm:h-70 relative transition-transform duration-100  bg-transparent rounded-full inset border border-pink-950  shadow-pink-800 shadow-lg">
              <Image src="/Humaira_3.png" alt="Frame" fill className="object-contain z-10   rounded-full" priority />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          background: rgba(5, 5, 5, 0.33);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 0px 1px 1px #00000088;
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          min-height: 200px;
          border: 1px solid #363636;
          backdropfilter: "blur(12px) saturate(180%)";
        }

        .card .content {
          border-radius: 18px;
          background: #000;
          backdropfilter: "blur(12px) saturate(180%)";
          width: calc(100% - 1px);
          height: calc(100% - 1px);
          z-index: 1;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          /* Gradient box shadow */
          box-shadow: 
      /* Inner shadows with gradient colors */ rgba(236, 72, 153, 0.15) 0px -23px 25px 0px inset,
            rgba(219, 39, 119, 0.2) 0px -36px 30px 0px inset, rgba(190, 24, 93, 0.1) 0px -39px 20px 0px inset,
            /* Outer shadows with gradient colors */ rgba(236, 72, 153, 0.1) 0px 2px 1px,
            rgba(219, 39, 119, 0.15) 0px 4px 2px, rgba(190, 24, 93, 0.2) 0px 8px 4px,
            rgba(159, 18, 57, 0.2) 0px 16px 8px, rgba(136, 19, 55, 0.15) 0px 20px 16px;
        }

        /* Moving orange segment with gradient ends */
        .border-orange-segment {
          position: absolute;
          top: -1px;
          left: -1px;
          width: 90px;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #ffa500 20%, #ffa500 80%, transparent 100%);
          z-index: 1;
          animation: moveAround 18s linear infinite;
          border-radius: 5px;
          opacity: 1;
        }

        @keyframes moveAround {
          0% {
            top: -1px;
            left: -1px;
            width: 120px;
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, #ffa500 20%, #ffa500 80%, transparent 100%);
          }
          25% {
            top: -1px;
            left: calc(100% - 59px);
            width: 120px;
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, #ffa500 20%, #ffa500 80%, transparent 100%);
          }
          26% {
            top: -1px;
            left: calc(100% - 1px);
            width: 2px;
            height: 120px;
            background: linear-gradient(180deg, transparent 0%, #ffa500 20%, #ffa500 80%, transparent 100%);
          }
          50% {
            top: calc(100% - 59px);
            left: calc(100% - 1px);
            width: 2px;
            height: 120px;
            background: linear-gradient(180deg, transparent 0%, #ffa500 20%, #ffa500 80%, transparent 100%);
          }
          51% {
            top: calc(100% - 1px);
            left: calc(100% - 59px);
            width: 120px;
            height: 2px;
            background: linear-gradient(270deg, transparent 0%, #ffa500 20%, #ffa500 80%, transparent 100%);
          }
          75% {
            top: calc(100% - 1px);
            left: -1px;
            width: 120px;
            height: 2px;
            background: linear-gradient(270deg, transparent 0%, #ffa500 20%, #ffa500 80%, transparent 100%);
          }
          76% {
            top: calc(100% - 59px);
            left: -1px;
            width: 2px;
            height: 120px;
            background: linear-gradient(0deg, transparent 0%, #ffa500 20%, #ffa500 80%, transparent 100%);
          }
          99% {
            top: -1px;
            left: -1px;
            width: 2px;
            height: 120px;
            background: linear-gradient(0deg, transparent 0%, #ffa500 20%, #ffa500 80%, transparent 100%);
          }
          100% {
            top: -1px;
            left: -1px;
            width: 120px;
            height: 2px;
            background: linear-gradient(90deg, transparent 0%, #ffa500 20%, #ffa500 80%, transparent 100%);
          }
        }
      `}</style>

      {/* Add custom animation classes to global CSS */}
      <style jsx global>{`
        @keyframes ray {
          0%,
          100% {
            opacity: 0.2;
            transform: rotate(45deg) skew(12deg) translateX(0px);
          }
          50% {
            opacity: 0.4;
            transform: rotate(45deg) skew(12deg) translateX(10px);
          }
        }

        @keyframes ray-slower {
          0%,
          100% {
            opacity: 0.15;
            transform: rotate(45deg) skew(12deg) translateX(5px);
          }
          50% {
            opacity: 0.3;
            transform: rotate(45deg) skew(12deg) translateX(15px);
          }
        }

        .animate-ray {
          animation: ray 3s ease-in-out infinite;
        }

        .animate-ray-slower {
          animation: ray-slower 4s ease-in-out infinite;
        }

        /* Custom skew utilities */
        .skew-x-12 {
          transform: skewX(12deg);
        }
      `}</style>
    </section>
  )
}
