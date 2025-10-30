"use client"

import { useEffect, useRef } from "react"
import { Briefcase, GraduationCap, ScrollText } from "lucide-react"

export default function Experience() {
  const experienceRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (experienceRef.current) {
      observer.observe(experienceRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      type: "work",
      title: "Full Stack Developer",
      company: "Web Code Care",
      period: "Jan 2023 - Present",
      description: [
        "Developed Solvemeet mobile application using React Native and Node.js backend",
        "Implemented real-time chat and audio/video call functionality using Socket.io",
        "Built platform connecting users with advisors across various professions",
        "Designed responsive interfaces with Tailwind CSS",
        "Integrated payment systems and user authentication",
      ],
    },
    {
      type: "work",
      title: "React Developer",
      company: "Freelance",
      period: "Sep 2021 - Dec 2022",
      description: [
        "Developed and maintained web and mobile applications including eastgold.az",
        "Built Green Investment platform with React and responsive design",
        "Collaborated with clients to understand requirements and deliver custom solutions",
        "Ensured responsive and dynamic user interfaces across all devices",
        "Implemented SEO optimization and performance improvements",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science",
      field: "Psychology",
      institution: "University of Dhaka",
      period: "May 2019 - Jan 2024",
      details: "Relevant coursework in Structural Design and Project Management",
    },
  ]

  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-20 px-4 sm:px-6 lg:px-8 opacity-0 relative overflow-hidden bg-black"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 text-center pt-7">
          Experience &{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="space-y-8">
          {/* About me */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg">
                <ScrollText className="text-pink-500" size={24} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">About Me</h3>
            </div>
            <div className="card relative overflow-hidden">
              <div className="card-content p-6 sm:p-8">
                <div className="flex items-start">
                  <span className="text-pink-500 font-bold text-lg mt-0.5 flex-shrink-0">▹</span>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-1">
                    I’m Humaira Sultana, a passionate Full Stack Developer from Bangladesh with expertise in React
                    Native, React.js, Next.js, Node.js, and MongoDB. I specialize in designing and developing scalable,
                    high-performance web and mobile applications that deliver exceptional user experiences.
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-pink-500 font-bold text-lg mt-0.5 flex-shrink-0">▹</span>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-1">
                    Over the years, I’ve built and deployed a wide range of projects — from mobile apps and eCommerce
                    platforms to NGO-focused solutions — integrating advanced features such as real-time communication
                    with Socket.io, AI-powered functionalities, and secure payment systems using Stripe and Firebase.
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-pink-500 font-bold text-lg mt-0.5 flex-shrink-0">▹</span>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    With a strong foundation in both technical development and user psychology, I approach every project
                    with empathy, precision, and a commitment to creating meaningful digital solutions that drive growth
                    and engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg">
                <Briefcase className="text-pink-500" size={24} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Professional Experience</h3>
            </div>
            <div className=" space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-[rgba(5, 5, 5, 0.33)]
         shadow-[#00000088] 
          
          rounded-[18px]
          border border-[#363636]
          bg-backdrop-blur-lg
          transition-all duration-300 ease flex flex-row max-md:flex-col justify-center items-center relative overflow-hidden group"
                >
                  <div className="card-content flex flex-col justify-center items-start p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{exp.title}</h4>
                        <p className="text-pink-400 font-semibold text-lg">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-400 px-3 py-1 bg-gray-800/50 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="text-pink-500 font-bold text-lg mt-0.5 flex-shrink-0">▹</span>
                          <span className="text-gray-300 text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg">
                <GraduationCap className="text-pink-500" size={24} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="card  relative overflow-hidden">
                  <div className="card-content p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                        <p className="text-pink-400 font-semibold text-lg mb-1">{edu.field}</p>
                        <p className="text-gray-400 text-base">{edu.institution}</p>
                        {edu.details && <p className="text-gray-400 text-sm mt-3 italic">{edu.details}</p>}
                      </div>
                      <span className="text-sm text-gray-400 px-3 py-1 bg-gray-800/50 rounded-full whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          background: rgba(5, 5, 5, 0.33);
          box-shadow: 0px 0px 1px 1px #00000088;
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid #363636;
          backdrop-filter: blur(12px) saturate(180%);
          transition: all 0.3s ease;
        }

        .card:hover {
          border-color: #464646;
          box-shadow: 0px 0px 2px 1px #00000099;
        }

        .card-content {
          border-radius: 18px;
          background: #000;
          backdrop-filter: blur(12px) saturate(180%);
          width: calc(100% - 1px);
          height: calc(100% - 1px);
          z-index: 1;
          color: white;
          box-shadow: rgba(236, 72, 153, 0.15) 0px -23px 25px 0px inset,
            rgba(219, 39, 119, 0.2) 0px -36px 30px 0px inset, rgba(190, 24, 93, 0.1) 0px -39px 20px 0px inset,
            rgba(236, 72, 153, 0.1) 0px 2px 1px, rgba(219, 39, 119, 0.15) 0px 4px 2px,
            rgba(190, 24, 93, 0.2) 0px 8px 4px, rgba(159, 18, 57, 0.2) 0px 16px 8px,
            rgba(136, 19, 55, 0.15) 0px 20px 16px;
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

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
