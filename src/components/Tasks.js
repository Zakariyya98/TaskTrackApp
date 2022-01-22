import { useState } from "react"; 


const Tasks = () => {
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
    
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
};

export default Tasks;