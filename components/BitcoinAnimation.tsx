
import React, { useEffect, useRef } from "react";
import { Bitcoin } from "lucide-react";
import { cn } from "@/lib/utils";

interface BitcoinAnimationProps {
  className?: string;
  size?: number;
  color?: string;
  pulseColor?: string;
  rotateSpeed?: "slow" | "medium" | "fast";
  floatEffect?: boolean;
  glowEffect?: boolean;
}

const BitcoinAnimation: React.FC<BitcoinAnimationProps> = ({ 
  className = "",
size = 60,
color = "#F7931A",
pulseColor = "rgba(247, 147, 26, 0.2)",
rotateSpeed = "medium",
floatEffect = true,
glowEffect = true
}) => {
const bitcoinRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const element = bitcoinRef.current;
  if (!element) return;
  
  // Optional: Add additional animation logic here if needed
  return () => {
    // Cleanup if necessary
  };
}, []);

const rotationClass = {
  slow: "animate-[spin_30s_linear_infinite]",
  medium: "animate-[spin_20s_linear_infinite]",
  fast: "animate-[spin_10s_linear_infinite]"
}[rotateSpeed];

return (
  <div 
    ref={bitcoinRef}
    className={cn(
      "relative flex items-center justify-center",
      floatEffect && "animate-float",
      className
    )} 
    style={{ width: size, height: size }}
  >
    {/* Main Bitcoin Icon */}
    <div className={cn(
      "relative z-10",
      rotateSpeed && rotationClass
    )}>
      <Bitcoin 
        size={size} 
        color={color}
        strokeWidth={1.5}
        className="z-10"
      />
    </div>
    
    {/* Glow effect */}
    {glowEffect && (
      <div 
        className="absolute rounded-full animate-pulse-slow" 
        style={{ 
          width: size * 1.5, 
          height: size * 1.5, 
          backgroundColor: pulseColor,
          filter: `blur(${size * 0.15}px)`,
          opacity: 0.8,
          zIndex: 0
        }}
      />
    )}
    
    {/* Inner pulse ring */}
    <div 
      className="absolute rounded-full opacity-70 animate-ping" 
      style={{ 
        width: size * 1.1, 
        height: size * 1.1,
        border: `2px solid ${color}`,
        animationDuration: '3s'
      }}
    />
    
    {/* Sparkles effect (optional) */}
    <div className="absolute w-full h-full">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-ping-slow opacity-0"
          style={{
            left: `calc(50% + ${Math.cos(angle * Math.PI / 180) * (size/2)}px)`,
            top: `calc(50% + ${Math.sin(angle * Math.PI / 180) * (size/2)}px)`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '4s'
          }}
        />
      ))}
    </div>
  </div>
);
};

export default BitcoinAnimation;