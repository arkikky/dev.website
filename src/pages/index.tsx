import React, { useCallback, useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import Image from "next/image";

// @lib
import { getFetch } from "@lib/controller/FetchAPI";

const Home: React.FC = () => {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies([
    "acsAuthUser",
    "acsAuthToken",
  ]);
  const [isEmail, setEmail] = useState("");
  const [isPassword, setPassword] = useState("");

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const isData = {
        email: isEmail,
        password: isPassword,
      };

      const isUrl = "/api/authaccount/login";

      try {
        const rs = await getFetch(isUrl, isData);

        if (typeof rs === "object" && rs !== null) {
          if ("status" in rs) {
            if (rs.status === 500) {
              console.log("Akun anda tidak terdaftar");
            } else if (rs.status === 400 || rs.status === 401) {
              console.log("Password Anda tidak sesuai");
            } else if (rs.status === 201) {
              if (
                (cookies.acsAuthUser === undefined ||
                  cookies.acsAuthToken === false) &&
                (cookies.acsAuthToken === undefined ||
                  cookies.acsAuthToken === false)
              ) {
                const oneDay = 24 * 60 * 60;

                setCookie("acsAuthUser", rs.result.data.Id, {
                  path: "/",
                  maxAge: oneDay,
                  sameSite: true,
                });
                setCookie("acsAuthToken", rs.result.data.Token, {
                  path: "/",
                  maxAge: oneDay,
                  sameSite: true,
                });

                // @redirect-success (dashboard)
                router.push("/dashboard");
              }
            }
          } else {
            console.log("Unexpected response format");
          }
        }
      } catch (err) {
        console.error("Error:", err);
      }
    },
    [isEmail, isPassword]
  );

  return (
    <main className="relative">
      <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-0 relative h-full min-h-screen max-h-screen">
        <div className="col-span-full xl:col-span-6 hidden xl:flex xl:flex-col select-none pointer-events-none">
          <div className="block overflow-hidden relative h-screen">
            <Image
              className="object-cover object-center mx-auto h-full w-full"
              src="/assets/images/biro.perjalananLogin.jpg"
              alt="Biro.Perjalanan (Brand LOGO)"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              height={56}
              width={263}
              quality="87"
            />
          </div>
        </div>
        <div className="col-span-full xl:col-span-6">
          <div className="flex flex-col items-center justify-center bg-white relative py-13 sm:py-0 px-6 sm:px-28 lg:px-[88px] h-full">
            <div className="flex flex-col">
              <div className="block w-max">
                <Image
                  className="object-cover object-center mx-auto h-15 w-full"
                  src="/assets/images/biro.perjalananBrand.svg"
                  alt="Biro.Perjalanan (Header)"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  height={1024}
                  width={1440}
                  quality="87"
                />
              </div>
              <p className="text-black-900 font-poppins text-base font-normal mt-8">
                Selamat datang di aplikasi kami yang ramah pengguna, yang
                memberi Anda cara termudah dan ternyaman untuk merencanakan dan
                mengatur kebutuhan dokumentasi.
              </p>
            </div>
            <form
              className="flex flex-col mt-11 w-full"
              method="POST"
              onSubmit={(e) => onSubmit(e)}
            >
              <div className="space-y-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="block text-black-900 font-poppins text-base font-medium mb-3"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    className="flex flex-col rounded-lg border border-solid border-[#E5E7EB] font-poppins text-base font-normal py-6 px-7"
                    type="email"
                    placeholder="Masukkan Email Anda"
                    value={isEmail}
                    required
                    onChange={(e) =>
                      setEmail(e.target.value.toLocaleLowerCase())
                    }
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="block text-black-900 font-poppins text-base font-medium mb-3"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    className="flex flex-col rounded-lg border border-solid border-[#E5E7EB] font-poppins text-base font-normal py-6 px-7"
                    type="password"
                    placeholder="Masukkan Password Anda"
                    value={isPassword}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex mt-20">
                <button
                  id="authSubmitLogin"
                  type="submit"
                  aria-label="Auth Submit Login"
                  className="inline-flex flex-col items-center justify-center rounded-xl bg-primary text-white font-figtree text-base font-medium leading-inherit capitalize outline-none focus-visible:outline-none py-6 px-[50px] w-full"
                >
                  Masuk
                </button>
              </div>
            </form>
            <div className="block text-start mt-10 w-full">
              <p className="text-black-900 font-poppins text-sm font-normal">
                © 2024, Biro.Perjalanan, All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
