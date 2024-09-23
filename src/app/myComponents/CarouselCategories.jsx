
"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Router } from "lucide-react"
import { useRouter } from "next/navigation"

const categorias = [
  {
    nombre: "Benjamín",
    imagen: "/placeholder.svg?height=200&width=300",
    entrenador: "Juan Pérez",
    delegado: "María García",
    edadRango: "7-8 años"
  },
  {
    nombre: "Alevín",
    imagen: "/placeholder.svg?height=200&width=300",
    entrenador: "Pedro Sánchez",
    delegado: "Ana Martínez",
    edadRango: "9-10 años"
  },
  {
    nombre: "Infantil",
    imagen: "/placeholder.svg?height=200&width=300",
    entrenador: "Luis Rodríguez",
    delegado: "Carmen López",
    edadRango: "11-12 años"
  },
  {
    nombre: "Cadete",
    imagen: "/placeholder.svg?height=200&width=300",
    entrenador: "Antonio Fernández",
    delegado: "Isabel Díaz",
    edadRango: "13-14 años"
  },
  {
    nombre: "Juvenil",
    imagen: "/placeholder.svg?height=200&width=300",
    entrenador: "José Ruiz",
    delegado: "Laura González",
    edadRango: "15-16 años"
  },
  {
    nombre: "Senior",
    imagen: "/placeholder.svg?height=200&width=300",
    entrenador: "Miguel Ángel Jiménez",
    delegado: "Sofía Moreno",
    edadRango: "17+ años"
  },
  {
    nombre: "Veteranos",
    imagen: "/placeholder.svg?height=200&width=300",
    entrenador: "Francisco Muñoz",
    delegado: "Elena Navarro",
    edadRango: "35+ años"
  },
  {
    nombre: "Femenino Sub-17",
    imagen: "/placeholder.svg?height=200&width=300",
    entrenador: "Lucía Romero",
    delegado: "Marta Serrano",
    edadRango: "14-16 años"
  },
  {
    nombre: "Femenino Senior",
    imagen: "/placeholder.svg?height=200&width=300",
    entrenador: "Raquel Ortiz",
    delegado: "Cristina Vega",
    edadRango: "17+ años"
  },
  {
    nombre: "Inclusivo",
    imagen: "/placeholder.svg?height=200&width=300",
    entrenador: "Javier Molina",
    delegado: "Beatriz Castro",
    edadRango: "Todas las edades"
  }
]

const ProgressDots = ({ totalSlides, currentSlide }) => {
  console.log(totalSlides, currentSlide)
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentSlide - 1 ? 'bg-emerald-500' : 'bg-gray-300'
            }`}
        />
      ))}
    </div>
  )
}

export default function CarouselCategories({ categories }) {

  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState()

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

  const router = useRouter()

  return (
    <div className="w-full max-w-[100vw] overflow-hidden box-border">
      <h2 onClick={() => router.push('/categorias')} className="text-3xl md:text-4xl font-bold mb-12 text-center px-4 tracking-tighter gap-3 flex justify-center align-center hover:cursor-pointer hover:underline w-min-content">Nuestras categorías
      {/* <svg version="1.1" id="icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><style>.st0{display:none}.st1{display:inline}.st2{fill:#0a0a0a}</style><g id="row1_1_"><g id="_x31__3_"><path className={"st2"} d={"M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z"} id={"_x32__2_"}/></g></g></svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="st0 st1 st2 self-center font-bolder"
        viewBox="0 0 128 128"
      >
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 121.6C32.2 121.6 6.4 95.8 6.4 64S32.2 6.4 64 6.4s57.6 25.8 57.6 57.6-25.8 57.6-57.6 57.6zM49.2 38.4 73.6 64 49.2 89.6h13.5L86.4 64 62.7 38.4H49.2z" />
      </svg>

      </h2>
      <div className="relative" >
        <Carousel className="select-none hover:cursor-pointer" setApi={setApi} opts={{
          loop: true,
        }}
        >
          <CarouselContent>
            {categorias.map((categoria, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3" onClick={() => router.push(`/categoria?id=${index}`)}>
                <Card className="w-full bg-white">
                  <CardContent className="categorie-card-content flex flex-col items-center p-4">
                    <div className="w-full aspect-[3/2] mb-4 overflow-hidden rounded-lg">
                      <img
                        src={'seleccion.jpg'}
                        alt={`Categoría ${categoria.nombre}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-center text-emerald-600">{categoria.nombre}</h3>
                    <p className="text-sm text-gray-600 mb-1 text-center">Entrenador: {categoria.entrenador}</p>
                    <p className="text-sm text-gray-600 mb-1 text-center">Delegado: {categoria.delegado}</p>
                    <p className="text-sm font-medium text-center text-emerald-500">Edad: {categoria.edadRango}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-emerald-500 text-white hover:bg-emerald-600">
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-500 text-white hover:bg-emerald-600">
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </Carousel>
      </div>
      <ProgressDots totalSlides={categorias.length} currentSlide={current} />
    </div>
  )
}

