export function generateSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Humaira Sultana",
    url: "https://humaira-portfolio.vercel.app",
    image: "https://humaira-portfolio.vercel.app/image.png",
    description: "Full-Stack Developer and Generative AI Developer",
    jobTitle: "Full-Stack Developer",
    email: "humairasultana059@gmail.com",
    telephone: "+8801951422953",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chattogram",
      addressCountry: "BD",
    },
    sameAs: ["https://github.com/Sultanamim", "https://www.linkedin.com/in/humaira-sultana-b8a8b5250/"],
    knowsAbout: [
      "React.js",
      "Next.js",
      "React Native",
      "Node.js",
      "Python",
      "Generative AI",
      "Full-Stack Development",
      "Web Development",
      "Mobile Development",
    ],
    workExperience: [
      {
        "@type": "WorkPosition",
        jobTitle: "Full Stack Developer",
        company: "Web Code Care",
        startDate: "2023-01",
        endDate: "present",
        description: "Developed full-stack web and mobile applications with AI integration",
      },
      {
        "@type": "WorkPosition",
        jobTitle: "React Developer",
        company: "Freelance",
        startDate: "2021-09",
        endDate: "2022-12",
        description: "Built responsive web applications using React.js",
      },
    ],
    education: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Bachelor of Science",
      name: "Psychology",
      educationalLevel: "Bachelor",
      recognizedBy: {
        "@type": "Organization",
        name: "University of Dhaka",
      },
    },
  }
}
