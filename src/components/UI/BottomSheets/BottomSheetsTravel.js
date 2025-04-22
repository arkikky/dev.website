import { Splide, SplideSlide } from "@splidejs/react-splide";
import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const { publicRuntimeConfig } = getConfig();

const BottomSheetsTravel = ({
    selectedItem
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mainSlider, setMainSlider] = useState(null);

    return (
        <div className="py-12 h-full w-[95%] sm:w-[80%] lg:w-[50%] flex flex-col overflow-y-auto">
            {
                images.length > 1 ?
                    <div className="flex flex-row gap-[2px]">
                        <div
                            className="group custom-splide-arrow relative w-full min-h-[350px] overflow-hidden rounded-lg"
                        >
                            <Splide
                                options={{
                                    type: 'fade',
                                    arrows: true,
                                    pagination: false,
                                    rewind: true,
                                    interval: 3000,
                                    drag: true,
                                }}
                                onMounted={(splide) => setMainSlider(splide)}
                                onMove={(splide) => setCurrentSlide(splide.index)}
                                className="h-full w-full"
                            >
                                {images.map((imgSrc, idx) => (
                                    <SplideSlide key={idx}>
                                        <div className="relative w-full h-[350px]">
                                            <Image
                                                src={imgSrc}
                                                alt={`Image ${idx}`}
                                                fill
                                                className="object-cover object-center rounded-lg"
                                            />
                                        </div>
                                        <div className="absolute bottom-3 bg-white/30 text-primaryDark backdrop-blur-sm right-4 text-xs font-light p-3 rounded-lg z-10">
                                            {idx + 1} / {images.length}
                                        </div>
                                    </SplideSlide>
                                ))}
                            </Splide>
                            <style jsx global>{`
                .custom-splide-arrow .splide__arrow {
                    opacity: 0;
                    transition: opacity 0.3s ease-in-out;
                    }
                    
                    .custom-splide-arrow:hover .splide__arrow {
                        opacity: 1;
                        }
                        `}</style>
                        </div>
                        <div className="md:flex hidden w-[25%] flex-col gap-[2px] h-[350px] overflow-hidden">
                            {images.slice(0, 3).map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        setCurrentSlide(index);
                                        mainSlider?.go(index);
                                    }}
                                    className={`relative w-full h-[120px] rounded-lg cursor-pointer border-2 ${index === currentSlide ? 'border-primaryRed' : 'border-transparent'
                                        }`}
                                >
                                    <Image
                                        src={item}
                                        alt={`Thumbnail ${index}`}
                                        fill
                                        className="object-cover object-center rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    <div className='min-w-full lg:min-w-[700px] relative min-h-[350px]'>
                        <Image
                            src={selectedItem?.images ?? '/assets/images/partners/ca25BluredPartner.svg'}
                            alt="Selected"
                            fill
                            className="object-cover object-center rounded-lg"
                        />
                    </div>
            }
            <div className='flex text-white mt-9 flex-col md:flex-row lg:gap-0 gap-6 w-full justify-between'>
                <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold text-2xl'>{selectedItem?.name}</h3>
                    <div className='flex flex-col gap-2'>
                        <div className="flex flex-row gap-2">
                            <Image
                                className="h-5 w-4"
                                src={'/assets/images/travel-page/icon-destination.png'}
                                alt={`${publicRuntimeConfig?.siteAppName} Travel Destination Icons`}
                                height={20}
                                width={20}
                                quality="87"
                            />
                            <h4>0.5 miles to venue</h4>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image
                                className="h-5 w-5"
                                src={'/assets/images/travel-page/icon-star.png'}
                                alt={`${publicRuntimeConfig?.siteAppName} Travel Star Icons`}
                                height={20}
                                width={20}
                                quality="87"
                            />
                            <h4>5 star hotel</h4>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-col gap-1'>
                        <h3 className="text-2xl font-semibold">From $543</h3>
                        <h4>Package price / person</h4>
                    </div>
                    <button className="bg-primaryBlue rounded-xl text-base p-4 text-white">
                        See available rooms
                    </button>
                </div>
            </div>
            <div>
                <div className="w-full h-[1px] my-6 bg-secondaryGray" />
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-7 gap-4">
                <div className="flex flex-col col-span-3 gap-4 w-full text-white">
                    <h3 className="text-2xl font-semibold">About this place</h3>
                    <div className="flex flex-row gap-5 items-center">
                        <div className="bg-primaryBlue font-medium p-3 rounded-lg">
                            <span className="text-white text-2xl font-semibold">8.4</span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h3 className="text-2xl font-semibold">Very Good</h3>
                            <h4>248 reviews</h4>
                        </div>
                    </div>
                    <ReadMoreText text="SeaForever Room with a view is one of the most special spots on the North Coast. Lie in bed and enjoy the view... Literally SeaForever. You can enjoy your own verandah or enjoy an incredible view on your own viewing deck. You have the choice of your own en suite bathroom with shower, bath, basin and loo or the luxury of a hot private shower under the stars. You will have the use of our beach access path down to a quiet beach 150 m below us," />
                </div>
                <div className="col-span-1 items-center w-full justify-center hidden md:flex">
                    <div className="w-[1px] h-full my-6 col-span-1 bg-secondaryGray" />
                </div>
                <div className="md:hidden flex">
                    <div className="w-full h-[1px] my-6 bg-secondaryGray" />
                </div>
                <div className="flex flex-col col-span-3 gap-4 text-white w-full">
                    <h3 className="text-2xl font-semibold">Popular amenities</h3>
                    {
                        amenities.map((item) => (
                            <div className="flex flex-row gap-2 w-full">
                                <Image
                                    className="h-5 w-5"
                                    src={'/assets/images/travel-page/ca25-check.png'}
                                    alt={`${publicRuntimeConfig?.siteAppName} Check Icons`}
                                    height={20}
                                    width={20}
                                    quality="87"
                                />
                                <h5>{item}</h5>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="w-full h-[1px] my-6 bg-secondaryGray" />
            </div>
            <div className="flex flex-col gap-6 text-white">
                <h3 className="text-2xl font-semibold">Select your rooms</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
                    {
                        rooms.map((item) => (
                            <div className="border p-2 flex flex-col gap-2 border-white rounded-xl">
                                <div className="w-full h-[350px] md:h-[200px] overflow-hidden rounded-2xl">
                                    <Image
                                        className="w-full rounded-xl h-full object-cover object-center"
                                        src={'/assets/images/travel-page/dummy-travel.png' ?? '/assets/images/partners/ca25BluredPartner.svg'}
                                        alt={`Rooms Travel`}
                                        height={250}
                                        width={300}
                                        quality="87"
                                        fetchPriority="auto"
                                    />
                                </div>
                                <div className="flex flex-col text-white gap-4">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <div className="flex flex-row gap-2">
                                        <Image
                                            className="h-5 w-4"
                                            src={'/assets/images/travel-page/ca25-people.png'}
                                            alt={`${publicRuntimeConfig?.siteAppName} Travel Destination Icons`}
                                            height={20}
                                            width={20}
                                            quality="87"
                                        />
                                        <h5>Sleeps {item.people}</h5>
                                    </div>
                                    <h3 className="text-lg font-semibold">$400</h3>
                                </div>
                                <h4>Package price / person</h4>
                                <Link href="mailto:" className="bg-primaryBlue text-center font-semibold rounded-3xl text-base p-4 text-white">
                                    Book now
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="w-full h-[1px] my-6 bg-secondaryGray" />
            </div>
            <div className="flex flex-col gap-6 text-white">
                <h3 className="text-2xl font-semibold">Hotel location</h3>
                <p>Jl. Raya Canggu No.88, Pererenan, Kec. Kuta Utara, Kabupaten Badung, Bali 80361</p>
                <div className="w-full h-[450px] overflow-hidden rounded-xl">
                    <iframe
                        src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`} allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0 }}
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
            <div>
                <div className="w-full h-[1px] my-6 bg-secondaryGray" />
            </div>
            <div className="grid grid-cols-1 gap-4 w-full">
                {
                    testimonies.map((item) => (
                        <div className="border border-white p-4 rounded-2xl flex flex-col">
                            <div className="flex text-white flex-col gap-1">
                                <div className="flex flex-row justify-between">
                                    <span className="text-lg font-semibold text-primaryRed">{item.rate} / 10</span>
                                    <h4 className="text-lg">{item.date}</h4>
                                </div>
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                            </div>
                            <div>
                                <p className="text-white font-light">{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default BottomSheetsTravel;


const ReadMoreText = ({ text, maxLength = 300 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => setIsExpanded(!isExpanded);

    const displayText = isExpanded ? text : text.slice(0, maxLength) + (text.length > maxLength ? '...' : '');

    return (
        <div className="space-y-2">
            <p>{displayText}</p>
            {text.length > maxLength && (
                <div className="flex justify-start">
                    <button
                        className="text-primaryRed font-medium"
                        onClick={toggleReadMore}
                    >
                        {isExpanded ? 'Read less' : 'Read more'}
                    </button>
                </div>
            )}
        </div>
    );
};

const images = [
    '/assets/images/travel-page/dummy-travel.png',
    '/assets/images/travel-page/ca25-dummy-partners.png',
    '/assets/images/travel-page/dummy-travel.png',
    '/assets/images/travel-page/ca25-dummy-partners.png',
]

const address = 'Jl. Raya Canggu No.88, Pererenan, Kec. Kuta Utara, Kabupaten Badung, Bali 80361'

const amenities = [
    'Free Wifi', 'Free Parking', 'Gym Fitness', 'Pool', 'Airport Shuttle'
]

const rooms = [
    {
        name: 'Rooms 1',
        people: '2 people',
    },
    {
        name: 'Rooms 2',
        people: '2 people',
    },
    {
        name: 'Rooms 2',
        people: '2 people',
    }
]

const testimonies = [
    {
        name: 'Fransisca S. C.',
        desc: 'It was perfect, the ambience was great, the food taste was good, the staffs were friendly. Will be back.',
        rate: '8',
        date: '4 Mar 2025'
    },
    {
        name: 'Fransisca S. C.',
        desc: 'It was perfect, the ambience was great, the food taste was good, the staffs were friendly. Will be back.',
        rate: '8',
        date: '4 Mar 2025'
    },
    {
        name: 'Fransisca S. C.',
        desc: 'I love this hotel. The room was nice. My husband and my son happy when enter the room and directly enjoyed the lagoon. The location also great, you can walk around to the mart and restaurant, even the beach',
        rate: '8',
        date: '4 Mar 2025'
    },
]