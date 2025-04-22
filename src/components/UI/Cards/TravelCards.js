import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Loading from '@components/UI/Loading/Loading';
import BottomSheetsTravel from '../BottomSheets/BottomSheetsTravel';

const TravelCards = ({
    url,
    name,
    images,
    item,
    captions = '',
    mobileSizeUp,
    openUrl,
}) => {
    const [ref, inView] = useInView({
        threshold: 1,
        rootMargin: '40% 0% 0% 0%',
        triggerOnce: true,
    });
    const [isLoading, setLoading] = useState(false);

    // @intersection-observer
    useEffect(() => {
        if (inView) {
            setLoading(true);
        }
    }, [inView]);

    const [selectedItem, setSelectedItem] = useState(null);
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleOpenSheet = (item) => {
        setSelectedItem(item);
        setShowBottomSheet(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseSheet = () => {
        setIsClosing(true);

        setTimeout(() => {
            setShowBottomSheet(false);
            document.body.style.overflow = '';
            setIsClosing(false);
        }, 300);
    };

    return (
        <div
            ref={ref}
            className={`relative p-4 rounded-xl border border-white transition-all duration-500 ${!isLoading ? 'min-h-[400px]' : ''
                }`}
        >
            {isLoading ? (
                <div onClick={() => handleOpenSheet(item)} className='cursor-pointer flex flex-col gap-4'>
                    <div className="w-full h-[330px] overflow-hidden rounded-md">
                        <Image
                            className="w-full h-full object-cover object-center"
                            src={images ?? '/assets/images/partners/ca25BluredPartner.svg'}
                            alt={`${captions} Travel`}
                            height={330}
                            width={392}
                            quality="87"
                            fetchPriority="auto"
                        />
                    </div>

                    <div className="flex flex-col text-white gap-2">
                        <h3 className="text-2xl font-semibold">{name}</h3>
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

                    <div className="flex flex-col text-white gap-2">
                        <h3 className="text-2xl font-semibold">From $543</h3>
                        <h4>Package price / person</h4>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center w-full h-full min-h-[400px]">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
                </div>
            )}

            {showBottomSheet && (
                <div className="fixed inset-0 z-[9999]">
                    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0" />

                    <button
                        onClick={handleCloseSheet}
                        className={`absolute bottom-[81vh] left-4 bg-primaryRed p-4 rounded-lg z-50 transition-all duration-300 ${isClosing ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                            }`}
                    >
                        <Image
                            src={'/assets/images/travel-page/ca25-cross.png'}
                            width={16}
                            height={16}
                            alt={`${publicRuntimeConfig?.siteAppName} Cross Icons`}
                            quality="87"
                        />
                    </button>

                    <div
                        className={`absolute scrollbar-hide bottom-0 w-full flex justify-center min-h-[80vh] max-h-[80vh] overflow-auto bg-regular rounded-t-3xl z-10 shadow-2xl ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}
                    >
                        <BottomSheetsTravel selectedItem={selectedItem} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TravelCards;
