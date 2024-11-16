'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tab } from '@headlessui/react'
import { ChevronLeft, ChevronRight, MapPin, Calendar, Clock, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import CategoriesService from '../../services/CategoriesService.js'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation.js'
import Separator from '../myComponents/Separator.jsx'
import PageTitle from '../myComponents/PageTitle.jsx'


// Datos de ejemplo (mantenidos sin cambios)

export default function TeamPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [showPastMatches, setShowPastMatches] = useState(false)
  const matchesPerPage = 6
  const params = useParams()
  const router = useRouter()
  const [data, setData] = useState(null)

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id")

    if (!id) router.push('/categorias')

    CategoriesService.getCategoryById(id)
      .then(res => setData(res))
  }, [])

  if (!data) return;

  const pastMatches = data.matches.filter(match => match.result !== null && match.show_result)
  const upcomingMatches = data.matches.filter(match => match.result === null || !match.show_result)

  const currentMatches = showPastMatches ? pastMatches : upcomingMatches

  const fixPagination = currentMatches.length % 6 != 0 || currentMatches.length == 0 ? 1 : 0;

  const totalPages = Math.trunc(currentMatches.length / matchesPerPage) + fixPagination;

  const handleShownMatches = () => {
    setCurrentPage(1)
    setShowPastMatches(!showPastMatches)
  }

  const paginatedMatches = currentMatches.slice(
    (currentPage - 1) * matchesPerPage,
    currentPage * matchesPerPage
  )

  const SmallSeparator = () => {
    return (
      <motion.div
      className="w-full h-[3px] bg-red-600 mx-auto my-4"
        initial={{ width: 0 }}
        animate={{ width: '5%' }}
        transition={{ duration: 0.8, delay: 0.6 }}
        />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 to-gray-400">
      <PageTitle titulo={`Categoría ${data.category.name}`} icono={<Star className='h-full' />}/>
      <header className="pt-8 sm:px-6 lg:px-8 lg:mb-12 flex flex-col align-center bg-gray-800 bg-gra shadow-md">
        {/* <motion.h1
          className="text-3xl py-5 text-center flex flex-col font-extrabold text-center text-white drop-shadow-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          >
          <div className='flex justify-center align-center w-fit self-center'>
            <p className='w-full bg-red-900 text-xl lg:text-3xl px-8 py-4 rounded-xl self-center border-red-500 border-2'>
              {data.category.name}
            </p>
          </div>

        </motion.h1> */}
        {/* <SmallSeparator /> */}
        <motion.div
          className="mt-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={'/seleccion.jpg'} alt="Foto del equipo" width={600} height={400} className="w-full h-auto px-4" />
        </motion.div>
        <Separator animated={false}/>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 xl:px-24 bg-white bg-opacity-20 p-8 rounded-xl mb-12">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 rounded-xl mb-8 overflow-x-auto bg-blue-900/20">
            <Tab className={({ selected }) =>
              `w-full py-2.5 text-sm font-medium leading-5 text-blue-700 rounded-lg whitespace-nowrap
            focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60
            ${selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}`
          }>
              Información del Equipo
            </Tab>
            <Tab className={({ selected }) =>
              `w-full py-2.5 text-sm font-medium leading-5 text-blue-700 rounded-lg whitespace-nowrap
              focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60
              ${selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}`
            }>
              Partidos
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className={'xl:px-16'}>
              <div className="space-y-8 ">
                <section className="bg-white p-6 rounded-lg shadow-md w-full">
                  <h2 className="text-2xl font-bold mb-8 text-blue-800">Cuerpo técnico</h2>
                  <div className="flex flex-col sm:flex-row justify-around space-y-4 sm:space-y-0 gap-5">
                    <div className="flex flex-col items-center">
                      <div className=''>
                        <img src={'/staff/xabi.jpg'} alt={data.category.trainer.name} className='max-h-[150px] object-contain' />
                      </div>
                      <h3 className="text-lg font-semibold mt-2">Entrenador</h3>
                      <p>{data.category.trainer.name}</p>
                    </div>
                    <div className="flex flex-col items-center h-full justify-end align-end">
                      <div className=''>
                        <img src={'/staff/chendo.jpg'} alt={data.category.trainer.name} className='max-h-[150px] object-contain' />
                      </div>
                      {/* <img src={'/chendo.jpg'} alt={delegate.name} width={100} height={100} className='' /> */}
                      <h3 className="text-lg font-semibold mt-2">Delegado</h3>
                      <p>{data.category.delegate.name}</p>
                    </div>
                  </div>
                </section>
                <section className="bg-white p-6 rounded-lg shadow-md w-full">
                  <h2 className="text-2xl font-bold mb-8 text-blue-800">Jugadores</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {data.team.players.map((player, index) => (
                      <div key={player.number} className="flex flex-col items-center space-y-2 justify-between">
                        <img src={index % 2 == 0 ? '/categories/senior/fede.jpg' : '/categories/senior/carva.jpg'} alt={player.name} width={200} height={200} className="w-32 h-32 object-cover" />
                        <h3 className="text-sm md:text-base font-semibold text-center text-base">{player.name}</h3>
                        <p className="text-xs text-gray-600 text-center">{player.position} - #{player.number}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md px-5 flex flex-col">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
                  <h2 className="text-2xl font-bold text-blue-800">Partidos</h2>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleShownMatches}
                      className={`px-4 py-2 rounded-md text-sm ${!showPastMatches ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      Próximos
                    </button>
                    <button
                      onClick={handleShownMatches}
                      className={`px-4 py-2 rounded-md text-sm ${showPastMatches ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                      >
                      Pasados
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {paginatedMatches && paginatedMatches.map((match, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow-md flex flex-col space-y-2">
                      <div className="flex justify-between items-start text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="text-blue-600" size={14} />
                          <span className="font-semibold">{match.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="text-blue-600" size={14} />
                          <span className="font-semibold">{match.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${match.isHome ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>

                          {match.isHome ? 'Local' : 'Visitante'}
                        </span>
                        <span className="text-sm font-semibold truncate">vs {match.rival}</span>
                      </div>
                      {match.result && match.show_result && (
                        <div className={`text-center font-bold text-sm px-2 py-1 rounded-full ${match.result.split('-')[0] > match.result.split('-')[1] ? 'bg-green-100 text-green-800' :
                          match.result.split('-')[0] < match.result.split('-')[1] ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                          {match.result}
                        </div>
                      ) 
                    }
                      <div className="flex items-center text-xs text-blue-600">
                        <MapPin size={12} className="mr-1 flex-shrink-0" />
                        <Link href={match.location} target="_blank" rel="noopener noreferrer" className=" mt-1 hover:underline truncate">
                          {'Ubicación'}
                          </Link>
                      </div>
                    </div>
                  ))
                }
                {
                  currentMatches.length == 0 && <h1 className='text-center col-span-3 my-4'>No se ha encontrado ningún partido.</h1>
                }
                </div>
                <div className="mt-8 flex sm:flex-row items-center sm:space-y-0 w-fit gap-5 self-center">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    <ChevronLeft size={16} className="mr-2" />
                    Anterior
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages || (totalPages == 1 && currentPage == 1)}
                    className="flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    Siguiente
                    <ChevronRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
    </div>
  )
}
                    // const teamName = "Categoría Infantil"
                    // const teamPhoto = "/placeholder.svg?height=400&width=600"
                    // const coach = { name: "Juan Pérez", photo: "/placeholder.svg?height=150&width=150" }
                    // const delegate = { name: "María García", photo: "/placeholder.svg?height=150&width=150" }
                    // const players = [
                    //   { name: "Carlos Rodríguez Martínez", position: "Portero", number: 1, photo: "/placeholder.svg?height=150&width=150" },
                    //   { name: "Luis Fernández Martínez", position: "Cierre", number: 2, photo: "/placeholder.svg?height=150&width=150" },
                    //   { name: "Antonio López Martínez", position: "Ala", number: 3, photo: "/placeholder.svg?height=150&width=150" },
                    //   { name: "Javier Martínez Martínez", position: "Pívot", number: 4, photo: "/placeholder.svg?height=150&width=150" },
                    //   { name: "Miguel González Martínez", position: "Ala", number: 5, photo: "/placeholder.svg?height=150&width=150" },
                    //   { name: "Carlos Rodríguez Martínez", position: "Portero", number: 1, photo: "/placeholder.svg?height=150&width=150" },
                    //   { name: "Luis Fernández Martínez", position: "Cierre", number: 2, photo: "/placeholder.svg?height=150&width=150" },
                    //   { name: "Antonio López Martínez", position: "Ala", number: 3, photo: "/placeholder.svg?height=150&width=150" },
                    //   { name: "Javier Martínez Martínez", position: "Pívot", number: 4, photo: "/placeholder.svg?height=150&width=150" },
                    //   { name: "Miguel González Martínez", position: "Ala", number: 5, photo: "/placeholder.svg?height=150&width=150" },
                    // ]
                    
                    // const matches = [
                    //   { date: "2023-10-25", time: "20:00", opponent: "Equipo A", location: "Pabellón Municipal", isHome: true, result: null, mapLink: "https://goo.gl/maps/example1" },
                    //   { date: "2023-11-01", time: "19:30", opponent: "Equipo B", location: "Pabellón Visitante", isHome: false, result: null, mapLink: "https://goo.gl/maps/example2" },
                    //   { date: "2023-11-08", time: "20:30", opponent: "Equipo C", location: "Pabellón Municipal", isHome: true, result: null, mapLink: "https://goo.gl/maps/example3" },
                    //   { date: "2023-11-15", time: "18:00", opponent: "Equipo D", location: "Pabellón Visitante", isHome: false, result: null, mapLink: "https://goo.gl/maps/example4" },
                    //   { date: "2023-11-22", time: "21:00", opponent: "Equipo E", location: "Pabellón Municipal", isHome: true, result: null, mapLink: "https://goo.gl/maps/example5" },
                    //   { date: "2023-11-29", time: "20:00", opponent: "Equipo F", location: "Pabellón Visitante", isHome: false, result: null, mapLink: "https://goo.gl/maps/example6" },
                    //   { date: "2023-12-06", time: "19:00", opponent: "Equipo G", location: "Pabellón Municipal", isHome: true, result: null, mapLink: "https://goo.gl/maps/example7" },
                    //   { date: "2023-12-13", time: "20:30", opponent: "Equipo H", location: "Pabellón Visitante", isHome: false, result: null, mapLink: "https://goo.gl/maps/example8" },
                    //   { date: "2023-09-06", time: "20:00", opponent: "Equipo I", location: "Pabellón Municipal", isHome: true, result: "3-2", mapLink: "https://goo.gl/maps/example9" },
                    //   { date: "2023-09-13", time: "19:30", opponent: "Equipo J", location: "Pabellón Visitante", isHome: false, result: "1-1", mapLink: "https://goo.gl/maps/example10" },
                    //   { date: "2023-09-20", time: "20:30", opponent: "Equipo K", location: "Pabellón Municipal", isHome: true, result: "4-2", mapLink: "https://goo.gl/maps/example11" },
                    //   { date: "2023-09-27", time: "18:00", opponent: "Equipo L", location: "Pabellón Visitante", isHome: false, result: "0-2", mapLink: "https://goo.gl/maps/example12" },
                    //   { date: "2023-10-04", time: "21:00", opponent: "Equipo M", location: "Pabellón Municipal", isHome: true, result: "5-3", mapLink: "https://goo.gl/maps/example13" },
                    //   { date: "2023-10-11", time: "20:00", opponent: "Equipo N", location: "Pabellón Visitante", isHome: false, result: "2-2", mapLink: "https://goo.gl/maps/example14" },
                    //   { date: "2023-10-18", time: "19:00", opponent: "Equipo O", location: "Pabellón Municipal", isHome: true, result: "3-1", mapLink: "https://goo.gl/maps/example15" },
                    //   { date: "2023-08-02", time: "20:30", opponent: "Equipo P", location: "Pabellón Visitante", isHome: false, result: "1-3", mapLink: "https://goo.gl/maps/example16" },
                    //   { date: "2023-08-09", time: "20:00", opponent: "Equipo Q", location: "Pabellón Municipal", isHome: true, result: "2-2", mapLink: "https://goo.gl/maps/example17" },
                    //   { date: "2023-08-16", time: "19:30", opponent: "Equipo R", location: "Pabellón Visitante", isHome: false, result: "0-1", mapLink: "https://goo.gl/maps/example18" },
                    //   { date: "2023-08-23", time: "20:30", opponent: "Equipo S", location: "Pabellón Municipal", isHome: true, result: "4-0", mapLink: "https://goo.gl/maps/example19" },
                    //   { date: "2023-08-30", time: "18:00", opponent: "Equipo T", location: "Pabellón Visitante", isHome: false, result: "2-3", mapLink: "https://goo.gl/maps/example20" },
                    // ]