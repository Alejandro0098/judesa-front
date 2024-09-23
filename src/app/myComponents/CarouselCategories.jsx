
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
import { ChevronLeft, ChevronRight } from "lucide-react"

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

// const useDotButton = (emblaApi) => {
//   const [selectedIndex, setSelectedIndex] = useState(0)
//   const [scrollSnaps, setScrollSnaps] = useState([])

//   const onDotButtonClick = useCallback(
//     (index) => {
//       if (!emblaApi) return
//       emblaApi.scrollTo(index)
//     },
//     [emblaApi]
//   )

//   const onInit = useCallback((emblaApi) => {
//     setScrollSnaps(emblaApi.scrollSnapList())
//   }, [])

//   const onSelect = useCallback((emblaApi) => {
//     setSelectedIndex(emblaApi.selectedScrollSnap())
//   }, [])

//   useEffect(() => {
//     if (!emblaApi) return

//     onInit(emblaApi)
//     onSelect(emblaApi)
//     emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
//   }, [emblaApi, onInit, onSelect])

//   return {
//     selectedIndex,
//     scrollSnaps,
//     onDotButtonClick
//   }
// }

// export const DotButton = (props) => {
//   const { children, ...restProps } = props

//   return (
//     <button type="button" {...restProps}>
//       {children}
//     </button>
//   )
// }


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


  return (

    <div className="w-full max-w-[100vw] overflow-hidden box-border">
      <h2 className="text-2xl font-bold mb-6 text-center px-4 text-emerald-700">Categorías de Fútbol Sala</h2>
      <div className="relative" >
        <Carousel className="select-none" setApi={setApi} opts={{
          loop: true,
        }}
        >
          <CarouselContent className="" >
            {categorias.map((categoria, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="w-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex flex-col items-center p-4">
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

