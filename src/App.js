import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Learn React',
        day: 'Monday',
        reminder: true,
    },
    {
        id: 2,
        text: 'Learn more React',
        day: 'Tuesday',
        reminder: true,
    },
    {
        id: 3,
        text: 'Learn even more React',
        day: 'Wednesday',
        reminder: false,
    },
]);

// Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    //console.log('delete', id)
  }

  // Reminder Toggle 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show'}
    </div>
  );
}

export default App;
