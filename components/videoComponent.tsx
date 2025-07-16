 "use client"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Play } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BitcoinAnimation from "@/components/BitcoinAnimation";

interface Video {
  id: string
  title: string
  description: string
}
//https://youtube.com/shorts/FJkUfiHV-f8?feature=share

export default function YouTubeVideoSection({ title = "Bitcoin Kiboozi Videos", viewAllLink = "/videos" }) {
  const videos: Video[] = [
    {
      id: "FJkUfiHV-f8",
      title: "Bitcoin Kiboozi Feature",
      description: "A short introduction to our Bitcoin Kiboozi program and what it offers.",
    },
    {
      id: "x9apVcZc_ds",
      title: "Bitcoin Kiboozi Ep.1 – Fred Burondwa on Blockchain, Banks & Africa's Digital Future",
      description:
        "Fred shares his opinion on Uganda's banking sector and the bigger opportunity in blockchain technology for Africa's digital future.",
    },
    {
      id: "CzMODdME5qQ",
      title: "Bitcoin Kiboozi Ep. 2 – Kezia Namara on Bitcoin, Trade & Africa's Payment Future",
      description:
        "Kezia Namara shares insights on how Bitcoin could solve cross-border trade bottlenecks in Africa by reducing transaction fees.",
    },
    {
      id: "Bzi-e_1TDR0",
      title: "Bitcoin Kiboozi Shorts",
      description: "Quick insights and highlights from our Bitcoin Kiboozi program.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="absolute top-20 right-10 opacity-20 animate-spin-slow">
           <BitcoinAnimation size={120} />
         </div>
         <div className="absolute bottom-20 left-10 opacity-20">
           <BitcoinAnimation size={150} />
         </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 inline-block p-1.5 px-3 bg-orange-100 rounded-full font-medium text-orange-600 mb-4 animate-pulse-slow">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Bitcoin Kiboozi highlights</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed dark:text-gray-300 mt-4">
              Explore our video series featuring random people discussing about what they understand about Bitcoin adoption.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="featured" className="w-full">
            <TabsContent value="featured" className="space-y-12">
              {/* Featured Video - Standalone */}
              <div>
                <Card className="overflow-hidden border-0 shadow-lg">
                  <CardContent className="p-0">
                    {/* <div className="relative pt-[56.25%] w-full aspect-video">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/FJkUfiHV-f8`}
                        title="Bitcoin Kiboozi Feature"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                     ></iframe>

                    </div> */}
                            <div className="mt-5 mb-[4rem] md:mb-[100px] w-full">
          <div>
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/FJkUfiHV-f8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
                    {/* <div className="p-8 bg-gradient-to-r from-amber-50 to-white">

                      <Link
                        // href={`/videos/Bzi-e_1TDR0`}
                        href={"https://www.youtube.com/channel/UCmMi_0OP2_kOrQ9P6PK_rAg"}
                        className="inline-flex items-center mt-4 text-orange-500 hover:text-orange-600 font-medium"
                      >
                        Watch full video
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div> */}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-12">
             <Link
              href={viewAllLink}
               className="relative group"
             >
             <Button 
                className="bg-bitcoin-orange hover:bg-amber-600 text-white px-8 py-6 h-auto text-lg font-medium rounded-full shadow-lg transition-all duration-300 relative z-10 overflow-hidden group-hover:shadow-orange-300/30"
              >
                <span className="relative z-10 flex items-center">
                  Watch All Videos 
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Button>
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 via-bitcoin-orange to-amber-500 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          </div>

          {/* <div className="flex justify-center mt-8">
            <Link href={viewAllLink}>
              <Button className="bg-orange-500 hover:bg-orange-600">Watch All Videos</Button>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  )
}
