import { Task } from "./Task";

export const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div style={{ padding: "0px 40px 20px 40px" }}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          onToggle={onToggle}
          onDelete={onDelete}
          task={task}
        />
      ))}
    </div>
  );
};
