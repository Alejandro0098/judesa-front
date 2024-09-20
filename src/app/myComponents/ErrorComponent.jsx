import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function ErrorComponent({ 
  message = "No se ha podido cargar la información de la página.", 
  failedSection = "la página"
} = {}) {
  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-50 p-4 bg-opacity-50 bg-grid-gray-100/[0.2] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0"></div>
      <div className="max-w-2xl w-full space-y-8 z-10">
        <div className="text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-destructive" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Error de carga</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">No se ha podido cargar {failedSection}.</p>
        </div>
        <Alert variant="destructive" className="mt-8">
          <AlertTitle>Detalles del error</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button onClick={handleReload} size="lg">
            Intentar recargar
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            Volver atrás
          </Button>
        </div>
      </div>
    </div>
  )
}