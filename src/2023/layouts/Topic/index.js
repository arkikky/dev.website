import Container from "@components23/Container"
import TopikCard from "@components23/UI/Card/TopikCard";
import ImagesFill from "@components23/UI/ImagesFill"
import getConfig from "next/config";
import Image from "next/image";

const { publicRuntimeConfig } = getConfig();

const LyTopics = () =>{
    return(
        <>
        <section
          id="Topics"
          className=" text-center  relative py-24 sm:py-28 relative  overflow-hidden"
        >
                <div className="w-full pb-24">
                    <Container>
                        <h1 className="text-white text-2xl sm:text-[40px] sm:leading-[50px] mb-6 sm:mb-12 font-bold uppercase">Insights that you will get</h1>
                        <div className="supports-grid:grid grid-cols-2 min-[440px]:grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 gap-4">
                            <TopikCard 
                            title = "Finance & Asset Management"
                            desc = "Venture Capital (VC), Stablecoin, and Banking are essential pillars of modern finance, representing the cutting-edge ecosystem of investment, digital currency stability, and secure financial services. Discover the keys to financial success at our upcoming session on Finance & Asset Management."
                            src = "Finance"
                            />

                            <TopikCard 
                            title = "Impact-driven Innovations"
                            desc = "Dive deep into the next wave of positive change with web2.5 implementations, harnessing technology to drive meaningful impact, foster sustainability, and empower communities worldwide."
                            src = "ImpactDriven"
                            />

                            <TopikCard 
                            title = "Digital Trust & Data Revolution"
                            desc = "Navigate through a paradigm shift in the digital landscape as trust is redefined and data takes center stage, paving the way for a future where AI, security, and transparency reign supreme."
                            src = "DigitalTrust"
                            />

                            <TopikCard 
                            title = "Creativity & Ownership"
                            desc = "Immerse yourself in the realm of Creativity & Ownership, where NFTs, gaming, and the metaverse converge to empower creators, redefine ownership rights, and unleash limitless creative potential."
                            src = "Creativity"
                            />

                            <TopikCard 
                            title = "Crypto Market & Landscape"
                            desc = "Explore the dynamic world of cryptocurrencies through the lens of exchanges and analytics providers, gaining insights and tools to navigate this ever-evolving market successfully."
                            src = "CryptoMarket"
                            />
                        </div>

                    </Container>
                    
                </div>

                <div className="absolute top-auto xl:top-16 -left-[165px] xl:-left-[407px] right-auto -bottom-[143px] xl:bottom-auto h-[462px] xl:h-[965px] w-full max-w-[323px] xl:max-w-[675px] select-none pointer-events-none -z-[1]">
              <Image
                className="object-cover absolute top-auto inset-x-0 bottom-0 h-auto w-full"
                src={`/2023/assets/images/backdrop/coinfest-symbol-left.svg`}
                alt={`${publicRuntimeConfig.appName} (Coinfest Asia 2023 - Left Symbol Backdrop)`}
                height={985}
                width={695}
              />
            </div>
            <div className="absolute -top-[231px] xl:-top-[387px] left-auto -right-[141px] xl:-right-[361px] bottom-auto h-[462px] xl:h-[965px] w-full max-w-[323px] xl:max-w-[675px] select-none pointer-events-none -z-[1]">
              <Image
                className="object-cover absolute top-auto inset-x-0 bottom-0 h-auto w-full transform -rotate-180"
                src={`/2023/assets/images/backdrop/coinfest-symbol-left.svg`}
                alt={`${publicRuntimeConfig.appName} (Coinfest Asia 2023 - Left Symbol Backdrop)`}
                height={985}
                width={695}
              />
            </div>

            <div className="w-full h-full absolute bottom-0 overflow-hidden  -z-10">

            <Image
                    src={`/2023/assets/images/topics/wave.svg`}
                    alt="Background Image"
                    fill
                    style={{objectFit:"cover",objectPosition:"bottom"}}
                    
                />  
            </div>

            
            
            {/* <div className="absolute top-auto xl:top-16 -left-[165px] xl:-left-[407px] right-auto -bottom-[343px] xl:bottom-auto h-[462px] xl:h-[965px] w-full max-w-[323px] xl:max-w-[675px] select-none pointer-events-none z-20">
              <Image
                className="object-cover absolute top-auto inset-x-0 bottom-0 h-auto w-full"
                src={`/2023/assets/images/backdrop/coinfest-symbol-left.svg`}
                alt={`${publicRuntimeConfig.appName} (Coinfest Asia 2023 - Left Symbol Backdrop)`}
                height={985}
                width={695}
              />
            </div> */}
            {/* <div className="absolute -top-[231px] xl:-top-[387px] left-auto -right-[141px] xl:-right-[361px] bottom-auto h-[462px] xl:h-[965px] w-full max-w-[323px] xl:max-w-[675px] select-none pointer-events-none z-20">
              <Image
                className="object-cover absolute top-auto inset-x-0 bottom-0 h-auto w-full transform -rotate-180"
                src={`/2023/assets/images/backdrop/coinfest-symbol-left.svg`}
                alt={`${publicRuntimeConfig.appName} (Coinfest Asia 2023 - Left Symbol Backdrop)`}
                height={985}
                width={695}
              />
            </div> */}
            {/* <Image
              className="h-full w-full absolute"
              src={`/2023/assets/images/topics/wave.svg`}
              alt={`${publicRuntimeConfig.appName}`}
              priority={true}
            /> */}
        </section>
        
        </>
    )
}

export default LyTopics