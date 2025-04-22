import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";

// @get .config
const { publicRuntimeConfig } = getConfig();

const ListPartnersTravelCards = ({
    img,
    name,
    desc
}) => {
    return (
        <div className="flex flex-col lg:flex-row w-full gap-6">
            <div className="h-[355px] sm:h-[250px] xl:h-[355px] w-full lg:w-[60%] flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                    className={'aspect-auto h-full w-full object-cover object-center'}
                    src={img}
                    alt={`${publicRuntimeConfig?.siteAppName} ${name}`}
                    height={120}
                    width={244.8}
                    quality="87"
                    fetchPriority="auto"
                />
            </div>
            <div className="flex text-white items-start flex-col gap-4">
                <h3>{name}</h3>
                <p>{desc}</p>
                <div className="w-full lg:py-0 py-6 justify-center">
                    <Link href={'/travel'} className="bg-primaryBlue rounded-xl text-base p-4 text-white">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ListPartnersTravelCards;