import React from 'react'
import { Bitcoin, BookOpen, GraduationCap, Users,  ShieldMinus ,Eye , Goal} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Miniaboutus = () => {
  return (
    <div className="flex flex-col space-y-6 mt-8">
    {/* Mission */}
    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      < ShieldMinus className="h-8 w-8 text-orange-500 flex-shrink-0" />
      <div>
        <h3 className="text-lg font-semibold">Mission</h3>
        <p className="text-sm text-gray-500">
          To equip Ugandans with Practical Bitcoin education that fosters financial sovereignity, self custody and inferred participation in the digital economy 
        </p>
      </div>
    </div>
    {/* Vision */}
    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <Eye className="h-8 w-8 text-orange-500 flex-shrink-0" />
      <div>
        <h3 className="text-lg font-semibold">Vision</h3>
        <p className="text-sm text-gray-500">
          Empowering Ugandans through comprehensive bitcoin education delivered in their natively spoken languages
        </p>
      </div>
    </div>
    {/* Goal */}
    {/* <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <Goal className="h-8 w-8 text-orange-500 flex-shrink-0" />
      <div>
        <h3 className="text-lg font-semibold">Goal</h3>
        <p className="text-sm text-gray-500">
          To create a global community of Bitcoin experts and developers.
        </p>
      </div>
    </div> */}
  </div>
  )
}

export default Miniaboutus
