import { Card, CardContent } from "@/components/ui/card"

export default function CardStaffComponent({member, type}) {
  console.log(member)
    return <Card key={member.id}>
    <CardContent className="p-4 flex items-center flex-col space-x-4 gap-5">
      <img
        src={member.image}
        alt={member.name}
        width={200}
        height={200}
        className="rounded h-full"
        style={{maxHeight: "200px", objectFit: "contain", minHeight: "200px"}}

      />
      <div>
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-gray-600">{type}</p>
      </div>
    </CardContent>
  </Card>
}