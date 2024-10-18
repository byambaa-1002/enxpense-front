import Logo from "../../public/icons/Logo";
import { useEffect, useState } from "react";

import Dashboard from "../pages/dashboard";

import Link from "next/link";

const Navbar = (props) => {
  const {} = props;

  const [showAdd, setShowAdd] = useState(false);

  const handleAdd = () => {
    setShowAdd(!showAdd);
  };

  return (
    <div className="bg-white w-full px-[120px] py-4 flex justify-between max-w-screen-xl">
      {showAdd && (
        <div className="z-30 fixed top-0 left-0 right-0 bottom-0 bg-gray-400 flex justify-center items-center">
          <Dashboard onCloseModal={Dashboard} />
        </div>
      )}

      <div className="flex gap-6 items-center">
        <Logo />

        <button onClick={() => handleAdd()}> Dashboard </button>

        <Link href={"/"}>
          <button> Records</button>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <button
          className="bg-[#0166FF] py-1.5 px-3 text-white rounded-3xl text-base
        "
          onClick={() => handleAdd()}
        >
          + Record
        </button>

        <div className="rounded-full w-10 h-10 bg-[url('/images/Profile.jpeg')]"></div>
      </div>
      {/* <IoClose size={24} onClick={} /> */}
    </div>
  );
};

export default Navbar;
