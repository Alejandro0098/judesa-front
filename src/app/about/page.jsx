import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { NavComponent } from "../myComponents/NavComponent"

export default function AboutUs() {
    return (
        <>
            <NavComponent/>
            <div className="min-h-screen bg-background text-foreground">
                {/* Header */}
                <header className="relative h-96 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">Club de Fútbol Sala Estrella</h1>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-8 lg:px-16 lg:py-24 space-y-12">
                    {/* Nuestra Historia */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
                        <p className="text-lg">
                            Fundado en 2005, el Club de Fútbol Sala Estrella nació de la pasión de un grupo de amigos por este deporte.
                            Desde nuestros humildes comienzos en una pequeña cancha local, hemos crecido hasta convertirnos en uno de
                            los clubes más respetados de la región. Nuestra filosofía siempre ha sido fomentar el deporte, el trabajo en
                            equipo y los valores del fair play entre nuestros jugadores y la comunidad.
                        </p>
                    </section>

                    {/* Lo que hacemos */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4">Lo que hacemos</h2>
                        <Tabs defaultValue="categorias" aria-label="Dynamic tabs">
                            <TabsList className="grid w-full grid-cols-2 bg-white">
                                <TabsTrigger className="onFocus:bg-primary" value="categorias">Categorías</TabsTrigger>
                                <TabsTrigger value="torneos">Torneos Organizados</TabsTrigger>
                            </TabsList>
                            <TabsContent value="categorias">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { name: "Benjamín", age: "7-8 años", players: 12, trainings: "2 veces por semana" },
                                        { name: "Alevín", age: "9-10 años", players: 15, trainings: "3 veces por semana" },
                                        { name: "Infantil", age: "11-12 años", players: 18, trainings: "3 veces por semana" },
                                        { name: "Cadete", age: "13-14 años", players: 20, trainings: "4 veces por semana" },
                                        { name: "Juvenil", age: "15-16 años", players: 22, trainings: "4 veces por semana" },
                                        { name: "Senior", age: "17+ años", players: 25, trainings: "5 veces por semana" },
                                    ].map((category) => (
                                        <Card key={category.name}>
                                            <CardHeader>
                                                <CardTitle>{category.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p><strong>Edad:</strong> {category.age}</p>
                                                <p><strong>Jugadores:</strong> {category.players}</p>
                                                <p><strong>Entrenamientos:</strong> {category.trainings}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                            <TabsContent value="torneos">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        {
                                            name: "Copa Estrella",
                                            frequency: "Anual",
                                            categories: "Todas",
                                            duration: "2 semanas",
                                            participants: "32 equipos"
                                        },
                                        {
                                            name: "Torneo de Verano",
                                            frequency: "Anual",
                                            categories: "Juvenil y Senior",
                                            duration: "1 mes",
                                            participants: "16 equipos"
                                        },
                                        {
                                            name: "Liga Escolar",
                                            frequency: "Durante el curso escolar",
                                            categories: "Benjamín a Cadete",
                                            duration: "8 meses",
                                            participants: "20 colegios"
                                        },
                                        {
                                            name: "Campeonato Benéfico",
                                            frequency: "Anual",
                                            categories: "Todas",
                                            duration: "1 semana",
                                            participants: "24 equipos"
                                        },
                                    ].map((tournament) => (
                                        <Card key={tournament.name}>
                                            <CardHeader>
                                                <CardTitle>{tournament.name}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p><strong>Frecuencia:</strong> {tournament.frequency}</p>
                                                <p><strong>Categorías:</strong> {tournament.categories}</p>
                                                <p><strong>Duración:</strong> {tournament.duration}</p>
                                                <p><strong>Participantes:</strong> {tournament.participants}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </section>

                    {/* Logros Deportivos */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4">Logros Deportivos</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                {
                                    year: 2022,
                                    achievements: [
                                        "Campeones Liga Regional Senior",
                                        "Subcampeones Copa Nacional Juvenil",
                                        "Mejor Cantera del Año"
                                    ]
                                },
                                {
                                    year: 2021,
                                    achievements: [
                                        "Campeones Torneo Internacional Cadete",
                                        "Tercer puesto Liga Regional Senior",
                                        "Jugador Más Valioso: Carlos Fernández (Juvenil)"
                                    ]
                                },
                                {
                                    year: 2020,
                                    achievements: [
                                        "Subcampeones Liga Regional Senior",
                                        "Campeones Copa Regional Infantil",
                                        "Reconocimiento al Fair Play"
                                    ]
                                },
                            ].map((yearAchievements) => (
                                <Card key={yearAchievements.year}>
                                    <CardHeader>
                                        <CardTitle>{yearAchievements.year}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {yearAchievements.achievements.map((achievement, index) => (
                                                <li key={index} className="flex items-start">
                                                    <Badge variant="secondary" className="mr-2 mt-1">
                                                        {index + 1}
                                                    </Badge>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Organigrama del Staff */}
                    <section>
                        <h2 className="text-3xl font-bold mb-4">Nuestro Staff</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {[
                                { name: "Ana García", role: "Presidenta" },
                                { name: "Carlos Ruiz", role: "Director Deportivo" },
                                { name: "Elena Martínez", role: "Entrenadora Principal" },
                                { name: "David López", role: "Preparador Físico" },
                                { name: "Laura Sánchez", role: "Fisioterapeuta" },
                                { name: "Javier Moreno", role: "Coordinador de Categorías Inferiores" },
                            ].map((member) => (
                                <Card key={member.name}>
                                    <CardContent className="flex flex-col items-center p-4">
                                        <Avatar className="w-24 h-24 mb-4">
                                            <AvatarImage src={`/placeholder.svg?height=96&width=96`} />
                                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                        </Avatar>
                                        <h3 className="font-semibold text-lg">{member.name}</h3>
                                        <p className="text-sm text-muted-foreground">{member.role}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Contacto */}
                    {/* <section>
                        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
                        <Card>
                            <CardContent className="p-6">
                                <p><strong>Dirección:</strong> Calle del Deporte, 123, 28001 Madrid</p>
                                <p><strong>Teléfono:</strong> +34 91 234 56 78</p>
                                <p><strong>Email:</strong> info@clubestrella.es</p>
                                <p><strong>Redes Sociales:</strong></p>
                                <ul className="list-disc pl-5">
                                    <li>Facebook: /ClubEstrella</li>
                                    <li>Instagram: @clubestrella</li>
                                    <li>Twitter: @ClubEstrella</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section> */}
                </main>
            </div>
        </>
    )
}