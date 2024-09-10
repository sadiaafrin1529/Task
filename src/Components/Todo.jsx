import React, { useEffect, useRef, useState } from "react";
import not_tick from "../assets/not_tick.png";
import TodoList from "./TodoList";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";

import backGroundImage from "../assets/bg-desktop-light.jpg";
const Todo = () => {


  // Light-dark mode
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // const appStyles = {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   height: "100vh",
  //   backgroundColor: isDarkMode ? "#333" : "#fff",
  //   color: isDarkMode ? "#fff" : "#000",
  //   transition: "all 0.3s ease",
  // };

  // const buttonStyles = {
  //   padding: "10px 20px",
  //   fontSize: "16px",
  //   backgroundColor: isDarkMode ? "#fff" : "#000",
  //   color: isDarkMode ? "#000" : "#fff",
  //   border: "none",
  //   cursor: "pointer",
  //   marginTop: "20px",
  // };

const [dark, setDark] = React.useState(false);

const darkModeHandler = () => {
  setDark(!dark);
  document.body.classList.toggle("dark");
};




  //button active inactive
  const [activeFilter, setActiveFilter] = useState("All");

  // console.log("Current active filter:", activeFilter);

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
        status: "All",
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
      prevTodoList.filter((afterTodoList) => afterTodoList.id !== id)
    );
  };

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

  // Returns filtered todo list based on active filter
  const getFilteredTodos = () => {
    switch (activeFilter) {
      case "Active":
        return todoList.filter((todo) => !todo.isComplete);
      case "Completed":
        return todoList.filter((todo) => todo.isComplete);
      case "All":
      default:
        return todoList;
    }
  };

  // Clear Complete
  const clearCompletedTodos = () => {
    const filteredTodos = todoList.filter((todo) => !todo.isComplete);
    setTodoList(filteredTodos);
  };

  return (
    // style={{ appStyles }}

    <div className="min-h-screen">
      <div className="background">
        {/* todo Titele */}
        <div className="w-[50%] mx-auto flex justify-between items-center ">
          <p className="text-[40px] font-bold text-white">TODO</p>
          {/* <button style={buttonStyles} onClick={toggleTheme}>
            Switch to {isDarkMode ? "Light" : "Dark"} Mode
          </button> */}
          <button onClick={() => darkModeHandler()}>
            {
              dark && <IoSunny className="text-white h-9 w-9" /> // render sunny when dark is true
            }
            {
              !dark && <IoMoon className="text-white h-9 w-9" /> // render moon when dark is false
            }
          </button>
        </div>
        {/* input section */}
        <div className="w-full flex justify-center  mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 px-4 ">
          <div className="bg-white shadow-lg dark:bg-slate-900 dark:text-white shadow-gray-500/50 rounded-md py-4 pl-4 sm:pl-6 lg:pl-7 gap-3 flex items-center w-full max-w-sm sm:max-w-md lg:max-w-lg outline-none border-0 h-14 pr-2 placeholder:text-slate-600">
            <img
              className="w-5 sm:w-6 lg:w-5 cursor-pointer hover:bg-gradient-to-r rounded-full hover:from-blue-600 hover:via-purple-200 hover:to-pink-200 transition-all"
              src={not_tick}
              alt="not tick"
            />
            <input
              ref={inputInfo}
              onKeyDown={handleKeyDown}
              type="text"
              className="bg-transparent outline-none border-0 flex-1 text-sm sm:text-base lg:text-lg "
              placeholder="Create a new Todo..."
            />
          </div>
        </div>
      </div>

      {/* todo list */}
      <div className="place-self-center mx-auto dark:bg-slate-900 dark:text-white shadow-lg shadow-gray-500/50 bg-white flex w-full max-w-sm sm:max-w-md lg:max-w-lg  mb-20 sm:mb-24 lg:mb-36 flex-col p-4 sm:p-6 lg:p-7 rounded-md">
        {/* {todoList.length > 0 ? (
          todoList.map((todo, index) => (
            <TodoList
              key={index}
              text={todo.text}
              id={todo.id}
              isComplete={todo.isComplete}
              deleteTodo={deleteTodo}
              Toggle={Toggle}
            />
          ))
        ) : (
          <p className=" ">No Data</p> // Placeholder message when no todos are present
        )} */}
        {/* {todoList.map((todo, index) => (
          <TodoList
            key={index}
            text={todo.text}
            id={todo.id}
            isComplete={todo.isComplete}
            deleteTodo={deleteTodo}
            Toggle={Toggle}
          />
        ))} */}
        {todoList.length > 0 ? (
          getFilteredTodos().map((todo, index) => (
            <TodoList
              key={index}
              text={todo.text}
              id={todo.id}
              isComplete={todo.isComplete}
              deleteTodo={deleteTodo}
              Toggle={Toggle}
            />
          ))
        ) : (
          <p className="font-bold text-center text-3xl text-red-900 justify-center items-center  ">
            No Data
          </p> // Placeholder message when no todos are present
        )}
        <div className="border-t-2 mt-auto flex justify-between items-center">
          {/* items show */}
          <p className="text-center py-2">
            {getFilteredTodos().length} Items Left
          </p>
          {/* <div>
            {todoList
              .filter((todo) =>
                activeFilter === "All"
                  ? true
                  : activeFilter === "Active"
                  ? !todo.isComplete
                  : todo.isComplete
              )
              .map((todo, index) => (
                // Assuming TodoItem is a component that takes todo data and renders it
                <TodoList key={todo.id} todo={todo} />
              ))}
          </div> */}

          <div className="inline-flex gap-2 font-semibold  ">
            <button
              onClick={() => setActiveFilter("All")}
              className={
                activeFilter === "All"
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-black  dark:hover:text-white"
              }
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("Active")}
              className={
                activeFilter === "Active"
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-black  dark:hover:text-white"
              }
            >
              Active
            </button>
            <button
              onClick={() => setActiveFilter("Completed")}
              className={
                activeFilter === "Completed"
                  ? "text-blue-600"
                  : "text-gray-500 hover:text-black dark:hover:text-white"
              }
            >
              Completed
            </button>
          </div>

          <button
            onClick={clearCompletedTodos}
            className=" font-semibold text-slate-500 hover:text-black  dark:hover:text-white "
          >
            Clear Completed
          </button>
        </div>
        {/* <hr className=" mt-auto" /> */}
      </div>
    </div>
  );
};

export default Todo;
