import React, { useState } from "react";

// @components
import ModalSpeakers from "@components/UI/Modal/Speakers";

const SpeakersModal = ({ data }) => {
  const [isSpeakers, setSpeakers] = useState(data);

  return (
    <>
      {isSpeakers?.map((gtRslt, i) => (
        <div key={i}>
          <ModalSpeakers {...gtRslt} />
        </div>
      ))}
    </>
  );
};

export default SpeakersModal;
