import Image from "next/image";

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center overflow-scroll snap-y snap-mandatory justify-between `}
    >
      <div className=" snap-start bg-green-500 h-full min-h-[100svh] w-full">
        awdaw
      </div>
      <div className=" snap-start bg-gray-500 h-full min-h-[100dvh] w-full">
        awdaw
      </div>
      <div className=" snap-start bg-blue-500 h-full min-h-screen w-full">
        wadwad
      </div>
      <div className="bg-red-500 fixed bottom-20 top-auto inset-x-0 mx-auto w-full max-w-[880px]">
        awdaw
      </div>
    </main>
  );
}
