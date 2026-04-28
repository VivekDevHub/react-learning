import { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // 🆕 Edit states
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // ➕ Add Todo
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

  // ❌ Delete
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // ✅ Toggle
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // ✏️ Start Edit
  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  // 💾 Save Edit
  const saveEdit = (id) => {
    if (!editText.trim()) return;

    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo)),
    );

    setEditId(null);
    setEditText("");
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
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <span
                  onClick={() => toggleComplete(todo.id)}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer",
                  }}
                >
                  {todo.text}
                </span>

                <button onClick={() => startEdit(todo)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>❌</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoApp;
