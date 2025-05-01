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
        role: "Co-Founder/ Programs Lead ",
        bio: "Software Engineer/ Developer ",
        image: "/assets/images/Angellina.jpeg?height=300&width=300",
        twitter: "https://x.com/AMulikatete",
        linkedin: "https://www.linkedin.com/in/angella-mulikatete-7b83371a2/",
        github: "https://github.com/Angella-Mulikatete",
      },
    ].map((member, index) => (
      <Card key={index}>
        <CardHeader>
          <div className="flex justify-center">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
          </div>
          <CardTitle className="mt-4">{member.name}</CardTitle>
          <CardDescription>{member.role}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
          <div className="flex space-x-4">
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
