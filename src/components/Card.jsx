import React from "react";
import { FcLike } from "react-icons/fc";

const Card = (props) => {
  let course = props.course;
  return (
    <div className="w-75 bg-slate-800 rounded-md overflow-hidden">
      <div className="relative">
        <img  src={course.image.url} />

        <div className="w-12 h-12 bg-white rounded-full absolute right-2
        bottom-3 grid place-items-center ">
          <button className=" ">
            <FcLike className=" cursor-pointer" fontSize="1.75rem" />
          </button>
        </div>


      </div>

      <div>
        <p className="text-white font-semibold text-lg line-clamp-3 leading-6  ">{course.title}</p>
        <p className=" mt-2 text-white">{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
