import MatchCard from './MatchCard.jsx'

const partidos = [
  { date: "2024-09-29", rival: "Equipo E", is_local: true, location: "Pabellón Municipal", time: "19:00" },
  { date: "2024-09-22", rival: "Equipo D", is_local: false, location: "Pabellón D", horario: "18:30" },
  { date: "2024-09-15", rival: "Equipo C", resultado: "2 - 2", is_local: true, location: "Pabellón Municipal", time: "20:00" },
  { date: "2024-08-01", rival: "Equipo A", resultado: "3 - 2", is_local: true, location: "Pabellón Municipal", time: "18:00" },
  { date: "2024-08-08", rival: "Equipo B", resultado: "2 - 1", is_local: false, location: "Polideportivo B", time: "19:30" },
  { date: "2024-08-01", rival: "Equipo A", resultado: "3 - 2", is_local: true, location: "Pabellón Municipal", time: "18:00" },
]

export default function CalendarioPartidos({matches}) {
  // const matches = await NewsService.getCategoryById()
  return (
    <div className="space-y-8 flex flex-col pb-6">
      {matches.map(({id, local, visitant, match_date, is_local, show_result, location}) => {       
        return (
          <MatchCard
          key={id}
            id={id}
            local={local}
            visitant={visitant}
            match_date={match_date}
            is_local={is_local}
            show_result={show_result}
            location={location}
          />
          // <Card key={id} className={`w-full lg:w-1/2 match lg:self-center ${matchResult(show_result, is_local, matchScore)}`}>
          //   <CardContent className="p-6">
          //     <div className="flex justify-between items-center mb-4">
          //       <div className="flex items-center space-x-2">
          //         <CalendarIcon className="h-5 w-5 text-gray-500" />
          //         <span className="font-semibold">{match_date.date}</span>
          //       </div>
          //       <Badge variant={is_local ? "default" : "secondary"}>
          //         {is_local ? <HomeIcon className="h-4 w-4 mr-1" /> : <PlaneIcon className="h-4 w-4 mr-1" />}
          //         {is_local ? "Local" : "Visitante"}
          //       </Badge>
          //     </div>
          //     <h3 className="text-xl font-bold mb-2">
          //       {`${local.name} vs ${visitant.name}`}
          //     </h3>
          //     {show_result && (
          //       <p className="text-2xl font-bold mb-4">{`${local.score} - ${visitant.score}`}</p>
          //     )}
          //     <div className="flex items-center space-x-2 text-gray-600">
          //       <MapPinIcon className="h-5 w-5" />
          //       <span>{location}</span>
          //     </div>
          //     <div className="flex items-center space-x-2 text-gray-600 mt-2">
          //       <ClockIcon className="h-5 w-5" />
          //       <span>{match_date.time}</span>
          //     </div>
          //   </CardContent>
          // </Card>
        )
      })}
    </div>
  )
}