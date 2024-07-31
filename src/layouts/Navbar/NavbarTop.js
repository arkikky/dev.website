import React, { useState, useEffect } from "react";

// @components
import Container from "@components/Container";
import MenuNavTop from "@components/UI/Menu/MenuNavTop";

const NavbarTop = ({
  typeLayouts = "",
  type = "default",
  btnBack = false,
  urlBack = "",
  withBg = false,
}) => {
  const [isNavScroll, setNavScroll] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 16) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {withBg == false ? (
        <section
          id="ca2024NavTop"
          className={`fixed inset-x-0 bottom-auto ${isNavScroll === true ? "top-4 sm:top-4" : typeLayouts === "bento-grid" ? "top-4 sm:top-8 lg:top-[36px] xl:top-12" : "top-4"} z-sm mix-blend-difference ${type === "default" ? "px-0" : "px-4 sm:px-11"} transition-all ease-in`}
        >
          {type === "default" ? (
            <Container>
              <MenuNavTop back={btnBack} urlBack={urlBack} />
            </Container>
          ) : (
            <MenuNavTop back={btnBack} urlBack={urlBack} />
          )}
        </section>
      ) : (
        <section
          id="ca2024NavTop"
          className={`fixed inset-x-0 bottom-auto top-0 z-sm ${withBg === true ? "bg-white pb-4 pt-4" : "bg-transparent mix-blend-difference"} ${type === "default" ? "px-0" : "px-4 sm:px-11"} transition-all ease-in`}
        >
          {type === "default" ? (
            <Container>
              <MenuNavTop back={btnBack} urlBack={urlBack} withBg={withBg} />
            </Container>
          ) : (
            <MenuNavTop back={btnBack} urlBack={urlBack} withBg={withBg} />
          )}
        </section>
      )}
    </>
  );
};

export default NavbarTop;
