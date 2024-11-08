// @ts-nocheck
'use client'
import { useState, useEffect, Suspense } from "react"
import ErrorComponent from '../myComponents/ErrorComponent'
import NewsService from "../services/NewsService"
import Image from "next/image"
import { useSearchParams, useRouter } from "next/navigation"
import NavComponent from "../myComponents/NavComponent"
import { ArrowLeft, ArrowRight } from "lucide-react"
import LoadingComponent from '../myComponents/LoadingComponent.jsx'

export default function Page() {
    return <Suspense fallback={LoadingComponent}>
        <New />
    </Suspense>
}

function New() {
    const [currentNew, setNew] = useState({})
    const params = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        const id = params.get("id");
        if (!id) router.push("/noticias");

        NewsService.getNewById(id)
            .then(data => {
                setNew(data)
            })
            .catch(e => {
                setNew({ "error": e })
            })
        return () => { setNew({}) }
    }, [])

    return currentNew?.error
        ? <>
            <NavComponent />
            <main>
                <ErrorComponent message={currentNew.error.toString()}></ErrorComponent>
            </main>
        </>
        :
        <>
            <NavComponent />
            <main className="bg-gray-800">
                <article className="max-w-5xl mx-auto px-8 py-5 bg-white my-4 rounded-lg shadow-lg">
                    {currentNew.tags && <h1
                        className="flex py-6 text-xl gap-2 font-bold hover:cursor-pointer hover:animate-pulse pb-8"
                        onClick={() => router.push('/noticias')}
                    >
                        <ArrowLeft size={18} className="self-center" /> Volver a Noticias
                    </h1>}
                    {currentNew && NewHeader(currentNew.new)}
                    <div className="prose max-w-none">
                        {currentNew?.tags?.map(element => renderElement(element))}
                    </div>
                    {currentNew.tags && <h1
                        className="flex py-6 text-xl gap-2 font-bold hover:cursor-pointer hover:animate-pulse pb-8"
                        onClick={() => router.push('/noticias')}
                    >
                        <ArrowLeft size={18} className="self-center" /> Volver a Noticias
                    </h1>}
                </article>
            </main>
        </>
}

function NewHeader(currentNew) {
    if (!currentNew) return
    return (
        <>
            <img
                src={currentNew.image}
                width={800}
                height={400}
                alt={currentNew.title}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-lg mb-8 mx-auto"
            />
            <header>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{currentNew.title}</h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-4">{currentNew.subtitle}</p>
                <time dateTime="2023-07-15" className="text-sm text-gray-500">
                    Publicada en {currentNew.creation_date}
                </time>
            </header>
        </>
    )
}

const renderElement = (element) => {
    const applyStyles = (content) => {
      let styledContent = content
      if (element.styles?.bold) styledContent = `<strong>${styledContent}</strong>`
      if (element.styles?.underline) styledContent = `<u>${styledContent}</u>`
      return <span dangerouslySetInnerHTML={{ __html: styledContent }} />
    }

    switch (element.type) {
      case 'p':
        return <p className="flex items-center">{applyStyles(element.content || '')}</p>
      case 'h1':
        return <h1 className="text-2xl font-bold flex items-center">{applyStyles(element.content || '')}</h1>
      case 'h2':
        return <h2 className="text-xl font-semibold flex items-center">{applyStyles(element.content || '')}</h2>
      case 'a':
        return (
          <div className="flex items-center">
            <a href={element.attributes?.href} className="text-blue-600 hover:underline">{applyStyles(element.content || '')}</a>
          </div>
        )
      case 'ul':
        return (
          <div className="flex items-start">
            <ul className="list-disc list-inside">
              {element.children?.map((child, childIndex) => <li key={childIndex}>{applyStyles(child.content || '')}</li>)}
            </ul>
          </div>
        )
      case 'ol':
        return (
          <div className="flex items-start">
            <ol className="list-decimal list-inside">
              {element.children?.map((child, childIndex) => <li key={childIndex}>{applyStyles(child.content || '')}</li>)}
            </ol>
          </div>
        )
      case 'li':
        return <li className="flex items-center">{applyStyles(element.content || '')}{deleteButton}</li>
      case 'img':
        return (
          <div className="flex items-start">
            <img src={element.attributes?.src} alt={element.attributes?.alt} className="max-w-full h-auto" />
          </div>
        )
      case 'iframe':
        return (
          <div className="flex items-start">
            <iframe src={element.attributes?.src} className="w-full aspect-video" allowFullScreen></iframe>
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
      //     </div>
      //   )
      default:
        return <></>
    }
  }

// function mapTags(tag) {
//     if (!tag) return;
//     if (tag.type == "img") {
//         return <img
//             src={tag.link}
//             width={800}
//             height={400}
//             alt={tag.alt}
//             className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-lg mb-8 mx-auto"
//         />
//     }

//     if (tag.type == "a") {
//         return <a href={tag.link} className={tag.class_style}>{tag.content}</a>
//     }

//     if (tag.type == "h1") {
//         return <h1 key={tag.id} href={tag.link} style={{ color: 'red' }} className={tag.class_style}>{tag.content}</h1>
//     }

//     if (tag.type == "h2") {
//         return <h2 href={tag.link} className={tag.class_style}>{tag.content}</h2>
//     }

//     if (tag.type == "p") {
//         return <p href={tag.link} className={'text-sm sm:text-base mb-6'}>{tag.content}</p>
//     }

//     if (tag.type == "iframe") {
//         return (
//             <Card className="mb-6">
//                 <CardContent className="p-0">
//                     <iframe
//                         width="100%"
//                         height="500"
//                         src={tag.link}
//                         title="SpaceX Rocket Launch"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         className="rounded-lg"
//                     ></iframe>
//                 </CardContent>
//             </Card>)
//     }
// }

