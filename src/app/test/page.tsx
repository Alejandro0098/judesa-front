'use client'

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

function GallerySection() {
  const [selectedId, setSelectedId] = useState(null)

  const images = [
    { id: 1, src: '/placeholder.svg?height=300&width=400&text=Partido 1', alt: 'Partido 1' },
    { id: 2, src: '/placeholder.svg?height=300&width=400&text=Partido 2', alt: 'Partido 2' },
    { id: 3, src: '/placeholder.svg?height=300&width=400&text=Partido 3', alt: 'Partido 3' },
    { id: 4, src: '/placeholder.svg?height=300&width=400&text=Partido 4', alt: 'Partido 4' },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Galería de Momentos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <motion.div
              key={image.id}
              layoutId={`image-${image.id}`}
              onClick={() => setSelectedId(image.id)}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={'/god.jpg'}
                alt={image.alt}
                width={400}
                height={300}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
      {selectedId && (
        <motion.div
          layoutId={`image-${selectedId}`}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedId(null)}
        >
          <motion.div className="bg-white p-4 rounded-lg">
            <img
              src={'/god.jpg'}
              alt={images.find((img) => img.id === selectedId).alt}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}


function MatchCalendarSection() {
  const matches = [
    { id: 1, date: '2023-10-15', team1: 'Equipo A', team2: 'Equipo B', time: '18:00' },
    { id: 2, date: '2023-10-22', team1: 'Equipo C', team2: 'Equipo D', time: '19:30' },
    { id: 3, date: '2023-10-29', team1: 'Equipo A', team2: 'Equipo C', time: '20:00' },
    { id: 5, date: '2023-11-05', team1: 'Equipo B', team2: 'Equipo D', time: '18:30' },
    { id: 6, date: '2023-11-05', team1: 'Equipo B', team2: 'Equipo D', time: '18:30' },
    { id: 7, date: '2023-11-05', team1: 'Equipo B', team2: 'Equipo D', time: '18:30' },
    { id: 8, date: '2023-11-05', team1: 'Equipo B', team2: 'Equipo D', time: '18:30' },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-green-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Próximos Partidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {matches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-lg font-semibold text-gray-800 mb-2">{match.date}</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{match.team1} vs {match.team2}</div>
              <div className="text-md text-gray-600">Hora: {match.time}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


function TestimonialsSection() {
  const testimonials = [
    { id: 1, name: 'Juan Pérez', text: 'El fútbol sala me ha enseñado el valor del trabajo en equipo.' },
    { id: 2, name: 'María García', text: 'La velocidad y la técnica de este deporte son incomparables.' },
    { id: 3, name: 'Carlos Rodríguez', text: 'He hecho grandes amigos gracias al fútbol sala.' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Lo que dicen nuestros jugadores</h2>
        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <p className="text-xl mb-4">{testimonials[currentIndex].text}</p>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            aria-label="Testimonio anterior"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            aria-label="Siguiente testimonio"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}


function TeamStatsSection() {
  const stats = [
    { label: 'Goles marcados', value: 75 },
    { label: 'Partidos ganados', value: 18 },
    { label: 'Pases completados', value: 85 },
    { label: 'Posesión promedio', value: 60 },
  ]

  return (
    <section className="py-16 
     text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Estadísticas del Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-600">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center    "
                  ></motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                  className="text-3xl font-bold"
                >
                  {stat.value}%
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



function NewsSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedNews, setSelectedNews] = useState(null)

  const news = [
    { id: 1, title: 'Nueva temporada de la liga local', excerpt: 'La liga local de fútbol sala comienza este fin de semana con emocionantes partidos.' },
    { id: 2, title: 'Entrevista exclusiva con el capitán', excerpt: 'Hablamos con el capitán del equipo sobre sus expectativas para la temporada.' },
    { id: 3, title: 'Mejoras en las instalaciones', excerpt: 'El ayuntamiento anuncia mejoras en las instalaciones de fútbol sala de la ciudad.' },
  ]

  const openDrawer = (newsItem) => {
    setSelectedNews(newsItem)
    setIsOpen(true)
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Últimas Noticias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <Button onClick={() => openDrawer(item)}>Leer más</Button>
            </motion.div>
          ))}
        </div>
      </div>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>{selectedNews?.title}</DrawerTitle>
              <DrawerDescription>{selectedNews?.excerpt}</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <DrawerFooter>
              <Button onClick={() => setIsOpen(false)}>Cerrar</Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  )
}

const sponsors = [
  {
    id: 1,
    name: 'TechSport',
    logo: '/placeholder.svg?height=100&width=100&text=TechSport',
    shortDescription: 'Innovación en equipamiento deportivo',
    fullDescription: 'TechSport es líder en la innovación de equipamiento deportivo para fútbol sala. Nuestras zapatillas de última generación proporcionan un agarre excepcional y una comodidad sin igual. Con más de 20 años de experiencia en el mercado, nos enorgullecemos de apoyar a equipos de todos los niveles, desde aficionados hasta profesionales. Nuestra misión es mejorar el rendimiento de los jugadores a través de la tecnología y el diseño innovador.',
  },
  {
    id: 2,
    name: 'EnergyDrink',
    logo: '/placeholder.svg?height=100&width=100&text=EnergyDrink',
    shortDescription: 'Bebida oficial del torneo',
    fullDescription: 'EnergyDrink es la bebida energética oficial de nuestro torneo de fútbol sala. Formulada específicamente para deportistas, proporciona la hidratación y energía necesarias para mantener el rendimiento durante todo el partido. Con una mezcla única de vitaminas, minerales y electrolitos, EnergyDrink ayuda a prevenir la fatiga y mejora la recuperación. Además, nuestro compromiso con el deporte va más allá del patrocinio, ya que invertimos en programas de desarrollo juvenil en comunidades locales.',
  },
  {
    id: 3,
    name: 'LocalBank',
    logo: '/placeholder.svg?height=100&width=100&text=LocalBank',
    shortDescription: 'Apoyo financiero al deporte local',
    fullDescription: 'LocalBank es más que un banco; somos un socio comprometido con el desarrollo del deporte en nuestra comunidad. A través de nuestro programa de patrocinio, no solo apoyamos económicamente a los equipos de fútbol sala, sino que también ofrecemos asesoramiento financiero personalizado para clubes y jugadores. Nuestro objetivo es fomentar una gestión financiera saludable en el deporte, asegurando la sostenibilidad a largo plazo de los clubes locales. Además, ofrecemos productos financieros especiales diseñados específicamente para satisfacer las necesidades de los deportistas y las organizaciones deportivas.',
  },
]

function SponsorsComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSponsor, setSelectedSponsor] = useState(null)

  const openDrawer = (sponsor) => {
    setSelectedSponsor(sponsor)
    setIsOpen(true)
  }

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Patrocinadores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img src={sponsor.logo} alt={`Logo de ${sponsor.name}`} className="w-24 h-24 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{sponsor.name}</h3>
              <p className="text-muted-foreground text-center mb-4">{sponsor.shortDescription}</p>
              <Button onClick={() => openDrawer(sponsor)} variant="outline">
                Más información
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="bg-teal-950">
          <div className="mx-auto w-full max-w-2xl bg-white text-black">
            <DrawerHeader>
              <DrawerTitle className="text-2xl font-bold">{selectedSponsor?.name}</DrawerTitle>
              <DrawerDescription>{selectedSponsor?.shortDescription}</DrawerDescription>
            </DrawerHeader>
            <ScrollArea className="h-[60vh] px-4">
              <div className="space-y-4 pb-4">
                <img
                  src={'god.png'}
                  alt={`Logo de ${selectedSponsor?.name}`}
                  className="w-32 h-32 mx-auto mb-4"
                />
                <p className="text-muted-foreground">
                  {selectedSponsor?.fullDescription}
                </p>
              </div>
            </ScrollArea>
            <DrawerFooter>
              <Button onClick={() => setIsOpen(false)}>Cerrar</Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  )
}


function SponsorLogos() {
  const [logoWidth, setLogoWidth] = useState(200)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const containerWidth = entry.contentRect.width
        const newLogoWidth = Math.max(containerWidth / 3, 150)
        setLogoWidth(newLogoWidth)
      }
    })

    resizeObserver.observe(containerRef.current)

    return () => resizeObserver.disconnect()
  }, [])

  const totalWidth = logoWidth * sponsors.length

  return (
    <div className="w-full overflow-hidden bg-white py-10" ref={containerRef}>
      <div 
        className="flex animate-scroll"
        style={{
          width: `${totalWidth * 2}px`,
          animationDuration: `${sponsors.length * 5}s`
        }}
      >
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center bg-gray-50 rounded-lg shadow-md mx-4"
            style={{ 
              width: `${logoWidth - 32}px`,
              height: `${logoWidth / 2}px`
            }}
          >
            <Image
              src={`/belligod.png`}
              alt={sponsor.name}
              width={150}
              height={75}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const resultados = [
  {
    categoria: "Senior",
    equipoLocal: "Nuestro Equipo",
    equipoVisitante: "Rival FC",
    resultado: "3 - 2",
    fecha: "2023-05-15",
    lugar: "Pabellón Municipal",
    esLocal: true
  },
  {
    categoria: "Juvenil",
    equipoLocal: "Atlético Juvenil",
    equipoVisitante: "Nuestro Equipo",
    resultado: "1 - 4",
    fecha: "2023-05-14",
    lugar: "Polideportivo Central",
    esLocal: false
  },
  {
    categoria: "Cadete",
    equipoLocal: "Nuestro Equipo",
    equipoVisitante: "Deportivo Cadete",
    resultado: "2 - 2",
    fecha: "2023-05-13",
    lugar: "Pabellón Municipal",
    esLocal: true
  },
  {
    categoria: "Infantil",
    equipoLocal: "Infantil FC",
    equipoVisitante: "Nuestro Equipo",
    resultado: "0 - 3",
    fecha: "2023-05-12",
    lugar: "Campo Municipal",
    esLocal: false
  },
  {
    categoria: "Infantil",
    equipoLocal: "Infantil FC",
    equipoVisitante: "Nuestro Equipo",
    resultado: "0 - 3",
    fecha: "2023-05-12",
    lugar: "Campo Municipal",
    esLocal: false
  },
  {
    categoria: "Infantil",
    equipoLocal: "Infantil FC",
    equipoVisitante: "Nuestro Equipo",
    resultado: "0 - 3",
    fecha: "2023-05-12",
    lugar: "Campo Municipal",
    esLocal: false
  },
  {
    categoria: "Infantil",
    equipoLocal: "Infantil FC",
    equipoVisitante: "Nuestro Equipo",
    resultado: "0 - 3",
    fecha: "2023-05-12",
    lugar: "Campo Municipal",
    esLocal: false
  },
  {
    categoria: "Infantil",
    equipoLocal: "Infantil FC",
    equipoVisitante: "Nuestro Equipo",
    resultado: "0 - 3",
    fecha: "2023-05-12",
    lugar: "Campo Municipal",
    esLocal: false
  },
  {
    categoria: "Infantil",
    equipoLocal: "Infantil FC",
    equipoVisitante: "Nuestro Equipo",
    resultado: "0 - 3",
    fecha: "2023-05-12",
    lugar: "Campo Municipal",
    esLocal: false
  },
  {
    categoria: "Infantil",
    equipoLocal: "Infantil FC",
    equipoVisitante: "Nuestro Equipo",
    resultado: "0 - 3",
    fecha: "2023-05-12",
    lugar: "Campo Municipal",
    esLocal: false
  },
]

function ResultadosPasados() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Resultados de Partidos Pasados</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="flex space-x-4 pb-4">
            {resultados.map((resultado, index) => (
              <div key={index} className="w-72 flex-shrink-0 border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant={resultado.esLocal ? "default" : "secondary"}>
                    {resultado.esLocal ? "Local" : "Visitante"}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{resultado.categoria}</span>
                </div>
                <div className="flex flex-col items-center mb-2">
                  <span className="font-semibold">{resultado.esLocal ? resultado.equipoLocal : resultado.equipoVisitante}</span>
                  <span className="text-lg font-bold my-1">{resultado.resultado}</span>
                  <span className="font-semibold">{resultado.esLocal ? resultado.equipoVisitante : resultado.equipoLocal}</span>
                </div>
                <div className="text-sm text-muted-foreground text-center">
                  <div>{new Date(resultado.fecha).toLocaleDateString()}</div>
                  <div>{resultado.lugar}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ResultadosPasadosv2() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Resultados de Partidos Pasados</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {resultados.map((resultado, index) => (
              <div key={index} className="w-[250px] flex-shrink-0 rounded-lg border p-4">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant={resultado.esLocal ? "default" : "secondary"}>
                    {resultado.esLocal ? "Local" : "Visitante"}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{resultado.categoria}</span>
                </div>
                <div className="flex flex-col items-center mb-2">
                  <span className="font-semibold">{resultado.esLocal ? resultado.equipoLocal : resultado.equipoVisitante}</span>
                  <span className="text-lg font-bold my-1">{resultado.resultado}</span>
                  <span className="font-semibold">{resultado.esLocal ? resultado.equipoVisitante : resultado.equipoLocal}</span>
                </div>
                <div className="text-sm text-muted-foreground text-center">
                  <div>{new Date(resultado.fecha).toLocaleDateString()}</div>
                  <div>{resultado.lugar}</div>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

function SponsorLogosV2() {
  const [logos, setLogos] = useState([
    '/placeholder.svg?height=100&width=200',
    '/placeholder.svg?height=80&width=150',
    '/placeholder.svg?height=120&width=180',
    '/placeholder.svg?height=90&width=220',
    '/placeholder.svg?height=110&width=190',
    '/placeholder.svg?height=100&width=200',
  ])

  useEffect(() => {
    // Duplicar los logos para crear el efecto infinito
    setLogos(prevLogos => [...prevLogos, ...prevLogos])
  }, [])

  return (
    <div className="w-full overflow-hidden bg-background py-10">
      <div className="relative flex">
        <div className="animate-marquee flex whitespace-nowrap">
          {logos.map((logo, index) => (
            <div key={index} className="mx-8 flex h-32 w-64 items-center justify-center bg-white">
              <div className="relative h-full w-full">
                <Image 
                  src={index % 2 == 0 ? '/belligod.png' : '/carva.jpg'} 
                  alt={`Sponsor logo ${index + 1}`} 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="animate-marquee2 absolute top-0 flex whitespace-nowrap">
          {logos.map((logo, index) => (
            <div key={index} className="mx-8 flex h-32 w-64 items-center justify-center">
              <div className="relative h-full w-full">
                <Image 
                  src={index % 2 == 0 ? '/belligod.png' : '/carva.jpg'} 
                  alt={`Sponsor logo ${index + 1}`} 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Main() {
  return <main>
    <GallerySection />
    <MatchCalendarSection />
    <TestimonialsSection />
    <TeamStatsSection />
    <NewsSection />
    <SponsorsComponent />
    <SponsorLogos />
    <ResultadosPasados/>
    <ResultadosPasadosv2/>
    <SponsorLogosV2 />

  </main>

}

