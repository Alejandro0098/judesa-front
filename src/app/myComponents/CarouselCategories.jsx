// "use client"

// import { useState, useEffect }  from "react"
// import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { useRouter } from "next/navigation"


// const categories = [
//   { id: 1, name: "Chupetín", image: "/placeholder.svg?height=200&width=200", minAge: 4, maxAge: 6, coach: { firstName: "Ana", lastName: "García" }, sponsors: ["MiniSport", "TinyKicks"] },
//   { id: 2, name: "Prebenjamín", image: "/placeholder.svg?height=200&width=200", minAge: 6, maxAge: 8, coach: { firstName: "Luis", lastName: "Martínez" }, sponsors: ["KidsBall", "LittleChamps"] },
//   { id: 3, name: "Benjamín", image: "/placeholder.svg?height=200&width=200", minAge: 8, maxAge: 10, coach: { firstName: "Juan", lastName: "Pérez" }, sponsors: ["JuniorGoal", "YouthKick"] },
//   { id: 4, name: "Alevín", image: "/placeholder.svg?height=200&width=200", minAge: 10, maxAge: 12, coach: { firstName: "María", lastName: "González" }, sponsors: ["TeenSoccer", "FuturePro"] },
//   { id: 5, name: "Infantil", image: "/placeholder.svg?height=200&width=200", minAge: 12, maxAge: 14, coach: { firstName: "Carlos", lastName: "Rodríguez" }, sponsors: ["TeenChamp", "RisingStars"] },
//   { id: 6, name: "Cadete", image: "/placeholder.svg?height=200&width=200", minAge: 14, maxAge: 16, coach: { firstName: "Elena", lastName: "Fernández" }, sponsors: ["YoungTalent", "NextGen"] },
//   { id: 7, name: "Juvenil", image: "/placeholder.svg?height=200&width=200", minAge: 16, maxAge: 19, coach: { firstName: "Pedro", lastName: "Sánchez" }, sponsors: ["EliteFutsal", "ProPath"] },
//   { id: 8, name: "Sub-23", image: "/placeholder.svg?height=200&width=200", minAge: 19, maxAge: 23, coach: { firstName: "Laura", lastName: "Díaz" }, sponsors: ["EmergingPros", "FutsalFuture"] },
//   { id: 9, name: "Senior", image: "/placeholder.svg?height=200&width=200", minAge: 23, maxAge: 35, coach: { firstName: "Javier", lastName: "López" }, sponsors: ["ProLeague", "EliteIndoor"] },
//   { id: 10, name: "Veteranos", image: "/placeholder.svg?height=200&width=200", minAge: 35, maxAge: 99, coach: { firstName: "Miguel", lastName: "Torres" }, sponsors: ["LegendsCup", "MasterClass"] },
//   { id: 11, name: "Femenino Sub-17", image: "/placeholder.svg?height=200&width=200", minAge: 14, maxAge: 17, coach: { firstName: "Sofía", lastName: "Ruiz" }, sponsors: ["GirlPower", "FemmeFootball"] },
//   { id: 12, name: "Femenino Senior", image: "/placeholder.svg?height=200&width=200", minAge: 17, maxAge: 99, coach: { firstName: "Carmen", lastName: "Vega" }, sponsors: ["WomenInSport", "FutsalQueens"] },
//   { id: 13, name: "Inclusivo", image: "/placeholder.svg?height=200&width=200", minAge: 8, maxAge: 99, coach: { firstName: "Roberto", lastName: "Blanco" }, sponsors: ["UnityInSport", "AllStarInclusive"] },
//   { id: 14, name: "Porteros", image: "/placeholder.svg?height=200&width=200", minAge: 8, maxAge: 99, coach: { firstName: "Diego", lastName: "Castro" }, sponsors: ["GoalKeepersUnited", "SafeHands"] },
//   { id: 15, name: "Tecnificación", image: "/placeholder.svg?height=200&width=200", minAge: 10, maxAge: 18, coach: { firstName: "Alicia", lastName: "Romero" }, sponsors: ["SkillMasters", "TechniqueElite"] }
// ]

// export default function CarouselCategories({categories}) {

//   if (!categories) return (<></>);
//   const [api, setApi] = useState()
//   const [current, setCurrent] = useState(0)
//   const [count, setCount] = useState(0)

//   const router = useRouter()

//   useEffect(() => {
//     if (!api) {
//       return
//     }

//     setCount(api.scrollSnapList().length)
//     setCurrent(api.selectedScrollSnap() + 1)

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap() + 1)
//     })
//   }, [api])

//   console.log(categories)

//   return categories && (
//     <div className="w-full">
//       <div className="relative mb-10" style={{background: 'none',boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
//         <Carousel
//           setApi={setApi}
//           className=" bg-inherit"
//           opts={{
//             align: "end",
//             loop: true,
//           }}
//         >
//           <CarouselContent className="bg-inherit">
//             {categories.map(({id, name, image}) => (
//               <CarouselItem key={id} >
//                 <div onClick={() => router.push(`/categoria?id=${id}`)} key={id} className=" xl:pt-10 xl:pb-5 bg-white hover:cursor-pointer py-10">
//                 <img src={'/madrid.jpg'} alt={`Equipo ${name}`} className="w-full xl:h-96 h-80 object-contain " />
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold mb-2">{name}</h2>
//                   <p><strong>Entrenador:</strong> {'Perico el de los palotes'}</p>
//                   <p><strong>Delegado:</strong> {'Perico el de los palotes'}</p>
//                 </div>
//               </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           {/* <Button
//             variant="outline"
//             size="icon"
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 rounded-full bg-white"
//             onClick={() => api?.prev()}
//           >
//             <ChevronLeft className="h-4 w-4" />
//             <span className="sr-only">Anterior categoría</span>
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 rounded-full bg-white "
//             onClick={() => api?.next()}
//           >
//             <ChevronRight className="h-4 w-4" />
//             <span className="sr-only">Siguiente categoría</span>
//           </Button> */}
//           <CarouselPrevious className="hidden xl:flex"/>
//           <CarouselNext className="hidden xl:flex"/>
//         </Carousel>
//       </div>
//       {/* <div className="flex items-center justify-center mt-4">
//         <div className="w-full max-w-xs bg-muted rounded-full h-2 overflow-hidden">
//           <div
//             className="bg-primary h-full transition-all duration-300 ease-in-out"
//             style={{ width: `${(current / count) * 100}%` }}
//           />
//         </div>
//       </div>
//       <div className="text-center text-sm text-black mt-2">
//         Categoría {current} de {count}
//       </div> */}
//     </div>
//   )
// }

'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { X, ShoppingCart, Globe, Facebook, Twitter, Instagram, Dribbble } from "lucide-react"

import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from "react"

import NewsService from '../services/NewsService.js'

const old_sponsors = [
  {
    name: "Patrocinador 1",
    description: "Descripción del Patrocinador 1 y su apoyo al club.",
    website: "https://patrocinador1.com",
    facebook: "https://facebook.com/patrocinador1",
    twitter: "https://twitter.com/patrocinador1",
    instagram: "https://instagram.com/patrocinador1",
    img: 'https://pbs.twimg.com/profile_images/1790706639277834240/ZBQs7hHR_400x400.jpg'
  },
  {
    name: "Patrocinador 2",
    description: "Descripción del Patrocinador 2 y su apoyo al club.",
    website: "https://patrocinador2.com",
    facebook: "https://facebook.com/patrocinador2",
    twitter: "https://twitter.com/patrocinador2",
    instagram: "https://instagram.com/patrocinador2",
    img: 'https://www.liderlogo.es/wp-content/uploads/2022/12/pasted-image-0-6-1.png'
  },
  {
    name: "Patrocinador 3",
    description: "Descripción del Patrocinador 3 y su apoyo al club.",
    website: "https://patrocinador3.com",
    facebook: "https://facebook.com/patrocinador3",
    twitter: "https://twitter.com/patrocinador3",
    instagram: "https://instagram.com/patrocinador3",
    img: 'https://ams3.digitaloceanspaces.com/graffica/2023/02/cocacola-logo.jpeg'
  },
]


export default function CarouselCategories({ categories }) {
  const [sponsors, setSponsor] = useState(null)

  // useEffect(() => {
  //   NewsService.getSponsors()
  //     .then(sponsors => setSponsor(sponsors))
  // }, [])
  return (
    <Carousel className="w-full max-w-80 mx-auto hover:cursor-pointer" plugins={[
      Autoplay({
        delay: 3000,
      }),
    ]}>
      <CarouselContent >
        {categories?.map(({ id, name }, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <CardContent className="flex flex-col items-center justify-center pt-6">
                    <img src={'/madrid.jpg'}width={400}  alt={`Equipo ${name}`} className="w-full h-48 object-contain mb-4" height={192} style={{
                                            aspectRatio: "400/192",
                                            objectFit: "contain",
                                        } }/>
                    <div className="">
                       <h2 className="text-sm font-semibold mb-2">{name}</h2>
                       <p className="text-sm font-semibold mb-2"><strong>Entrenador:</strong> {'Perico el de los palotes'}</p>
                       <p className="text-sm font-semibold mb-2"   ><strong>Delegado:</strong> {'Perico el de los palotes'}</p>
                    </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>)
}