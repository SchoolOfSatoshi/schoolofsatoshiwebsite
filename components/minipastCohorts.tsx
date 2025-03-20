// import React from 'react'
// import { motion } from "framer-motion";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { useInView } from "react-intersection-observer";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Bitcoin, BookOpen, GraduationCap, Users,  ShieldMinus ,Eye , Goal} from "lucide-react";

// const PastCohorts = () => {
//     const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true });
//     const { ref: programsRef, inView: programsInView } = useInView({ triggerOnce: true });
//     const { ref: cohortsRef, inView: cohortsInView } = useInView({ triggerOnce: true });
//   return (
//     <section className="w-full py-12 md:py-10 lg:py-10">
//         <div className="container px-4 md:px-6">
//           <motion.div
//             ref={cohortsRef}
//             initial={{ opacity: 0, y: 50 }}
//             animate={cohortsInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col items-center justify-center space-y-4 text-center"
//           >
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Previous Cohorts</h2>
//               <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Our alumni are making waves in the Bitcoin ecosystem.
//               </p>
//             </div>
//           </motion.div>
//           <motion.div
//             className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2"
//             initial={{ opacity: 0 }}
//             animate={cohortsInView ? { opacity: 1 } : {}}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             <motion.div whileHover={{ scale: 1.05 }}>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Cohort 1</CardTitle>
//                   <CardDescription>Developer Bootcamp</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex items-center space-x-2">
//                     <Users className="h-5 w-5 text-gray-500" />
//                     <span className="text-sm text-gray-500">24 Graduates</span>
//                   </div>
//                   <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//                     Our inaugural cohort focused on Lightning Network development and Bitcoin scripting.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.05 }}>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Cohort 2 </CardTitle>
//                   <CardDescription>Advanced Protocol</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex items-center space-x-2">
//                     <Users className="h-5 w-5 text-gray-500" />
//                     <span className="text-sm text-gray-500">18 Graduates</span>
//                   </div>
//                   <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//                     This cohort specialized in advanced Bitcoin protocol development and contributed to open-source
//                     projects.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </motion.div>
//           <div className="flex justify-center mt-8">
//             <Link href="/cohorts">
//               <Button variant="outline">View All Cohorts</Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//   )
// }

// export default PastCohorts
