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
      <section className="w-full py-10 md:py-16 bg-gradient-to-b from-amber-50 to-white dark:from-background dark:to-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">Previous Cohorts</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Meet our alumni at School of Satoshi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cohorts Tabs */}
      <section className="w-full py-10 md:py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="2024" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-secondary">
                <TabsTrigger value="2024">2024</TabsTrigger>
                <TabsTrigger value="2025">2025</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="2024" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">2024 Cohorts</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="glass-card border-none hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">Cohort One</CardTitle>
                      <CardDescription>August - September 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 mb-4">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">7 Graduates</span>
                      </div>
                      <div className="space-y-4">
                        <div className="pt-4">
                          <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Class Photo:</h4>
                          <div className="relative h-64 w-full overflow-hidden rounded-xl">
                            <Image
                              src="/assets/images/cohort1.jpeg"
                              alt="Cohort 1 Class Photo"
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-none hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">Cohort 2</CardTitle>
                      <CardDescription>November - December 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 mb-4">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">10 Graduates</span>
                      </div>
                      <div className="space-y-4">
                        <div className="pt-4">
                          <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Class Photo:</h4>
                          <div className="relative h-64 w-full overflow-hidden rounded-xl">
                            <Image
                              src="/assets/images/c2_2.jpeg"
                              alt="Cohort 2 Class Photo"
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="2025" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground">2025 Cohorts</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="glass-card border-none hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold">Cohort 3</CardTitle>
                      <CardDescription>Feb - March 2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2 mb-4">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">20 Graduates</span>
                      </div>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Our pilot Bitcoin Basics course that laid the foundation for our educational programs.
                        </p>
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Course Highlights:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Introduction to Bitcoin</li>
                            <li>• Blockchain fundamentals</li>
                            <li>• Basic wallet management</li>
                          </ul>
                        </div>
                        <div className="pt-4">
                          <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Class Photo:</h4>
                          <div className="relative h-64 w-full overflow-hidden rounded-xl">
                            <Image
                              src="/placeholder.svg?height=200&width=400"
                              alt="Cohort 3 Class Photo"
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </div>
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
      <section className="w-full py-10 md:py-16 bg-secondary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Join Our Alumni Network</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay connected with fellow graduates and continue your Bitcoin journey together.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/alumni">
                <Button size="lg" className="bg-primary hover:bg-orange-600 text-white">Alumni Portal</Button>
              </Link>
              <Link href="/events">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">Upcoming Events</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

