import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Twitter, Facebook, Youtube, Twitch, Camera, Music, Linkedin, Github, Rss } from "lucide-react"

export default function SocialMediaPromo() {
  const socialNetworks = [
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      handle: "@clubfutsal_oficial",
      content: "Fotos de los partidos, entrenamientos y momentos detrás de escena.",
      color: "bg-gradient-to-br from-purple-400 to-pink-400"
    },
    {
      name: "X (antes Twitter)",
      icon: <Twitter className="h-6 w-6" />,
      handle: "@ClubFutsal",
      content: "Actualizaciones en tiempo real de los partidos y noticias del club.",
      color: "bg-gray-800"
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      handle: "Club Fútbol Sala Oficial",
      content: "Eventos del club, interacción con los fans y resúmenes semanales.",
      color: "bg-blue-600"
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-6 w-6" />,
      handle: "ClubFutsalTV",
      content: "Highlights de los partidos, entrevistas con jugadores y staff técnico.",
      color: "bg-red-600"
    },
    // {
    //   name: "Twitch",
    //   icon: <Twitch className="h-6 w-6" />,
    //   handle: "ClubFutsalLive",
    //   content: "Streams en vivo de partidos y sesiones de entrenamiento.",
    //   color: "bg-purple-600"
    // },
    // {
    //   name: "Snapchat",
    //   icon: <Camera className="h-6 w-6" />,
    //   handle: "clubfutsal_snap",
    //   content: "Stories divertidas y momentos exclusivos del equipo.",
    //   color: "bg-yellow-400"
    // },
    // {
    //   name: "TikTok",
    //   icon: <Music className="h-6 w-6" />,
    //   handle: "@clubfutsaltiktok",
    //   content: "Vídeos cortos y divertidos de jugadores y aficionados.",
    //   color: "bg-black"
    // },
    // {
    //   name: "LinkedIn",
    //   icon: <Linkedin className="h-6 w-6" />,
    //   handle: "Club Fútbol Sala Profesional",
    //   content: "Noticias corporativas y oportunidades profesionales en el club.",
    //   color: "bg-blue-700"
    // },
    // {
    //   name: "GitHub",
    //   icon: <Github className="h-6 w-6" />,
    //   handle: "ClubFutsalDev",
    //   content: "Proyectos de código abierto y estadísticas del club.",
    //   color: "bg-gray-900"
    // },
    // {
    //   name: "RSS Feed",
    //   icon: <Rss className="h-6 w-6" />,
    //   handle: "clubfutsal.com/feed",
    //   content: "Suscríbete para recibir todas nuestras actualizaciones.",
    //   color: "bg-orange-500"
    // }
  ]

  return (
    <Card className="w-full max-w-4xl mx-auto pt-8">
      <CardContent>
        <h2 className="w-full text-2xl font-bold sm:text-3xl mb-8 text-center gap-2">
          Redes sociales
        </h2>
        <p className="text-center mb-6">
          Mantente al día con todas las novedades de nuestro club. ¡No te pierdas nada!
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialNetworks.map((network, index) => (
            <div
              key={index}
              className={`flex items-start space-x-4 p-4 rounded-lg ${network.color} transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer`}
            >
              <div className="mt-1 transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                {network.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white">{network.name}</h3>
                <p className="text-sm text-white text-opacity-80">{network.handle}</p>
                <p className="mt-2 text-sm text-white text-opacity-90 transition-colors duration-300 ease-in-out group-hover:text-white">
                  {network.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}