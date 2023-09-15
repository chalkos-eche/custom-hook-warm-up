import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import { useGetData } from "./hooks/useGetData";

function App() {
  const { isLoading, error, fetchTasks } = useGetData();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = {
      url: "https://custom-hooks-warm-up-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
    };
    const loadData = async () => {
      const data = await fetchTasks(fetchData);
      const loadedTasks = [];
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks);
    };
    loadData();
  }, [fetchTasks]);

  const taskAddHandler = task => {
    setTasks(prevTasks => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
