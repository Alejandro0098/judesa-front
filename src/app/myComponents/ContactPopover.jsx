'use client'

import { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MessageCircle, Copy, Check } from 'lucide-react'
import { useToast } from "../../hooks/use-toast.ts"

export default function Component() {
    const [copied, setCopied] = useState(null)
    const { toast } = useToast()
    const contactInfo = {
        name: "Alberto Molina",
        phone: "687 318 372",
        email: "alberto.molina@ejemplo.com"
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        setCopied(copied)
        setTimeout(() => setCopied(null), 2000)
    }

    const openWhatsApp = () => {
        window.open(`https://wa.me/34${contactInfo.phone.replace(/\s+/g, '')}`, '_blank')
    }

    const openEmail = () => {
        window.location.href = `mailto:${contactInfo.email}`
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className='bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-3 text-lg transition-all duration-300'>Hazte Socio</Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 bg-card text-card-foreground shadow-lg p-5">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Contacta con nosotros para hacerte socio</h4>
                        <p className="text-sm text-muted-foreground">
                            Te resolveremos cualquier duda que tengas.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <span className="font-medium">Nombre:</span>
                            <span className="col-span-3">{contactInfo.name}</span>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <span className="font-medium">Teléfono:</span>
                            <span className="col-span-2">{contactInfo.phone}</span>
                            <Button
                                size="icon"
                                variant="outline"
                                onClick={() => {
                                    copyToClipboard(contactInfo.phone)
                                    toast({
                                        description: "Teléfono copiado al portapapeles",
                                        className: "dark-toast bg-white bold text-4xl"
                                    })
                                }
                            }
                            >
                            <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <span className="font-medium">Correo:</span>
                            <span className="col-span-2 break-all">{contactInfo.email}</span>
                            <Button
                                size="icon"
                                variant="outline"
                                onClick={() => {
                                    copyToClipboard(contactInfo.email)
                                    // console.log('hola')
                                    toast({
                                        description: "Correo copiado al portapapeles",
                                        className: "bg-white", 
                                    })
                                }
                                }

                            >
                            <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-between space-x-2">
                        <Button onClick={openWhatsApp} variant="outline" className="flex-1 bg-primary text-primary-foreground bg-green-700 hover:bg-green-500">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            WhatsApp
                        </Button>
                        <Button onClick={openEmail} variant="outline" className="flex-1 bg-secondary text-white hover:bg-blue-500 bg-blue-700">
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}