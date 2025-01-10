import { useState } from "react";
import { Trash2, MoveUp, MoveDown } from "lucide-react";

const Home = () => {
  const [todoList, setTodoList] = useState([
    "Wakeup early",
    "Go to gym",
    "Read book",
  ]);

  const [newTodo, setNewTodo] = useState("");

  // Add to List
  const addNewTodo = () => {
    if (newTodo.trim() !== "") {
      setTodoList([...todoList, newTodo]);
      setNewTodo("");
    }
  };

  // Delete from list
  const removeTodo = (index) => {
    setTodoList(todoList.filter((todo, i) => i !== index));
  };

  // Move Up
  const moveUp = (index) => {
    if (index > 0) {
      const newTodoList = [...todoList];
      const todo = newTodoList.splice(index, 1);
      newTodoList.splice(index - 1, 0, todo[0]);
      setTodoList(newTodoList);
    }
  };

  // Move down
  const moveDown = (index) => {
    if (index < todoList.length - 1) {
      const newTodoList = [...todoList];
      const todo = newTodoList.splice(index, 1);
      newTodoList.splice(index + 1, 0, todo[0]);
      setTodoList(newTodoList);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="fixed top-0 w-full flex flex-col items-center bg-gray-100 pt-10 pb-4">
        <h1 className="font-bold text-4xl mb-4 text-gray-800">TODO LIST</h1>

        {/* INPUT */}
        <div className="flex mb-4">
          <input
            className="input input-primary mr-4"
            placeholder="Enter a todo..."
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="btn btn-primary" onClick={() => addNewTodo()}>
            Add
          </button>
        </div>
      </div>

      <div className="w-full max-w-md mt-32">
        {todoList.map((todo, index) => {
          return (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4"
            >
              <p className="flex-1 mr-4 font-semibold text-xl text-gray-700">
                {todo}
              </p>
              <button className="button" onClick={() => removeTodo(index)}>
                <Trash2 size={20} className="text-red-500" />
              </button>
              <button className="button" onClick={() => moveUp(index)}>
                <MoveUp className="text-blue-500" />
              </button>
              <button className="button" onClick={() => moveDown(index)}>
                <MoveDown className="text-blue-500" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
