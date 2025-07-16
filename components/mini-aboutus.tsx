
// import React from 'react'
// import { Bitcoin, BookOpen, GraduationCap, Users,  ShieldMinus ,Eye , Goal} from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Miniaboutus = () => {
//   return (
//     <div className="flex flex-col space-y-6 mt-8">
//     {/* Mission */}
//     <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
//       < ShieldMinus className="h-8 w-8 text-bitcoin-orange flex-shrink-0" />
//       <div>
//         <h3 className="text-lg md:text-xl font-bold">Mission</h3>
//         <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
//           To equip Ugandans with Practical Bitcoin education that fosters financial sovereignity, self custody and informed participation in the digital economy 
//         </p>
//       </div>
//     </div>
//     {/* Vision */}
//     <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
//       <Eye className="h-8 w-8 text-bitcoin-orange flex-shrink-0" />
//       <div>
//         <h3 className="text-lg md:text-xl font-bold">Vision</h3>
//         <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
//           Empowering Ugandans through comprehensive bitcoin education delivered in their natively spoken languages
//         </p>
//       </div>
//     </div>

//   </div>
//   )
// }

// export default Miniaboutus


import { ShieldMinus, Eye } from "lucide-react"

const Miniaboutus = () => {
  return (
    <div className="flex flex-col space-y-6 mt-8">
      {/* Mission */}
      <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <ShieldMinus className="h-8 w-8 text-bitcoin-orange flex-shrink-0" />
        <div>
          <h3 className="text-lg md:text-xl font-heading font-semibold mb-2">Mission</h3>
          <p className="text-sm md:text-base font-sans text-muted-foreground leading-relaxed">
            To equip Ugandans with Practical Bitcoin education that fosters financial sovereignity, self custody and
            informed participation in the digital economy
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <Eye className="h-8 w-8 text-bitcoin-orange flex-shrink-0" />
        <div>
          <h3 className="text-lg md:text-xl font-heading font-semibold mb-2">Vision</h3>
          <p className="text-sm md:text-base font-sans text-muted-foreground leading-relaxed">
            Empowering Ugandans through comprehensive bitcoin education delivered in their natively spoken languages
          </p>
        </div>
      </div>
    </div>
  )
}

export default Miniaboutus
