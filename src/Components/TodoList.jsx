import React from 'react'
import not_tick from "../assets/not_tick.png";
import cross from "../assets/download.svg";
import tick from "../assets/tick.png";

const TodoList = ({ text, deleteTodo, id, isComplete }) => {
  return (
    <div className="flex items-center  my-3">
      <div className="flex flex-1 items-center gap-4 cursor-pointer  ">
        <img className="w-7" src={isComplete ? tick : not_tick} alt="" />
        <p className="ml-2 text-slate-900 text-[17px] decoration-slate-500">
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

export default TodoList
