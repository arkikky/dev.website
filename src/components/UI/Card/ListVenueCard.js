import React from "react";

const ListVenueCard = ({ no = "0", label = "Venue 1", list = [] }) => {
  return (
    <>
      <div>
        <div className="ca2024LabelVenue mb-3.5 flex w-fit flex-row items-center justify-center">
          <div className="ca2024LabelNoVenue relative mr-2.5 flex h-7 w-7 flex-col items-center justify-center rounded-full bg-secondary font-bevietnamPro text-xs text-white ring-[4px] ring-secondary/20">
            {no}
          </div>

          <h2 className="text-base font-semibold text-black-900">{label}</h2>
        </div>
        {list && (
          <ul className="flex flex-col pl-[38px] prose-li:mb-2 prose-li:font-bevietnamPro prose-li:text-base prose-li:font-light prose-li:text-[#5D5D5D] last:prose-li:mb-0">
            {list?.map((gtRslt, i) => (
              <li key={i}>{gtRslt.label}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ListVenueCard;
