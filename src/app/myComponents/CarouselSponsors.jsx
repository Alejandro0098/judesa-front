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


export default function CarouselSponsors({ listOfSponsors }) {
    const [sponsors, setSponsor] = useState(null)

    useEffect(() => {
        NewsService.getSponsors()
            .then(sponsors => setSponsor(sponsors))
    }, [])
    return (
        <Carousel className="w-full max-w-4xl mx-auto" plugins={[
            Autoplay({
                delay: 3000,
            }),
        ]}>
            <CarouselContent>
                {sponsors?.map((sponsor, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
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
        </Carousel>)
}