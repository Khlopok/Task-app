import { useState, useRef } from 'react';
import styled from 'styled-components';
import TaskList from './TaskList';

// CSS

const FormContainer = styled.form`
    width: 33%;
	margin: 0 auto 1em;
	padding: 3em 0;
	border: 1px solid rgb(220, 220, 220);
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	align-items: center;

    @media (max-width: 900px) {
        width: 49%;
    }
    @media (max-width: 600px) {
        width: 66%;
    }
    @media (max-width: 300px) {
        width: 72%;
    }
`

const Inputs = styled.div`
    display: flex;
	justify-content: center;
`

const CreateTaskBtn = styled.input`
    background-color: var(--main-color);
	padding: .5em .75em;;
	margin: 0;
	border-radius: 0 3px 3px 0;
	color: #fff;
	display: flex;
	justify-content: center;
    align-items: center;
    
    &:hover {
        background-color: var(--second-color);
    }
`

// Component

const Form = () => {
    const taskInput = useRef<HTMLInputElement>(null)

    const [newTask, setNewTask] = useState<string>('');
    const [task, setTask] = useState<string>('');

    const handleSubmit = (e:React.FormEvent):void => {
        e.preventDefault();
        setTask(newTask);
        taskInput.current?.focus();
        setNewTask('');
    }

    // Render form and tasklist
    return (
        <>
            <FormContainer onSubmit={handleSubmit}>
                <h1>Task app</h1>
                <Inputs>
                    <input type="text" value={newTask} ref={taskInput} autoFocus onChange={e => setNewTask(e.target.value)} />
                    <CreateTaskBtn type="submit" value="Save" />
                </Inputs>
            </FormContainer>
            <TaskList task={task} />
        </>
    )
};

export default Form;