import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/actions";
import FilterBtn from "./FilterBtn";
import TodoList from "./TodoList";


function Todo() {
  const dispatch = useDispatch()
  const [todoText, setTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };
  
  const handleAddTodoClick = () => {
    if(todoText.trim() !== "") {
      handleAddTodo(todoText.trim());
      setTodoText("")
    } 
  }

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  }

  return (
    <div className="bg-gray-100 max-w-4xl mx-auto sm:mt-8 p-4 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">todo app</h2>
      
      {/* input text and btn */}
      <div className="flex items-center mb-4">
          <input 
            value={todoText} 
            onChange={(e) => setTodoText(e.target.value)} 
            type="text" 
            name="addTodoInput" 
            id="addTodoInput" 
            placeholder="Add Todo" 
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          /> 
          <button onClick={handleAddTodoClick} 
          className="ml-4 p-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsPlus />
          </button>
      </div>

      {/* filter & search */}
      <div className="flex items-center justify-between">
        <FilterBtn />
        <div className="flex items-center mb-4">
          <input 
            value={searchTerm} 
            onChange={(e) => handleSearchChange(e.target.value)} 
            type="text" 
            name="addTodoInput" 
            id="addTodoInput" 
            placeholder="search" 
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          /> 
          <button onClick={handleAddTodoClick} 
            className="ml-4 p-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch />
          </button>
        </div>
      </div>

      <TodoList />
    </div>
  )
}

export default Todo;