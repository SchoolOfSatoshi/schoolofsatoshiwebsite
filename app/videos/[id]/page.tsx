// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { ArrowLeft } from "lucide-react"
// import VideoDetail from "@/components/video-details"

// // This would typically come from a database or API
// const getVideoDetails = (id: string) => {
//   const videos = {
//     x9apVcZc_ds:{
//       id: "x9apVcZc_ds",
//       title: "Bitcoin Kiboozi Ep.1 – Fred Burondwa on Blockchain, Banks & Africa's Digital Future",
//       link: "https://youtu.be/x9apVcZc_ds",
//       description:
//         "Fred shares his opinion on Uganda's banking sector and the bigger opportunity in blockchain technology for Africa's digital future.",
//       fullDescription: `In the debut episode of Bitcoin Kiboozi, we speak with Fred Burondwa—a creative thinker and observer of Uganda's evolving financial space. Fred shares his opinion that Uganda's banking sector is slowly improving, but sees an even bigger opportunity in blockchain technology. He believes Africa should harness blockchain first for real-world use cases—like art, music, and digital ownership—before fully diving into the world of cryptocurrency. This episode invites us to think deeper about innovation, local context, and what a digital future could look like for Uganda and beyond. Subscribe for more real voices from the streets on money, Bitcoin, and financial freedom.`,
//     },
//     CzMODdME5qQ: {
//       id: "CzMODdME5qQ",
//       title: "Bitcoin Kiboozi Ep. 2 – Kezia Namara on Bitcoin, Trade & Africa's Payment Future",
//       link:"https://youtu.be/CzMODdME5q",
//       description:
//         "Kezia Namara shares insights on how Bitcoin could solve cross-border trade bottlenecks in Africa by reducing transaction fees.",
//       fullDescription: `In this second episode of Bitcoin Kiboozi, Kezia Namara shares her insights as a trader and business thinker navigating the realities of cross-border trade in Africa. Kezia sees Bitcoin as a strong solution for one of the continent's biggest trade bottlenecks: expensive and slow transactions. She argues that Bitcoin could empower traders by reducing or even eliminating transaction fees, creating smoother and more direct trade links between African countries and beyond. This is a must-watch for anyone curious about how Bitcoin isn't just a currency—it's a possible trade revolution.`,
//     },
//     // "Bzi-e_1TDR0": {
//     //   id: "Bzi-e_1TDR0",
//     //   title: "Bitcoin Kiboozi Feature",
//     //   description: "A short introduction to our Bitcoin Kiboozi program and what it offers.",
//     //   fullDescription:
//     //     "A short introduction to our Bitcoin Kiboozi program and what it offers. Learn about how we're bringing Bitcoin education to communities across Africa.",
//     // }, 
//   }

//   return (
//     videos[id as keyof typeof videos] || {
//       id,
//       title: "Bitcoin Kiboozi Video",
//       description: "Watch this Bitcoin Kiboozi video to learn more about Bitcoin.",
//       fullDescription: "",
//     }
//   )
// }

// export default function VideoPage({ params }: { params: { id: string } }) {
//   const video = getVideoDetails(params.id)

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="w-full py-8 md:py-12 bg-gradient-to-b from-amber-50 to-white">
//         <div className="container px-4 md:px-6">
//           <Link href="/videos">
//             <Button variant="ghost" className="mb-4 pl-0">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Videos
//             </Button>
//           </Link>

//           <VideoDetail
//             id={video.id}
//             title={video.title}
//             description={video.description}
//             fullDescription={video.fullDescription}
//           />

//           {/* <div className="mt-8">
//             <h2 className="text-2xl font-bold mb-4">Related Videos</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {Object.values(getVideoDetails("x9apVcZc_ds"))
//                 .filter((v) => v.id !== video.id)
//                 .slice(0, 3)
//                 .map((relatedVideo, index) => (
//                   <Link href={`/videos/${relatedVideo.id}`} key={index} className="block">
//                     <div className="relative aspect-video mb-2">
//                       <img
//                         src={`https://img.youtube.com/vi/${relatedVideo.id}/mqdefault.jpg`}
//                         alt={relatedVideo.title}
//                         className="w-full h-full object-cover rounded-md"
//                       />
//                     </div>
//                     <h3 className="font-medium text-sm line-clamp-2">{relatedVideo.title}</h3>
//                   </Link>
//                 ))}
//             </div>
//           </div> */}
//         </div>
//       </section>
//     </div>
//   )
// }
