import React, { useEffect } from "react";
import { useRouter } from "next/router";
import getConfig from "next/config";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @css-style (Global)
import "@styles/globals.css";

// @layouts
import Layouts from "@layouts/Layouts";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  // @preline (Add Plugins)
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  // @body
  useEffect(() => {
    const body = document.body;

    if (router.pathname === "/") {
      if (!body.classList.contains("overflow-y-hidden")) {
        body.classList.add("overflow-y-hidden");
      }
    } else {
      if (body.classList.contains("overflow-y-hidden")) {
        body.classList.remove("overflow-y-hidden");
      }
    }

    return () => {
      undefined;
    };
  }, [router]);

  // @wihtout (navbar & footer)
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
};

export default App;
