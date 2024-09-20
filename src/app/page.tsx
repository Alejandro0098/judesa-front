'use client'

import PreviewNewCard from './myComponents/PreviewNewCard.jsx'
import PreviewCategoryCard from './myComponents/PreviewCategoryCard.jsx'
import CarouselSponsors from './myComponents/CarouselSponsors.jsx'

import { useState, Suspense } from "react"
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const [date, setDate] = useState<Date | undefined>(new Date())

  const router = useRouter();

  const categories = [
    "Senior Masculino",
    "Senior Femenino",
    "Juvenil",
    "Cadete",
    "Infantil",
    "Alevín",
    "Benjamín",
  ]

  const handleRedirectToNew = () => { router.push('/new') }
  const handleRedirectToTeam = () => { router.push('/team') }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1" >
        <section id="inicio" className="py-12 md:py-24 lg:py-32 bg-cover bg-center" style={{ backgroundImage: 'url(https://editorial.uefa.com/resources/0271-143b4b1687c2-a9552d6fda12-1000/amsterdam_previews_uefa_futsal_euro_2022.jpeg)' }} >
          <div className="container px-4 md:px-6 bg-black bg-opacity-50 p-8 rounded-lg">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white" >Bienvenidos al Club de Fútbol Sala de Judesa</h1>
            <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Somos un club apasionado por el fútbol sala. Nuestra misión es fomentar el deporte, el compañerismo y el
              desarrollo personal a través de la práctica del fútbol sala.
            </p>
          </div>
        </section>
        <section id="noticias" className="py-6 md:py-12 lg:py-16 bg-white st">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">Últimas Noticias</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <PreviewNewCard
                  key={i}
                  title={'Título de la Noticia'}
                  subtitle={'Título de la Noticia'}
                  img={'/belligod.png'}
                  handleRedirect={handleRedirectToNew}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="patrocinadores" className="py-6 md:py-12 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">Nuestros Patrocinadores</h2> 
            <Suspense fallback={<Loading />}>
              <CarouselSponsors
                listOfSponsors={[]}
              />
            </Suspense>
          </div>
        </section>
        <section id="categorias" className="py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">Nuestras Categorías</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, index) => (
                <PreviewCategoryCard
                  key={index}
                  category={category}
                  handleRedirect={handleRedirectToTeam}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}