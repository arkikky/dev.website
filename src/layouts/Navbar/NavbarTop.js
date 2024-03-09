import React from "react";
import { useRouter } from "next/router";

// @components
import Container from "@components/Container";
import MenuNavTop from "@components/UI/Menu/MenuNavTop";
// import MenuNavbarTop from "src/components/UI/Menu/MenuNavbarTop";

const NavbarTop = () => {
  // const router = useRouter();

  return (
    <>
      <section
        id="ca2024NavTop"
        className="fixed top-4 bottom-auto inset-x-0 z-sm mix-blend-difference"
      >
        <Container>
          <MenuNavTop />
        </Container>
      </section>
    </>
  );
};

export default NavbarTop;
