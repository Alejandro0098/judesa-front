import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CardPlayerComponent({player}) {
    console.log(player)
    return <Card key={player.id}>
        <CardContent className="p-4">
            <img
                src={player.image}
                alt={player.name}
                width={200}
                height={200}
                className="rounded mx-auto mb-4"
                style={{maxHeight: "200px", objectFit: "cover", minHeight: "200px"}}
            />
            <h3 className="text-xl font-semibold text-center">{`${player.name} ${player.last_name} ${ player.alias ? `\"${player.alias}\"`:''}`}</h3>
            <p className="text-center text-gray-600">{`${player.position} - #${player.dorsal}`}</p>
        </CardContent>
    </Card>
}
