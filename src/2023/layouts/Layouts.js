import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Script from "next/script";

// Layouts - Components
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layouts = ({ children }) => {
  const router = useRouter();
  const [pageFoodOrder, setPageFootOrder] = useState(null)

  useEffect(() => {
    if (router.asPath !== "/agenda") {
      const setBody = document.body;

      setBody.classList.remove("bg-[#F1F3F9]");
    } else if (router.pathname === "/agenda/[slug}]") {
      setBody.classList.add("bg-[#F1F3F9]");
    }
    if(router.asPath === "/food-order"){
      setPageFootOrder(true)
    } else{
      setPageFootOrder(false)
    }
  }, [router]);

  return (
    <>
      <div className={`${pageFoodOrder? "hidden": ""}`}>
      <Navbar />
      </div>

      {children}

      <div className={`${pageFoodOrder? "hidden": ""}`}>
      <Footer />
      </div>

      {/* JavaScript */}
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
        !function(e,t,n,s,u,a)
        {e.twq ||
          ((s = e.twq =
            function () {
              s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
            }),
          (s.version = "1.1"),
          (s.queue = []),
          (u = t.createElement(n)),
          (u.async = !0),
          (u.src = "https://static.ads-twitter.com/uwt.js"),
          (a = t.getElementsByTagName(n)[0]),
          a.parentNode.insertBefore(u, a))}
        (window,document,'script'); twq('config','o9kyj');
        `,
        }}
      ></Script>
    </>
  );
};

export default Layouts;
