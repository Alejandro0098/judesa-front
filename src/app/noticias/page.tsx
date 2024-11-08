// @ts-nocheck
'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter, useSearchParams } from 'next/navigation';
import { Newspaper, Users, Calendar } from 'lucide-react'
import NavComponent from '../myComponents/NavComponent.jsx'
import PageTitle from '../myComponents/PageTitle.jsx'



export default function NewsPagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const totalPages = Math.ceil(newsData.length / itemsPerPage)

  const [news, setNews] = useState([])


  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
    router.push('\\noticias#head', undefined, { shallow: true })
  }

  useEffect(() => { console.log('hello') }, [])

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
    router.push('\\noticias#head', undefined, { shallow: true })
  }

  const router = useRouter();

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentNews = newsData.slice(startIndex, endIndex)

  const h1Style = {
    padding: '1rem',
    marginBottom: '48px',
    fontSize: '2.6rem',
    textAlign: 'center',
    textDecoration: 'underline 3px black',
    // backgroundColor: 'brown',
    backgroundColor: 'white',
    textUnderlineOffset: '8px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    fontWeight: 'bolder',
    borderRadius: '8px',
    // color: 'white',
    color: 'black',
    background: 'rgba(255,0,0,0.6)rgba(0,255,0,0.6)rgba(0,0,255,0.6)',
  };

  return (
    <>
      <main className='bg-gray-800 flex flex-col'>
        <div className="flex flex-col">
            <PageTitle titulo="Noticias" icono={<Newspaper className="h-full"/>}/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-16 mt-4">
            {currentNews.map((news) => (
              <Card key={news.id} className="flex flex-col card-item" onClick={() => router.push(`\\noticia?id=${news.id}`)}>
                <CardHeader className="pt-5">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="flex-grow">
                  <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                  <p className="text-muted-foreground">{news.subtitle}</p>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">
                  {new Date(news.date).toLocaleDateString()}
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center items-center mt-8 md:mt-0 mb-16 space-x-4 bg-gray-500 w-fit self-center p-5 rounded-xl shadow-xl">
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              variant="outline"
              className='bg-white'
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
            </Button>
            <span className="text-black">
              Página {currentPage} de {totalPages}
            </span>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              variant="outline"
              className='bg-white'
            >
              Siguiente <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>

    </>
  )
}
type NewsItem = {
  id: number
  title: string
  subtitle: string
  date: string
  imageUrl: string
}

const newsData = [
  {
    id: 1,
    title: "Nueva tecnología revoluciona la industria",
    subtitle: "Avances en IA prometen cambiar el panorama tecnológico",
    date: "2023-05-15",
    imageUrl: "god.png"
  },
  {
    id: 2,
    title: "Descubrimiento científico sorprende a expertos",
    subtitle: "Investigadores revelan hallazgos inesperados en estudio climático",
    date: "2023-05-14",
    imageUrl: "god.jpg"
  },
  {
    id: 3,
    title: "Economía global muestra signos de recuperación",
    subtitle: "Mercados reaccionan positivamente a nuevas políticas económicas",
    date: "2023-05-13",
    imageUrl: "god.jpg"
  },
  {
    id: 4,
    title: "Avances en medicina prometen curas para enfermedades crónicas",
    subtitle: "Científicos anuncian resultados prometedores en ensayos clínicos",
    date: "2023-05-12",
    imageUrl: "god.jpg"
  },
  {
    id: 5,
    title: "Nueva ley de protección ambiental entra en vigor",
    subtitle: "Gobiernos se comprometen a reducir emisiones de carbono",
    date: "2023-05-11",
    imageUrl: "god.jpg"
  },
  {
    id: 6,
    title: "Innovación en energía solar bate récords de eficiencia",
    subtitle: "Paneles solares de última generación prometen revolucionar el sector energético",
    date: "2023-05-10",
    imageUrl: "god.jpg"
  },
  {
    id: 7,
    title: "Descubren nueva especie en la selva amazónica",
    subtitle: "Biólogos encuentran un primate desconocido hasta ahora",
    date: "2023-05-09",
    imageUrl: "god.jpg"
  },
  {
    id: 8,
    title: "Avanzan las negociaciones de paz en conflicto internacional",
    subtitle: "Líderes mundiales se reúnen para buscar una solución diplomática",
    date: "2023-05-08",
    imageUrl: "god.jpg"
  },
  {
    id: 9,
    title: "Nuevo récord en el mundo del deporte",
    subtitle: "Atleta supera marca histórica en competencia internacional",
    date: "2023-05-07",
    imageUrl: "god.jpg"
  },
  {
    id: 10,
    title: "Lanzamiento exitoso de misión espacial",
    subtitle: "Nave no tripulada se dirige a explorar lunas de Júpiter",
    date: "2023-05-06",
    imageUrl: "god.jpg"
  },
  {
    id: 11,
    title: "Breakthrough en computación cuántica",
    subtitle: "Investigadores logran hito en procesamiento de información cuántica",
    date: "2023-05-05",
    imageUrl: "belligod.jpg"
  },
  {
    id: 12,
    title: "Festival de cine premia película independiente",
    subtitle: "Obra de director novel recibe aclamación de la crítica",
    date: "2023-05-04",
    imageUrl: "belligod.jpg"
  },
  {
    id: 13,
    title: "Nuevo tratado comercial entre potencias económicas",
    subtitle: "Acuerdo promete impulsar el comercio global y crear empleos",
    date: "2023-05-03",
    imageUrl: "belligod.jpg"
  },
  {
    id: 14,
    title: "Avance en la lucha contra el plástico en los océanos",
    subtitle: "Innovadora tecnología promete limpiar grandes áreas marinas",
    date: "2023-05-02",
    imageUrl: "belligod.jpg"
  },
  {
    id: 15,
    title: "Descubren antiguas ruinas en excavación arqueológica",
    subtitle: "Hallazgo podría reescribir la historia de antigua civilización",
    date: "2023-05-01",
    imageUrl: "belligod.jpg"
  },
  {
    id: 16,
    title: "Nuevo estudio revela beneficios inesperados del ejercicio",
    subtitle: "Investigadores encuentran conexión entre actividad física y longevidad",
    date: "2023-04-30",
    imageUrl: "belligod.jpg"
  },
  {
    id: 17,
    title: "Artista emergente bate récords de ventas en subasta",
    subtitle: "Obra de arte digital alcanza precio sin precedentes",
    date: "2023-04-29",
    imageUrl: "belligod.jpg"
  },
  {
    id: 18,
    title: "Descubren planeta potencialmente habitable",
    subtitle: "Astrónomos detectan señales de agua en exoplaneta cercano",
    date: "2023-04-28",
    imageUrl: "belligod.jpg"
  },
  {
    id: 19,
    title: "Avance en la tecnología de baterías promete revolucionar el transporte",
    subtitle: "Nueva batería ofrece mayor autonomía y tiempo de carga reducido",
    date: "2023-04-27",
    imageUrl: "belligod.jpg"
  },
  {
    id: 20,
    title: "Descubren beneficios inesperados en alimento tradicional",
    subtitle: "Estudio revela propiedades anti-envejecimiento en alimento común",
    date: "2023-04-26",
    imageUrl: "belligod.jpg"
  }
]