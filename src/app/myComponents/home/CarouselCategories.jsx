
"use client"

import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselHeader,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, } from "lucide-react"
import { useRouter } from "next/navigation"
import CategoriesService from '../../../services/CategoriesService'
import { Skeleton } from "@/components/ui/skeleton"

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
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentSlide - 1 ? 'bg-red-700' : 'bg-gray-300'
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
  const [data, setData] = useState([])
  const [isLoading, serIsLoading] = useState(true)
  const router = useRouter()

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

  useEffect(() => {
    CategoriesService.getCategories()
      .then(res => {
        setData(res)
        serIsLoading(!isLoading)
      })
  }, [])
  

  if (!isLoading) {
    return (
      <div className="w-full max-w-[100vw] overflow-hidden box-border">
        <div className="relative" >
          <Carousel className="select-none hover:cursor-pointer" setApi={setApi} opts={{
            loop: true,
          }}
          >
            <CarouselContent>
              {data.map(({id, name, trainer, delegate, image}) => (
                <CarouselItem key={id} className="pl-4 md:basis-1/2 lg:basis-1/3" onClick={() => router.push(`/categoria?id=${id}`)}>
                  <Card className="w-full bg-white">
                    <CardContent className="categorie-card-content flex flex-col items-center p-4">
                      <div className="w-full aspect-[3/2] mb-4 overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`Categoría ${name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-center text-emerald-600">{name}</h3>
                      <p className="text-sm text-gray-600 mb-1 text-center grid grid-row-2 mb-3"><strong>Entrenador:</strong> {trainer?.name}</p>
                      <p className="text-sm text-gray-600 mb-1 text-center grid grid-row-2 mb-3"><strong>Delegado:</strong> {delegate?.name}</p>
                      <p className="text-sm font-medium text-center text-emerald-500">Edad: {'??'}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-red-700 text-white hover:bg-red-500">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className={`absolute right-2 top-1/2 -translate-y-1/2 bg-red-700 text-white hover:bg-red-500`}>
              <ChevronRight className="h-6 w-6"/>
            </CarouselNext>
          </Carousel>
        </div>
        <ProgressDots totalSlides={data.length} currentSlide={current} />
      </div>
    )
  }

  return <div className="w-full h-96 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 overflow-hidden grid-rows-1">
    <Skeleton className="h-full min-w-[200px]" />
    <Skeleton className="h-full min-w-[200px]" />
    <Skeleton className="h-full min-w-[200px]" />
  </div>
}

