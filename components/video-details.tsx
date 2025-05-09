// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { ChevronDown, ChevronUp } from "lucide-react"

// interface VideoDetailProps {
//   id: string
//   title: string
//   description: string
//   fullDescription?: string
// }

// export default function VideoDetail({ id, title, description, fullDescription }: VideoDetailProps) {
//   const [expanded, setExpanded] = useState(false)
//   const hasFullDescription = !!fullDescription && fullDescription !== description

//   return (
//     <Card className="overflow-hidden">
//       <CardContent className="p-0">
//         <div className="relative aspect-video">
//           <iframe
//             className="absolute inset-0 w-full h-full"
//             src={`https://www.youtube.com/embed/${id}`}
//             title={title}
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//         <div className="p-4">
//           <h3 className="text-xl font-bold mb-2">{title}</h3>
//           <div className="text-gray-500">{expanded && hasFullDescription ? fullDescription : description}</div>

//           {hasFullDescription && (
//             <Button
//               variant="ghost"
//               size="sm"
//               className="mt-2 flex items-center text-orange-500 hover:text-orange-600 p-0"
//               onClick={() => setExpanded(!expanded)}
//             >
//               {expanded ? (
//                 <>
//                   <span>Show less</span>
//                   <ChevronUp className="ml-1 h-4 w-4" />
//                 </>
//               ) : (
//                 <>
//                   <span>Show more</span>
//                   <ChevronDown className="ml-1 h-4 w-4" />
//                 </>
//               )}
//             </Button>
//           )}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
