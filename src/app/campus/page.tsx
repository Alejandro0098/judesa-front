'use'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Users, CheckCircle, XCircle, Euro, ClipboardList, Phone, Mail, Info } from "lucide-react"

type Evento = {
  nombre: string
  fecha: string
  lugar: string
  descripcion: string
  participantes: string
  estado: "pasado" | "futuro"
  plazas: "disponibles" | "completo"
  precio: number
  requisitos: string[]
  organizador: string
  encargado: string
}

const InformacionCompacta = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <Card className="col-span-1">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center">
          <Info className="mr-2 h-4 w-4" />
          Proceso de Inscripción
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal list-inside text-sm space-y-1">
          <li>Verificar requisitos del evento</li>
          <li>Contactar al presidente para disponibilidad</li>
          <li>Pagar por adelantado (transferencia)</li>
          <li>Enviar comprobante y documentación</li>
          <li>Esperar confirmación oficial</li>
        </ol>
      </CardContent>
    </Card>
    <Card className="col-span-1">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Contacto para Inscripciones</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-semibold text-sm mb-2">Juan Pérez - Presidente del Club</p>
        <div className="flex items-center mb-1 text-sm">
          <Phone className="mr-2 h-4 w-4" />
          <span>+34 123 456 789</span>
        </div>
        <div className="flex items-center text-sm">
          <Mail className="mr-2 h-4 w-4" />
          <span>presidente@clubfutbolsala.com</span>
        </div>
      </CardContent>
    </Card>
  </div>
)

function renderEvento(evento: Evento) {
  return (
    <Card className={`${evento.estado === 'pasado' ? 'opacity-70' : ''}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{evento.nombre}</CardTitle>
          <Badge variant={evento.estado === 'futuro' ? 'default' : 'secondary'}>
            {evento.estado === 'futuro' ? 'Próximo' : 'Pasado'}
          </Badge>
        </div>
        <CardDescription>
          
        </CardDescription>
      </CardHeader>
      <CardContent>
      <div className="flex items-center mt-2">
            <CalendarDays className="mr-2 h-4 w-4" />
            {evento.fecha}
          </div>
          <div className="flex items-center mt-1">
            <MapPin className="mr-2 h-4 w-4" />
            {evento.lugar}
          </div>
        <p className="mb-4">{evento.descripcion}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            {evento.participantes}
          </Badge>
          <Badge variant="secondary" className="flex items-center">
            <Euro className="mr-2 h-4 w-4" />
            {evento.precio}€
          </Badge>
          {evento.estado === 'futuro' && (
            <Badge variant={evento.plazas === 'disponibles' ? 'outline' : 'destructive'} className="flex items-center">
              {evento.plazas === 'disponibles' ? (
                <CheckCircle className="mr-2 h-4 w-4" />
              ) : (
                <XCircle className="mr-2 h-4 w-4" />
              )}
              {evento.plazas === 'disponibles' ? 'Plazas disponibles' : 'Completo'}
            </Badge>
          )}
        </div>
        <div className="mt-4">
          <h4 className="font-semibold flex items-center mb-2">
            <ClipboardList className="mr-2 h-4 w-4" />
            Requisitos:
          </h4>
          <ul className="list-disc list-inside space-y-1">
            {evento.requisitos.map((requisito, index) => (
              <li key={index} className="text-sm">{requisito}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-sm"><strong>Organizador:</strong> {evento.organizador}</p>
          <p className="text-sm"><strong>Encargado:</strong> {evento.encargado}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TorneosYCampus() {
  const torneos: Evento[] = [
    {
      nombre: "Torneo de Verano",
      fecha: "15-20 de Julio, 2024",
      lugar: "Polideportivo Municipal",
      descripcion: "Competición intensiva de 5 días con equipos de toda la región. Categorías infantil, cadete y juvenil.",
      participantes: "16 equipos por categoría",
      estado: "futuro",
      plazas: "disponibles",
      precio: 150,
      requisitos: ["Edad: 12-18 años", "Equipación completa del equipo", "Certificado médico"],
      organizador: "Club de Fútbol Sala",
      encargado: "Ana Gómez - Directora Técnica"
    },
    {
      nombre: "Copa Navidad",
      fecha: "26-30 de Diciembre, 2023",
      lugar: "Pabellón Central",
      descripcion: "Torneo festivo con formato de eliminatorias. Abierto a todas las edades con categoría absoluta.",
      participantes: "32 equipos",
      estado: "pasado",
      plazas: "completo",
      precio: 200,
      requisitos: ["Edad: +18 años", "Equipación completa del equipo", "Seguro deportivo en vigor"],
      organizador: "Federación Regional de Fútbol Sala",
      encargado: "Carlos Martínez - Coordinador de Competiciones"
    }
  ]

  const campus: Evento[] = [
    {
      nombre: "Campus de Verano",
      fecha: "1-15 de Agosto, 2024",
      lugar: "Instalaciones del Club",
      descripcion: "Dos semanas de entrenamiento intensivo, técnicas avanzadas y competiciones amistosas. Incluye alojamiento y pensión completa.",
      participantes: "60 jóvenes de 10 a 16 años",
      estado: "futuro",
      plazas: "disponibles",
      precio: 500,
      requisitos: ["Edad: 10-16 años", "Ropa deportiva", "Calzado de fútbol sala", "Autorización parental"],
      organizador: "Club de Fútbol Sala en colaboración con la Escuela de Entrenadores",
      encargado: "Laura Sánchez - Directora del Campus"
    },
    {
      nombre: "Campus de Tecnificación",
      fecha: "Fines de semana de Septiembre a Noviembre, 2023",
      lugar: "Centro de Alto Rendimiento",
      descripcion: "Sesiones especializadas en mejora de habilidades específicas: control, pase, tiro y tácticas de equipo.",
      participantes: "Grupos reducidos de 15 jugadores por sesión",
      estado: "pasado",
      plazas: "completo",
      precio: 300,
      requisitos: ["Edad: 14-20 años", "Nivel intermedio o avanzado", "Equipación propia", "Informe técnico del entrenador"],
      organizador: "Academia Nacional de Fútbol Sala",
      encargado: "Pedro Rodríguez - Director Técnico de la Academia"
    }
  ]

  return (
    <div className=" xl:px-32 px-2 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Torneos y Campus</h1>
      <InformacionCompacta />
      <Tabs defaultValue="torneos" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="torneos">Torneos</TabsTrigger>
          <TabsTrigger value="campus">Campus</TabsTrigger>
        </TabsList>
        <TabsContent value="torneos">
          <div className="grid gap-6 md:grid-cols-2">
            {torneos.map((torneo, index) => (
              <div key={index}>{renderEvento(torneo)}</div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="campus">
          <div className="grid gap-6 md:grid-cols-2">
            {campus.map((camp, index) => (
              <div key={index}>{renderEvento(camp)}</div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}