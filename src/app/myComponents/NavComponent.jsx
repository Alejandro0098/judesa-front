'use client'

import { Menu, Dribbble } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NavComponent() {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => setIsOpen(!isOpen)

  const router = useRouter()

  useEffect(
    () => {
      isOpen ? toggleMenu() : ''
    },
    [router])

  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Hazte socio', path: '/socio' }, // Van a sacar un carnet (tarjeta) que cuesta dinero, poner solo información de lo que es
    { name: 'Noticias', path: '/noticias' },
    { name: 'Categorías', path: '/categorias' },
    { name: 'Patrocinadores', path: '/patrocinadores' },
    { name: 'Tienda', path: '/tienda' },
    { name: 'Campus', path: '/campus' },
    // { name: 'Sobre nosotros', path: '/about' },
    // { name: 'Contacto', path: '/contacto' },
  ]
  return (
    <header className=" top-0 z-50 w-full text-white p-3 flex flex-col flex justify-between items-center sm:px-10 md:px-30 xl:px-48" style={{ backgroundColor: 'brown' }}>
      <div className="container flex h-14 items-center justify-between items-center" >
        <Link href="/" className="flex items-center space-x-2 mr-4" prefetch={false}>
          <img src='/judesa_logo.jpeg' alt="" className=" w-16" />
          <span className="sr-only">Club Fútbol Sala</span>
        </Link>
        <div className="ml-auto flex items-center" style={{ backgroundColor: 'brown' }}>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-red-800 border-none text-white">
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
              <nav className="flex flex-col space-y-8 pt-10 overflow-auto">
                {menuItems.map((item) => (
                  <a key={item.name} href={item.path} className="rounded w-fit font-medium nav-item" onClick={toggleMenu}>
                    {item.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>)
}