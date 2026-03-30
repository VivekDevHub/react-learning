import { useForm } from "react-hook-form";
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";

const SessionForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addSession } = useContext(SessionContext);

  const onSubmit = (data) => {
    addSession(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-4"
    >
      <input
        placeholder="Topic Name"
        {...register("topic", { required: true })}
        className="w-full p-2 border rounded"
      />

      <select {...register("subject")} className="w-full p-2 border rounded">
        <option>DSA</option>
        <option>Web Dev</option>
        <option>DBMS</option>
        <option>OS</option>
        <option>Other</option>
      </select>

      <input
        type="number"
        placeholder="Duration"
        {...register("duration", { min: 10 })}
        className="w-full p-2 border rounded"
      />

      <select {...register("priority")} className="w-full p-2 border rounded">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input
        type="date"
        {...register("date")}
        className="w-full p-2 border rounded"
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Add Session
      </button>
    </form>
  );
};

export default SessionForm;
