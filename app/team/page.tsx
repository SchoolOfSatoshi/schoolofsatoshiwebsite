import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import TeamLead from "@/components/teamLead"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
 

      {/* Leadership Team */}
      <section className="w-full py-12 md:py-12 lg:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Core Team</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                The visionaries guiding our mission to provide world-class Bitcoin education.
              </p>
            </div>
          </div>

          {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                bio: "Bitcoin developer with 8+ years of experience. Previously worked at Lightning Labs and contributed to Bitcoin Core. Passionate about making Bitcoin education accessible to everyone.",
                image: "/placeholder.svg?height=300&width=300",
                twitter: "#",
                linkedin: "#",
                github: "#",
              },
              {
                name: "Sarah Chen",
                role: "Chief Academic Officer",
                bio: "Blockchain educator with a background in computer science and educational technology. Led curriculum development at top universities before joining School of Satoshi.",
                image: "/placeholder.svg?height=300&width=300",
                twitter: "#",
                linkedin: "#",
                github: "#",
              },
              {
                name: "Michael Rodriguez",
                role: "CTO",
                bio: "Specializes in Bitcoin protocol development and cryptography. Open-source contributor to multiple Bitcoin projects and passionate about technical education.",
                image: "/placeholder.svg?height=300&width=300",
                twitter: "#",
                linkedin: "#",
                github: "#",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{member.bio}</p>
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
          </div> */}
          <TeamLead/>
        </div>
      </section>
{/* 
      <section className="w-full py-12 md:py-12 lg:py-12 bg-gradient-to-b from-amber-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Team</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Meet the passionate educators and Bitcoin experts behind School of Satoshi.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Instructors */}
      <section className="w-full py-12 md:py-12 lg:py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Instructors</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our expert instructors bring real-world Bitcoin experience to the classroom.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Angella Wafwoyo",
                role: "Founder / Lawyer & Lead Instructor",
                image: "/assets/images/Angieee.jpeg?height=300&width=300",
                twitter: "https://x.com/Angella_Jude",
                linkedin: "#",
                github: "#",
              },
              {
                name: "Angella Mulikatete",
                role: "Co-Founder/ Software Developer ",
                image: "/assets/images/Angellina.jpeg?height=300&width=300",
                twitter: "https://x.com/AMulikatete",
                linkedin: "https://www.linkedin.com/in/angella-mulikatete-7b83371a2/",
                github: "https://github.com/Angella-Mulikatete",
              },
              {
                name: "Brindon Mwiine",
                role: "founder Bitcoin Kampala & Gorilla Sats",
                image: "/placeholder.svg?height=300&width=300",
                twitter: "#",
                linkedin: "#",
              },
              {
                name: "Afan Sabila",
                role: "co founder Bitcoin Kampala & Gorilla Sats",
                image: "/placeholder.svg?height=300&width=300",
                twitter: "#",
                linkedin: "#",
              },
              {
                name: "Edith Mpumwiire",
                role: "Growth Lead at BTC Dada & an accountant at Blink",
                image: "/placeholder.svg?height=300&width=300",
                twitter: "#",
                linkedin: "#",
              },
              {
                name: "Sabina Gitau",
                role: "Founder at Tando",
                image: "/placeholder.svg?height=300&width=300",
                twitter: "#",
                linkedin: "#",
              },
              {
                name: "Felix Mukungu",
                role: "Founder at The Core",
                image: "/placeholder.svg?height=300&width=300",
                twitter: "#",
                linkedin: "#",
              },
              {
                name: "Victor",
                role: "Developer Bootcamp Lead",
                image: "/placeholder.svg?height=300&width=300",
                twitter: "#",
                linkedin: "#",
              },
              // {
              //   name: "Sophia Ahmed",
              //   role: "Cryptography Instructor",
              //   image: "/placeholder.svg?height=300&width=300",
              //   twitter: "#",
              //   linkedin: "#",
              // },
              // {
              //   name: "Thomas Wright",
              //   role: "Bitcoin Mining Specialist",
              //   image: "/placeholder.svg?height=300&width=300",
              //   twitter: "#",
              //   linkedin: "#",
              // },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Link href={member.twitter} className="text-gray-500 hover:text-orange-500">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href={member.linkedin} className="text-gray-500 hover:text-orange-500">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support Team</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                The dedicated professionals who ensure smooth operations and student success.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Jessica Taylor",
                role: "Student Success Manager",
                bio: "Dedicated to ensuring students have the support they need to succeed in their Bitcoin education journey.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Ryan Park",
                role: "Operations Manager",
                bio: "Oversees the day-to-day operations of School of Satoshi, ensuring everything runs smoothly.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Olivia Martinez",
                role: "Community Manager",
                bio: "Builds and nurtures our vibrant community of students, alumni, and Bitcoin enthusiasts.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Join Our Team CTA */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-500 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Team</h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Passionate about Bitcoin education? We're always looking for talented individuals to join our mission.
              </p>
            </div>
            <Link href="/careers">
              <Button className="bg-white text-orange-500 hover:bg-gray-100">View Open Positions</Button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  )
}

