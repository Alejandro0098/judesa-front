'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Clipboard, Mail, Phone, Info, User } from 'lucide-react'
import { useToast } from "../../hooks/use-toast.ts"

export default function Component() {
  const [isCopied, setIsCopied] = useState(false)
  const { toast } = useToast()

  const contactInfo = {
    name: "Alberto Molina",
    phone: "+34 660 290 086",
    email: "alejandromarin246@gmail.com"
  }

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true)
      toast({
        description: `${type} copiado al portapapeles`,
        duration: 2000,
        className: "bg-white"
      })
      setTimeout(() => setIsCopied(false), 2000)
    }).catch(err => {
      console.error('Failed to copy: ', err)
      toast({
        description: `Error al copiar ${type}`,
        duration: 2000,
        variant: "destructive",
        className: "bg-white"
      })
    })
  }

  return (
      <Card className="w-11/12 md:w-fit self-center bg-gray-900 text-white mx-1">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl text-red-600 flex items-center">
            <Info className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Información de pedidos
          </CardTitle>
          <CardDescription className="text-gray-300 text-sm sm:text-base">
            Los pedidos no se tramitan a través de la web. Por favor, contacta directamente con nosotros.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 p-4 sm:p-6 flex flex-col gap-1">
          <div className="flex  space-x-2 sm:flex-row sm:items-center rounded-md">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <User className="text-red-600 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="font-semibold text-white text-sm sm:text-base">Nombre de contacto:</span>
            </div>
            <span className="text-white font-bold text-sm sm:text-base">{contactInfo.name}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <Phone className="text-red-600 h-4 w-4" />
              <span className="font-semibold text-sm sm:text-base">Teléfono:</span>
              <span className="text-sm sm:text-base">{contactInfo.phone}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(contactInfo.phone, 'Teléfono')}
              className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white text-xs sm:text-sm"
            >
              <Clipboard className="h-3 w-3 mr-1" />
              Copiar
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <Mail className="text-red-600 h-4 w-4" />
              <span className="font-semibold text-sm sm:text-base">Email:</span>
              <span className="text-sm sm:text-base">{contactInfo.email}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(contactInfo.email, 'Email')}
              className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white text-xs sm:text-sm"
            >
              <Clipboard className="h-3 w-3 mr-1" />
              Copiar
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 pt-2">
            <Button
              size="sm"
              onClick={() => {
                try {
                  window.open(`https://wa.me/${contactInfo.phone.replace(/\s+/g, '')}`, '_blank')
                } catch (error) {
                  console.error('Error opening WhatsApp:', error)
                  toast({
                    description: "Error al abrir WhatsApp",
                    duration: 2000,
                    variant: "destructive",
                    className: "bg-white"
                  })
                }
              }}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm py-2"
            >
              WhatsApp
            </Button>
            <Button
              size="sm"
              onClick={() => {
                try {
                  window.location.href = `mailto:${contactInfo.email}`
                } catch (error) {
                  console.error('Error opening email client:', error)
                  toast({
                    description: "Error al abrir el cliente de correo",
                    duration: 2000,
                    variant: "destructive",
                    className: "bg-white"
                  })
                }
              }}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm py-2"
            >
              Email
            </Button>
          </div>
        </CardContent>
      </Card>
  )
}