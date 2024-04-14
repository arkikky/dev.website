import React, { useEffect } from "react";

// @components
import Container from "@components/Container";
import MenuNavTop from "@components/UI/Menu/MenuNavTop";

const NavbarTop = ({ type = "default" }) => {
  return (
    <>
      <section
        id="ca2024NavTop"
        className={`fixed inset-x-0 bottom-auto top-4 z-sm mix-blend-difference sm:top-6 ${type === "default" ? "px-0" : "px-4 sm:px-11"}`}
      >
        {type === "default" ? (
          <>
            <Container>
              <MenuNavTop />
            </Container>
          </>
        ) : (
          <>
            <MenuNavTop />
          </>
        )}
      </section>
    </>
  );
};

export default NavbarTop;
