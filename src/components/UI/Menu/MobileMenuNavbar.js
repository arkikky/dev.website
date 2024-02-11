import React from "react";
import Link from "next/link";

const MobileMenuNavbar = ({ menu }) => {
  return (
    <>
      <div
        className={`ca2024NavMenuMobile bg-secondary absolute inset-y-0 inset-x-0 ${
          menu ? "active z-lg" : "deflt z-base"
        }`}
      >
        <ul className={`menu menu-stripe`}>
          {/* <li>
            <Link className="text-white" href={""}>
              Travel
            </Link>
          </li> */}
          <li>
            <Link className="text-white" href={"/get-involved/speakers"}>
              Apply as Speakerss
            </Link>
          </li>
          <li>
            <Link className="text-white" href={"/get-involved"}>
              Get Involved
            </Link>
          </li>
          {/* <li>
            <Link className="text-white" href={""}>
              Coinfest Week
            </Link>
          </li>
          <li>
            <Link className="text-white" href={""}>
              Agenda
            </Link>
          </li> */}
          <li>
            <Link className="text-white" href={""}>
              Recap
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenuNavbar;
