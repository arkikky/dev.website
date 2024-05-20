import React, { useState, useEffect } from "react";

// @components
import Container from "@components/Container";
import MenuNavTop from "@components/UI/Menu/MenuNavTop";

const NavbarTop = ({
  typeLayouts = "",
  type = "default",
  btnBack = false,
  urlBack = "",
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
      <section
        id="ca2024NavTop"
        className={`fixed inset-x-0 bottom-auto ${isNavScroll === true ? "top-4 sm:top-4" : typeLayouts === "bento-grid" ? "top-4 sm:top-12" : "top-4"} z-sm mix-blend-difference ${type === "default" ? "px-0" : "px-4 sm:px-11"} transition-all ease-in`}
      >
        {type === "default" ? (
          <>
            <Container>
              <MenuNavTop back={btnBack} urlBack={urlBack} />
            </Container>
          </>
        ) : (
          <>
            <MenuNavTop back={btnBack} urlBack={urlBack} />
          </>
        )}
      </section>
    </>
  );
};

export default NavbarTop;
