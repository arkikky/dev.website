import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useRef, useState } from "react";
import "@splidejs/react-splide/css";
import Image from "next/image";

const HeaderTravel = () => {
    const splideRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
        const imageLoadStatus = images.map(() => false);
        setLoadedImages(imageLoadStatus);
    
        images.forEach((img, index) => {
            const image = new window.Image();
            image.src = img.src;
            image.onload = () => {
                setLoadedImages(prev => {
                    const newStatus = [...prev];
                    newStatus[index] = true;
                    return newStatus;
                });
            };
        });
    }, [images]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Splide
                ref={splideRef}
                onMounted={(splide) => setCurrentIndex(splide.index)}
                onMoved={(splide) => setCurrentIndex(splide.index)}
                options={{
                    type: 'fade',
                    height: '100vh',
                    autoplay: true,
                    rewind: true,
                    arrows: false,
                    pagination: false,
                    drag: true,
                    interval: 5000,
                }}
                className="h-full"
            >
                {images.map((img, idx) => (
                    <SplideSlide key={idx}>
                        <div className="relative w-full h-screen">
                            {!loadedImages[idx] && (
                                <div className="absolute inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
                                </div>
                            )}
                            <Image
                                src={img.src}
                                alt={img.title}
                                fill
                                className={`object-cover transition-opacity duration-500 ${loadedImages[idx] ? "opacity-100" : "opacity-0"
                                    }`}
                                priority={idx === 0}
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

                            <div className="absolute z-20 w-fill text-white flex flex-col gap-6 top-1/2 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1/2 text-center px-4">
                                <h1 className="text-4xl sm:text-7xl font-bold font-boren">{img.title}</h1>
                                <p className="text-base font-medium font-bevietnamPro">{img.subtitle}</p>
                                <div className="w-full justify-center">
                                    <button className="bg-primaryBlue rounded-xl text-base p-4 text-white">
                                        Become our Partners
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>

            <div className="absolute bottom-6 left-1/2 transform bg-[#BFBFBF]/30 p-2 rounded-full -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            splideRef.current?.splide?.go(idx);
                            setCurrentIndex(idx);
                        }}
                        className={`w-2 h-2 rounded-full ${currentIndex === idx ? 'bg-primaryDark' : 'bg-primaryDark/30'
                            } transition duration-300`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeaderTravel;


const images = [
    {
        src: '/assets/images/travel-page/carousel-1.png',
        title: 'TRAVEL TO BALI HASSLE-FREE',
        subtitle: 'Pack your bags and get ready to feel the summer heat as Bali will be packed with global Web2 and Web3 institutions & communities. Book your stay for Coinfest Asia 2025 and get special rates from our partners. From luxurious hotels to budget-friendly villas, our partners have you covered.',
    },
    {
        src: '/assets/images/travel-page/carousel-2.png',
        title: 'TRAVEL TO BALI HASSLE-FREE',
        subtitle: 'Pack your bags and get ready to feel the summer heat as Bali will be packed with global Web2 and Web3 institutions & communities. Book your stay for Coinfest Asia 2025 and get special rates from our partners. From luxurious hotels to budget-friendly villas, our partners have you covered.',
    },
    {
        src: '/assets/images/travel-page/carousel-3.png',
        title: 'TRAVEL TO BALI HASSLE-FREE',
        subtitle: 'Pack your bags and get ready to feel the summer heat as Bali will be packed with global Web2 and Web3 institutions & communities. Book your stay for Coinfest Asia 2025 and get special rates from our partners. From luxurious hotels to budget-friendly villas, our partners have you covered.',
    },
];