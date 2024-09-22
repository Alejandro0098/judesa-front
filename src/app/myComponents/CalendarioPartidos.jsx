'use client'

import { CalendarIcon, MapPinIcon, ClockIcon, HomeIcon, PlaneIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const partidos = [
  { fecha: "2024-09-29", equipo: "Equipo E", esLocal: true, localizacion: "Pabellón Municipal", horario: "19:00" },
  { fecha: "2024-09-22", equipo: "Equipo D", esLocal: false, localizacion: "Pabellón D", horario: "18:30" },
  { fecha: "2024-09-15", equipo: "Equipo C", resultado: "2 - 2", esLocal: true, localizacion: "Pabellón Municipal", horario: "20:00" },
  { fecha: "2024-08-01", equipo: "Equipo A", resultado: "3 - 2", esLocal: true, localizacion: "Pabellón Municipal", horario: "18:00" },
  { fecha: "2024-08-08", equipo: "Equipo B", resultado: "2 - 1", esLocal: false, localizacion: "Polideportivo B", horario: "19:30" },
  { fecha: "2024-08-01", equipo: "Equipo A", resultado: "3 - 2", esLocal: true, localizacion: "Pabellón Municipal", horario: "18:00" },
]

export default function CalendarioPartidos() {
  const fechaActual = new Date();

  const matchResult = (pastGame, isLocal, result=null) => {
    if (!result) {
      return ''
    }

    const [ls, vs] = result.replace(" ", "").split("-").map(r => parseInt(r))
    console.log(ls, vs)

    if (isLocal) {
      if (ls > vs) return 'match-won';
      if (ls == vs) return 'match-draw';
      return 'match-lost';
    }

    if (ls > vs) return 'match-lost';
    if (ls == vs) return 'match-draw';
    return 'match-won';
  }

  return (
    <div className="space-y-8 flex flex-col pb-6">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-center">Calendario de partidos</CardTitle>
        </CardHeader>
      </Card>

      {partidos.map((partido, index) => {
        const fechaPartido = new Date(partido.fecha)
        const esPartidoPasado = fechaPartido < fechaActual

        return (
          <Card key={index} className={`w-full lg:w-1/2 match lg:self-center ${matchResult(esPartidoPasado, partido.esLocal, partido.resultado)}`}>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5 text-gray-500" />
                  <span className="font-semibold">{partido.fecha}</span>
                </div>
                <Badge variant={partido.esLocal ? "default" : "secondary"}>
                  {partido.esLocal ? <HomeIcon className="h-4 w-4 mr-1" /> : <PlaneIcon className="h-4 w-4 mr-1" />}
                  {partido.esLocal ? "Local" : "Visitante"}
                </Badge>
              </div>
              <h3 className="text-xl font-bold mb-2">
                {partido.esLocal ? "CD Judesa FS vs " : ""}{partido.equipo}{partido.esLocal ? "" : " vs CD Judesa FS"}
              </h3>
              {esPartidoPasado && partido.resultado && (
                <p className="text-2xl font-bold mb-4">{partido.resultado}</p>
              )}
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPinIcon className="h-5 w-5" />
                <span>{partido.localizacion}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 mt-2">
                <ClockIcon className="h-5 w-5" />
                <span>{partido.horario}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}