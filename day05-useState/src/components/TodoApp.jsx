import { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleComplete(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoApp;

// 🧠 Core Logic Breakdown (Important)
// 1. Add Todo : setTodos(prev => [...prev, newTodo]);

// 👉 Immutable update (VERY important in interviews)

// 2. Toggle Todo :  map → update only matching item
// 3. Delete Todo : filter → remove item
// 4. Edit Todo :  editId → track which item editing
// 5. Filter Logic : if completed → return true
// 6. LocalStorage Persistence :  useEffect → sync todos





// import { useState, useEffect } from "react";

// function TodoApp() {
//   const [task, setTask] = useState("");
//   const [todos, setTodos] = useState(() => {
//     const saved = localStorage.getItem("todos");
//     return saved ? JSON.parse(saved) : [];
//   });
//   const [filter, setFilter] = useState("all"); // all | completed | pending
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState("");

//   // Persist todos
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   // Add Todo
//   const addTodo = () => {
//     if (!task.trim()) return;

//     const newTodo = {
//       id: Date.now(),
//       text: task,
//       completed: false
//     };

//     setTodos(prev => [...prev, newTodo]);
//     setTask("");
//   };

//   // Delete Todo
//   const deleteTodo = (id) => {
//     setTodos(prev => prev.filter(todo => todo.id !== id));
//   };

//   // Toggle Complete
//   const toggleTodo = (id) => {
//     setTodos(prev =>
//       prev.map(todo =>
//         todo.id === id
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       )
//     );
//   };

//   // Start Editing
//   const startEdit = (todo) => {
//     setEditId(todo.id);
//     setEditText(todo.text);
//   };

//   // Save Edit
//   const saveEdit = (id) => {
//     if (!editText.trim()) return;

//     setTodos(prev =>
//       prev.map(todo =>
//         todo.id === id ? { ...todo, text: editText } : todo
//       )
//     );

//     setEditId(null);
//     setEditText("");
//   };

//   // Clear Completed
//   const clearCompleted = () => {
//     setTodos(prev => prev.filter(todo => !todo.completed));
//   };

//   // Filter Logic
//   const filteredTodos = todos.filter(todo => {
//     if (filter === "completed") return todo.completed;
//     if (filter === "pending") return !todo.completed;
//     return true;
//   });

//   // Stats
//   const total = todos.length;
//   const completed = todos.filter(t => t.completed).length;
//   const pending = total - completed;

//   return (
//     <div style={{ maxWidth: 500, margin: "auto" }}>
//       <h2>Todo App</h2>

//       {/* Input */}
//       <input
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Enter task..."
//       />
//       <button onClick={addTodo}>Add</button>

//       {/* Filters */}
//       <div>
//         <button onClick={() => setFilter("all")}>All</button>
//         <button onClick={() => setFilter("completed")}>Completed</button>
//         <button onClick={() => setFilter("pending")}>Pending</button>
//       </div>

//       {/* Stats */}
//       <p>Total: {total} | Done: {completed} | Left: {pending}</p>

//       {/* List */}
//       <ul>
//         {filteredTodos.map(todo => (
//           <li key={todo.id}>
//             {editId === todo.id ? (
//               <>
//                 <input
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                 />
//                 <button onClick={() => saveEdit(todo.id)}>Save</button>
//               </>
//             ) : (
//               <>
//                 <span
//                   onClick={() => toggleTodo(todo.id)}
//                   style={{
//                     textDecoration: todo.completed ? "line-through" : "none",
//                     cursor: "pointer"
//                   }}
//                 >
//                   {todo.text}
//                 </span>

//                 <button onClick={() => startEdit(todo)}>Edit</button>
//                 <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Clear Completed */}
//       <button onClick={clearCompleted}>Clear Completed</button>
//     </div>
//   );
// }

// export default TodoApp;