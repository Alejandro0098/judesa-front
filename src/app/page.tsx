'use client'

import PreviewNewCard from './myComponents/PreviewNewCard.jsx'
import LoadingComponent from './myComponents/LoadingComponent.jsx'
import CarouselSponsors from './myComponents/CarouselSponsors.jsx'
import NavComponent from './myComponents/NavComponent.jsx'
import CarouselCategories from './myComponents/CarouselCategories.jsx'
import MediaComponent from './myComponents/MediaComponent.jsx'
import { Dribbble, ChevronLeft, ChevronRight, CircleDot, Webhook } from "lucide-react"

import { useState, useEffect, Suspense } from "react"
import { useRouter } from 'next/navigation';
import NewsService from './services/NewsService.js'
import { ArrowRight } from 'lucide-react'

export default function Home() {

  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    NewsService.getHomeData()
      .then(info => {
        setData(info)
        setIsLoading(!isLoading)
      })
      .catch(error => alert(error))
  }, [])

  const router = useRouter();

  if (isLoading) {
    return <>
      <NavComponent />
      <div className="flex justify-center align-center h-full">
        <LoadingComponent />
      </div>
    </>
  }

  return (
    <>
      <NavComponent />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1" >
          <section id="inicio" className="py-12 md:py-24 lg:py-32 bg-cover bg-center " style={{ backgroundImage: 'url(https://editorial.uefa.com/resources/0271-143b4b1687c2-a9552d6fda12-1000/amsterdam_previews_uefa_futsal_euro_2022.jpeg)' }} >
            <div className="container px-4 md:px-6 bg-black bg-opacity-50 p-8 rounded-lg">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white" >Bienvenidos al Club de Fútbol Sala de Judesa</h1>
              <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Somos un club apasionado por el fútbol sala. Nuestra misión es fomentar el deporte, el compañerismo y el
                desarrollo personal a través de la práctica del fútbol sala.
              </p>
            </div>
          </section>
          {
            data.categories &&
            <section id="categorias" className=" w-full">
              <div className=" flex justify-center align-center flex-col py-10" >
                <div className="w-11/12 md:w-2/3 py-8 flex items-center justify-center justify-self-center gap-3 self-center">
                  <ChevronLeft color='rgb(185 28 28)' />
                  <div className="flex-1 h-0.5 bg-red-700"></div>
                  <h2 onClick={() => router.push('/categorias')} className="hover:animate-pulse text-xl tracking-tighter mb-8 text-center p-4 self-center flex gap-2 hover:cursor-pointer my-5 bg-red-700 rounded-xl text-white md:text-3xl">
                    Nuestras categorías<ArrowRight className='self-center' />
                  </h2>
                  <div className="flex-1 h-0.5 bg-red-700"></div>
                  <ChevronRight color='rgb(185 28 28)' />
                </div>
                <div className="text-center xl:w-3/4 w-5/6 self-center">
                  {<CarouselCategories
                    categories={data.categories}
                  />}
                </div>
              </div>
            </section>
          }
          <div className='flex justify-center align-center'>
            <div className="w-11/12 md:w-2/3 py-8 flex items-center justify-center justify-self-center gap-5">
              <div className="flex-1 h-0.5 bg-red-700"></div>
              <Webhook className='animate-spin' color='rgb(185 28 28)' />
              <div className="flex-1 h-0.5 bg-red-700"></div>
            </div>
          </div>
          <section id="noticias" className="py-6 md:py-12 lg:py-16 bg-neutral-50 st">
            <div className="container px-4 md:px-24 md:px-6">
              <h2 onClick={() => router.push('/noticias')} className="hover:animate-pulse w-max text-3xl font-bold tracking-tighter sm:text-3xl mb-8 text-center p-4 rounded-xl flex gap-2 hover:cursor-pointemy-5 self-center hover:cursor-pointer">
                <span className='underline underline-offset-8'>Últimas noticias</span>
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-8">
                {data.news && data.news.map((n) => (
                  <PreviewNewCard
                    id={n.new.id}
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
          <section id="patrocinadores" className="shadow-xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
            <div className="py-14 px-4 md:px-6 w-full accordion-wrapper flex flex-col bg-muted">
              {data.sponsors &&
                <CarouselSponsors
                  listOfSponsors={data.sponsors}
                />
              }
            </div>
          </section>

          <section className="py-6 md:py-12 lg:py-16 bg-white shadow-xl  bg-red-100">
            <div className="px-4 md:px-6 w-full accordion-wrapper flex flex-col justify-center align-center">
              <MediaComponent />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
