// import { useRouter } from "next/navigation"
import { ArrowRight } from 'lucide-react'
import PreviewNewCard from './PreviewNewCard.jsx'
import { motion, AnimatePresence } from 'framer-motion'
import { Skeleton } from "@/components/ui/skeleton"
import { useState, useEffect } from 'react'


import NewsService from '../../../services/NewsService.js'

export default function LatestNews() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);


    useEffect(() => {
        NewsService.getLatestNews()
            .then(res => { setData(res); setIsLoading(!isLoading); console.log("dataa", data) })
    }, [])

    // const router = useRouter();

    if (isLoading) {
        return (
        <>
        <div className="w-full h-96 ">
            <Skeleton className="h-full min-w-[200px]" />
        </div>
        <div className="w-full h-96 ">
            <Skeleton className="h-full min-w-[200px]" />
        </div>
        <div className="w-full h-96 ">
            <Skeleton className="h-full min-w-[200px]" />
        </div>
        </>)
    }

    return (
        <>
            {data && data.map((n, index) => (
                <motion.div
                    key={n.new.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg-6"
                >
                    <PreviewNewCard
                        id={n.new.id}
                        key={n.new.id}
                        title={n.new.title}
                        subtitle={n.new.subtitle}
                        img={n.new.image}
                        creation_date={n.new.creation_date}
                        handleRedirect={() => window.location = `/noticia?id=${n.new.id}`}
                    />
                </motion.div>
            ))
            }
        </>

    )
}