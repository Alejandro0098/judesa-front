'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import ContactPopover from '../myComponents/ContactPopover.jsx'

import { Check, Star, Ticket, ShoppingBag, Trophy, Info, CreditCard, Copy } from "lucide-react"
import { motion } from "framer-motion"

export default function TarjetaSocio() {

  const contactButton = <Button className='bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-3 text-lg transition-all duration-300'>Hazte Socio</Button>
                

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex flex-col items-center justify-center p-4 overflow-hidden">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          ¡Únete a la Familia del Fútbol Sala!
        </span>
      </motion.h1>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start justify-center gap-8">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-white/10 backdrop-blur-md border-none text-white overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Tarjeta de Socio VIP</CardTitle>
              <CardDescription className="text-lg text-blue-200">Club de Fútbol Sala Estrella</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <span className="text-5xl font-bold">29,99€</span>
                <span className="text-xl">/mes</span>
              </div>
              <ul className="space-y-2">
                {[
                  { icon: Ticket, text: "Entradas gratis a todos los partidos" },
                  { icon: ShoppingBag, text: "20% de descuento en productos de patrocinadores" },
                  { icon: Star, text: "Acceso exclusivo a eventos del club" },
                  { icon: Trophy, text: "Prioridad en la compra de entradas para torneos" },
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <Check className="text-green-400 flex-shrink-0" />
                    <benefit.icon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>{benefit.text}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className='flex justify-center'>
              <ContactPopover
                title={'Contacta con nosotros para hacerte socio'}
                subtitle={' Te resolveremos cualquier duda que tengas'}
                button={contactButton}
              />
            </CardFooter>
          </Card>

          <motion.div
            className="mt-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-none text-white overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold flex items-center justify-center">
                  <CreditCard className="mr-2" /> Tu Tarjeta Física de Socio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-max rounded-xl overflow-hidden block">
                  <img
                    src="https://es.badgy.com/wp-content/uploads/2021/05/sport-membership-card-barcod-printed-with-badgy.png"
                    alt="Tarjeta de Socio VIP"
                  />
                </div>
                <p className="mt-4 text-center text-sm">
                  Esta es la tarjeta física que recibirás como Socio VIP. Úsala para acceder a todos tus beneficios exclusivos.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-white/10 backdrop-blur-md border-none text-white h-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold flex items-center justify-center">
                <Info className="mr-2" /> ¿Por qué esta iniciativa?
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <p>
                En el Club de Fútbol Sala Estrella, creemos en la fuerza de la comunidad y la pasión por el deporte.
                Nuestra nueva tarjeta de socio VIP nace de la necesidad de fortalecer el vínculo entre el club y sus
                seguidores más fieles.
              </p>
              <p>
                Esta iniciativa surge como respuesta a las sugerencias de nuestros aficionados, quienes buscaban una
                forma más directa de apoyar al equipo y sentirse parte integral del club. Con la tarjeta de socio VIP,
                no solo ofrecemos beneficios tangibles como entradas gratuitas y descuentos, sino que también creamos
                una experiencia única que acerca a los fans al corazón mismo del club.
              </p>
              <p>
                Además, este programa nos permite invertir en el futuro del club, mejorando nuestras instalaciones,
                apoyando a las categorías inferiores y atrayendo talento que nos ayude a crecer. Cada socio VIP se
                convierte en un pilar fundamental de nuestro proyecto deportivo y comunitario.
              </p>
              <p>
                Únete a nosotros en este emocionante viaje. Juntos, llevaremos al Club de Fútbol Sala Estrella a
                nuevas alturas, creando recuerdos inolvidables dentro y fuera de la cancha.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}