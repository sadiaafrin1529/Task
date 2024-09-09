import React, { useEffect, useRef, useState } from "react";
import not_tick from "../assets/not_tick.png";
import TodoList from "./TodoList";

const Todo = () => {
  // State for storing the todo list
  // const [todoList, setTodoList] = useState([]);
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const inputInfo = useRef(); // Ref for input

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Corrected "Enter" key spelling
      const textInfo = inputInfo.current.value.trim();
      if (textInfo === "") {
        return alert("Please enter a todo");
      }

      const newTodo = {
        id: Date.now(),
        text: textInfo, // Correct reference to the input text
        isComplete: false,
      };

      console.log(newTodo);

      // Update the todo list state with the new todo
      setTodoList((prevTodoList) => [...prevTodoList, newTodo]);

      // Clear the input field
      inputInfo.current.value = "";
    }
  };



  // Delete data
  const deleteTodo = (id) => {
    setTodoList((prevTodoList) =>
    prevTodoList.filter((afterTodoList)=> afterTodoList.id !== id))
  }



  //toggle
  const Toggle = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete }; 
        }
        return todo;
      })
    );
  };





  // localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      {/* input section */}
      <div className="w-full flex justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 px-4">
        <div className="bg-gray-200 rounded-md py-4 pl-4 sm:pl-6 lg:pl-7 gap-3 flex items-center w-full max-w-sm sm:max-w-md lg:max-w-lg outline-none border-0 h-14 pr-2 placeholder:text-slate-600">
          <img
            className="w-5 sm:w-6 lg:w-7 cursor-pointer hover:bg-gradient-to-r rounded-full hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all"
            src={not_tick}
            alt="not tick"
          />
          <input
            ref={inputInfo}
            onKeyDown={handleKeyDown}
            type="text"
            className="bg-transparent outline-none border-0 flex-1 text-sm sm:text-base lg:text-lg"
            placeholder="Create a new Todo..."
          />
        </div>
      </div>

      {/* todo list */}
      <div className="place-self-center bg-white flex w-full max-w-sm sm:max-w-md lg:max-w-lg min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[550px] mb-20 sm:mb-24 lg:mb-36 flex-col p-4 sm:p-6 lg:p-7 rounded-md">
        {/* {todoList.length > 0 ? (
          todoList.map((todo, index) => (
            <TodoList key={index} text={todo.text} />
          ))
        ) : (
        // Placeholder message when no todos are present
          "" 
        )} */}
        {todoList.map((todo, index) => (
          <TodoList
            key={index}
            text={todo.text}
            id={todo.id}
            isComplete={todo.isComplete}
            deleteTodo={deleteTodo}
            Toggle={Toggle}
          />
        ))}
      </div>
    </>
  );
};

export default Todo;
