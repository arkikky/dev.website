import React from "react";
import { useRouter } from "next/router";

// @components
import Container from "@components/Container";
import MenuNavbarTop from "src/components/UI/Menu/MenuNavbarTop";

const NavbarTop = () => {
  const router = useRouter();

  return (
    <>
      <section className="fixed top-4 bottom-auto inset-x-0 z-sm mix-blend-difference">
        {router.pathname === "/" ? (
          <Container>
            <MenuNavbarTop />
          </Container>
        ) : (
          <MenuNavbarTop />
        )}
      </section>
    </>
  );
};

export default NavbarTop;
