'use client'

import { Menu, Dribbble } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { useState } from "react"
import Link from "next/link"

export function NavComponent() {
  const [isOpen, setIsOpen] = useState(false)
  
  console.log(isOpen)
  const toggleMenu = () => setIsOpen(!isOpen)
  console.log(isOpen)
  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Hazte socio', path: '/haztesocio' }, // Van a sacar un carnet (tarjeta) que cuesta dinero, poner solo información de lo que es
    { name: 'Noticias', path: '/noticias' },
    { name: 'Categorías', path: '/categorias' },
    { name: 'Patrocinadores', path: '/patrocinadores' },
    { name: 'Tienda', path: '/tienda' },
    { name: 'Campus y torneos', path: '/patrocinadores' },
    { name: 'Sobre nosotros', path: '/about' },
    { name: 'Contacto', path: '/contacto' },
  ]
  return (
    <header className=" top-0 z-50 w-full border-b text-white p-3 flex flex-col flex justify-between items-center px-10" style={{ backgroundColor: 'brown' }}>
      <div className="container flex h-14 items-center justify-between items-center" >
        <Link href="/" className="flex items-center space-x-2 mr-4">
          <Dribbble className="h-8 w-8" />
          <span className="sr-only">Club Fútbol Sala</span>
        </Link>
        <div className="ml-auto flex items-center" style={{ backgroundColor: 'brown' }}>
          <Sheet style={{ backgroundColor: 'white' }}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" style={{ backgroundColor: 'white' }}>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
              <nav className="flex flex-col space-y-8 pt-10 overflow-auto">
                {menuItems.map((item) => (
                  <Link key={item.name} href={item.path} className="lg:text-xl rounded w-fit font-medium nav-item" onClick={toggleMenu}>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>)
}