'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { X, ShoppingCart, Globe, Facebook, Twitter, Instagram, Dribbble } from "lucide-react"
import { ArrowRight } from 'lucide-react'

import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from "react"

import NewsService from '../services/NewsService.js'
import { useRouter } from "next/navigation.js"


export default function CarouselSponsors({ listOfSponsors }) {
    const [sponsors, setSponsor] = useState(null)
    const router = useRouter()

    useEffect(() => {
        NewsService.getSponsors()
            .then(sponsors => setSponsor(sponsors))
    }, [])
    return (
        <>
        <h2 onClick={() => router.push('/patrocinadores')} className=" hover:animate-pulse text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-center p-4 rounded-xl self-center flex gap-2 hover:cursor-pointer underline underline-offset-8">
        Nuestros Patrocinadores y Colaboradores{<ArrowRight className='self-center' />}
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto hover:cursor-pointer" plugins={[
            Autoplay({
                delay: 3000,
            }),
        ]}>
            <CarouselContent >
                {sponsors?.map((sponsor, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 w-full">
                            <Card>
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <img
                                        alt={`Logo ${sponsor.name}`}
                                        className="w-full h-48 object-contain mb-4"
                                        height="192"
                                        src={sponsor.image}
                                        style={{
                                            aspectRatio: "400/192",
                                            objectFit: "contain",
                                        }}
                                        width="400"
                                        />
                                    <h3 className="font-bold text-center text-xl mb-2">{sponsor.name}</h3>
                                    <p className="text-sm text-center text-muted-foreground mb-4">
                                        {sponsor.description}
                                    </p>
                                    <div className="flex space-x-4">
                                        {sponsor?.social?.website &&
                                            <Link href={sponsor.social.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-focus">
                                                <Globe className="h-6 w-6" />
                                                <span className="sr-only">Sitio web de {sponsor.name}</span>
                                            </Link>

}
                                        {
                                            sponsor?.social?.facebook &&
                                            <Link href={sponsor.social.facebook} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-focus">
                                                <Facebook className="h-6 w-6" />
                                                <span className="sr-only">Facebook de {sponsor.name}</span>
                                            </Link>
                                        }
                                        {
                                            sponsor?.social?.x &&
                                            <Link href={sponsor.social.x} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-focus">
                                                <Twitter className="h-6 w-6" />
                                                <span className="sr-only">Twitter de {sponsor.name}</span>
                                            </Link>
                                        }
                                        {
                                            sponsor?.social?.instagram &&
                                            
                                            <Link href={sponsor.social.instagram} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-focus">
                                                <Instagram className="h-6 w-6" />
                                                <span className="sr-only">Instagram de {sponsor.name}</span>
                                            </Link>
                                        }
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
                </>
        )
}