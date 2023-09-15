import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import { useGetData } from "./hooks/useGetData";

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, responseData: fetchTasks } = useGetData();

  useEffect(() => {
    console.log("test");
    const loadData = data => {
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks);
    };
    fetchTasks(
      {
        url: "https://custom-hooks-warm-up-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      },
      loadData
    );
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
