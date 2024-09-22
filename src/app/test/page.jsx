"use client"

import { useState, useEffect }  from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"


const categories = [
  { id: 1, name: "Chupetín", image: "/placeholder.svg?height=200&width=200", minAge: 4, maxAge: 6, coach: { firstName: "Ana", lastName: "García" }, sponsors: ["MiniSport", "TinyKicks"] },
  { id: 2, name: "Prebenjamín", image: "/placeholder.svg?height=200&width=200", minAge: 6, maxAge: 8, coach: { firstName: "Luis", lastName: "Martínez" }, sponsors: ["KidsBall", "LittleChamps"] },
  { id: 3, name: "Benjamín", image: "/placeholder.svg?height=200&width=200", minAge: 8, maxAge: 10, coach: { firstName: "Juan", lastName: "Pérez" }, sponsors: ["JuniorGoal", "YouthKick"] },
  { id: 4, name: "Alevín", image: "/placeholder.svg?height=200&width=200", minAge: 10, maxAge: 12, coach: { firstName: "María", lastName: "González" }, sponsors: ["TeenSoccer", "FuturePro"] },
  { id: 5, name: "Infantil", image: "/placeholder.svg?height=200&width=200", minAge: 12, maxAge: 14, coach: { firstName: "Carlos", lastName: "Rodríguez" }, sponsors: ["TeenChamp", "RisingStars"] },
  { id: 6, name: "Cadete", image: "/placeholder.svg?height=200&width=200", minAge: 14, maxAge: 16, coach: { firstName: "Elena", lastName: "Fernández" }, sponsors: ["YoungTalent", "NextGen"] },
  { id: 7, name: "Juvenil", image: "/placeholder.svg?height=200&width=200", minAge: 16, maxAge: 19, coach: { firstName: "Pedro", lastName: "Sánchez" }, sponsors: ["EliteFutsal", "ProPath"] },
  { id: 8, name: "Sub-23", image: "/placeholder.svg?height=200&width=200", minAge: 19, maxAge: 23, coach: { firstName: "Laura", lastName: "Díaz" }, sponsors: ["EmergingPros", "FutsalFuture"] },
  { id: 9, name: "Senior", image: "/placeholder.svg?height=200&width=200", minAge: 23, maxAge: 35, coach: { firstName: "Javier", lastName: "López" }, sponsors: ["ProLeague", "EliteIndoor"] },
  { id: 10, name: "Veteranos", image: "/placeholder.svg?height=200&width=200", minAge: 35, maxAge: 99, coach: { firstName: "Miguel", lastName: "Torres" }, sponsors: ["LegendsCup", "MasterClass"] },
  { id: 11, name: "Femenino Sub-17", image: "/placeholder.svg?height=200&width=200", minAge: 14, maxAge: 17, coach: { firstName: "Sofía", lastName: "Ruiz" }, sponsors: ["GirlPower", "FemmeFootball"] },
  { id: 12, name: "Femenino Senior", image: "/placeholder.svg?height=200&width=200", minAge: 17, maxAge: 99, coach: { firstName: "Carmen", lastName: "Vega" }, sponsors: ["WomenInSport", "FutsalQueens"] },
  { id: 13, name: "Inclusivo", image: "/placeholder.svg?height=200&width=200", minAge: 8, maxAge: 99, coach: { firstName: "Roberto", lastName: "Blanco" }, sponsors: ["UnityInSport", "AllStarInclusive"] },
  { id: 14, name: "Porteros", image: "/placeholder.svg?height=200&width=200", minAge: 8, maxAge: 99, coach: { firstName: "Diego", lastName: "Castro" }, sponsors: ["GoalKeepersUnited", "SafeHands"] },
  { id: 15, name: "Tecnificación", image: "/placeholder.svg?height=200&width=200", minAge: 10, maxAge: 18, coach: { firstName: "Alicia", lastName: "Romero" }, sponsors: ["SkillMasters", "TechniqueElite"] }
]

export default function FootballClubCategories() {
  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-4">Categorías del Club</h2>
      <div className="relative">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {categories.map((category) => (
              <CarouselItem key={category.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col p-6">
                      {/* <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                        <img
                          src={category.image}
                          height={'50'}
                          width={'25'}
                          alt={`Equipo ${category.name}`}
                          className="r"
                        />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Edad: {category.minAge} - {category.maxAge} años
                      </p>
                      <p className="text-sm mb-2">
                        Entrenador: {category.coach.firstName} {category.coach.lastName}
                      </p>
                      <div className="text-sm">
                        <span className="font-semibold">Patrocinadores:</span>
                        <ul className="list-disc list-inside mt-1">
                          {category.sponsors.map((sponsor, index) => (
                            <li key={index}>{sponsor}</li>
                          ))}
                        </ul>
                      </div> */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={() => api?.prev()}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Anterior categoría</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={() => api?.next()}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Siguiente categoría</span>
          </Button>
        </Carousel>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="w-full max-w-xs bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-300 ease-in-out"
            style={{ width: `${(current / count) * 100}%` }}
          />
        </div>
      </div>
      <div className="text-center text-sm text-muted-foreground mt-2">
        Categoría {current} de {count}
      </div>
    </div>
  )
}