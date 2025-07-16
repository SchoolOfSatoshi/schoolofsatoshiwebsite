import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const TeamLead = () => {
  return (
    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
    {[
      {
        name: "Angella Wafwoyo",
        role: "Founder & Lead Instructor",
        bio: "Lawyer / Bitcoin educator", 
        image: "/assets/images/Angieee.jpeg?height=300&width=300",
        twitter: "https://x.com/Angella_Jude",
        linkedin: "https://www.linkedin.com/in/wafoyo-angella-403528255/",
        github: "#",
      },
      {
        name: "Angella Mulikatete",
        role: "Co-Founder/Programs Lead ",
        bio: "Software Engineer/ Developer ",
        image: "/assets/images/Angellina.jpeg?height=300&width=300",
        twitter: "https://x.com/AMulikatete",
        linkedin: "https://www.linkedin.com/in/angella-mulikatete-7b83371a2/",
        github: "https://github.com/Angella-Mulikatete",
      },
    ].map((member, index) => (
      <Card key={index} className='px-2'>
        <CardHeader  className="relative flex flex-col items-center p-6 rounded  cursor-pointer">
          <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden mb-2 flex items-center justify-center">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={150}
              height={150}
              className="object-cover w-full h-full"
              style={{ objectPosition: "center" }}
            />
          </div>

          <CardTitle className=" text-center">{member.name}</CardTitle>
          <CardDescription className='text-center'>{member.role}</CardDescription>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{member.bio}</p>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 justify-center">
            <Link href={member.twitter} className="text-gray-500 hover:text-orange-500">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href={member.linkedin} className="text-gray-500 hover:text-orange-500">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href={member.github} className="text-gray-500 hover:text-orange-500">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </CardContent>
      </Card>
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
