import React from "react";
import not_tick from "../assets/not_tick.png";
import cross from "../assets/download.svg";
import tick from "../assets/correct.png";

const TodoList = ({ text, deleteTodo, id, isComplete, Toggle }) => {
  return (
    <div className="flex items-center  my-3">
      <div
        onClick={() => Toggle(id)}
        className="flex flex-1 items-center cursor-pointer "
      >
        <img className="w-5" src={isComplete ? tick : not_tick} alt="" />
        <p
          className={`ml-2 dark:text-white text-slate-900 text-[17px] decoration-slate-500 ${
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
