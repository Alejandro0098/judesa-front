'use client'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui//popover";
import { Button } from '@/components/ui/button';
import NavComponent from '../myComponents/NavComponent';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import NewsService from '../services/NewsService';


const patrocinadores = [
  {
    nombre: "Deportes XYZ",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion: "Tienda de artículos deportivos líder en la región.",
    categoria: "Equipo Senior",
    aportacion: "Equipamiento completo para el equipo",
    desde: "2018",
    redesSociales: {
      facebook: "https://facebook.com/deportesxyz",
      instagram: "https://instagram.com/deportesxyz"
    }
  },
  {
    nombre: "Bebidas Energéticas Power",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion: "Bebidas energéticas para un rendimiento óptimo.",
    categoria: "Todas las categorías",
    aportacion: "Hidratación para todos los partidos y entrenamientos",
    desde: "2020",
    redesSociales: {
      twitter: "https://twitter.com/bebidaspower",
      instagram: "https://instagram.com/bebidaspower"
    }
  },
  {
    nombre: "Fisioterapia Salud",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion: "Centro de fisioterapia especializado en deportistas.",
    categoria: "Equipo Senior y Juvenil",
    aportacion: "Servicios de fisioterapia y recuperación",
    desde: "2019",
    redesSociales: {
      facebook: "https://facebook.com/fisioterapiasalud",
      linkedin: "https://linkedin.com/company/fisioterapiasalud"
    }
  },
  {
    nombre: "Fisioterapia Salud",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion: "Centro de fisioterapia especializado en deportistas.",
    categoria: "Equipo Senior y Juvenil",
    aportacion: "Servicios de fisioterapia y recuperación",
    desde: "2019",
    redesSociales: {
      facebook: "https://facebook.com/fisioterapiasalud",
      linkedin: "https://linkedin.com/company/fisioterapiasalud"
    }
  },
  {
    nombre: "Fisioterapia Salud",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion: "Centro de fisioterapia especializado en deportistas.",
    categoria: "Equipo Senior y Juvenil",
    aportacion: "Servicios de fisioterapia y recuperación",
    desde: "2019",
    redesSociales: {
      facebook: "https://facebook.com/fisioterapiasalud",
      linkedin: "https://linkedin.com/company/fisioterapiasalud"
    }
  },
  {
    nombre: "Fisioterapia Salud",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion: "Centro de fisioterapia especializado en deportistas.",
    categoria: "Equipo Senior y Juvenil",
    aportacion: "Servicios de fisioterapia y recuperación",
    desde: "2019",
    redesSociales: {
      facebook: "https://facebook.com/fisioterapiasalud",
      linkedin: "https://linkedin.com/company/fisioterapiasalud"
    }
  },
  {
    nombre: "Fisioterapia Salud",
    imagen: "/placeholder.svg?height=200&width=300",
    descripcion: "Centro de fisioterapia especializado en deportistas.",
    categoria: "Equipo Senior y Juvenil",
    aportacion: "Servicios de fisioterapia y recuperación",
    desde: "2019",
    redesSociales: {
      facebook: "https://facebook.com/fisioterapiasalud",
      linkedin: "https://linkedin.com/company/fisioterapiasalud"
    }
  },
]

const colaboradores = [
  { nombre: "Cafetería Gol", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Transporte Rápido", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Imprenta Deportiva", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
  { nombre: "Seguros Confianza", logo: "/placeholder.svg?height=100&width=100" },
]

export default function PatrocinadoresColaboradores() {

  const [data, setData] = useState(null)
  const params = useSearchParams()
  const router = useRouter()
  useEffect(() => {

    NewsService.getSponsors()
        .then(data => {
            (data)
            setData(data)
        })
        .catch((e) => {
          setData({ "error": e })
        })
    return () => { setData(null) }
}, [])
  return (data && !data.error) ? (
    <>
      <NavComponent />
      <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center mb-12 lg:text-4xl animate-pulse">
            Nuestros Patrocinadores
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {data?.map(({id, name, image, description, aportacion, redesSociales}) => (
              <div key={id} className="bg-white rounded-lg shadow-lg overflow-hidden pt-5">
                <div className="h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{name}</h2>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <p className="text-sm font-medium text-indigo-600 mb-2">Categoría: {'asdasdasd'}</p>
                  <p className="text-sm mb-2">Aportación: {aportacion}</p>
                  <p className="text-sm font-medium text-green-600 mb-4">Patrocinando desde: {'asdasdasd'}</p>

                  <div className="flex space-x-4 mb-4">
                    {redesSociales?.facebook && (
                      <a href={patrocinador.redesSociales.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                        <FaFacebook size={24} />
                      </a>
                    )}
                    {redesSociales?.twitter && (
                      <a href={patrocinador.redesSociales.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                        <FaTwitter size={24} />
                      </a>
                    )}
                    {redesSociales?.instagram && (
                      <a href={patrocinador.redesSociales.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                        <FaInstagram size={24} />
                      </a>
                    )}
                    {redesSociales?.linkedin && (
                      <a href={patrocinador.redesSociales.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors duration-300">
                        <FaLinkedin size={24} />
                      </a>
                    )
                    }
                  </div>
                </div>

              </div>
            )
            )

            }
          </div>

          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Colaboradores
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {colaboradores.map((colaborador, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center transition duration-300 overflow-hidden transform transition duration-300 hover:scale-105 pt-5">
                <img
                  src={'/cocacola.png'}
                  alt={`Logo de ${colaborador.nombre}`}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-center">{colaborador.nombre}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  ): <h1>:(</h1>
}