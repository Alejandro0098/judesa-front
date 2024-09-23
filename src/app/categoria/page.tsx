'use client'

// import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CalendarioPartidos from '../myComponents/CalendarioPartidos.jsx'
import { NavComponent } from "../myComponents/NavComponent.jsx"

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

  return (

    <>
      <NavComponent />
      <main className='px-4 lg:px-20'>
        <h1 className="text-4xl font-bold mb-4 text-center mt-10">{teamInfo.name}</h1>

        {/* Team Category */}
        <p className="text-xl font-semibold mb-8 text-center">Categoría: {teamInfo.category}</p>

        {/* Team Photo */}
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
          <Tabs defaultValue="plantilla" aria-label="Dynamic tabs">
            <TabsList className="grid w-full grid-cols-2 bg-white text-black">
              <TabsTrigger autoFocus className="tab" value="plantilla">Plantilla</TabsTrigger>
              <TabsTrigger className="tab" value="partidos">Resultados</TabsTrigger>
            </TabsList>
            <TabsContent value="plantilla" className="pt-12">
              {/* Technical Staff */}
              <h2 className="text-2xl font-semibold mb-4">Cuerpo Técnico</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {teamInfo.staff.map((member, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 flex items-center space-x-4">
                      <img
                        src={`/ancelotti.jpg`}
                        alt={member.name}
                        width={100}
                        height={100}
                        className="rounded"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-gray-600">{member.title}</p>
                        <p className="text-sm text-gray-500">Experiencia: {member.experience}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Player Profiles */}
              <h2 className="text-2xl font-semibold mb-4">Nuestros Jugadores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {players.map((player) => (
                  <Card key={player.number}>
                    <CardContent className="p-4">
                      <img
                        src={`/god.png`}
                        alt={player.name}
                        width={200}
                        height={200}
                        className="rounded mx-auto mb-4"
                      />
                      <h3 className="text-xl font-semibold text-center">{player.name}</h3>
                      <p className="text-center text-gray-600">{player.position} - #{player.number}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent className="pt-12" value="partidos">
              <CalendarioPartidos></CalendarioPartidos>
            </TabsContent>
           
          </Tabs>
        </section>
        {/*  */}
      </main>
    </>
  )
}