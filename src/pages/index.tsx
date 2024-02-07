import Image from "next/image";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <>
      <main
        className={`flex flex-col items-center overflow-scroll snap-y snap-mandatory justify-between `}
      >
        <div className=" snap-start bg-green-500 h-full min-h-[100dvh] max-h-[100dvh] relative w-full">
          <div className="absolute inset-y-0 inset-x-0">
            <ReactPlayer
              playing={true}
              loop={true}
              url="/ca2024HeroSection.mp4"
              width="100%"
              height="100%"
            />
          </div>
          <div className="bg-blue-500 absolute bottom-[11rem] top-auto inset-x-0 mx-auto h-[49px] w-full max-w-[80px]">
            awdaw
          </div>
        </div>
        <div className=" snap-start bg-gray-500 h-full min-h-[100svh] sm:min-h-screen max-h-[100svh] w-full">
          awdaw
        </div>
        <div className=" snap-start bg-blue-500 h-full min-h-[dvh] sm:min-h-screen w-full">
          wadwad
        </div>
        <div className="bg-red-500 fixed bottom-14 top-auto inset-x-0 mx-auto h-[79px] w-full max-w-[880px]">
          awdaw
        </div>
      </main>
    </>
  );
}
