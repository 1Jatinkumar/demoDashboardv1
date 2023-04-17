import React from "react";
import { useGlobalContext } from "./GlobalContext";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openSidebar, openModel } = useGlobalContext();

  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModel} className="btn" >Show model</button>
    </main>
  );
};

export default Home;
