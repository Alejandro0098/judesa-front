'use client'

import NavComponent from "../myComponents/NavComponent.jsx"
import { useEffect, useState, Suspense } from "react"
import NewsService from "../services/NewsService.js"
import LoadingComponent from '../myComponents/LoadingComponent.jsx'
import TabCategoryInformation from '../myComponents/TabCategoryInformation.jsx'
import { useSearchParams } from "next/navigation.js"
import { useRouter } from "next/navigation.js"


const teamInfo = {
  name: "Club Deportivo Fútbol Sala Judesa",
  category: "Primera División",
  staff: [
    {
      name: "Antonio García",
      title: "Entrenador",
      experience: "10 años"
    },
    {
      name: "Laura Martínez",
      title: "Delegada",
      experience: "5 años"
    }
  ]
}

const players = [
  { name: "Juan Pérez", position: "Portero", number: 1 },
  { name: "Carlos Rodríguez", position: "Cierre", number: 2 },
  { name: "Miguel Ángel", position: "Ala", number: 7 },
  { name: "Fernando López", position: "Pívot", number: 9 },
  { name: "Alejandro Sánchez", position: "Ala", number: 11 },
  { name: "Alejandro Sánchez", position: "Ala", number: 12 },
  { name: "Alejandro Sánchez", position: "Ala", number: 13 },
  { name: "Alejandro Sánchez", position: "Ala", number: 14 },
]

const recentResults = [
  { date: "2023-05-15", opponent: "Equipo A", result: "3-2" },
  { date: "2023-05-08", opponent: "Equipo B", result: "2-2" },
  { date: "2023-05-01", opponent: "Equipo C", result: "4-1" },
]

const upcomingMatches = [
  { date: "2023-05-22", opponent: "Equipo D", time: "20:00" },
  { date: "2023-05-29", opponent: "Equipo E", time: "19:30" },
  { date: "2023-06-05", opponent: "Equipo F", time: "21:00" },
]

export default function Categoria() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const params = useSearchParams()

  const router = useRouter()

  useEffect(() => {
    const category_id = params.get('id')

    if (!category_id) router.push('/categorias')

    NewsService.getCategoryById(category_id)
      .then(newData => {
        setData(newData)
        setIsLoading(!isLoading)
      })
  }, [])

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
      <main className='px-4 lg:px-40'>
        {data.category.name && <h1 className="text-4xl font-bold mb-4 text-center mt-10">{data.category.name}</h1>}
        <p className="text-xl font-semibold mb-8 text-center">Categoría: {teamInfo.category}</p>
        <div className="mb-12">
          <img
            src="/seleccion.jpg"
            alt="Foto del equipo"
            width={800}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
        <section>
          {data && data.team && data.matches &&
            <TabCategoryInformation
              team={data.team}
              matches={data.matches}
            />
          }
        </section>
      </main>

      {/*  */}

    </>
  )
}