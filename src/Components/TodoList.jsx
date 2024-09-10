import React from "react";
import not_tick from "../assets/not_tick.png";
import cross from "../assets/download.svg";
import tick from "../assets/correct.png";
import AOS from "aos";
import "aos/dist/aos.css";
const TodoList = ({ text, deleteTodo, id, isComplete, Toggle }) => {
  AOS.init();
  return (
    <div className="flex items-center  my-3">
      <div
        data-aos="fade-right"
        onClick={() => Toggle(id)}
        className="flex flex-1 items-center cursor-pointer "
      >
        <img className="w-5" src={isComplete ? tick : not_tick} alt="" />
        <p
          className={`ml-2  dark:text-white text-slate-900 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        className="cursor-pointer w-3.5"
        src={cross}
        alt=""
      />
    </div>
  );
};

export default TodoList;
