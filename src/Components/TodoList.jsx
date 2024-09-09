import React from 'react'
import not_tick from "../assets/not_tick.png";
import cross from "../assets/download.svg";
const TodoList = ({text}) => {
  return (
    <div className="flex items-center  my-3">
      <div className="flex flex-1 items-center gap-4 cursor-pointer  ">
        <img className="w-7 " src={not_tick} alt="" />
        <p className="ml-2 text-slate-900 text-[17px] decoration-slate-500">
          {text}
        </p>
      </div>
      <img className="cursor-pointer w-3.5" src={cross} alt="" />
    </div>
  );
}

export default TodoList
