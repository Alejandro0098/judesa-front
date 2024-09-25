import { CalendarIcon, MapPinIcon, ClockIcon, HomeIcon, PlaneIcon } from "lucide-react"
import { Card, CardContent} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const matchResult = (show_result, isLocal, result=null) => {
    if (!result || !show_result) {
      return ''
    }

    const [ls, vs] = result.replace(" ", "").split("-").map(r => parseInt(r))

    if (isLocal) {
      if (ls > vs) return 'match-won';
      if (ls == vs) return 'match-draw';
      return 'match-lost';
    }

    if (ls > vs) return 'match-lost';
    if (ls == vs) return 'match-draw';
    return 'match-won';
  }


export default function MatchCard({id, local, visitant, match_date, is_local, show_result, location}) {
    const matchScore = `${local.score} - ${visitant.score}`
    return (
        <Card key={id} className={`w-full lg:w-1/2 match lg:self-center ${matchResult(show_result, is_local, matchScore)}`}>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5 text-gray-500" />
                <span className="font-semibold">{match_date.date}</span>
              </div>
              <Badge variant={is_local ? "default" : "secondary"}>
                {is_local ? <HomeIcon className="h-4 w-4 mr-1" /> : <PlaneIcon className="h-4 w-4 mr-1" />}
                {is_local ? "Local" : "Visitante"}
              </Badge>
            </div>
            <h3 className="text-xl font-bold mb-2">
              {`${local.name} vs ${visitant.name}`}
            </h3>
            {show_result && (
              <p className="text-2xl font-bold mb-4">{`${local.score} - ${visitant.score}`}</p>
            )}
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPinIcon className="h-5 w-5" />
              <span>{location}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 mt-2">
              <ClockIcon className="h-5 w-5" />
              <span>{match_date.time}</span>
            </div>
          </CardContent>
        </Card>
      )
}