import React from "react";

// @components
import Container from "@components/Container";
import MenuNavTop from "@components/UI/Menu/MenuNavTop";

const NavbarTop = ({ type = "default" }) => {
  return (
    <>
      <section
        id="ca2024NavTop"
        className="fixed inset-x-0 bottom-auto top-4 z-sm mix-blend-difference"
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
