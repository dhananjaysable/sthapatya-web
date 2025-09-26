"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "./Carousel"; // your existing Embla wrapper
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Client = { name: string; logo: string };

export function ClientsCarousel({ clients }: { clients: Client[] }) {
    const [emblaApi, setEmblaApi] = React.useState<CarouselApi | null>(null);
    const [isAutoplay, setIsAutoplay] = React.useState(true);

    // Pause autoplay after manual interaction, resume after 20s
    const pauseAutoplay = () => {
        setIsAutoplay(false);
        setTimeout(() => setIsAutoplay(true), 20000);
    };

    // Autoplay loop
    React.useEffect(() => {
        if (!emblaApi || !isAutoplay) return;

        const loop = setInterval(() => {
            if (!emblaApi) return;
            if (emblaApi.canScrollNext()) emblaApi.scrollNext();
            else emblaApi.scrollTo(0); // infinite loop
        }, 4000);

        return () => clearInterval(loop);
    }, [emblaApi, isAutoplay]);

    return (
        <div className="relative">
            <Carousel setApi={setEmblaApi}>
                <CarouselContent className="flex gap-4">
                    {clients.map((client, idx) => (
                        <CarouselItem key={idx}>
                            <motion.div
                                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 bg-gray-100 rounded-xl shadow-md flex flex-col items-center cursor-pointer"
                                onMouseEnter={pauseAutoplay}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -4, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
                            >
                                <div className="w-24 h-24 mb-3 rounded-full overflow-hidden shadow-sm">
                                    <ImageWithFallback
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="text-center text-sm font-medium text-[#95231c]">
                                    {client.name}
                                </h4>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious onClick={pauseAutoplay} />
                <CarouselNext onClick={pauseAutoplay} />
            </Carousel>
        </div>
    );
}
