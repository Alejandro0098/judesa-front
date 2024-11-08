// @ts-nocheck
'use client'

import PreviewNewCard from './myComponents/PreviewNewCard.jsx'
import LoadingComponent from './myComponents/LoadingComponent.jsx'
import CarouselSponsors from './myComponents/CarouselSponsors.jsx'
import NavComponent from './myComponents/NavComponent.jsx'
import CarouselCategories from './myComponents/CarouselCategories.jsx'
import MediaComponent from './myComponents/MediaComponent.jsx'
import Gallery from './myComponents/Gallery.jsx'
import { Dribbble, ChevronLeft, ChevronRight, CircleDot, Webhook } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'
import CarouselLogos from './myComponents/CarouselLogos.jsx'

import { useState, useEffect, Suspense, useRef } from "react"
import { useRouter } from 'next/navigation';
import NewsService from './services/NewsService.js'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

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


export default function Page() {
  return <Suspense fallback={<LoadingComponent />}>
    <Home />
  </Suspense>
}

function ProximosPartidos() {
  return (
    <Card className="w-full xl:w-11/12 bg-gray-800 text-white border-dashed border-2  self-center">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl font-bold text-center">Próximos partidos de nuestros equipos</CardTitle>
      </CardHeader>
      <CardContent >
        <ScrollArea className="whitespace-nowrap rounded-md flex hover:cursor-pointer">
          <div className="flex self-center w-max space-x-4 py-4">
            {resultados.map((resultado, index) => (
              <div key={index} className="w-[270px] flex-shrink-0 rounded-lg p-4 bg-white text-black">
                <div className="flex justify-between items-center mb-2">
                  <Badge variant={resultado.esLocal ? "default" : "secondary"}>
                    {resultado.esLocal ? "Local" : "Visitante"}
                  </Badge>
                  <span className="text-sm bg-red-700 text-white py-1 px-2 rounded">{resultado.categoria}</span>
                </div>
                <div className="flex flex-col items-center mb-2">
                  <span className="font-semibold">{resultado.esLocal ? resultado.equipoLocal : resultado.equipoVisitante}</span>
                  <span className="text-lg font-bold my-1">vs</span>
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


function Home() {

  const [data, setData] = useState({})
  const url_sponsors = ''
  useEffect(() => {
    NewsService.getHomeData()
      .then(info => {
        setData(info)
      })
      .catch(error => alert(error))
  }, [])

  const router = useRouter();

  return (
    <>
      {/* <div className="flex flex-col min-h-screen"> */}
      <main className='p'>
        <section id="inicio" className="py-12 md:py-24 lg:py-32 bg-cover bg-center h-max-content" style={{ backgroundImage: 'url(/seleccion.jpg)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', }} >
          <div className="px-4 md:px-6 bg-black bg-opacity-50 p-8 rounded-lg h-80">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white" >Bienvenidos al Club de Fútbol Sala de Judesa</h1>
            <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Somos un club apasionado por el fútbol sala. Nuestra misión es fomentar el deporte, el compañerismo y el
              desarrollo personal a través de la práctica del fútbol sala.
            </p>
          </div>
        </section>
        {
          data?.categories &&
          <section id="categorias" className=" w-full bg-gray-800">
            <div className=" flex justify-center align-center flex-col pb-10 bg-gray-800" >
              <div className="w-11/12 md:w-2/3 py-8 flex items-center justify-center justify-self-center gap-3 self-center">
                <div className="flex-1 h-1 bg-red-700"></div>
                <h2 onClick={() => router.push('/categorias')} className="hover:animate-pulse text-xl tracking-tighter mb-8 text-center p-4 self-center flex gap-2 hover:cursor-pointer my-5 bg-red-700 rounded text-white md:text-3xl bg-green-500">
                  Nuestras categorías<ArrowRight className='self-center' />
                </h2>
                <div className="flex-1 h-1 bg-red-700"></div>
              </div>
              <div className="text-center xl:w-3/4 w-5/6 self-center">
                {<CarouselCategories
                  categories={data?.categories}
                />}
              </div>
            </div>
            <div className='flex flex-col p-2'>
              <ProximosPartidos />
            </div>

          </section>
        }
        <div className='flex justify-center align-cente bg-gray-800 border-none'>
          <div className="w-11/12 md:w-2/3 py-8 flex items-center justify-center justify-self-center gap-5 ">
            <div className="flex-1 h-1 bg-red-700"></div>
            <Webhook className='animate-spin' color='rgb(185 28 28)' />
            <div className="flex-1 h-1 bg-red-700"></div>
          </div>
        </div>
        <section id="noticias" className="bg-neutral-200 st " style={{ backgroundAttachment: 'fixed', backgroundImage: 'url(https://editorial.uefa.com/resources/0271-143b4b1687c2-a9552d6fda12-1000/amsterdam_previews_uefa_futsal_euro_2022.jpeg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className="px-4 md:px-24 md:px-6  flex flex-col align-center w-full  bg-black bg-opacity-30 py-7">
            <h2 onClick={() => router.push('/noticias')} className="bg-white self-center hover:animate-pulse w-max text-3xl font-bold tracking-tighter text-4xl text-center p-4 rounded-xl flex gap-2 hover:cursor-pointemy-5 self-center hover:cursor-pointer my-5">
              <span className='underline underline-offset-8 text-4xl text-black mr-2'>Últimas noticias</span><ArrowRight className='self-center bg-white rounded-full' />
            </h2>
            {/* <span className='self-center text-sm my-5 text-white p-3 bg-white bg-opacity-40 rounded'>Mantente informado de las novedades del club.</span> */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-8">
              {data.news && data.news.map((n, index) => (
                <motion.div
                  key={n.new.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg-6"
                >
                  <PreviewNewCard
                    id={n.new.id}
                    key={n.new.id}
                    title={n.new.title}
                    subtitle={n.new.subtitle}
                    img={n.new.image}
                    creation_date={n.new.creation_date}
                    handleRedirect={() => router.push(`/noticia?id=${n.new.id}`)}
                  />
                </motion.div>

              ))}
            </div>
          </div>
        </section>
        <section>
          <Gallery/>
        </section>
        <section id="patrocinadores" className="pb-12 shadow-xlanimate-gradient bg-gradient-to-r from-red-950 via-red-600 to-red-950 text-white" style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
          <div className="py-7 px-4 md:px-6 w-full accordion-wrapper flex flex-col text-white border-0" style={{ backgroundImage: `url(${url_sponsors})`, backgroundRepeat: 'repeat' }}>
            {/* <div className="py-7 px-4 md:px-6 w-full accordion-wrapper flex flex-col  bg-gray-700" style={{background: 'radial-gradient(circle at 18.7% 37.8%, rgb(245, 245, 245) 0%, rgb(225, 234, 238) 90%)'}}> */}
            {data.sponsors &&
              <CarouselSponsors
                listOfSponsors={data.sponsors}
              />
            }
            <section className='flex flex-col align-center'>
              <CarouselLogos />
            </section>
          </div>
        </section>

        {/* <section className="bg-white shadow-xl ">
          <div className="px-4 md:px-6 py-12 w-full accordion-wrapper flex flex-col justify-center align-center bg-blue-200">
          <MediaComponent />
          </div>
          </section> */}
      </main>
      {/* </div> */}
    </>
  )
}
