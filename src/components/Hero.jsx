import { motion } from "framer-motion";
import App from "./Heatmap";
import React from "react";
import ReactDOM from "react-dom";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Hi, I'm <span className="text-[#915EFF]">Ishi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            I am a Passionate Learner <br className="sm:block hidden" />
            and a Developer
          </p>
        </div>
      </div>

     {/* / <ComputersCanvas /> */}

    </section>
  );
};

export default Hero;
