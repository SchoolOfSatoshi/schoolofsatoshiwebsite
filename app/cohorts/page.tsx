import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users } from "lucide-react"

export default function CohortsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-12 lg:py-12 bg-gradient-to-b from-amber-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Previous Cohorts</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Meet our alumni at School of Satoshi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cohorts Tabs */}
      <section className="w-full py-12 md:py-12 lg:py-12">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="2024" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="2024">2024</TabsTrigger>
                <TabsTrigger value="2025">2025</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="2024" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">2024 Cohorts</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Cohort One</CardTitle>
                      <CardDescription>August - September 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 mb-4">
                        <Users className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-500">7 Graduates</span>
                      </div>
                      <div className="space-y-4">
                        {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                          Our pilot Bitcoin Basics course that laid the foundation for our educational programs.
                        </p> */}
                        {/* <div>
                          <h4 className="text-sm font-medium mb-2">Notable Projects:</h4>
                          <ul className="space-y-1">
                            <li className="text-sm text-gray-500 dark:text-gray-400">
                              • Lightning Network routing optimization tool
                            </li>
                            <li className="text-sm text-gray-500 dark:text-gray-400">
                              • Bitcoin Core test suite improvements
                            </li>
                            <li className="text-sm text-gray-500 dark:text-gray-400">
                              • Privacy-focused wallet implementation
                            </li>
                          </ul>
                        </div> */}
                        <div className="pt-4">
                          <h4 className="text-sm font-medium mb-2">Class Photo:</h4>
                          <Image
                            src="/assets/images/cohort1.jpeg"
                            alt="Fall 2023 Advanced Protocol Development Cohort"
                            width={400}
                            height={200}
                            className="rounded-lg object-cover w-full"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Cohort 2</CardTitle>
                      <CardDescription>November - December 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 mb-4">
                        <Users className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-500">10 Graduates</span>
                      </div>
                      <div className="space-y-4">
                        {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                          The Fall Developer Bootcamp focused on building practical Bitcoin and Lightning Network
                          applications.
                        </p>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Notable Projects:</h4>
                          <ul className="space-y-1">
                            <li className="text-sm text-gray-500 dark:text-gray-400">• Bitcoin-powered marketplace</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400">
                              • Lightning Network payment gateway
                            </li>
                            <li className="text-sm text-gray-500 dark:text-gray-400">• Educational Bitcoin wallet</li>
                          </ul>
                        </div> */}
                        <div className="pt-4">
                          <h4 className="text-sm font-medium mb-2">Class Photo:</h4>
                          <Image
                            src="/assets/images/c2_2.jpeg"
                            alt="Fall 2023 Developer Bootcamp Cohort"
                            width={400}
                            height={200}
                            className="rounded-lg object-cover w-full"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* <div>
                <h2 className="text-2xl font-bold mb-6">Spring 2023 Cohorts</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Developer Bootcamp</CardTitle>
                      <CardDescription>March - May 2023</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 mb-4">
                        <Users className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-500">24 Graduates</span>
                      </div>
                      <div className="space-y-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Our inaugural Developer Bootcamp focused on Lightning Network development and Bitcoin
                          scripting.
                        </p>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Notable Projects:</h4>
                          <ul className="space-y-1">
                            <li className="text-sm text-gray-500 dark:text-gray-400">
                              • Micropayment streaming platform
                            </li>
                            <li className="text-sm text-gray-500 dark:text-gray-400">
                              • Bitcoin-powered gaming application
                            </li>
                            <li className="text-sm text-gray-500 dark:text-gray-400">
                              • Multisignature wallet with social recovery
                            </li>
                          </ul>
                        </div>
                        <div className="pt-4">
                          <h4 className="text-sm font-medium mb-2">Class Photo:</h4>
                          <Image
                            src="/placeholder.svg?height=200&width=400"
                            alt="Spring 2023 Developer Bootcamp Cohort"
                            width={400}
                            height={200}
                            className="rounded-lg object-cover w-full"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Bitcoin Basics</CardTitle>
                      <CardDescription>February - March 2023</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 mb-4">
                        <Users className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-500">30 Graduates</span>
                      </div>
                      <div className="space-y-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Our Bitcoin Basics course introduced newcomers to the fundamentals of Bitcoin and blockchain
                          technology.
                        </p>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Course Highlights:</h4>
                          <ul className="space-y-1">
                            <li className="text-sm text-gray-500 dark:text-gray-400">• Wallet setup workshop</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400">• Bitcoin economics seminar</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400">• Security best practices</li>
                          </ul>
                        </div>
                        <div className="pt-4">
                          <h4 className="text-sm font-medium mb-2">Class Photo:</h4>
                          <Image
                            src="/placeholder.svg?height=200&width=400"
                            alt="Spring 2023 Bitcoin Basics Cohort"
                            width={400}
                            height={200}
                            className="rounded-lg object-cover w-full"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div> */}
            </TabsContent>

            <TabsContent value="2025" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">2025 Cohorts</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Cohort 3</CardTitle>
                      <CardDescription>Feb - March 2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 mb-4">
                        <Users className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-500">20 Graduates</span>
                      </div>
                      <div className="space-y-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Our pilot Bitcoin Basics course that laid the foundation for our educational programs.
                        </p>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Course Highlights:</h4>
                          <ul className="space-y-1">
                            <li className="text-sm text-gray-500 dark:text-gray-400">• Introduction to Bitcoin</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400">• Blockchain fundamentals</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400">• Basic wallet management</li>
                          </ul>
                        </div>
                        <div className="pt-4">
                          <h4 className="text-sm font-medium mb-2">Class Photo:</h4>
                          <Image
                            src="/placeholder.svg?height=200&width=400"
                            alt="Fall 2022 Bitcoin Basics Cohort"
                            width={400}
                            height={200}
                            className="rounded-lg object-cover w-full"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Alumni Network */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Alumni Network</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Stay connected with fellow graduates and continue your Bitcoin journey together.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/alumni">
                <Button className="bg-orange-500 hover:bg-orange-600">Alumni Portal</Button>
              </Link>
              <Link href="/events">
                <Button variant="outline">Upcoming Events</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

