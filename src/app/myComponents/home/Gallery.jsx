'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'

const imagenes = [
    { src: '/seleccion.jpg', alt: 'Imagen 1' },
    { src: '/cocacola.png', alt: 'Imagen 2' },
    { src: '/belligod.png', alt: 'Imagen 3' },
    { src: '/noticia-title.png', alt: 'Imagen 4' },
    { src: '/god.jpg', alt: 'Imagen 5' },
    { src: '/god.jpg', alt: 'Imagen 6' },
    { src: '/god.jpg', alt: 'Imagen 7' },
    { src: '/god.jpg', alt: 'Imagen 8' },
    { src: '/god.jpg', alt: 'Imagen 9' },
    { src: '/god.jpg', alt: 'Imagen 10' },
    { src: '/god.jpg', alt: 'Imagen 11' },
    { src: '/god.jpg', alt: 'Imagen 12' },
]

export default function Gallery() {
    const [imagenSeleccionadaIndex, setImagenSeleccionadaIndex] = useState(null)
    const [imagenesMostradas, setImagenesMostradas] = useState(18)
    const [direction, setDirection] = useState(0)

    const cargarMas = () => {
        setImagenesMostradas(prev => Math.min(prev + 6, imagenes.length))
    }

    const abrirModal = (index) => {
        setImagenSeleccionadaIndex(index)
    }

    const cerrarModal = () => {
        setImagenSeleccionadaIndex(null)
    }

    const navegarImagen = (direccion) => {
        if (imagenSeleccionadaIndex === null) return
        setDirection(direccion === 'anterior' ? -1 : 1)
        let nuevoIndex = imagenSeleccionadaIndex + (direccion === 'anterior' ? -1 : 1)
        if (nuevoIndex < 0) nuevoIndex = imagenes.length - 1
        if (nuevoIndex >= imagenes.length) nuevoIndex = 0
        setImagenSeleccionadaIndex(nuevoIndex)
    }

    const variants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            }
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            }
        }
    }

    return (
        <div className="flex flex-col bg-white w-full h-full p-8">
            <h2 className="w-full self-center bg-white text-xl md:text-3xl font-bold text-center pb-6"><Images className='inline mr-5' /><p className='inline'>Galería de Fotos</p> <Images className='inline ml-2' /></h2>
            <div className="md:pb-8 md:px-4 pt-4 bg-white grid grid-cols-2 md:grid-cols-3 gap-4 h-full w-full" >
                {imagenes.slice(0, imagenesMostradas).map((imagen, index) => (
                    <div key={index} className=" relative aspect-video cursor-pointer overflow-hidden rounded-lg transition-transform hover:scale-105" style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                        <Image
                            src={imagen.src}
                            alt={imagen.alt}
                            layout="fill"
                            objectFit="cover"
                            onClick={() => abrirModal(index)}
                            className="transition-opacity hover:opacity-80 bg-white"
                        />
                    </div>
                ))}
                {/* {imagenesMostradas < imagenes.length && (
                    <div className="mt-1 text-center flex w-full col-span-2 md:col-span-3 flex-col">
                        <Button className="bg-white self-center text-xs md:text-md px-2 py-1 h-min" style={{boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}} onClick={cargarMas} variant="outline">
                            Mostrar más
                        </Button>
                    </div>
                )} */}
            </div>


            <Dialog open={imagenSeleccionadaIndex !== null} onOpenChange={cerrarModal}>
                <DialogContent className="sm:max-w-[100vw] sm:max-h-[100vh] p-0 overflow-hidden bg-black/80 border-none">
                    <div className="relative w-full h-[calc(100vh-4rem)]">
                        <AnimatePresence initial={false} custom={direction}>
                            {imagenSeleccionadaIndex !== null && (
                                <motion.div
                                    key={imagenSeleccionadaIndex}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <Image
                                        src={imagenes[imagenSeleccionadaIndex].src}
                                        alt={imagenes[imagenSeleccionadaIndex].alt}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            onClick={cerrarModal}
                            className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 focus:outline-none"
                            aria-label="Cerrar"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-4 z-10">
                            <Button
                                onClick={() => navegarImagen('anterior')}
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-black/50 text-white hover:bg-black/70"
                                aria-label="Imagen anterior"
                            >
                                <ChevronLeft className="h-6 w-6" color='white' />
                            </Button>
                            <Button
                                onClick={() => navegarImagen('siguiente')}
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-black/50 text-white hover:bg-black/70"
                                aria-label="Imagen siguiente"
                            >
                                <ChevronRight className="h-6 w-6" color='white' />
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}