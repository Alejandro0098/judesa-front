'use client'

import { Card, CardContent } from "@/components/ui/card"

export default function PreviewNewCard({key, title, subtitle, img, handleRedirect}) {
    return (
        <Card onClick={handleRedirect} className="card-item">
            <CardContent className="p-4 card-item">
                <img
                    alt={`Noticia ${key}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    height="200"
                    src={img}
                    style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                    }}
                    width="300"
                />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">
                    {subtitle}
                </p>
            </CardContent>
        </Card>
    )
}