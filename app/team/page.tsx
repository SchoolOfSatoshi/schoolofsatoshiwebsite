"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import TeamLead from "@/components/teamLead"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Leadership Team */}
      <section className="w-full py-10 md:py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-foreground">Core Leadership</h2>
            <div className="w-20 h-1 bg-primary my-2 rounded-full"></div>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              The visionaries guiding our mission to provide world-class Bitcoin education.
            </p>
          </div>
          <TeamLead />
        </div>
      </section>

      {/* Instructors */}
      <section className="w-full py-10 md:py-16 bg-secondary/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-foreground">Meet Our Tutors</h2>
            <div className="w-20 h-1 bg-primary my-2 rounded-full"></div>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Expert educators bringing real-world Bitcoin experience to the classroom.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Angella Wafwoyo",
                role: "Founder / Lawyer & Lead Instructor",
                image: "/assets/images/Angieee.jpeg",
                twitter: "https://x.com/Angella_Jude",
                linkedin: "https://www.linkedin.com/in/wafoyo-angella-403528255/",
              },
              {
                name: "Angella Mulikatete",
                role: "Co-Founder/ Software Developer",
                image: "/assets/images/Angellina.jpeg",
                twitter: "https://x.com/AMulikatete",
                linkedin: "https://www.linkedin.com/in/angella-mulikatete-7b83371a2/",
                github: "https://github.com/Angella-Mulikatete",
              },
              {
                name: "Brindon Mwiine",
                role: "Founder Bitcoin Kampala & Gorilla Sats",
                image: "/assets/images/brindon.jpg",
                twitter: "https://x.com/BrindonMwiine",
                linkedin: "https://www.linkedin.com/in/brindon-mwiine/",
              },
              {
                name: "Afan Sabila",
                role: "Co-founder Bitcoin Kampala & Gorilla Sats",
                image: "/assets/images/afan.jpeg",
                twitter: "https://x.com/afansabila",
                linkedin: "https://www.linkedin.com/in/babu-afan-381084251/",
              },
              {
                name: "Edith Mpumwiire",
                role: "Growth Lead at BTC Dada & Accountant at Blink",
                image: "/assets/images/edth.jpeg",
                twitter: "https://x.com/mpumwiredith",
                linkedin: "https://www.linkedin.com/in/edith-mpumwire-b9aa9080/",
              },
              {
                name: "Sabina Gitau",
                role: "Co-founder at Tando",
                image: "/assets/images/sabina.jpeg",
                twitter: "https://x.com/waithiraah",
                linkedin: "https://www.linkedin.com/in/sabina-gitau-6497b725a/",
              },
              {
                name: "Akisibe Abdalaah",
                role: "BTC Enthusiast",
                image: "/assets/images/harymo.jpg",
                twitter: "#",
                linkedin: "#",
              },
              {
                name: "Ritah Ssemakula",
                role: "BTC Enthusiast",
                image: "/assets/images/rytah.png",
                twitter: "#",
                linkedin: "#",
              },
              {
                name: "Victor",
                role: "Alumni",
                image: "/assets/images/vic.png",
                twitter: "https://x.com/ntamugabumwevic",
                linkedin: "https://www.linkedin.com/in/ntamugabumwevic/",
              },
            ].map((member, index) => (
              <Card key={index} className="group overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-xl glass-card">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-4">
                      <Link href={member.twitter} className="text-white hover:text-primary transition-colors transform hover:scale-110">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link href={member.linkedin} className="text-white hover:text-primary transition-colors transform hover:scale-110">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      {member.github && (
                        <Link href={member.github} className="text-white hover:text-primary transition-colors transform hover:scale-110">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center bg-card">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-muted-foreground text-sm font-medium">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="w-full py-16 md:py-20 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What Our Students Say</h2>
            <div className="w-20 h-1 bg-orange-500 my-2"></div>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              Hear from those who have experienced our Bitcoin education programs.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg relative">
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">"</span>
                </div>
                <p className="mt-4 text-gray-300 italic">
                  "The Bitcoin education program completely transformed my understanding of cryptocurrency. The instructors were knowledgeable and passionate."
                </p>
                <div className="mt-6 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Student Name</h4>
                    <p className="text-sm text-gray-400">Class of 2024</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Join Our Team CTA */}
      {/* <section className="w-full py-16 md:py-20 bg-orange-500 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-4 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Join Our Team</h2>
              <p className="max-w-[500px] text-white/90 md:text-lg">
                Passionate about Bitcoin education? We're always looking for talented individuals to join our mission.
              </p>
            </div>
            <Link href="/careers">
              <Button className="bg-black text-white hover:bg-gray-900 px-8 py-6 text-lg rounded-full">
                View Open Positions
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  )
}
