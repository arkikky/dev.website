import React from "react";

// @components
import Container from "@components/Container";

// @layout
import FAQ from "@layouts/FAQ";

const DefaultFAQ = () => {
  return (
    <>
      <section className="ca2024SectionAuto ca2024SldeFaq flex flex-col items-center justify-center overflow-hidden relative pt-[144px] lg:pt-[163px] pb-32 lg:pb-24 opacity-1 transition-all duration-200 ease-linear">
        <div className="ca2024SldeFaqPointTop bg-transparent absolute top-10 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px"></div>

        <Container className="relative z-[5]">
          <FAQ />
        </Container>
      </section>
    </>
  );
};

export default DefaultFAQ;
