'use client'

import { Card, CardContent } from "@/components/ui/card"

export default function PreviewCategoryCard({key, category, handleRedirect}) {
    return (
    <Card onClick={handleRedirect} key={key}>
        <CardContent className="p-4">
            <h3 className="font-bold mb-2">{category}</h3>
            <p className="text-sm text-muted-foreground">
                Información sobre la categoría {category.toLowerCase()}.
            </p>
        </CardContent>
    </Card>)
}