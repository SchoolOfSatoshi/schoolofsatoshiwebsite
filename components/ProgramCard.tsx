"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  link: string;
}

const ProgramCard = ({ title, description, link }: ProgramCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full transition-shadow hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="mt-2 text-gray-600">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild variant="outline" className="w-full">
            <a href={link} className="flex items-center justify-between">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProgramCard;