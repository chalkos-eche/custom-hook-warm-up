import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import { useGetData } from "../../hooks/useGetData";

const NewTask = props => {
  const { isLoading, error, fetchTasks } = useGetData();

  const enterTaskHandler = async taskText => {
    const createTask = async () => {
      const taskData = await fetchTasks(fetchData);
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
    };
    const fetchData = {
      url: "https://custom-hooks-warm-up-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      method: "POST",
      body: { text: taskText },
      headers: {
        "Content-Type": "application/json",
      },
    };
    createTask();
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
