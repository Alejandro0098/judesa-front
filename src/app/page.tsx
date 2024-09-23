'use client'

import PreviewNewCard from './myComponents/PreviewNewCard.jsx'
import PreviewCategoryCard from './myComponents/PreviewCategoryCard.jsx'
import CarouselSponsors from './myComponents/CarouselSponsors.jsx'
import { NavComponent } from './myComponents/NavComponent.jsx'
import  CarouselCategories from './myComponents/CarouselCategories.jsx'

import { useState, useEffect, Suspense } from "react"
import { useRouter } from 'next/navigation';
import NewsService from './services/NewsService.js'
import { motion } from 'framer-motion'

export default function Home() {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    NewsService.getHomeData()
      .then(info => {
        setData(info)
        setIsLoading(false)
      })
      .catch(error => alert(error))

  }, [])

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

  if (isLoading) {
    return <>
      <NavComponent />
      <main>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-32 h-32 border-t-4 border-b-4 border-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.h2
              className="mt-8 text-4xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Cargando...
            </motion.h2>
            <motion.div
              className="mt-4 w-64 h-2 bg-white/20 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="h-full bg-white"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
      </main>
    </>
  }

  return (
    <>
      <NavComponent />
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
          <section id="categorias" className="py-6 md:py-12 lg:py-16 w-full">
            <div className=" flex justify-center align-center flex-col" >
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">Nuestras Categorías</h2>
              <div className="text-center xl:w-3/4 w-5/6 self-center">
                {<CarouselCategories
                  categories={[]}
                />}
              </div>
            </div>
          </section>
          <section id="noticias" className="py-6 md:py-12 lg:py-16 bg-white st">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">Últimas Noticias</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data?.news?.map((n) => (
                  <PreviewNewCard
                    key={n.new.id}
                    title={n.new.title}
                    subtitle={n.new.subtitle}
                    img={n.new.image}
                    creation_date={n.new.creation_date}
                    handleRedirect={() => router.push(`/noticia?id=${n.new.id}`)}
                  />
                ))}
              </div>
            </div>
          </section>
          <section id="patrocinadores" className="py-6 md:py-12 lg:py-16 bg-muted">
            <div className="px-4 md:px-6 w-full accordion-wrapper">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">Nuestros Patrocinadores</h2>
              <Suspense fallback={<Loading />}>
                <CarouselSponsors
                  listOfSponsors={[]}
                />
              </Suspense>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}