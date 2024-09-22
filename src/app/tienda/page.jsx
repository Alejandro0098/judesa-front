'use client'

import { Card, CardContent } from "@/components/ui/card"

import { X, ShoppingCart, Globe, Facebook, Twitter, Instagram, Dribbble } from "lucide-react"
import Skeleton from 'react-loading-skeleton'
import { NavComponent } from "../myComponents/NavComponent"

const products = [
  { name: "Camiseta Oficial", description: "Camiseta oficial del equipo", price: 39.99, image: 'https://img.freepik.com/vector-gratis/concepto-uniforme-futbol_52683-43145.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724544000&semt=ais_hybrid' },
  { name: "Balón de Fútbol Sala", description: "Balón oficial de competición", price: 24.99, image: 'https://w7.pngwing.com/pngs/33/272/png-transparent-football-ball-game-soccer-ball-soccer-ball-artwork-miscellaneous-sport-sports-equipment-thumbnail.png' },
  { name: "Sudadera", description: "Sudadera con el logo del club", price: 49.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_EQsBQLi9KRWIve9S8Z-uqnemoyVibiY9w&s' },
  { name: "Pantalones cortos", description: "Pantalones cortos de entrenamiento", price: 19.99, image: 'https://e7.pngegg.com/pngimages/460/753/png-clipart-shorts-pants-design-white-public-relations.png' },
]

export default function Tienda() {
  return (
    <>
      <NavComponent />
      <section id="tienda" className="py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8 text-maroon-900">Tienda del Club</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Card key={index} className="bg-maroon-50" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;' }}>
                <CardContent className="p-4" >
                  <img
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    height="200"
                    src={product.image}
                    style={{
                      objectFit: "contain",
                    }}
                    width="300"
                  />
                  <h3 className="font-bold mb-2 text-maroon-900">{product.name}</h3>
                  <p className="text-sm text-maroon-700 mb-2">{product.description}</p>
                  <p className="font-bold text-maroon-900">{product.price.toFixed(2)} €</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}