import React from "react";
import ImgContainer from "../../../components/ImgContainer";
import TEAMS from "../../../Data/TEAMS";
import { motion } from "framer-motion";

export default function TeamSelector({ selectedTeam, setselectedTeam }) {
  const Selector = ({ index }) => (
    <button
      onClick={() => {
        setselectedTeam(index);
      }}
      className={
        (selectedTeam !== index && "grayscale") +
        " w-20 h-20 cursor-pointer rounded-xl shadow-xl hover:-translate-y-1 duration-300 bg-white"
      }
    >
      <ImgContainer src={TEAMS[index].image} className="w-full h-full" />
    </button>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5, delay: .3 } }}
      viewport={{once:true}}

      className="selectorContainer sm:hidden flex flex-row justify-center items-end space-x-5 lg:absolute lg:right-0 lg:flex-col lg:space-x-0 lg:space-y-5 lg:mr-5"
    >
      {TEAMS.map((team, index) => {
        return <Selector key={index} index={index} />;
      })}
    </motion.div>
  );
}
