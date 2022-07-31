import { useNavigate,  } from "react-router-dom";
import { TaskForm } from "./TaskForm";

export function NewTask() {
  const navigate = useNavigate();
  const createTask = (values: any) => {
    onClose()
  };
  
  
  const onClose = () => {
    navigate(`../`);
  }

  return <TaskForm onSubmit={createTask} onClose={onClose} />;
}
