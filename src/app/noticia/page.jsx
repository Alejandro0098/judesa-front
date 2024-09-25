'use client'
import { useState, useEffect } from "react"
import ErrorComponent from '../myComponents/ErrorComponent'
import NewsService from "../services/NewsService"
import Image from "next/image"
import { useSearchParams, useRouter } from "next/navigation"
import NavComponent from "../myComponents/NavComponent"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function Page() {
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
            <main>
                <article className="max-w-5xl mx-auto px-8 py-5 bg-white my-4 rounded-lg shadow-lg">
                    {currentNew.tags && <h1
                        className="flex py-6 text-xl gap-2 font-bold hover:cursor-pointer hover:animate-pulse pb-8"
                        onClick={() => router.push('/noticias')}
                    >
                        <ArrowLeft size={18} className="self-center" /> Volver a Noticias
                    </h1>}
                    {currentNew && NewHeader(currentNew.new)}
                    <div className="prose max-w-none">
                        {currentNew?.tags?.map(row => mapTags(row))}
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

function mapTags(tag) {
    if (!tag) return;
    if (tag.type == "img") {
        return <img
            src={tag.link}
            width={800}
            height={400}
            alt={tag.alt}
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover rounded-lg mb-8 mx-auto"
        />
    }

    if (tag.type == "a") {
        return <a href={tag.link} className={tag.class_style}>{tag.content}</a>
    }

    if (tag.type == "h1") {
        return <h1 key={tag.id} href={tag.link} style={{ color: 'red' }} className={tag.class_style}>{tag.content}</h1>
    }

    if (tag.type == "h2") {
        return <h2 href={tag.link} className={tag.class_style}>{tag.content}</h2>
    }

    if (tag.type == "p") {
        return <p href={tag.link} className={'text-sm sm:text-base mb-6'}>{tag.content}</p>
    }

    if (tag.type == "iframe") {
        return (
            <Card className="mb-6">
                <CardContent className="p-0">
                    <iframe
                        width="100%"
                        height="500"
                        src={tag.link}
                        title="SpaceX Rocket Launch"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                </CardContent>
            </Card>)
    }
}

