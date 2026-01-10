
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bitcoin, Code, Database, Network, Shield, Zap } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-10 md:py-16 bg-gradient-to-b from-amber-50 to-white dark:from-background dark:to-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3">
              <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-primary">
                Our Programs
              </h1>
              <p className="max-w-[700px] mx-auto font-sans text-muted-foreground md:text-xl">
                Comprehensive Bitcoin education for all skill levels, from beginners to advanced developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Tabs */}
      <section className="w-full py-10 md:py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12 w-full">
              <TabsList className="bg-secondary p-1 h-auto flex flex-wrap justify-center">
                <TabsTrigger value="all" className="px-6 py-2">
                  All Programs
                </TabsTrigger>
                <TabsTrigger value="beginners" className="px-6 py-2">
                  For Beginners
                </TabsTrigger>
                <TabsTrigger value="developers" className="px-6 py-2">
                  For Developers
                </TabsTrigger>
                <TabsTrigger value="advanced" className="px-6 py-2">
                  Advanced
                </TabsTrigger>
              </TabsList>
            </div>

            {/* All Programs */}
            <TabsContent value="all" className="space-y-16">
              {/* Beginners Programs */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-8">For Beginners</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card id="basics" className="glass-card border-none hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Bitcoin className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">4 Weeks</span>
                      </div>
                      <CardTitle className="font-heading text-xl">Bitcoin Basics</CardTitle>
                      <CardDescription className="font-sans">A comprehensive introduction to Bitcoin</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-sans text-sm text-muted-foreground mb-4">
                        Perfect for newcomers to Bitcoin. Learn the fundamentals of blockchain technology, Bitcoin's
                        history, and how to safely use and store Bitcoin.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Bitcoin history and philosophy</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Blockchain fundamentals</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Wallet setup and security</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Bitcoin economics</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/apply" className="w-full">
                        <Button className="w-full bg-primary hover:bg-orange-600 font-sans font-medium">
                          Apply Now
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="glass-card border-none hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">6 Weeks</span>
                      </div>
                      <CardTitle className="font-heading text-xl">Bitcoin Security Essentials</CardTitle>
                      <CardDescription className="font-sans">Learn to secure your Bitcoin</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-sans text-sm text-muted-foreground mb-4">
                        Focus on best practices for securing your Bitcoin holdings, from basic wallet security to
                        advanced cold storage techniques.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Hardware wallet setup</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Multisignature wallets</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Backup strategies</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Inheritance planning</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/apply" className="w-full">
                        <Button className="w-full bg-primary hover:bg-orange-600 font-sans font-medium">
                          Apply Now
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              {/* Developer Programs */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-8">For Developers</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card id="developer" className="glass-card border-none hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Code className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">8 Weeks</span>
                      </div>
                      <CardTitle className="font-heading text-xl">Developer Bootcamp</CardTitle>
                      <CardDescription className="font-sans">Become a Bitcoin developer</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-sans text-sm text-muted-foreground mb-4">
                        An intensive program for developers looking to build applications on Bitcoin and the Lightning
                        Network.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Bitcoin protocol development</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Lightning Network applications</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Smart contracts with Bitcoin</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Building Bitcoin wallets</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/apply" className="w-full">
                        <Button className="w-full bg-primary hover:bg-orange-600 font-sans font-medium">
                          Apply Now
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="glass-card border-none hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">10 Weeks</span>
                      </div>
                      <CardTitle className="font-heading text-xl">Lightning Network Specialist</CardTitle>
                      <CardDescription className="font-sans">Master Lightning development</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-sans text-sm text-muted-foreground mb-4">
                        Focused on building applications and services using the Lightning Network for instant Bitcoin
                        payments.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Lightning Network architecture</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">LND, c-lightning, and Eclair</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Payment channel management</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Building Lightning applications</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/apply" className="w-full">
                        <Button className="w-full bg-primary hover:bg-orange-600 font-sans font-medium">
                          Apply Now
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              {/* Advanced Programs */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-8">Advanced Programs</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <Card id="advanced" className="glass-card border-none hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">12 Weeks</span>
                      </div>
                      <CardTitle className="font-heading text-xl">Advanced Protocol Development</CardTitle>
                      <CardDescription className="font-sans">Core Bitcoin protocol expertise</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-sans text-sm text-muted-foreground mb-4">
                        Deep dive into Bitcoin's core protocol for experienced developers looking to contribute to Bitcoin
                        Core or build advanced applications.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Bitcoin Core architecture</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Consensus mechanisms</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Advanced cryptography</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Bitcoin Improvement Proposals</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/apply" className="w-full">
                        <Button className="w-full bg-primary hover:bg-orange-600 font-sans font-medium">
                          Apply Now
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card className="glass-card border-none hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Network className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">16 Weeks</span>
                      </div>
                      <CardTitle className="font-heading text-xl">Bitcoin Scaling Solutions</CardTitle>
                      <CardDescription className="font-sans">Advanced scaling techniques</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-sans text-sm text-muted-foreground mb-4">
                        Explore cutting-edge Bitcoin scaling solutions including Layer 2 technologies, sidechains, and
                        state channels.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Layer 2 protocols</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Sidechains and drivechains</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">State channels</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span className="font-sans text-sm">Future scaling proposals</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/apply" className="w-full">
                        <Button className="w-full bg-primary hover:bg-orange-600 font-sans font-medium">
                          Apply Now
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Beginners Tab */}
            <TabsContent value="beginners">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card id="basics" className="glass-card border-none hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Bitcoin className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">4 Weeks</span>
                    </div>
                    <CardTitle className="font-heading text-xl">Bitcoin Basics</CardTitle>
                    <CardDescription className="font-sans">A comprehensive introduction to Bitcoin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-sm text-muted-foreground mb-4">
                      Perfect for newcomers to Bitcoin. Learn the fundamentals of blockchain technology, Bitcoin's
                      history, and how to safely use and store Bitcoin.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Bitcoin history and philosophy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Blockchain fundamentals</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Wallet setup and security</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Bitcoin economics</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/apply" className="w-full">
                      <Button className="w-full bg-primary hover:bg-orange-600 font-sans font-medium">
                        Apply Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="glass-card border-none hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">6 Weeks</span>
                    </div>
                    <CardTitle className="font-heading text-xl">Bitcoin Security Essentials</CardTitle>
                    <CardDescription className="font-sans">Learn to secure your Bitcoin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-sm text-muted-foreground mb-4">
                      Focus on best practices for securing your Bitcoin holdings, from basic wallet security to
                      advanced cold storage techniques.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Hardware wallet setup</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Multisignature wallets</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Backup strategies</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Inheritance planning</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/apply" className="w-full">
                      <Button className="w-full bg-primary hover:bg-orange-600 font-sans font-medium">
                        Apply Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Developers Tab */}
            <TabsContent value="developers">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card id="developer" className="glass-card border-none hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">8 Weeks</span>
                    </div>
                    <CardTitle className="font-heading text-xl">Developer Bootcamp</CardTitle>
                    <CardDescription className="font-sans">Become a Bitcoin developer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-sm text-muted-foreground mb-4">
                      An intensive program for developers looking to build applications on Bitcoin and the Lightning
                      Network.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Bitcoin protocol development</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Lightning Network applications</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Smart contracts with Bitcoin</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Building Bitcoin wallets</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/apply" className="w-full">
                      <Button className="w-full bg-primary hover:bg-orange-600 font-sans font-medium">
                        Apply Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="glass-card border-none hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">10 Weeks</span>
                    </div>
                    <CardTitle className="font-heading text-xl">Lightning Network Specialist</CardTitle>
                    <CardDescription className="font-sans">Master Lightning development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-sm text-muted-foreground mb-4">
                      Focused on building applications and services using the Lightning Network for instant Bitcoin
                      payments.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Lightning Network architecture</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">LND, c-lightning, and Eclair</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Payment channel management</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Building Lightning applications</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/apply" className="w-full">
                      <Button className="w-full bg-primary hover:bg-orange-600 font-sans font-medium">
                        Apply Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Advanced Tab */}
            <TabsContent value="advanced">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card id="advanced" className="glass-card border-none hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">12 Weeks</span>
                    </div>
                    <CardTitle className="font-heading text-xl">Advanced Protocol Development</CardTitle>
                    <CardDescription className="font-sans">Core Bitcoin protocol expertise</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-sm text-muted-foreground mb-4">
                      Deep dive into Bitcoin's core protocol for experienced developers looking to contribute to Bitcoin
                      Core or build advanced applications.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Bitcoin Core architecture</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Consensus mechanisms</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Advanced cryptography</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Bitcoin Improvement Proposals</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/apply" className="w-full">
                      <Button className="w-full bg-primary hover:bg-orange-600 font-sans font-medium">
                        Apply Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="glass-card border-none hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Network className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">16 Weeks</span>
                    </div>
                    <CardTitle className="font-heading text-xl">Bitcoin Scaling Solutions</CardTitle>
                    <CardDescription className="font-sans">Advanced scaling techniques</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-sm text-muted-foreground mb-4">
                      Explore cutting-edge Bitcoin scaling solutions including Layer 2 technologies, sidechains, and
                      state channels.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Layer 2 protocols</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Sidechains and drivechains</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">State channels</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span className="font-sans text-sm">Future scaling proposals</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/apply" className="w-full">
                      <Button className="w-full bg-primary hover:bg-orange-600 font-sans font-medium">
                        Apply Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
