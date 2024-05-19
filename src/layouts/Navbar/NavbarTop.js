import React, { useEffect } from "react";
import { useRouter } from "next/router";

// @components
import Container from "@components/Container";
import MenuNavTop from "@components/UI/Menu/MenuNavTop";

const NavbarTop = ({ type = "default", btnBack = false, urlBack = "" }) => {
  const router = useRouter();
  
  return (
    <>
      <section
        id="ca2024NavTop"
        className={`fixed inset-x-0 bottom-auto top-4 z-sm mix-blend-difference ${type === "default" ? "px-0" : "px-4 sm:px-11"}`}
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
