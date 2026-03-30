import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";

const SessionCard = ({ session }) => {
  const { deleteSession } = useContext(SessionContext);

const getColor = () => {
  if (session.priority === "High") return "border-red-500";
  if (session.priority === "Medium") return "border-orange-500";
  return "border-green-500";
};

  return (
    <div className={`bg-white dark:bg-gray-800 p-4 rounded-xl shadow border-l-4 ${getColor()}`}>
  <h3 className="text-xl font-bold">{session.topic}</h3>

  <div className="text-sm opacity-80 mt-2 space-y-1">
    <p>📘 {session.subject}</p>
    <p>⏱ {session.duration} mins</p>
    <p>🔥 {session.priority}</p>
    <p>📅 {session.date}</p>
  </div>

  <button
    onClick={() => deleteSession(session.id)}
    className="mt-3 px-3 py-1 bg-red-500 text-white rounded"
  >
    Delete
  </button>
</div>
  );
};

export default SessionCard;