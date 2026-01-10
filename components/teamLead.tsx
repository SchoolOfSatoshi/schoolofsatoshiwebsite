import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const TeamLead = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-12 py-12">
      {[
        {
          name: "Angella Wafwoyo",
          role: "Founder & Lead Instructor",
          bio: "Lawyer / Bitcoin educator passionate about empowering communities through financial sovereignty.",
          skills: ["Law", "Bitcoin Education", "Public Speaking"],
          image: "/assets/images/Angieee.jpeg",
          twitter: "https://x.com/Angella_Jude",
          linkedin: "https://www.linkedin.com/in/wafoyo-angella-403528255/",
          github: "#",
        },
        {
          name: "Angella Mulikatete",
          role: "Co-Founder / Programs Lead",
          bio: "Software Engineer and Developer dedicated to building robust Bitcoin education programs.",
          skills: ["Software Engineering", "Program Management", "Development"],
          image: "/assets/images/Angellina.jpeg",
          twitter: "https://x.com/AMulikatete",
          linkedin: "https://www.linkedin.com/in/angella-mulikatete-7b83371a2/",
          github: "https://github.com/Angella-Mulikatete",
        },
      ].map((member, index) => (
        <div key={index} className="group relative w-full max-w-[300px] h-[160px] hover:h-[450px] transition-all duration-500 ease-in-out bg-background border border-border rounded-lg overflow-hidden shadow-xl cursor-default">

          {/* Header */}
          <div className="h-[80px] bg-primary w-full transition-all duration-500 group-hover:bg-primary/80"></div>

          {/* Avatar */}
          <div className="absolute top-[40px] left-[20px] w-[80px] h-[80px] rounded-full bg-background border-[5px] border-background overflow-hidden transition-all duration-500 group-hover:w-[120px] group-hover:h-[120px] group-hover:top-[40px] group-hover:left-[90px] group-hover:border-[5px] group-hover:border-background z-10 shadow-md">
            <Image
              src={member.image}
              alt={member.name}
              width={120}
              height={120}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="px-6 pt-12 text-justify w-full transition-all duration-500 group-hover:pt-[100px]">
            <h3 className="text-xl font-bold text-foreground mb-2 whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-center transition-all duration-500">
              {member.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-4">
              {member.bio}
            </p>
          </div>

          {/* Skills / Role (Positioned absolutely or nicely in flow for hover) */}
          <div className="absolute top-[50px] right-[-200px] group-hover:right-[20px] group-hover:top-[280px] transition-all duration-700 ease-out p-4 text-right">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Expertise</h4>
            <div className="flex flex-col gap-1 items-end">
              {member.skills.map((skill, i) => (
                <span key={i} className="text-xs font-medium bg-secondary/50 px-2 py-1 rounded text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social Icons Footer */}
          <div className="absolute bottom-0 left-0 w-full py-4 bg-secondary/10 flex justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            <Link href={member.twitter} className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href={member.linkedin} className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href={member.github} className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Github className="h-5 w-5" />
            </Link>
          </div>

        </div>
      ))}
    </div>
  )
}

export default TeamLead



// "use client"

// import Image from "next/image"

// const TeamLead = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//       {/* Angella Wafwoyo */}
//       <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//         <Image
//           src="/assets/images/Angieee.jpeg"
//           alt="Angella Wafwoyo"
//           width={150}
//           height={150}
//           className="rounded-full mb-4"
//         />
//         <h3 className="font-heading text-xl font-semibold">Angella Wafwoyo</h3>
//         <p className="font-sans text-gray-600 text-center">Co-founder, School of Satoshi</p>
//         <p className="font-sans text-gray-500 text-sm mt-2 text-center">Bitcoin Educator and Advocate</p>
//       </div>

//       {/* Angella Mulikatete */}
//       <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//         <Image
//           src="/assets/images/Angellina.jpeg"
//           alt="Angella Mulikatete"
//           width={150}
//           height={150}
//           className="rounded-full mb-4"
//         />
//         <h3 className="font-heading text-xl font-semibold">Angella Mulikatete</h3>
//         <p className="font-sans text-gray-600 text-center">Co-founder, School of Satoshi</p>
//         <p className="font-sans text-gray-500 text-sm mt-2 text-center">Bitcoin Educator and Community Builder</p>
//       </div>
//     </div>
//   )
// }

// export default TeamLead
