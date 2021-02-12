import { useState, useEffect } from 'react';
import Task from './Task';

interface TaskListProps { task:string };

const TaskList = ({ task }:TaskListProps) => {
    const [tasks, setTasks] = useState<string[]>([]);

    // Altering state
    const addTask = (name:string):void => {
        const newTasks: string[] = [...tasks, name];
        setTasks(newTasks);
    }
    const removeTask = (i:number):void => {
        const newTasks: string[] = [...tasks];
        newTasks.splice(i, 1);
        setTasks(newTasks);
    }

    // On every task change
    useEffect(() => {
        if (task) addTask(task);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [task])

    // Render tasks
    return (
        <main>
            {
                tasks.map((name:string, i:number) => <Task key={i} name={name} index={i} fn={removeTask} />)
            }
        </main>
    )
}

export default TaskList;