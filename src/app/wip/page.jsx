'use client'

import { motion } from 'framer-motion'
import { Loader2, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function ConstructionPage() {
    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Youtube, href: '#', label: 'YouTube' },
    ]

    return (
        <>
        <div className="min-h-screen bg-gradient-to-br from-[#8B1C34] to-[#4A0E1C] flex flex-col justify-center align-center py-12 px-4 text-white">
            <div className="max-w-6xl mx-auto w-full md:m-6 self-center gap-12 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Columna izquierda */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center md:text-left"
                    >
                        <img
                            src="/judesa_logo.jpeg"
                            width={150}
                            height={150}
                            alt="Escudo del Club"
                            className="mx-auto md:mx-0 mb-6 rounded-full p-2"
                        />
                        <h1 className="text-4xl font-bold mb-4">CD Judesa Fútbol Sala</h1>
                        <h2 className="text-2xl font-semibold mb-6">Sitio web en construcción <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="inline-block"
                        >
                            <Loader2 className="w-5 h-5" />
                        </motion.div></h2>

                    </motion.div>

                    {/* Columna derecha */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="bg-white text-[#8B1C34] rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Próximamente encontrarás:</h3>
                            <ul className="list-disc list-inside space-y-2 mb-6">
                                <li>Noticias del club</li>
                                <li>Calendario de partidos</li>
                                <li>Información de nuestros equipos</li>
                                <li>Espacio dedicado a patrocinadores</li>
                                <li>Información sobre entrenamiento</li>
                            </ul>
                            <p className="text-sm italic">¡Vuelve pronto para ver nuestro sitio completo!</p>
                        </div>
                    </motion.div>
                </div>

                {/* Sección de redes sociales */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <h3 className="text-xl font-semibold mb-4">Síguenos en redes sociales</h3>
                    <div className="flex justify-center space-x-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:animate-pulse bg-white text-[#8B1C34] p-2 rounded-full hover:bg-gray-200 transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Elementos decorativos de fútbol sala */}
        </div>
            <motion.div
                className="absolute bottom-0 left-0 w-full h-20 overflow-hidden hidden md:block "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <div className="relative bottom-0 left-0 w-full">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            fill="rgba(255,255,255,0.1)"
                        ></path>
                    </svg>
                </div>

            </motion.div>
            </>
    )
}