import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';

// @lib
import { smoothLeftScroll } from '@lib/helper/Configuration';
import Container from '@components/Container';

// @components
const TravelCards = dynamic(() => import('@components/UI/Cards/TravelCards'));

const TravelTabs = ({
    isCollections = {
        hotel: [],
        travel: [],
        transportations: [],
        concierge: []
    },
}) => {
    // @auto-scroll
    const handleTabAutoScroll = (e) => {
        const btnAttendeeTabs = e?.currentTarget;
        const containerTabs = btnAttendeeTabs?.parentElement;

        if (btnAttendeeTabs && containerTabs) {
            const targetScroll =
                btnAttendeeTabs.offsetLeft -
                (containerTabs.clientWidth - btnAttendeeTabs?.clientWidth) / 2;
            smoothLeftScroll(containerTabs, targetScroll);
        }
    };

    return (
        <>
            {/* @toggle(tabs) */}
            <div className="relative z-20 mx-4 flex flex-col rounded-2xl border-2 border-solid border-[#333333]/10 bg-black-900/[0.16] px-2 py-2 transition sm:mx-0 sm:px-4 sm:py-4">
                <nav
                    className={`flex w-full space-x-2 overflow-x-auto scrollbar-hide sm:space-x-4`}
                    aria-label="Tabs"
                    role="tablist"
                >
                    <button
                        id="ca25Tabs-Item1"
                        className="ca25Partner_Tabs active"
                        type="button"
                        role="tab"
                        aria-controls="ca25Tabs-1"
                        data-hs-tab="#ca25Tabs-1"
                        onClick={(e) => {
                            e.preventDefault();
                            handleTabAutoScroll(e);
                        }}
                    >
                        {`Hotel`}
                    </button>
                    <button
                        id="ca25Tabs-Item2"
                        className="ca25Partner_Tabs"
                        type="button"
                        role="tab"
                        aria-controls="ca25Tabs-2"
                        data-hs-tab="#ca25Tabs-2"
                        onClick={(e) => {
                            e.preventDefault();
                            handleTabAutoScroll(e);
                        }}
                    >
                        {`Travel`}
                    </button>
                    <button
                        id="ca25Tabs-Item3"
                        className="ca25Partner_Tabs"
                        type="button"
                        role="tab"
                        aria-controls="ca25Tabs-3"
                        data-hs-tab="#ca25Tabs-3"
                        onClick={(e) => {
                            e.preventDefault();
                            handleTabAutoScroll(e);
                        }}
                    >
                        Transportation
                    </button>
                    <button
                        id="ca25Tabs-Item4"
                        className="ca25Partner_Tabs"
                        type="button"
                        role="tab"
                        aria-controls="ca25Tabs-4"
                        data-hs-tab="#ca25Tabs-4"
                        onClick={(e) => {
                            e.preventDefault();
                            handleTabAutoScroll(e);
                        }}
                    >
                        Concierge
                    </button>
                </nav>
            </div>

            {/* @main(tabs) */}
            <Container className="relative z-20 mt-6 flex w-full flex-col lg:mt-8">
                <div id="ca25Tabs-1" role="tabpanel" aria-labelledby="ca25Tabs-Item1">
                    <div className="relative w-full">
                        <div className='flex flex-col w-full gap-3'>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-[28px] text-white font-semibold'>BOOK YOUR STAY</h2>
                                <p className='text-lg font-normal text-[#E5E7EB]/80'>Get special offers by booking a room from our partners!</p>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                                {isCollections?.hotel?.map((rslt, i) => (
                                    <Fragment key={i}>
                                        <TravelCards {...rslt} item={rslt} />
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {isCollections?.travel ? (
                    <div
                        id="ca25Tabs-2"
                        className="hidden"
                        role="tabpanel"
                        aria-labelledby="ca25Tabs-Item2"
                    >
                        <div className="relative w-full">
                            <div className='flex flex-col w-full gap-3'>
                                <div className='flex flex-col gap-2'>
                                    <h2 className='text-[28px] text-white font-semibold'>BOOK YOUR STAY</h2>
                                    <p className='text-lg font-normal text-[#E5E7EB]/80'>Get special offers by booking a room from our partners!</p>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                                    {isCollections?.travel?.map((rslt, i) => (
                                        <Fragment key={i}>
                                            <TravelCards {...rslt} />
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
                <div
                    id="ca25Tabs-3"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="ca25Tabs-Item3"
                >
                    <div className="relative w-full">
                        <div className='flex flex-col w-full gap-3'>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-[28px] text-white font-semibold'>BOOK YOUR STAY</h2>
                                <p className='text-lg font-normal text-[#E5E7EB]/80'>Get special offers by booking a room from our partners!</p>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                                {isCollections?.transportations?.map((rslt, i) => (
                                    <Fragment key={i}>
                                        <TravelCards {...rslt} />
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="ca25Tabs-4"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="ca25Tabs-Item4"
                >
                    <div className="relative w-full">
                        <div className='flex flex-col w-full gap-3'>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-[28px] text-white font-semibold'>BOOK YOUR STAY</h2>
                                <p className='text-lg font-normal text-[#E5E7EB]/80'>Get special offers by booking a room from our partners!</p>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                                {isCollections?.concierge?.map((rslt, i) => (
                                    <Fragment key={i}>
                                        <TravelCards {...rslt} />
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default TravelTabs;
