import React from "react";
import "../../style/style.gobal.css";

const Technologies = ({ tec }) => {
  return (
    <li
      className={`flex border-[.20em] rounded-l-full rounded-r-full w-auto pr-3 h-11 border-current ${tec[0]} `}>
      <img src={tec[1]} alt="" className="w-6 h-auto mb-auto mt-auto ml-3" />
      <span className="mb-auto mt-auto ml-2 text-slate-50">{tec[0]}</span>
    </li>
  );
};

export default Technologies;
