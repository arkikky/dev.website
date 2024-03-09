import React, { useEffect } from "react";
import Image from "next/image";

// @components
import Container from "@components/Container";

// @layouts
import Footer from "@layouts/Footer";

const Home = () => {
  useEffect(() => {
    const awda = document.querySelector(".ca2024Main");

    awda.addEventListener("snapchanged", (event) => {
      console.info(event.invokedProgrammatically);
      console.log(event);
    });

    if (CSS.supports("scroll-snap-align: start")) {
      console.log("awdawd");
    } else {
      // use fallback
    }

    return () => {
      undefined;
    };
  }, []);

  return (
    <main className="ca2024Main">
      <section className="ca2024MainPoints bg-red-500 snap-start h-svh">
        <h1>awda</h1>
      </section>
      <section className="ca2024MainPoints bg-green-500 snap-start h-max">
        <div className="flex flex-col py-24">
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
          <h2>awdawd</h2>
        </div>
      </section>
      <section className="ca2024MainPoints bg-blue-500 snap-start h-svh">
        <h2>awdawd</h2>
      </section>

      {/* @footer */}
      <Footer />
    </main>
  );
};

export default Home;
