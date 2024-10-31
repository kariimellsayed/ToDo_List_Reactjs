import { useEffect, useRef } from "react";
import todoIcon from "../assets/todo_icon.png";
import ToDoItems from "./ToDoItems";
import { useState } from "react";

const ToDo = () => {
  const inputRef = useRef();

  const [todolist, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevtodos) =>
      prevtodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // UseEffect IN Local Storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <section className="to-do w-full min-h-screen grid bg-stone-600">
      <div className="to-do-content w-5/12 bg-white rounded-xl min-h-[600px] place-self-center flex flex-col p-7">
        {/* Title */}
        <div className="w-full flex items-center gap-2 mt-7">
          <img className="w-8" src={todoIcon} alt="to-do-icon" />
          <h2 className="font-semibold text-slate-700 text-3xl">To-Do App</h2>
        </div>

        {/* Input */}
        <div className="w-full flex items-center my-7 rounded-full bg-gray-200">
          <input
            ref={inputRef}
            className="bg-transparent border-0 h-14 flex-1 pr-2 pl-6
             placeholder:text-slate-600 placeholder:text-sm focus:outline-none text-slate-950 text-xl"
            type="text"
            placeholder="Add Your Task"
          />
          <button
            onClick={add}
            className="outline-none bg-orange-600 w-32 h-14 rounded-full
             text-white font-semibold text-lg cursor-pointer transition-all duration-300 ease-in  hover:bg-orange-700"
          >
            Add +
          </button>
        </div>

        {/* Todolist */}
        <div className="overflow-y-auto max-h-80">
          {todolist.map((item, index) => {
            return (
              <ToDoItems
                key={index}
                text={item.text}
                id={item.id}
                isComplete={item.completed}
                deleteTodo={deleteTodo}
                toggle={toggle}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToDo;
