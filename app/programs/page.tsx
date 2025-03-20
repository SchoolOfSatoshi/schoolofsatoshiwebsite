import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bitcoin, Code, Database, Network, Shield, Zap } from "lucide-react";

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Programs</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Comprehensive Bitcoin education for all skill levels, from beginners to advanced developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Programs</TabsTrigger>
                <TabsTrigger value="beginners">For Beginners</TabsTrigger>
                <TabsTrigger value="developers">For Developers</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
            </div>

            {/* All Programs */}
            <TabsContent value="all" className="space-y-8">
              {/* Beginners Programs */}
              <div>
                <h2 className="text-2xl font-bold mb-6">For Beginners</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card id="basics">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Bitcoin className="h-5 w-5 text-orange-500" />
                        <span className="text-sm font-medium text-orange-500">4 Weeks</span>
                      </div>
                      <CardTitle>Bitcoin Basics</CardTitle>
                      <CardDescription>A comprehensive introduction to Bitcoin</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Perfect for newcomers to Bitcoin. Learn the fundamentals of blockchain technology, Bitcoin's
                        history, and how to safely use and store Bitcoin.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Bitcoin history and philosophy</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Blockchain fundamentals</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Wallet setup and security</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Bitcoin economics</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/apply" className="w-full">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-5 w-5 text-orange-500" />
                        <span className="text-sm font-medium text-orange-500">6 Weeks</span>
                      </div>
                      <CardTitle>Bitcoin Security Essentials</CardTitle>
                      <CardDescription>Learn to secure your Bitcoin</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Focus on best practices for securing your Bitcoin holdings, from basic wallet security to
                        advanced cold storage techniques.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Hardware wallet setup</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Multisignature wallets</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Backup strategies</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Inheritance planning</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/apply" className="w-full">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              {/* Developer Programs */}
              <div>
                <h2 className="text-2xl font-bold mb-6">For Developers</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card id="developer">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="h-5 w-5 text-orange-500" />
                        <span className="text-sm font-medium text-orange-500">8 Weeks</span>
                      </div>
                      <CardTitle>Developer Bootcamp</CardTitle>
                      <CardDescription>Become a Bitcoin developer</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        An intensive program for developers looking to build applications on Bitcoin and the Lightning
                        Network.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Bitcoin protocol development</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Lightning Network applications</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Smart contracts with Bitcoin</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Building Bitcoin wallets</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/apply" className="w-full">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-5 w-5 text-orange-500" />
                        <span className="text-sm font-medium text-orange-500">10 Weeks</span>
                      </div>
                      <CardTitle>Lightning Network Specialist</CardTitle>
                      <CardDescription>Master Lightning development</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Focused on building applications and services using the Lightning Network for instant Bitcoin
                        payments.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Lightning Network architecture</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">LND, c-lightning, and Eclair</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Payment channel management</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Building Lightning applications</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/apply" className="w-full">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              {/* Advanced Programs */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Advanced Programs</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card id="advanced">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="h-5 w-5 text-orange-500" />
                        <span className="text-sm font-medium text-orange-500">12 Weeks</span>
                      </div>
                      <CardTitle>Advanced Protocol Development</CardTitle>
                      <CardDescription>Core Bitcoin protocol expertise</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Deep dive into Bitcoin's core protocol for experienced developers looking to contribute to
                        Bitcoin Core or build advanced applications.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Bitcoin Core architecture</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Consensus mechanisms</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Advanced cryptography</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Bitcoin Improvement Proposals</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/apply" className="w-full">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Network className="h-5 w-5 text-orange-500" />
                        <span className="text-sm font-medium text-orange-500">16 Weeks</span>
                      </div>
                      <CardTitle>Bitcoin Scaling Solutions</CardTitle>
                      <CardDescription>Advanced scaling techniques</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        Explore cutting-edge Bitcoin scaling solutions including Layer 2 technologies, sidechains, and
                        state channels.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Layer 2 protocols</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Sidechains and drivechains</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">State channels</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-500 font-medium">•</span>
                          <span className="text-sm">Future scaling proposals</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/apply" className="w-full">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Beginners Tab */}
            <TabsContent value="beginners">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card id="basics">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Bitcoin className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-medium text-orange-500">4 Weeks</span>
                    </div>
                    <CardTitle>Bitcoin Basics</CardTitle>
                    <CardDescription>A comprehensive introduction to Bitcoin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Perfect for newcomers to Bitcoin. Learn the fundamentals of blockchain technology, Bitcoin's
                      history, and how to safely use and store Bitcoin.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Bitcoin history and philosophy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Blockchain fundamentals</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Wallet setup and security</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Bitcoin economics</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/apply" className="w-full">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-medium text-orange-500">6 Weeks</span>
                    </div>
                    <CardTitle>Bitcoin Security Essentials</CardTitle>
                    <CardDescription>Learn to secure your Bitcoin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Focus on best practices for securing your Bitcoin holdings, from basic wallet security to advanced
                      cold storage techniques.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Hardware wallet setup</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Multisignature wallets</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Backup strategies</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Inheritance planning</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/apply" className="w-full">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Developers Tab */}
            <TabsContent value="developers">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card id="developer">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-medium text-orange-500">8 Weeks</span>
                    </div>
                    <CardTitle>Developer Bootcamp</CardTitle>
                    <CardDescription>Become a Bitcoin developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      An intensive program for developers looking to build applications on Bitcoin and the Lightning
                      Network.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Bitcoin protocol development</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Lightning Network applications</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Smart contracts with Bitcoin</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Building Bitcoin wallets</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/apply" className="w-full">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-medium text-orange-500">10 Weeks</span>
                    </div>
                    <CardTitle>Lightning Network Specialist</CardTitle>
                    <CardDescription>Master Lightning development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Focused on building applications and services using the Lightning Network for instant Bitcoin
                      payments.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Lightning Network architecture</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">LND, c-lightning, and Eclair</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Payment channel management</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Building Lightning applications</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/apply" className="w-full">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Advanced Tab */}
            <TabsContent value="advanced">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card id="advanced">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-medium text-orange-500">12 Weeks</span>
                    </div>
                    <CardTitle>Advanced Protocol Development</CardTitle>
                    <CardDescription>Core Bitcoin protocol expertise</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Deep dive into Bitcoin's core protocol for experienced developers looking to contribute to Bitcoin
                      Core or build advanced applications.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Bitcoin Core architecture</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Consensus mechanisms</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Advanced cryptography</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Bitcoin Improvement Proposals</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/apply" className="w-full">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Network className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-medium text-orange-500">16 Weeks</span>
                    </div>
                    <CardTitle>Bitcoin Scaling Solutions</CardTitle>
                    <CardDescription>Advanced scaling techniques</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Explore cutting-edge Bitcoin scaling solutions including Layer 2 technologies, sidechains, and
                      state channels.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Layer 2 protocols</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Sidechains and drivechains</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">State channels</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-orange-500 font-medium">•</span>
                        <span className="text-sm">Future scaling proposals</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/apply" className="w-full">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}














// import React from 'react';
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Bitcoin, Code, Database, Network, Shield, Zap, Users, BookOpen, Award, BarChart3, Gift, Wallet } from "lucide-react";
// import { LucideIcon } from "lucide-react"

// interface ProgramCardProps {
//   icon: LucideIcon
//   duration: string
//   title: string
//   description: string
//   features: string[]
//   featured?: boolean
// }

// const ProgramCard = ({ icon: Icon, duration, title, description, features, featured }: ProgramCardProps) => (
//   <Card className={`overflow-hidden transition-all ${featured ? 'border-orange-500 shadow-lg' : ''}`}>
//     <div className={`${featured ? 'bg-orange-50 py-1 px-4 text-center text-sm font-medium text-orange-600' : 'hidden'}`}>
//       Most Popular
//     </div>
//     <CardHeader>
//       <div className="flex items-center gap-2 mb-2">
//         <Icon className="h-5 w-5 text-orange-500" />
//         <span className="text-sm font-medium text-orange-500">{duration}</span>
//       </div>
//       <CardTitle>{title}</CardTitle>
//       <CardDescription>{description}</CardDescription>
//     </CardHeader>
//     <CardContent>
//       <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
//         {description}
//       </p>
//       <div className="space-y-2">
//         {features.map((feature, index) => (
//           <div key={index} className="flex items-start gap-2">
//             <span className="text-orange-500 font-medium">•</span>
//             <span className="text-sm">{feature}</span>
//           </div>
//         ))}
//       </div>
//     </CardContent>
//     <CardFooter>
//       <Link href="/apply" className="w-full">
//         <Button className="w-full bg-orange-500 hover:bg-orange-600">Apply Now</Button>
//       </Link>
//     </CardFooter>
//   </Card>
// );

// export default function ProgramsPage() {
//   const beginnerPrograms = [
//     {
//       icon: BookOpen,
//       duration: "4 Weeks",
//       title: "Crypto Fundamentals",
//       description: "Perfect for newcomers to cryptocurrency and blockchain technology",
//       features: [
//         "Blockchain fundamentals",
//         "Cryptocurrency basics",
//         "Wallet setup and security",
//         "Investment principles"
//       ],
//       featured: true
//     },
//     {
//       icon: Shield,
//       duration: "6 Weeks",
//       title: "Crypto Security Essentials",
//       description: "Learn to secure your digital assets effectively",
//       features: [
//         "Hardware wallet setup",
//         "Multisignature wallets",
//         "Backup strategies",
//         "Avoiding common scams"
//       ]
//     },
//     {
//       icon: Wallet,
//       duration: "5 Weeks",
//       title: "DeFi for Beginners",
//       description: "Introduction to decentralized finance applications",
//       features: [
//         "Understanding DeFi protocols",
//         "Lending and borrowing basics",
//         "Yield farming introduction",
//         "Risk management"
//       ]
//     }
//   ];

//   const developerPrograms = [
//     {
//       icon: Code,
//       duration: "8 Weeks",
//       title: "Blockchain Developer Bootcamp",
//       description: "Intensive training for aspiring blockchain developers",
//       features: [
//         "Smart contract development",
//         "dApp architecture",
//         "Web3 integration",
//         "Testing and deployment"
//       ],
//       featured: true
//     },
//     {
//       icon: Zap,
//       duration: "10 Weeks",
//       title: "Advanced Smart Contracts",
//       description: "Master complex smart contract development",
//       features: [
//         "Advanced solidity patterns",
//         "Security best practices",
//         "Gas optimization techniques",
//         "Audit preparation"
//       ]
//     },
//     {
//       icon: Database,
//       duration: "7 Weeks",
//       title: "Web3 Frontend Development",
//       description: "Build intuitive interfaces for blockchain applications",
//       features: [
//         "React & web3 integration",
//         "Wallet connections",
//         "Transaction management",
//         "User experience design"
//       ]
//     }
//   ];

//   const advancedPrograms = [
//     {
//       icon: Network,
//       duration: "12 Weeks",
//       title: "Protocol Engineering",
//       description: "Deep dive into blockchain protocol development",
//       features: [
//         "Consensus mechanisms",
//         "Chain architecture",
//         "Scaling solutions",
//         "Protocol security"
//       ],
//       featured: true
//     },
//     {
//       icon: BarChart3,
//       duration: "10 Weeks",
//       title: "Algorithmic Trading",
//       description: "Build automated trading systems for crypto markets",
//       features: [
//         "Trading bot development",
//         "Market analysis algorithms",
//         "Risk management systems",
//         "Exchange API integration"
//       ]
//     },
//     {
//       icon: Award,
//       duration: "16 Weeks",
//       title: "Research Fellowship",
//       description: "Contribute to cutting-edge blockchain research",
//       features: [
//         "Novel consensus algorithms",
//         "Zero-knowledge applications",
//         "Cross-chain interoperability",
//         "Published research opportunities"
//       ]
//     }
//   ];

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Educational Programs</h1>
//               <p className="max-w-3xl mx-auto text-gray-500 md:text-xl dark:text-gray-400">
//                 Comprehensive blockchain and cryptocurrency education for all skill levels, from beginners to advanced developers.
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 mt-6">
//               <Button className="bg-orange-500 hover:bg-orange-600">View All Programs</Button>
//               <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">Schedule a Call</Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="w-full py-12 bg-white border-y border-gray-200">
//         <div className="container px-4 md:px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div className="space-y-2">
//               <h3 className="text-3xl font-bold text-orange-500">50+</h3>
//               <p className="text-sm text-gray-500">Active Courses</p>
//             </div>
//             <div className="space-y-2">
//               <h3 className="text-3xl font-bold text-orange-500">8,500+</h3>
//               <p className="text-sm text-gray-500">Graduates</p>
//             </div>
//             <div className="space-y-2">
//               <h3 className="text-3xl font-bold text-orange-500">96%</h3>
//               <p className="text-sm text-gray-500">Satisfaction Rate</p>
//             </div>
//             <div className="space-y-2">
//               <h3 className="text-3xl font-bold text-orange-500">25+</h3>
//               <p className="text-sm text-gray-500">Expert Instructors</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Programs Tabs */}
//       <section className="w-full py-12 md:py-24 lg:py-32">
//         <div className="container px-4 md:px-6">
//           <Tabs defaultValue="all" className="w-full">
//             <div className="flex justify-center mb-8">
//               <TabsList>
//                 <TabsTrigger value="all">All Programs</TabsTrigger>
//                 <TabsTrigger value="beginners">For Beginners</TabsTrigger>
//                 <TabsTrigger value="developers">For Developers</TabsTrigger>
//                 <TabsTrigger value="advanced">Advanced</TabsTrigger>
//               </TabsList>
//             </div>

//             <TabsContent value="all" className="space-y-16">
//               {/* Beginners Programs */}
//               <div>
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-2xl font-bold">For Beginners</h2>
//                   <Link href="/programs/beginners" className="text-orange-500 text-sm font-medium hover:underline">
//                     View all beginner courses →
//                   </Link>
//                 </div>
//                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                   {beginnerPrograms.map((program, index) => (
//                     <ProgramCard key={index} {...program} />
//                   ))}
//                 </div>
//               </div>

//               {/* Developer Programs */}
//               <div>
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-2xl font-bold">For Developers</h2>
//                   <Link href="/programs/developers" className="text-orange-500 text-sm font-medium hover:underline">
//                     View all developer courses →
//                   </Link>
//                 </div>
//                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                   {developerPrograms.map((program, index) => (
//                     <ProgramCard key={index} {...program} />
//                   ))}
//                 </div>
//               </div>

//               {/* Advanced Programs */}
//               <div>
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-2xl font-bold">Advanced Programs</h2>
//                   <Link href="/programs/advanced" className="text-orange-500 text-sm font-medium hover:underline">
//                     View all advanced courses →
//                   </Link>
//                 </div>
//                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                   {advancedPrograms.map((program, index) => (
//                     <ProgramCard key={index} {...program} />
//                   ))}
//                 </div>
//               </div>
//             </TabsContent>

//             <TabsContent value="beginners">
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {beginnerPrograms.map((program, index) => (
//                   <ProgramCard key={index} {...program} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="developers">
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {developerPrograms.map((program, index) => (
//                   <ProgramCard key={index} {...program} />
//                 ))}
//               </div>
//             </TabsContent>

//             <TabsContent value="advanced">
//               <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {advancedPrograms.map((program, index) => (
//                   <ProgramCard key={index} {...program} />
//                 ))}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>
//     </div>
//   )
// }

