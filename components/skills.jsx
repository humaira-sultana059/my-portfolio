"use client"

import { useEffect, useRef, useState } from "react"

export default function GalaxySkills() {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeOrbit, setActiveOrbit] = useState(-1)
  const [skillPositions, setSkillPositions] = useState({})
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  const skillOrbits = [
    {
      radius: "90px",
      delay: 0,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
      color: "#00d9ff",
      label: "Fundamentals",
      icon: "⚡",
    },
    {
      radius: "180px",
      delay: 600,
      skills: ["React.js", "Next.js", "React Native", "Tailwind CSS"],
      color: "#00ff88",
      label: "Frontend",
      icon: "🎨",
    },
    {
      radius: "270px",
      delay: 1200,
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase"],
      color: "#ff00ff",
      label: "Backend",
      icon: "⚙️",
    },
    {
      radius: "360px",
      delay: 1800,
      skills: ["GitHub", "Vercel", "Docker"],
      color: "#ffaa00",
      label: "DevOps",
      icon: "🚀",
    },
  ]

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            const positions = {}
            skillOrbits.forEach((orbit, orbitIndex) => {
              positions[orbitIndex] = calculateOptimizedPositions(orbitIndex, orbit.skills.length, orbit.radius)
            })
            setSkillPositions(positions)

            skillOrbits.forEach((_, index) => {
              setTimeout(() => {
                setActiveOrbit(index)
              }, index * 500)
            })
          } else {
            setIsVisible(false)
            setActiveOrbit(-1)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px",
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const calculateOptimizedPositions = (orbitIndex, totalSkills, radius) => {
    const positions = []
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200

    // Enhanced responsive values
    let xStretch, yStretch, spacingFactor, adjustedRadius

    // 📱 Mobile - More compact layout
    if (screenWidth < 640) {
      xStretch = 0.7
      yStretch = 0.6
      spacingFactor = 0.8
      adjustedRadius = Number.parseInt(radius) * 0.6 // Reduce radius for mobile
    }
    // 📱 Small Tablet
    else if (screenWidth < 768) {
      xStretch = 1.0
      yStretch = 0.7
      spacingFactor = 1.0
      adjustedRadius = Number.parseInt(radius) * 0.7
    }
    // 💻 Medium / Tablet
    else if (screenWidth < 1024) {
      xStretch = 1.2
      yStretch = 0.8
      spacingFactor = 1.1
      adjustedRadius = Number.parseInt(radius) * 0.85
    }
    // 🖥️ Large Desktop
    else {
      xStretch = 1.7
      yStretch = 0.5
      spacingFactor = 1.3
      adjustedRadius = Number.parseInt(radius)
    }

    const baseAngleStep = (2 * Math.PI) / (totalSkills * spacingFactor)
    const orbitOffset = orbitIndex * (Math.PI / skillOrbits.length)

    for (let i = 0; i < totalSkills; i++) {
      const angle = orbitOffset + i * baseAngleStep

      const x = Math.cos(angle) * adjustedRadius * xStretch
      const y = Math.sin(angle) * adjustedRadius * yStretch

      positions.push({
        x,
        y,
        variation: {
          x: (Math.random() - 0.5) * (screenWidth < 640 ? 5 : 10), // Less variation on mobile
          y: (Math.random() - 0.5) * (screenWidth < 640 ? 5 : 10),
        },
      })
    }

    return positions
  }

  return (
    <section id="skills" className="min-h-[120vh] md:min-h-[145vh] pt-5  bg-zinc-950 overflow-hidden">
      {/* Header Section */}
      <div className="text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            Skills Galaxy
          </span>
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative lg:-mt-20 max-lg:mt-3 min-h-[110vh] sm:min-h-[120vh] md:min-h-[140vh] pb-10 md:pb-20 px-3 sm:px-4 lg:px-8 overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-48 h-48 md:w-72 md:h-72 bg-orange-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-20">
          {/* Main Galaxy Container */}
          <div className="relative flex items-center justify-center">
            <div className="absolute z-30 flex items-center justify-center">
              <div className="relative">
                {/* Multi-layer glow effect */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/40 animate-pulse blur-xl"></div>
                <div
                  className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping"
                  style={{ animationDuration: "2s" }}
                ></div>

                {/* Main Core - Responsive */}
                <div className="relative w-8 h-8 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-orange-400 flex items-center justify-center shadow-2xl border-2  border-white/20 backdrop-blur-sm">
                  <div className="absolute inset-0 md:inset-1 rounded-full bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg max-sm:hidden md:text-2xl md:mb-1">✨</div>
                      <span className="text-white font-bold text-[9px] sm:text-sm">Skills</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {skillOrbits.map((orbit, orbitIndex) => {
              const positions = skillPositions[orbitIndex] || []

              return (
                <div key={orbitIndex}>
                  {/* Orbit Ring - Responsive */}
                  <div
                    className={`absolute rounded-full border transition-all duration-1000 ${
                      isVisible && activeOrbit >= orbitIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    style={{
                      width: `calc(${orbit.radius} * ${isMobile ? "0.5" : "1.5"})`,
                      height: `calc(${orbit.radius} * ${isMobile ? "0.5" : "1.5"})`,
                      borderColor: orbit.color,
                      borderWidth: "2px",
                      opacity: isVisible && activeOrbit >= orbitIndex ? 0.4 : 0,
                      transitionDelay: `${orbitIndex * 200}ms`,
                      boxShadow: `0 0 20px ${orbit.color}40`,
                    }}
                  ></div>

                  {/* Skills - Responsive */}
                  {orbit.skills.map((skill, skillIndex) => {
                    const position = positions[skillIndex]
                    const isActive = isVisible && activeOrbit >= orbitIndex
                    const isHovered = hoveredSkill === `${orbitIndex}-${skillIndex}`

                    if (!position) return null

                    return (
                      <div
                        key={skillIndex}
                        className={`absolute rounded-xl flex flex-col items-center justify-center text-white font-bold text-center transition-all duration-500 cursor-pointer group ${
                          isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                        }`}
                        style={{
                          width: isMobile ? "36px" : "68px",
                          height: isMobile ? "36px" : "68px",
                          fontSize: isMobile ? "7px" : "12px",
                          padding: isMobile ? "3px" : "8px",
                          left: `calc(50% + ${position.x + (position.variation?.x || 0)}px)`,
                          top: `calc(50% + ${position.y + (position.variation?.y || 0)}px)`,
                          transform: `translate(-50%, -50%) ${isHovered ? "scale(1.15)" : "scale(1)"}`,
                          transitionDelay: isActive ? `${orbitIndex * 200 + skillIndex * 80}ms` : "0ms",
                          background: `linear-gradient(135deg, ${orbit.color}80, ${orbit.color}40)`,
                          backdropFilter: "blur(16px) saturate(200%)",
                          WebkitBackdropFilter: "blur(16px) saturate(200%)",
                          boxShadow: isActive
                            ? `0 8px 32px ${orbit.color}60, 0 0 20px ${orbit.color}40, inset 0 1px 0 ${orbit.color}80`
                            : "none",
                          border: `1px solid ${orbit.color}60`,
                        }}
                        onMouseEnter={() => setHoveredSkill(`${orbitIndex}-${skillIndex}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <span className="drop-shadow-lg font-semibold leading-tight">{skill}</span>
                      </div>
                    )
                  })}
                </div>
              )
            })}

            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))" }}
            >
              <defs>
                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00d9ff" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ff88" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00ff88" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ff00ff" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="lineGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffaa00" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ffaa00" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {skillOrbits.map((orbit, orbitIndex) => {
                const positions = skillPositions[orbitIndex] || []
                const gradientId = `lineGradient${orbitIndex + 1}`

                return (
                  <g key={orbitIndex}>
                    {orbit.skills.map((_, skillIndex) => {
                      if (isVisible && activeOrbit >= orbitIndex && positions[skillIndex]) {
                        const position = positions[skillIndex]
                        return (
                          <line
                            key={skillIndex}
                            x1="50%"
                            y1="50%"
                            x2={`calc(50% + ${position.x + (position.variation?.x || 0)}px)`}
                            y2={`calc(50% + ${position.y + (position.variation?.y || 0)}px)`}
                            stroke={`url(#${gradientId})`}
                            strokeWidth={isMobile ? "1.5" : "2"}
                            className="animate-draw-line"
                            style={{
                              animationDelay: `${orbitIndex * 200 + skillIndex * 50}ms`,
                            }}
                          />
                        )
                      }
                      return null
                    })}
                  </g>
                )
              })}
            </svg>
          </div>

          {/* Stars Background - Reduced for mobile */}
          <div className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none">
            {[...Array(isMobile ? 60 : 120)].map((_, i) => {
              const goldenAngle = Math.PI * (3 - Math.sqrt(5))
              const angle = i * goldenAngle
              const radius = 60 + Math.sqrt(i) * (isMobile ? 20 : 30)

              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              const size = Math.random() * 2 + 0.5
              const delay = Math.random() * 6
              const duration = 3 + Math.random() * 5
              const colors = ["#00d9ff", "#00ff88", "#ff00ff", "#ffaa00"]
              const color = colors[Math.floor(Math.random() * colors.length)]

              return (
                <div
                  key={i}
                  className="absolute rounded-full animate-star-blink"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    backgroundColor: color,
                    opacity: Math.random() * 0.6 + 0.3,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    boxShadow: `0 0 ${size * 2}px ${color}`,
                  }}
                />
              )
            })}
          </div>

          {/* Legend - Responsive Grid */}
          <div className="mt-40 sm:mt-48 md:mt-55 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-2">
            {skillOrbits.map((orbit, index) => (
              <div
                key={index}
                className="p-3 sm:p-4 rounded-lg backdrop-blur-md border transition-all hover:scale-105"
                style={{
                  backgroundColor: `${orbit.color}15`,
                  borderColor: `${orbit.color}40`,
                }}
              >
                <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{orbit.icon}</div>
                <h3 className="font-bold text-white text-xs sm:text-sm">{orbit.label}</h3>
                <p className="text-xs text-gray-300 mt-1">{orbit.skills.length} skills</p>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes star-blink {
            0%,
            100% {
              opacity: 0.2;
              transform: scale(0.8);
            }
            50% {
              opacity: 1;
              transform: scale(1.3);
            }
          }

          .animate-star-blink {
            animation: star-blink infinite ease-in-out alternate;
          }

          @keyframes draw-line {
            from {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
            }
            to {
              stroke-dasharray: 1000;
              stroke-dashoffset: 0;
            }
          }

          .animate-draw-line {
            animation: draw-line 1.8s ease-out forwards;
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
        `}</style>
      </div>
    </section>
  )
}
