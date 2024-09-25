import CardStaffComponent from './CardStaffComponent.jsx'
import CardPlayerComponent from './CardPlayerComponent.jsx'
import CalendarioPartidos from './CalendarioPartidos.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabCategoryInformation({ team, matches }) {

    const trainer = team?.staff?.trainer
    const delegate = team?.staff?.delegate

    return (<Tabs defaultValue="plantilla" aria-label="Dynamic tabs">
      <TabsList className="grid w-full grid-cols-2 bg-white text-black">
        <TabsTrigger autoFocus className="tab" value="plantilla">Plantilla</TabsTrigger>
        <TabsTrigger className="tab" value="partidos">Resultados</TabsTrigger>
      </TabsList>
      <TabsContent value="plantilla" className="pt-12">
        {/* Technical Staff */}
        <h2 className="text-2xl font-semibold mb-4">Cuerpo Técnico</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          { trainer && <CardStaffComponent member={trainer} type={"Entrenador"}/>}
          { delegate &&<CardStaffComponent member={delegate} type={"Delegado de campo"}/>}
          <h2 className="text-2xl font-semibold mb-4 md:col-span-2 mt-6">Jugadores </h2>
          { team?.players?.map((player) => <CardPlayerComponent key={player.id} player={player}/>)}
        </div>
      </TabsContent>
      <TabsContent className="pt-12" value="partidos">
        <CalendarioPartidos
          matches={matches}
        />
      </TabsContent>
     
    </Tabs>)

}

