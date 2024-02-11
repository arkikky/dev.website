import React from "react";
import Link from "next/link";

const MenuNavbar = () => {
  return (
    <>
      <ul className="menu menu-row">
        <li>
          <Link className="text-white" href={"/get-involved/speakers"}>
            Apply as Speaker
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
    </>
  );
};

export default MenuNavbar;
