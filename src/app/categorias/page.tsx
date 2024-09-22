'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { NavComponent } from '../myComponents/NavComponent'

const categories = [
  {
    id: 1,
    name: 'Benjamín',
    coach: 'Juan Pérez',
    delegate: 'María García',
    image: '/seleccion.jpg'
  },
  {
    id: 2,
    name: 'Alevín',
    coach: 'Pedro Sánchez',
    delegate: 'Ana Martínez',
    image: '/seleccion.jpg'
  },
  {
    id: 3,
    name: 'Infantil',
    coach: 'Luis Rodríguez',
    delegate: 'Carlos López',
    image: '/seleccion.jpg'
  },
  {
    id: 4,
    name: 'Cadete',
    coach: 'Elena Fernández',
    delegate: 'Sofía Ruiz',
    image: '/seleccion.jpg'
  }
]

export default function Home() {
  const router = useRouter();
  const handleRedirect = () => router.push('/team?id=')

  return (
    <>
      <NavComponent />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Categorías de Fútbol Sala</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div onClick={() => router.push(`/categoria?id=${category.id}`)} key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer">
                <Image src={category.image} alt={`Equipo ${category.name}`} width={300} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                  <p><strong>Entrenador:</strong> {category.coach}</p>
                  <p><strong>Delegado:</strong> {category.delegate}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}