import React from "react";
import not_tick from "../assets/not_tick.png";

const Todo = () => {
  return (
      <>
          {/* title */}
          {/* <div>
              <p>TODO</p>
          </div> */}
      {/* input section */}
      <div className="w-full flex justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 px-4">
        <div className="bg-gray-200 rounded-md py-4 pl-4 sm:pl-6 lg:pl-7 gap-3 flex items-center w-full max-w-sm sm:max-w-md lg:max-w-lg outline-none border-0 h-14 pr-2 placeholder:text-slate-600">
          <img className="w-5 sm:w-6 lg:w-7" src={not_tick} alt="not tick" />
          <input
            type="text"
            className="bg-transparent outline-none border-0 flex-1 text-sm sm:text-base lg:text-lg"
            placeholder="Create a new Todo..."
          />
        </div>
      </div>

      {/* todolist */}
      <div className="place-self-center bg-white flex w-full max-w-sm sm:max-w-md lg:max-w-lg min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[550px] mb-20 sm:mb-24 lg:mb-36 flex-col p-4 sm:p-6 lg:p-7 rounded-md">
       
      </div>
    </>
  );
};

export default Todo;
