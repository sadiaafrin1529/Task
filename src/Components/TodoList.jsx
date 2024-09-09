import React from "react";
import not_tick from "../assets/not_tick.png";
import cross from "../assets/download.svg";
import tick from "../assets/tick.svg";

const TodoList = ({ text, deleteTodo, id, isComplete, Toggle }) => {
  return (
    <div className="flex items-center  my-3">
      <div
        onClick={() => Toggle(id)}
        className="flex flex-1 items-center gap-4 cursor-pointer  "
      >
        <img
          className={`w-7 rounded-full ${
            isComplete
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              : "bg-gray-300"
          } 
    hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300`}
          src={isComplete ? tick : not_tick}
          alt=""
        />
        <p
          className={`ml-2 text-slate-900 text-[17px] decoration-slate-500 ${
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
