import React from "react";

import GraphicSection from "Organism/GraphicSection/GraphicSection";
import TitleSection from "Organism/TitleSection/TitleSection";

import styles from "./Main.module.css";

const Main = () => {
  return (
    <div
      className="w-full h-full flex justify-center h-5/7 items-center px-4 py-12 overflow-auto"
      style={{ minHeight: "600px" }}
    >
      <div
        className={[
          "flex justify-center flex-col h-auto w-3/4 lg:w-2/5 lg:flex-row lg:min-w-96",
          styles.innerCon,
        ].join(" ")}
      >
        <GraphicSection />
        <TitleSection />
      </div>
    </div>
  );
};

export default Main;
