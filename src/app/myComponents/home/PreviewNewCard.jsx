'use client'

import { Card, CardContent } from "@/components/ui/card"

export default function PreviewNewCard({id, title, subtitle, img, creation_date, handleRedirect}) {
    return (
        <Card onClick={handleRedirect} className="card-item h-full hover:shadow-xl overflow-hidden transform transition duration-100" key={id}>
            <CardContent className="p-6 card-item">
                <img
                    alt={`Noticia ${id}`}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                    height="400"
                    src={img}
                    width="600"
                />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">
                    {subtitle}
                </p>
                <p className="mt-5 text-gray text-xs">
                    {creation_date}
                </p>
            </CardContent>
        </Card>
    )
}

