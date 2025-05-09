// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Github, Linkedin, Twitter } from "lucide-react"
// import TeamLead from "@/components/teamLead"

// export default function TeamPage() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
 

//       {/* Leadership Team */}
//       <section className="w-full py-12 md:py-12 lg:py-12">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Core Team</h2>
//               <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//                 The visionaries guiding our mission to provide world-class Bitcoin education.
//               </p>
//             </div>
//           </div>
//           <TeamLead/>
//         </div>
//       </section>

//       {/* Instructors */}
//       <section className="w-full py-12 md:py-12 lg:py-12 bg-gray-50 ">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Instructors</h2>
//               <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//                 Our expert instructors bring real-world Bitcoin experience to the classroom.
//               </p>
//             </div>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//             {[
//               {
//                 name: "Angella Wafwoyo",
//                 role: "Founder / Lawyer & Lead Instructor",
//                 image: "/assets/images/Angieee.jpeg?height=300&width=300",
//                 twitter: "https://x.com/Angella_Jude",
//                 linkedin: "https://www.linkedin.com/in/wafoyo-angella-403528255/",
//               },
//               {
//                 name: "Angella Mulikatete",
//                 role: "Co-Founder/ Software Developer ",
//                 image: "/assets/images/Angellina.jpeg?height=300&width=300",
//                 twitter: "https://x.com/AMulikatete",
//                 linkedin: "https://www.linkedin.com/in/angella-mulikatete-7b83371a2/",
//                 github: "https://github.com/Angella-Mulikatete",
//               },
//               {
//                 name: "Brindon Mwiine",
//                 role: "founder Bitcoin Kampala & Gorilla Sats",
//                 image: "/placeholder.svg?height=300&width=300",
//                 twitter: "https://x.com/BrindonMwiine",
//                 linkedin: "https://www.linkedin.com/in/brindon-mwiine/",
//               },
//               {
//                 name: "Afan Sabila",
//                 role: "co founder Bitcoin Kampala & Gorilla Sats",
//                 image: "/placeholder.svg?height=300&width=300",
//                 twitter: "https://x.com/afansabila",
//                 linkedin: "https://www.linkedin.com/in/babu-afan-381084251/",
//               },
//               {
//                 name: "Edith Mpumwiire",
//                 role: "Growth Lead at BTC Dada & an accountant at Blink",
//                 image: "/placeholder.svg?height=300&width=300",
//                 twitter: "https://x.com/mpumwiredith",
//                 linkedin: "https://www.linkedin.com/in/edith-mpumwire-b9aa9080/",
//               },
//               {
//                 name: "Sabina Gitau",
//                 role: "co-founder at Tando",
//                 image: "/placeholder.svg?height=300&width=300",
//                 twitter: "https://x.com/waithiraah",
//                 linkedin: "https://www.linkedin.com/in/sabina-gitau-6497b725a/",
//               },
//               {
//                 name: "Felix Mukungu",
//                 role: "Founder at The Core",
//                 image: "/placeholder.svg?height=300&width=300",
//                 twitter: "https://x.com/MukunguFelix",
//                 linkedin: "#",
//               },
//               {
//                 name: "Victor",
//                 role: "Developer Bootcamp Lead",
//                 image: "/placeholder.svg?height=300&width=300",
//                 twitter: "https://x.com/ntamugabumwevic",
//                 linkedin: "https://www.linkedin.com/in/ntamugabumwevic/",
//               },
//             ].map((member, index) => (
//               <Card key={index} className="overflow-hidden">
//                 <div className="aspect-square relative">
//                   <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
//                 </div>
//                 <CardHeader>
//                   <CardTitle className="text-lg">{member.name}</CardTitle>
//                   <CardDescription>{member.role}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex space-x-4">
//                     <Link href={member.twitter} className="text-gray-500 hover:text-orange-500">
//                       <Twitter className="h-4 w-4" />
//                       <span className="sr-only">Twitter</span>
//                     </Link>
//                     <Link href={member.linkedin} className="text-gray-500 hover:text-orange-500">
//                       <Linkedin className="h-4 w-4" />
//                       <span className="sr-only">LinkedIn</span>
//                     </Link>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Join Our Team CTA */}
//       {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-500 text-white">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Team</h2>
//               <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Passionate about Bitcoin education? We're always looking for talented individuals to join our mission.
//               </p>
//             </div>
//             <Link href="/careers">
//               <Button className="bg-white text-orange-500 hover:bg-gray-100">View Open Positions</Button>
//             </Link>
//           </div>
//         </div>
//       </section> */}
//     </div>
//   )
// }


import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import TeamLead from "@/components/teamLead"
import edith from "../../public/assets/images/edith.jpeg";
import brindon from "../../public/assets/images/brindon.jpg"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="w-full py-16  text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Meet Our Team</h1>
            <div className="w-24 h-1 bg-orange-500 my-4"></div>
            <p className="max-w-[800px] text-xl text-gray-300">
              A community of passionate individuals using education to empower the next generation.
            </p>
          </div>
        </div>
      </section> */}

      {/* Leadership Team */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">Core Leadership</h2>
            <div className="w-20 h-1 bg-orange-500 my-2"></div>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              The visionaries guiding our mission to provide world-class Bitcoin education.
            </p>
          </div>
          <TeamLead />
        </div>
      </section>

      {/* Instructors */}
      <section className="w-full py-16 md:py-20 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">Our Instructors</h2>
            <div className="w-20 h-1 bg-orange-500 my-2"></div>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Expert educators bringing real-world Bitcoin experience to the classroom.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                image: "/placeholder.svg",
                twitter: "https://x.com/afansabila",
                linkedin: "https://www.linkedin.com/in/babu-afan-381084251/",
              },
              {
                name: "Edith Mpumwiire",
                role: "Growth Lead at BTC Dada & Accountant at Blink",
                image: "./assets/images/edith.jpeg",
                twitter: "https://x.com/mpumwiredith",
                linkedin: "https://www.linkedin.com/in/edith-mpumwire-b9aa9080/",
              },
              {
                name: "Sabina Gitau",
                role: "Co-founder at Tando",
                image: "/placeholder.svg",
                twitter: "https://x.com/waithiraah",
                linkedin: "https://www.linkedin.com/in/sabina-gitau-6497b725a/",
              },
              {
                name: "Felix Mukungu",
                role: "Founder at The Core",
                image: "/placeholder.svg",
                twitter: "https://x.com/MukunguFelix",
                linkedin: "#",
              },
              {
                name: "Victor",
                role: "Developer Bootcamp Lead",
                image: "/placeholder.svg",
                twitter: "https://x.com/ntamugabumwevic",
                linkedin: "https://www.linkedin.com/in/ntamugabumwevic/",
              },
            ].map((member, index) => (
              <Card key={index} className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="aspect-square relative overflow-hidden">
                  <Image 
                    src={member.image || "/placeholder.svg"} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-4 mb-2">
                        <Link href={member.twitter} className="text-white hover:text-orange-500 transition-colors">
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href={member.linkedin} className="text-white hover:text-orange-500 transition-colors">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        {member.github && (
                          <Link href={member.github} className="text-white hover:text-orange-500 transition-colors">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white border-t-4 border-orange-500">
                  <h3 className="font-bold text-xl text-black mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
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


