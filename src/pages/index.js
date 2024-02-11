import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full">
      <div className="bg-gray-400">
        <div className="container">
          <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-6 border-x border-solid border-black-900 relative py-6 sm:py-15 px-4 sm:px-8">
            <div className="col-span-full lg:col-span-6">
              <h2 className="text-black-900 font-figtree text-2xl font-bold uppercase">
                Join +6,000 readers who get weekly insights to the Indonesian
                crypto market
              </h2>
            </div>
            <div className="col-span-full lg:col-span-6 flex flex-col items-center justify-center">
              <form
                id="icnSubsribeForm"
                className="flex felx-col relative mt-6 lg:mt-0 w-full"
                method="POST"
              >
                <div className="flex flex-col sm:flex-row relative w-full">
                  <input
                    id="icnEmailSubscrbie"
                    className="inline-flex border-none text-black-900 placeholder:text-black-900 font-figtree text-xl font-normal py-4 px-4 w-fill"
                    type="email"
                    name="icnEmail"
                    placeholder="mymail@example.com"
                    required
                  />
                  <button
                    id="icnSubmitEmailSubscribe"
                    type="submit"
                    aria-label="ICN Submit Email Subscribe"
                    className="inline-flex flex-col items-center justify-center rounded-none sm:rounded-tr-3xl bg-black-900 text-white font-figtree text-base font-medium leading-inherit uppercase outline-none   focus-visible:outline-none py-4 px-[50px] w-full sm:w-max"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 px-4 sm:px-32 h-auto min-h-[auto] w-full">
        <form method="POST" className="flex flex-col w-full">
          <div className="flex flex-col mb-4 last:mb-0">
            <label
              htmlFor="inputFirstname"
              className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
            >
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="inputFirstname"
              className={`form-input inline-flex bg-white rounded-lg border border-solid text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4 w-full`}
              name="firstname"
              placeholder="Michael"
            />
          </div>
          <div className="flex flex-col mb-4 last:mb-0">
            <label
              htmlFor="inputFirstname"
              className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
            >
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="inputFirstname"
              className={`form-input inline-flex bg-white rounded-lg border border-solid text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4 w-full`}
              name="firstname"
              placeholder="Michael"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
