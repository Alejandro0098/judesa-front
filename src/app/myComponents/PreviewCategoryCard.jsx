'use client'

import { Card, CardContent } from "@/components/ui/card"

export default function PreviewCategoryCard({key, category, handleRedirect}) {
    console.log(key, category)
    return (
    <Card onClick={handleRedirect} key={key} className="hover:cursor-pointer hover:shadow-xl overflow-hidden transform transition duration-100">
        <CardContent className="p-4">
            <h3 className="font-bold mb-2">{category}</h3>
            <p className="text-sm text-muted-foreground">
                Información sobre la categoría {category}.
            </p>
        </CardContent>
    </Card>)
}