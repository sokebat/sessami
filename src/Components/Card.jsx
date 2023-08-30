import React from "react";

import "../index.css";

const Card = (props) => {
  return (
    <div className="rounded-xl flex gap-5 box">
      <div>
        <img src={props.image} alt={props.city}  className=" h-auto"/>
      </div>
      <div className=" flex flex-col justify-center gap-3 w-3/4 ">
        <p>
          <h2 className="text-[#525367] font-bold text-4xl  ">{props.city}</h2>
          <h4 className="text-xl text-[#5F5F5F] font-medium ">{props.country}</h4>
        </p>
        <p className="text-[#000000] font-medium text-xl text-left">
         {props.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
