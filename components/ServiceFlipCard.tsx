"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon, ArrowRight, RotateCcw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ServiceFlipCardProps {
    icon: LucideIcon
    title: string
    desc: string
}

export default function ServiceFlipCard({ icon: Icon, title, desc }: ServiceFlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className="h-[300px] w-full perspective-1000 cursor-pointer group" onClick={handleFlip}>
            <motion.div
                className="relative w-full h-full transform-style-3d transition-transform duration-700"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
            >
                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                    <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 glass-card flex flex-col items-center justify-center p-6 text-center">
                        <div className="mb-6 p-4 rounded-full bg-orange-100 dark:bg-orange-900/20 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-12 w-12 text-primary" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-2">{title}</h3>
                        <p className="text-sm text-muted-foreground mt-4 flex items-center gap-1 opacity-70">
                            Tap for details <ArrowRight className="h-4 w-4" />
                        </p>
                    </Card>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <Card className="h-full border-none shadow-md bg-primary text-primary-foreground flex flex-col items-center justify-center p-6 text-center">
                        {/* Note: The card content itself shouldn't be rotated if the parent is already rotated 180deg. 
                Wait, if the parent div rotates 180Y, the back face (which is initialized at 180Y) will be at 360Y (0) relative to viewer.
                So the content inside does NOT need extra rotation, but the backface div does need rotate-y-180 class.
            */}
                        <CardContent className="flex flex-col items-center justify-center h-full space-y-4">
                            <h3 className="text-xl font-heading font-bold border-b border-primary-foreground/20 pb-2 mb-2 w-full">
                                {title}
                            </h3>
                            <p className="text-lg leading-relaxed font-medium">
                                {desc}
                            </p>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleFlip();
                                }}
                                className="mt-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                                aria-label="Flip back"
                            >
                                <RotateCcw className="h-5 w-5 text-white" />
                            </button>
                        </CardContent>
                    </Card>
                </div>
            </motion.div>
        </div>
    )
}
