"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, ChevronRight, ExternalLink } from "lucide-react";
import BitcoinAnimation from "@/components/BitcoinAnimation";
import Link from "next/link";
import Image from "next/image";

export default function VideosPage() {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  

  const videos = [
    {
      id: "x9apVcZc_ds",
      title: "Bitcoin Kiboozi Ep.1 – Fred Burondwa on Blockchain, Banks & Africa's Digital Future",
      link: "https://youtu.be/x9apVcZc_ds",
      description:
        "In the debut episode of Bitcoin Kiboozi, we speak with Fred Burondwa—a creative thinker and observer of Uganda's evolving financial space. Fred shares his opinion that Uganda's banking sector is slowly improving, but sees an even bigger opportunity in blockchain technology.",
    },
    {
      id: "CzMODdME5qQ",
      title: "Bitcoin Kiboozi Ep. 2 – Kezia Namara on Bitcoin, Trade & Africa's Payment Future",
      link: "https://youtu.be/CzMODdME5qQ",
      description:
        "In this second episode of Bitcoin Kiboozi, Kezia Namara shares her insights as a trader and business thinker navigating the realities of cross-border trade in Africa. Kezia sees Bitcoin as a strong solution for one of the continent's biggest trade bottlenecks: expensive and slow transactions.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white dark:bg-gray-900">
      {/* Hero Section with Bitcoin Animation */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-amber-50/70 via-white/80 to-white dark:from-gray-900 dark:via-gray-900/90 dark:to-gray-900">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 opacity-30 animate-float">
          <BitcoinAnimation size={120} glowEffect={true} color="#F7931A" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20">
          <BitcoinAnimation size={80} rotateSpeed="slow" floatEffect={false} />
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block p-1.5 px-4 bg-orange-100 rounded-full text-sm font-medium text-orange-600 mb-3 animate-pulse-slow dark:bg-orange-900/30 dark:text-orange-400">
              All Series
            </div>
            <div className="space-y-2 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/tight gradient-text animate-slide-up">
                Bitcoin Kiboozi Videos
              </h1>
              <p className="max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
                Exploring perspectives on Bitcoin through conversations with thinkers across Africa
              </p>
            </div>
          </div>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto fill-white dark:fill-gray-900">
            <path d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* Videos Section */}
      <section className="w-full py-2 md:py-2 lg:py-2 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-amber-50 p-1 rounded-full dark:bg-gray-800">
                <TabsTrigger 
                  value="all" 
                  className="rounded-full px-6 py-2 data-[state=active]:bg-bitcoin-orange data-[state=active]:text-white transition-all duration-300"
                >
                  All Episodes
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-12 transition-all duration-500 ease-in-out">
              <div className="grid md:grid-cols-2 gap-8">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="transform transition-all duration-500 hover:scale-[1.02] section-animate"
                    style={{animationDelay: `${index * 0.15}s`}}
                    onMouseEnter={() => setHoveredVideo(video.id)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <Card className="overflow-hidden border-0 shadow-xl rounded-2xl h-full bg-white dark:bg-gray-800">
                      <CardContent className="p-0">
                        <div className="relative aspect-video">
              
                          <Image
                            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            width = {100}
                            height={100}
                          />
                          <Link
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center group"
                          >
                            <div className={`
                              flex items-center justify-center rounded-full 
                              ${hoveredVideo === video.id ? 'bg-bitcoin-orange scale-110' : 'bg-white scale-100'} 
                              w-16 h-16 transition-all duration-300 shadow-lg group-hover:scale-110
                            `}>
                              <Play 
                                className={`
                                  ${hoveredVideo === video.id ? 'text-white translate-x-0.5' : 'text-bitcoin-orange'} 
                                  h-8 w-8 transition-colors duration-300
                                `} 
                              />
                            </div>
                            <div className={`
                              absolute inset-0 bg-gradient-to-t from-black/60 via-transparent ${hoveredVideo === video.id ? 'opacity-80' : 'opacity-40'}
                              transition-opacity duration-300
                            `}/>
                          </Link>
                          <div className="absolute top-4 left-4 bg-bitcoin-orange text-white text-sm font-medium px-3 py-1 rounded-full">
                            Episode {index + 1}
                          </div>
                        </div>
                        <div className="p-6 bg-gradient-to-r from-amber-50/50 to-white dark:from-gray-800 dark:to-gray-800">
                          <h3 className="text-xl font-semibold mb-3 line-clamp-2 dark:text-white">{video.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                            {video.description}
                          </p>
                          <a
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-bitcoin-orange hover:text-amber-600 font-medium transition-colors duration-300 group"
                          >
                            Watch full video
                            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-16">
            <a 
              href="https://www.youtube.com/channel/UCmMi_0OP2_kOrQ9P6PK_rAg"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <Button
                className="bg-bitcoin-orange hover:bg-amber-600 text-white px-8 py-6 h-auto text-lg font-medium rounded-full shadow-lg transition-all duration-300 relative z-10 overflow-hidden group-hover:shadow-orange-300/30"
              >
                <span className="relative z-10 flex items-center">
                  Visit Our YouTube Channel 
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Button>
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 via-bitcoin-orange to-amber-500 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

