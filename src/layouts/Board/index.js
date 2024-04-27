import React from "react";

// @components
import Container from "@components/Container";
import BoardChartInsightCard from "@components/UI/Card/BoardChartInsight";

const Board = () => {
  return (
    <>
      <section className="ca2024MainPoints ca2024BoardChartInsight relative h-auto min-h-max snap-start snap-always">
        <Container>
          <div className="mt-[148px] grid-cols-4 gap-x-8 gap-y-4 supports-grid:grid sm:mt-[198px] sm:grid-cols-8 sm:gap-y-8 lg:mt-[228px] lg:grid-cols-12">
            <div className="col-span-full sm:col-span-4 lg:col-span-6">
              <BoardChartInsightCard number="6,000+" label="Participants" />
            </div>
            <div className="col-span-full sm:col-span-4 lg:col-span-6">
              <BoardChartInsightCard number="2,000+" label="Companies" />
            </div>
            <div className="col-span-full sm:col-span-4 lg:col-span-6">
              <BoardChartInsightCard number="65+" label="Countries" />
            </div>
            <div className="col-span-full sm:col-span-4 lg:col-span-6">
              <BoardChartInsightCard number="250+" label="Speakers" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Board;
