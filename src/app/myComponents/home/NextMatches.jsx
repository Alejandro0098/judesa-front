'use client'

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import MatchesService from "@/services/MatchesService.js"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"

export default function NextMatches() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const judesaName = 'CD Judesa FS'

  const parseMatch = match => {
    return {
      categoria: match.category,
      equipoLocal: match.is_local ? judesaName : match.rival,
      equipoVisitante: !match.is_local ? judesaName : match.rival,
      fecha: match.date,
      esLocal: match.is_local,
    }
  }

  useEffect(() => {
    MatchesService.getNextMatches()
      .then(data => setData(data.map(parseMatch)), setIsLoading(!isLoading))
  }, [])

  if (isLoading) {
    return <div className="w-full h-56  ">
      <Skeleton className="h-full w-full" />
    </div>
  }

  return (
    <ScrollArea className="whitespace-nowrap rounded-md flex hover:cursor-pointer">
      <div className="flex self-center w-max space-x-4 py-4">
        {data?.map((resultado, index) => (
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
              <div>{resultado.fecha}</div>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )

  // const resultados = [
  //   {
  //     categoria: "Senior",
  //     equipoLocal: "Nuestro Equipo",
  //     equipoVisitante: "Rival FC",
  //     resultado: "3 - 2",
  //     fecha: "2023-05-15",
  //     lugar: "Pabellón Municipal",
  //     esLocal: true
  //   },
  //   {
  //     categoria: "Juvenil",
  //     equipoLocal: "Atlético Juvenil",
  //     equipoVisitante: "Nuestro Equipo",
  //     resultado: "1 - 4",
  //     fecha: "2023-05-14",
  //     lugar: "Polideportivo Central",
  //     esLocal: false
  //   },
  //   {
  //     categoria: "Cadete",
  //     equipoLocal: "Nuestro Equipo",
  //     equipoVisitante: "Deportivo Cadete",
  //     resultado: "2 - 2",
  //     fecha: "2023-05-13",
  //     lugar: "Pabellón Municipal",
  //     esLocal: true
  //   },
  //   {
  //     categoria: "Infantil",
  //     equipoLocal: "Infantil FC",
  //     equipoVisitante: "Nuestro Equipo",
  //     resultado: "0 - 3",
  //     fecha: "2023-05-12",
  //     lugar: "Campo Municipal",
  //     esLocal: false
  //   },
  //   {
  //     categoria: "Infantil",
  //     equipoLocal: "Infantil FC",
  //     equipoVisitante: "Nuestro Equipo",
  //     resultado: "0 - 3",
  //     fecha: "2023-05-12",
  //     lugar: "Campo Municipal",
  //     esLocal: false
  //   },
  //   {
  //     categoria: "Infantil",
  //     equipoLocal: "Infantil FC",
  //     equipoVisitante: "Nuestro Equipo",
  //     resultado: "0 - 3",
  //     fecha: "2023-05-12",
  //     lugar: "Campo Municipal",
  //     esLocal: false
  //   },
  //   {
  //     categoria: "Infantil",
  //     equipoLocal: "Infantil FC",
  //     equipoVisitante: "Nuestro Equipo",
  //     resultado: "0 - 3",
  //     fecha: "2023-05-12",
  //     lugar: "Campo Municipal",
  //     esLocal: false
  //   },
  //   {
  //     categoria: "Infantil",
  //     equipoLocal: "Infantil FC",
  //     equipoVisitante: "Nuestro Equipo",
  //     resultado: "0 - 3",
  //     fecha: "2023-05-12",
  //     lugar: "Campo Municipal",
  //     esLocal: false
  //   },
  //   {
  //     categoria: "Infantil",
  //     equipoLocal: "Infantil FC",
  //     equipoVisitante: "Nuestro Equipo",
  //     resultado: "0 - 3",
  //     fecha: "2023-05-12",
  //     lugar: "Campo Municipal",
  //     esLocal: false
  //   },
  //   {
  //     categoria: "Infantil",
  //     equipoLocal: "Infantil FC",
  //     equipoVisitante: "Nuestro Equipo",
  //     resultado: "0 - 3",
  //     fecha: "2023-05-12",
  //     lugar: "Campo Municipal",
  //     esLocal: false
  //   },
  // ]
}