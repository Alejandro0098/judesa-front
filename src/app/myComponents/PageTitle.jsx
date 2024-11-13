import { FC, ReactElement } from 'react'
import { Newspaper, Users, Calendar } from 'lucide-react'

const AnimatedBackground = () => (
    // @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

    // .font-playfair {
    //   font-family: 'Playfair Display', serif;
    // }
    <style jsx global>{`

    @keyframes gradientAnimation {
      0% {
        background-position: 100% 50%;
        }
        background-position: 0% 50%;
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .animate-gradient {
      background-size: 1000% 1000%;
      animation: gradientAnimation 5s ease-in infinite;
    }
  `}</style>
)

export default function PageTitle({ titulo, icono }) {
    return (
        <>
            <AnimatedBackground />
            <div className="relative overflow-hidden font-playfair">
                <div className="animate-gradient bg-gradient-to-r from-gray-950 via-red-900 to-gray-950 text-white py-8 px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-center">
                        {icono && <div className="w-10 h-10 mr-1 text-red-400">{icono}</div>}
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-wide">{titulo}</h2>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-red-500 transform -skew-x-12"></div>
            </div>
        </>
    )
}


// export defaultfunction Encabezados() {
//   return (
//     <>
//       <AnimatedBackground />
//       <div className="space-y-8">
//         <EncabezadoSeccion titulo="Noticias" icono={<Newspaper className="h-full" />} />
//         <EncabezadoSeccion titulo="Equipos" icono={<Users className="h-full"/>} />
//         <EncabezadoSeccion titulo="Calendario" icono={<Calendar className="h-full"/>} />
//       </div>
//     </>
//   )
// }