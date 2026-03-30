import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import SessionCard from "./SessionCard";

const SessionList = () => {
  const { sessions } = useContext(SessionContext);

  const totalDuration = sessions.reduce(
    (acc, curr) => acc + Number(curr.duration || 0),
    0,
  );

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Total Study Time: {totalDuration} mins
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
};

export default SessionList;
