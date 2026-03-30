import { useEffect, useState } from "react";
import SessionForm from "./components/SessionForm";
import SessionList from "./components/SessionList";

const App = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">📚 Study Planner</h1>

          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded"
          >
            Toggle Theme
          </button>
        </div>

        <SessionForm />
        <SessionList />
      </div>
    </div>
  );
};

export default App;
