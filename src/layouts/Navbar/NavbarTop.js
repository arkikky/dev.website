import React from "react";
import { useRouter } from "next/router";

// @components
import Container from "@components/Container";
import MenuNavTop from "@components/UI/Menu/MenuNavTop";

const NavbarTop = ({
  typeLayouts = "",
  type = "default",
  btnBack = false,
  urlBack = "",
}) => {
  return (
    <>
      <section
        id="ca2024NavTop"
        className={`fixed inset-x-0 bottom-auto ${typeLayouts === "bento-grid" ? "top-4 sm:top-12" : "top-4"} z-sm mix-blend-difference ${type === "default" ? "px-0" : "px-4 sm:px-11"}`}
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
