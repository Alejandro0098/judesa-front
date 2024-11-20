// // @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Trash2, RefreshCw, Bold, Underline, Link } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

function mapTagName(tag) {
  const map = {
    "p": "Párrafo",
    "h1": "Título grande",
    "h2": "Título pequeño",
    "a": "Enlace",
    "ul": "Lista desordenada",
    "ol": "Lista ordenada",
    "img": "Imagen",
    "iframe": "Vídeo",
    "table": "Tabla",
  }
  return map[tag];
}

function mapSpecialText(option) {
  const map = {
    "default": "",
    "bold": " [NEG]  [/NEG]",
    "underline": " [SUB]  [/SUB]",
    "italic": " [CUR]  [/CUR]",
    "line-through": " [TACH]  [/TACH]",
  }

  const isValidOption = option in map;
  console.log(option in map, map[option])

  return isValidOption ? map[option] : map.default;
}

export default function WebBuilder() {
  const [elements, setElements] = useState([])
  const [selectedType, setSelectedType] = useState(null)
  const [currentElement, setCurrentElement] = useState(null)
  const [isBold, setIsBold] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')
  const [linkText, setLinkText] = useState('')
  const [selectedTextStart, setSelectedTextStart] = useState(0)
  const [selectedTextEnd, setSelectedTextEnd] = useState(0)

  const addElement = () => {
    if (currentElement) {
      setElements([...elements, { ...currentElement, styles: { bold: isBold, underline: isUnderline } }])
      setCurrentElement(null)
      setSelectedType(null)
      setIsBold(false)
      setIsUnderline(false)
    }
  }

  const deleteElement = (index) => {
    const newElements = [...elements]
    newElements.splice(index, 1)
    setElements(newElements)
  }

  const resetPage = () => {
    setElements([])
    setCurrentElement(null)
    setSelectedType(null)
    setIsBold(false)
    setIsUnderline(false)
  }

  const handleTextSelection = () => {
    const selection = window.getSelection()
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)
      const start = range.startOffset
      const end = range.endOffset
      console.log(start, end)
      setSelectedTextStart(start)
      setSelectedTextEnd(end)
    }
  }

  const addSpecialText = (option) => {
    const currentText = currentElement?.content || ''
    console.log(currentText + mapSpecialText(option))

    setCurrentElement({ ...currentElement, content: currentText + mapSpecialText(option) })
  }

  const insertLink = () => {
    if (currentElement && currentElement.content) {
      const before = currentElement.content.slice(0, selectedTextStart)
      const selected = currentElement.content.slice(selectedTextStart, selectedTextEnd)
      const after = currentElement.content.slice(selectedTextEnd)
      const newContent = `${before}<a href="${linkUrl}">${selected || linkText}</a>${after}`
      setCurrentElement({ ...currentElement, content: newContent })
    }
    setIsLinkDialogOpen(false)
    setLinkUrl('')
    setLinkText('')
  }

  const calculateYoutubeId = (url) => {
    try {
      const splitedUrl = url.split("/");

      if (splitedUrl.includes("live") || splitedUrl.includes("youtu.be")) {
        const stringWithId = splitedDomain.at(-1)
        const questionMarkPosition = stringWithId.indexOf("?")

        return questionMarkPosition == -1 
          ? stringWithId 
          : stringWithId.substring(0, questionMarkPosition) 
      }

      const splittedUrlParams = url.split("?");

      return splittedUrlParams[1].split("&").reduce((acc, cur) => {
        const [key, id] = cur.split("=");
        acc[key] = id;
        return acc
      }, {}).v

    } catch (e) {
      console.error(e)
      return 'undefined'
    }
  }

  const renderForm = () => {
    switch (selectedType) {
      case 'p':
      case 'h1':
      case 'h2':
      case 'li':
      case 'a':
        return (
          <div className="space-y-2">
            <Label htmlFor="content">Contenido</Label>
            <div className="flex items-center space-x-2 mb-2">
              <Button
                type="button"
                size="sm"
                variant={isBold ? "default" : "outline"}
                onClick={() => addSpecialText("bold")}
              >
                <Bold className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                size="sm"
                variant={isUnderline ? "default" : "outline"}
                onClick={() => addSpecialText("underline")}
              >
                <Underline className="h-4 w-4" />
              </Button>
              <Dialog open={isLinkDialogOpen} onOpenChange={setIsLinkDialogOpen}>
                <DialogTrigger asChild>
                  <Button type="button" size="sm" variant="outline">
                    <Link className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Insertar enlace</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2">
                    <Label htmlFor="linkUrl">URL del enlace</Label>
                    <Input
                      id="linkUrl"
                      value={linkUrl}
                      onChange={(e) => setLinkUrl(e.target.value)}
                    />
                    <Label htmlFor="linkText">Texto del enlace (opcional)</Label>
                    <Input
                      id="linkText"
                      value={linkText}
                      onChange={(e) => setLinkText(e.target.value)}
                    />
                    <Button onClick={insertLink}>Insertar enlace</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <Textarea
              id="content"
              value={currentElement?.content || ''}
              onChange={(e) => setCurrentElement({ ...currentElement, content: e.target.value })}
              onSelect={handleTextSelection}
            />
            {selectedType === 'a' && (
              <>
                <Label htmlFor="href">URL</Label>
                <Input
                  id="href"
                  value={currentElement?.attributes?.href || ''}
                  onChange={(e) => setCurrentElement({ ...currentElement, attributes: { ...currentElement.attributes, href: e.target.value } })}
                />
              </>
            )}
          </div>
        )
      case 'ul':
      case 'ol':
        return (
          <div className="space-y-2">
            <Label htmlFor="items">Elementos (uno por línea)</Label>
            <Textarea
              id="items"
              value={currentElement?.children?.map(child => child.content).join('\n') || ''}
              onChange={(e) => setCurrentElement({
                ...currentElement,
                children: e.target.value.split('\n').map(content => ({ type: 'li', content }))
              })}
            />
          </div>
        )
      case 'img':
        return (
          <div className="space-y-2">
            <Label htmlFor="src">URL de la imagen</Label>
            <Input
              id="src"
              value={currentElement?.attributes?.src || ''}
              onChange={(e) => setCurrentElement({ ...currentElement, attributes: { ...currentElement.attributes, src: e.target.value } })}
            />
            <Label htmlFor="alt">Texto alternativo</Label>
            <Input
              id="alt"
              value={currentElement?.attributes?.alt || ''}
              onChange={(e) => setCurrentElement({ ...currentElement, attributes: { ...currentElement.attributes, alt: e.target.value } })}
            />
          </div>
        )
      case 'iframe':
        return (
          <div className="space-y-2">
            <Label htmlFor="src">URL del video de YouTube</Label>
            <Input
              id="src"
              value={currentElement?.attributes?.src || ''}
              onChange={(e) => {
                setCurrentElement({ ...currentElement, attributes: { 
                  ...currentElement.attributes, 
                  src: `https://www.youtube.com/embed/${calculateYoutubeId(e.target.value)}`}})
              }}
            />
          </div>
        )
      case 'table':
        return (
          <div className="space-y-2">
            <Label htmlFor="rows">Número de filas</Label>
            <Input
              id="rows"
              type="number"
              min="1"
              value={currentElement?.attributes?.rows || '2'}
              onChange={(e) => setCurrentElement({
                ...currentElement,
                attributes: { ...currentElement.attributes, rows: e.target.value },
                children: Array(parseInt(e.target.value)).fill(null).map((_, rowIndex) => ({
                  type: 'tr',
                  children: Array(parseInt(currentElement?.attributes?.cols || '2')).fill(null).map((_, colIndex) => ({
                    type: 'td',
                    content: currentElement?.children?.[rowIndex]?.children?.[colIndex]?.content || ''
                  }))
                }))
              })}
            />
            <Label htmlFor="cols">Número de columnas</Label>
            <Input
              id="cols"
              type="number"
              min="1"
              value={currentElement?.attributes?.cols || '2'}
              onChange={(e) => setCurrentElement({
                ...currentElement,
                attributes: { ...currentElement.attributes, cols: e.target.value },
                children: (currentElement?.children || []).map(row => ({
                  ...row,
                  children: Array(parseInt(e.target.value)).fill(null).map((_, colIndex) => ({
                    type: 'td',
                    content: row.children?.[colIndex]?.content || ''
                  }))
                }))
              })}
            />
            <Table>
              <TableHeader>
                <TableRow>
                  {Array(parseInt(currentElement?.attributes?.cols || '2')).fill(null).map((_, i) => (
                    <TableHead key={i}>Columna {i + 1}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentElement?.children?.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {row.children?.map((cell, cellIndex) => (
                      <TableCell key={cellIndex}>
                        <Input
                          value={cell.content || ''}
                          onChange={(e) => {
                            const newChildren = [...(currentElement?.children || [])]
                            newChildren[rowIndex] = {
                              ...newChildren[rowIndex],
                              children: newChildren[rowIndex].children?.map((c, i) =>
                                i === cellIndex ? { ...c, content: e.target.value } : c
                              )
                            }
                            setCurrentElement({ ...currentElement, children: newChildren })
                          }}
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )
      // case 'googlemap':
      //   return (
      //     <div className="space-y-2">
      //       <Label htmlFor="location">Ubicación (ej: New York, NY)</Label>
      //       <Input
      //         id="location"
      //         value={currentElement?.attributes?.location || ''}
      //         onChange={(e) => {
      //           const location = encodeURIComponent(e.target.value)
      //           const embedUrl = `https://www.google.com/maps/embed/v1/place?q=${location}`
      //           setCurrentElement({
      //             ...currentElement,
      //             attributes: { ...currentElement.attributes, src: embedUrl, location: e.target.value }
      //           })
      //         }}
      //       />
      //     </div>
      //   )
      default:
        return null
    }
  }

  const renderElement = (element, index) => {
    const deleteButton = (
      <Button
        variant="destructive"
        size="sm"
        onClick={() => deleteElement(index)}
        className="ml-2"
        aria-label={`Eliminar ${element.type}`}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    )

    const applyStyles = (content) => {
      let styledContent = content
      if (element.styles?.bold) styledContent = `<strong>${styledContent}</strong>`
      if (element.styles?.underline) styledContent = `<u>${styledContent}</u>`
      return <span dangerouslySetInnerHTML={{ __html: styledContent }} />
    }

    switch (element.type) {
      case 'p':
        return <p className="flex items-center">{applyStyles(element.content || '')}{deleteButton}</p>
      case 'h1':
        return <h1 className="text-2xl font-bold flex items-center">{applyStyles(element.content || '')}{deleteButton}</h1>
      case 'h2':
        return <h2 className="text-xl font-semibold flex items-center">{applyStyles(element.content || '')}{deleteButton}</h2>
      case 'a':
        return (
          <div className="flex items-center">
            <a href={element.attributes?.href} className="text-blue-600 hover:underline">{applyStyles(element.content || '')}</a>
            {deleteButton}
          </div>
        )
      case 'ul':
        return (
          <div className="flex items-start">
            <ul className="list-disc list-inside">
              {element.children?.map((child, childIndex) => <li key={childIndex}>{applyStyles(child.content || '')}</li>)}
            </ul>
            {deleteButton}
          </div>
        )
      case 'ol':
        return (
          <div className="flex items-start">
            <ol className="list-decimal list-inside">
              {element.children?.map((child, childIndex) => <li key={childIndex}>{applyStyles(child.content || '')}</li>)}
            </ol>
            {deleteButton}
          </div>
        )
      case 'li':
        return <li className="flex items-center">{applyStyles(element.content || '')}{deleteButton}</li>
      case 'img':
        return (
          <div className="flex items-start">
            <img src={element.attributes?.src} alt={element.attributes?.alt} className="max-w-full h-auto" />
            {deleteButton}
          </div>
        )
      case 'iframe':
        return (
          <div className="flex items-start">
            <iframe src={element.attributes?.src} className="w-full aspect-video" allowFullScreen></iframe>
            {deleteButton}
          </div>
        )
      case 'table':
        return (
          <div className="flex items-start">
            <Table>
              <TableHeader>
                <TableRow>
                  {Array(parseInt(element.attributes?.cols || '2')).fill(null).map((_, i) => (
                    <TableHead key={i}>Columna {i + 1}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {element.children?.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {row.children?.map((cell, cellIndex) => (
                      <TableCell key={cellIndex}>{applyStyles(cell.content || '')}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {deleteButton}
          </div>
        )
      // case 'googlemap':
      //   return (
      //     <div className="flex items-start">
      //       <iframe
      //         src={element.attributes?.src}
      //         className="w-full aspect-video"
      //         allowFullScreen
      //         loading="lazy"
      //         referrerPolicy="no-referrer-when-downgrade"
      //       ></iframe>
      //       {deleteButton}
      //     </div>
      //   )
      default:
        return <></>
    }
  }

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Constructor de Noticias</h1>
      <div className="flex flex-wrap gap-2 mb-4">
        {(['p', 'h1', 'h2', 'a', 'ul', 'ol', 'img', 'iframe', 'table']).map((type) => (
          <Button
            key={type}
            onClick={() => {
              setSelectedType(type)
              setCurrentElement({ type, attributes: {} })
            }}
            variant={selectedType === type ? 'default' : 'outline'}
          >
            {mapTagName(type)}
          </Button>
        ))}
      </div>
      {selectedType && (
        <Card className="p-4 space-y-4">
          {renderForm()}
          <Button onClick={addElement}>Añadir elemento</Button>
        </Card>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Vista previa</h2>
            <Button variant="outline" onClick={resetPage}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Resetear página
            </Button>
          </div>
          <div className="border p-4 min-h-[200px] space-y-2">
            {elements.map((element, index) => (
              <div key={index}>{renderElement(element, index)}</div>
            ))}
          </div>
        </Card>
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-2">JSON</h2>
          <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
            {JSON.stringify(elements, null, 2)}
          </pre>
        </Card>
      </div>
    </div>
  )
}