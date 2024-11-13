// @ts-nocheck
'use client'
import { Skeleton } from "@nextui-org/skeleton";

import PreviewNewCard from './myComponents/home/PreviewNewCard.jsx'
import LoadingComponent from './myComponents/LoadingComponent.jsx'
import CarouselSponsors from './myComponents/home/CarouselSponsors.jsx'
import NextMatches from './myComponents/home/NextMatches.jsx'
import LatestNews from './myComponents/home/LatestNews.jsx'
import NavComponent from './myComponents/NavComponent.jsx'
import CarouselCategories from './myComponents/home/CarouselCategories.jsx'
import MediaComponent from './myComponents/home/MediaComponent.jsx'
import Gallery from './myComponents/home/Gallery.jsx'
import { Dribbble, ChevronLeft, ChevronRight, CircleDot, Webhook } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'
import CarouselLogos from './myComponents/home/CarouselLogos.jsx'
import Separator from './myComponents/Separator.jsx'
import { useState, useEffect, Suspense, useRef } from "react"
import { useRouter } from 'next/navigation';
import NewsService from '../../services/NewsService.js'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return <Suspense fallback={<LoadingComponent />}>
    <Home />
  </Suspense>
}

function Home() {

  const router = useRouter();

  return (
    <>
      {/* <div className="flex flex-col min-h-screen"> */}
      <main className="bg-gray-800">
        <section id="inicio" className="py-12 md:py-24 lg:py-32 bg-cover bg-center h-max-content" style={{ backgroundImage: 'url(/seleccion.jpg)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', }} >
          <div className="px-4 md:px-6 bg-black bg-opacity-50 p-8 rounded-lg h-80">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white" >Bienvenidos al Club de Fútbol Sala de Judesa</h1>
            <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Somos un club apasionado por el fútbol sala. Nuestra misión es fomentar el deporte, el compañerismo y el
              desarrollo personal a través de la práctica del fútbol sala.
            </p>
          </div>
        </section>
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
              <Suspense>
                <CarouselCategories />
              </Suspense>
            </div>
          </div>
        </section>
        <Suspense>
          <section className='flex flex-col p-2 bg-gray-800'>
            <Card className="w-full xl:w-11/12 bg-gray-800 text-white border-dashed border-2  self-center">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-bold text-center">Próximos partidos de nuestros equipos</CardTitle>
              </CardHeader>
              <CardContent >
                <NextMatches />
              </CardContent>
            </Card>
          </section>
        </Suspense>
        {/* <div className='flex justify-center align-cente bg-gray-800 border-none'>
          <div className="w-11/12 md:w-2/3 py-8 flex items-center justify-center justify-self-center gap-5 ">
            <div className="flex-1 h-1 bg-red-700"></div>
            <Webhook className='animate-spin' color='rgb(185 28 28)' />
            <div className="flex-1 h-1 bg-red-700"></div>
          </div>
        </div> */}
        <Separator animated={true} />
        <Suspense>
          <section id="noticias" className="bg-neutral-200 st " style={{ backgroundAttachment: 'fixed', backgroundImage: 'url(https://editorial.uefa.com/resources/0271-143b4b1687c2-a9552d6fda12-1000/amsterdam_previews_uefa_futsal_euro_2022.jpeg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="px-4 md:px-24 md:px-6  flex flex-col align-center w-full  bg-black bg-opacity-40 py-7">
              <h2 onClick={() => window.location = '/noticias'} className="bg-white self-center hover:animate-pulse w-max text-3xl font-bold tracking-tighter text-4xl text-center p-4 rounded-xl flex gap-2 hover:cursor-pointemy-5 self-center hover:cursor-pointer my-5">
                <span className='underline underline-offset-8 text-4xl text-black mr-2'>Últimas noticias</span><ArrowRight className='self-center bg-white rounded-full' />
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-8">
                <LatestNews />
              </div>
        <section id="patrocinadores" className="pb-12" >
          <div className="pt-7 px-4 md:px-6 w-full accordion-wrapper flex flex-col text-white border-0 mt-4" style={{ backgroundImage: ``, backgroundRepeat: 'repeat' }}>
              <CarouselSponsors
                listOfSponsors={[]}
              />
            <section className='flex flex-col align-center'>
              <CarouselLogos />
            </section>
          </div>
        </section>
            </div>
          </section>
        </Suspense>

        <div className="lg:grid grid-cols-2 gap-8 px-4 py-12">
          <section>
            <Gallery />
          </section>
          <section className="bg-white shadow-xl ">
            <div className="w-full accordion-wrapper flex flex-col justify-center align-center bg-blue-200">
              <MediaComponent />
            </div>
          </section>
        </div>
      </main>
      {/* </div> */}
    </>
  )
}
