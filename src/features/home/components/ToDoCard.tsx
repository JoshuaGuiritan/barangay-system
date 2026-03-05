import { useState } from "react";

function TodoCard() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Master Tailwind CSS", completed: true },
    { id: 2, text: "Build a killer React app", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (!inputValue.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {/* Main Card */}
      <div className="card w-full bg-base-100 shadow-sm border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-lg font-bold text-base-content/60 uppercase tracking-widest pb-5">
            Task Manager
          </h2>

          {/* Input Group */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="What needs doing?"
              className="input input-bordered w-full focus:input-primary"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
            />
            <button className="btn btn-primary" onClick={addTodo}>
              Add
            </button>
          </div>

          {/* List Section */}
          <div className="space-y-3">
            {todos.length === 0 ? (
              <p className="text-center text-base-content/50 py-4">
                All caught up! 🎉
              </p>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-base-200 hover:bg-base-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                    <span
                      className={`text-lg ${todo.completed ? "line-through opacity-50" : ""}`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <button
                    className="btn btn-ghost btn-xs text-error"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Stats */}
          <div className="card-actions justify-between items-center mt-6 pt-4 border-t border-base-300 text-sm opacity-70">
            <span>{todos.filter((t) => !t.completed).length} items left</span>
            <div className="badge badge-outline">{todos.length} total</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoCard;
