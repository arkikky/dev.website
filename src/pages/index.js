import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="pt-32 px-4 sm:px-32 h-auto min-h-[auto]">
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
