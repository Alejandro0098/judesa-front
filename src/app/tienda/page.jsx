// @ts-nocheck
'use client'

import { Card, CardContent } from "@/components/ui/card"
import LoadingComponent from '../myComponents/LoadingComponent.jsx'
import ContactPopover from '../myComponents/ContactPopover.jsx'
import { X, ShoppingCart, Globe, Facebook, Twitter, Instagram, Dribbble } from "lucide-react"
import Skeleton from 'react-loading-skeleton'
import NavComponent from "../myComponents/NavComponent"
import { Suspense } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, Phone, Mail } from 'lucide-react'
import { Button } from "@headlessui/react"
import PageTitle from '../myComponents/PageTitle'
import { ShoppingBagIcon } from 'lucide-react'



const products = [
  { name: "Camiseta Oficial", description: "Camiseta oficial del equipo", price: 39.99, image: 'https://img.freepik.com/vector-gratis/concepto-uniforme-futbol_52683-43145.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724544000&semt=ais_hybrid' },
  { name: "Balón de Fútbol Sala", description: "Balón oficial de competición", price: 24.99, image: 'https://w7.pngwing.com/pngs/33/272/png-transparent-football-ball-game-soccer-ball-soccer-ball-artwork-miscellaneous-sport-sports-equipment-thumbnail.png' },
  { name: "Sudadera", description: "Sudadera con el logo del club", price: 49.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_EQsBQLi9KRWIve9S8Z-uqnemoyVibiY9w&s' },
  { name: "Pantalones cortos", description: "Pantalones cortos de entrenamiento", price: 19.99, image: 'https://e7.pngegg.com/pngimages/460/753/png-clipart-shorts-pants-design-white-public-relations.png' },
  { name: "Camiseta Oficial", description: "Camiseta oficial del equipo", price: 39.99, image: 'https://img.freepik.com/vector-gratis/concepto-uniforme-futbol_52683-43145.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724544000&semt=ais_hybrid' },
  { name: "Balón de Fútbol Sala", description: "Balón oficial de competición", price: 24.99, image: 'https://w7.pngwing.com/pngs/33/272/png-transparent-football-ball-game-soccer-ball-soccer-ball-artwork-miscellaneous-sport-sports-equipment-thumbnail.png' },
  { name: "Sudadera", description: "Sudadera con el logo del club", price: 49.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_EQsBQLi9KRWIve9S8Z-uqnemoyVibiY9w&s' },
  { name: "Pantalones cortos", description: "Pantalones cortos de entrenamiento", price: 19.99, image: 'https://e7.pngegg.com/pngimages/460/753/png-clipart-shorts-pants-design-white-public-relations.png' },
  { name: "Camiseta Oficial", description: "Camiseta oficial del equipo", price: 39.99, image: 'https://img.freepik.com/vector-gratis/concepto-uniforme-futbol_52683-43145.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724544000&semt=ais_hybrid' },
  { name: "Balón de Fútbol Sala", description: "Balón oficial de competición", price: 24.99, image: 'https://w7.pngwing.com/pngs/33/272/png-transparent-football-ball-game-soccer-ball-soccer-ball-artwork-miscellaneous-sport-sports-equipment-thumbnail.png' },
  { name: "Sudadera", description: "Sudadera con el logo del club", price: 49.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_EQsBQLi9KRWIve9S8Z-uqnemoyVibiY9w&s' },
  { name: "Pantalones cortos", description: "Pantalones cortos de entrenamiento", price: 19.99, image: 'https://e7.pngegg.com/pngimages/460/753/png-clipart-shorts-pants-design-white-public-relations.png' },
  { name: "Camiseta Oficial", description: "Camiseta oficial del equipo", price: 39.99, image: 'https://img.freepik.com/vector-gratis/concepto-uniforme-futbol_52683-43145.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724544000&semt=ais_hybrid' },
  { name: "Balón de Fútbol Sala", description: "Balón oficial de competición", price: 24.99, image: 'https://w7.pngwing.com/pngs/33/272/png-transparent-football-ball-game-soccer-ball-soccer-ball-artwork-miscellaneous-sport-sports-equipment-thumbnail.png' },
  { name: "Sudadera", description: "Sudadera con el logo del club", price: 49.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_EQsBQLi9KRWIve9S8Z-uqnemoyVibiY9w&s' },
  { name: "Pantalones cortos", description: "Pantalones cortos de entrenamiento", price: 19.99, image: 'https://e7.pngegg.com/pngimages/460/753/png-clipart-shorts-pants-design-white-public-relations.png' },
  { name: "Camiseta Oficial", description: "Camiseta oficial del equipo", price: 39.99, image: 'https://img.freepik.com/vector-gratis/concepto-uniforme-futbol_52683-43145.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724544000&semt=ais_hybrid' },
  { name: "Balón de Fútbol Sala", description: "Balón oficial de competición", price: 24.99, image: 'https://w7.pngwing.com/pngs/33/272/png-transparent-football-ball-game-soccer-ball-soccer-ball-artwork-miscellaneous-sport-sports-equipment-thumbnail.png' },
  { name: "Sudadera", description: "Sudadera con el logo del club", price: 49.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_EQsBQLi9KRWIve9S8Z-uqnemoyVibiY9w&s' },
  { name: "Pantalones cortos", description: "Pantalones cortos de entrenamiento", price: 19.99, image: 'https://e7.pngegg.com/pngimages/460/753/png-clipart-shorts-pants-design-white-public-relations.png' },
]

export default function Page() {
  return <Suspense fallback={<LoadingComponent />}>
    <Tienda />
  </Suspense>
}

const ColorCircle = ({ color }) => (
  <div
    className="w-6 h-6 rounded-full border border-gray-300"
    style={{ backgroundColor: color }}
    title={color}
  />
)

function Tienda() {

  const contactButton = <Button className='bg-stone-800 text-white rounded font-bold text-xs py-2 px-4 self-center'>Comprar</Button>

  return (
    <main className="">
      <section id="tienda" className="flex flex-col bg-gray-800">
        <PageTitle titulo="Tienda" icono={<ShoppingBagIcon className="h-full" />} />
        <div className="p-2 rounded-xl mb-12 mx-4 md:mx-16 flex flex-col mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 p-4">
            {products.map((product, index) => (
              <Card key={index} className="bg-maroon-50 shadow-xl bg-white">
                <CardContent className="p-4 rounded-xl flex flex-col gap-2" style={{ 'boxShadow': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
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
                  <h3 className="font-bold text-maroon-900">{product.name}</h3>
                  <p className="text-sm text-maroon-700">{product.description}</p>
                  <div className="flex space-x-2">
                    {/* {producto.colores.map((color, index) => ( */}
                    <ColorCircle color={'red'} />
                    <ColorCircle color={'gray'} />
                    <ColorCircle color={'black'} />
                    {/* ))} */}
                  </div>
                  <p className="font-bold text-maroon-900 my-1 italic underline text-2xl self-center my-2">{product.price.toFixed(2)} €</p>

                  <ContactPopover
                    title={'Contacta con nosotros para comprar el artículo'}
                    subtitle={''}
                    button={contactButton}
                  />

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}