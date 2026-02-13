import { useEffect, useState } from 'react'

export const useAutoScroll = (emblaApi) => {
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (!emblaApi) return

            const autoScroll = emblaApi.plugins()?.autoScroll
            if (!autoScroll) return

            const syncState = () => {
            setIsPlaying(autoScroll.isPlaying())
        }

        syncState()

        emblaApi
            .on('autoscroll:play', syncState)
            .on('autoscroll:stop', syncState)
            .on('reInit', syncState)

        return () => {
            emblaApi
                .off('autoscroll:play', syncState)
                .off('autoscroll:stop', syncState)
                .off('reInit', syncState)
        }
    }, [emblaApi])

    return { isPlaying }
}
