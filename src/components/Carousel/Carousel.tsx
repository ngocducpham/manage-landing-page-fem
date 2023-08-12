import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import styles from "./Carousel.module.scss";

interface Props {
    items?: React.ReactNode[];
    className?: string;
}

export function Carousel(props: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "center"
    });

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return (
        <div className={cn(styles.embla, props.className)}>
            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.container}>
                    {props.items?.map((item, index) => (
                        <div key={index} className={styles.slide}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:hidden flex justify-center gap-4">
                {props.items?.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={cn(
                            "w-2 h-2 rounded-full border border-red-500",
                            { "bg-red-500": index === selectedIndex }
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
