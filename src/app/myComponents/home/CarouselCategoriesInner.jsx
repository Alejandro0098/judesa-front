import CategoriesService from "@/services/CategoriesService.js"
import {
    Carousel,
    CarouselHeader,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { useEffect, useState } from "react"

const [data, setData] = useState([])

useEffect(() => {
    CategoriesService.getCategories()
    .then(res => setData(res))

}, [])

export default async function CarouselCategoriesInner() {
    return (<CarouselContent>
        {data?.map(({ id, name, trainer, delegate, image }) => (
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
    </CarouselContent>)
}