import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import Link from "next/link";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [cookies, removeCookie] = useCookies();

  const logOutHandler = useCallback(async () => {
    if (
      cookies.acsAuthUser !== undefined &&
      cookies.acsAuthToken !== undefined
    ) {
      removeCookie("acsAuthUser", false);
      removeCookie("acsAuthToken", false);

      router.push("/");
    }
  }, []);

  return (
    <>
      <main>
        <section className="bg-red-500 fixed h-full w-[300px] -translate-x-full lg:translate-x-0">
          awdawd
          <Link href={"/turist"}>Turist</Link>
        </section>
        <section className="ml-0 lg:ml-[300px] pt-[86px] pl-6 pr-7">
          <h1>Turist</h1>
          <button
            onClick={(e) => {
              e.preventDefault();

              logOutHandler();
            }}
          >
            Logout
          </button>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
