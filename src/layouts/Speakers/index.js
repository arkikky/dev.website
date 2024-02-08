import React, { useState } from "react";

// @components
import CardSpeakers from "@components/UI/Card/Speakers";

const Speakers = ({ data }) => {
  const [isSpeakers, setSpeakers] = useState(data);

  return (
    <>
      <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-4 sm:gap-y-6 lg:gap-y-10 gap-x-4 sm:gap-x-6 lg:gap-x-10 mt-8 sm:mt-11 relative">
        {isSpeakers?.map((gtRslt, i) => (
          <div className="col-span-2 sm:col-span-4 lg:col-span-3" key={i}>
            <CardSpeakers {...gtRslt} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Speakers;
