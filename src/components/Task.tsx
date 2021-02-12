import { useState } from 'react';
import styled from 'styled-components';

// CSS

const TaskContainer = styled.article`
    width: 33%;
    margin: 0 auto 1em;
    padding: 1em;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 3px;
    display: flex;
    flex-direction: column;

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

const Buttons = styled.div`display: flex;`

const ToggleBtn = styled.input`
    background-color: var(--main-color);
	width: 2.25em;
	padding: .25em;
	margin: 0 .5em 0 0;
	border-radius: 2px;
	color: #fff;
	display: flex;
	justify-content: center;
    align-items: center;
    
    &:hover {
        background-color: var(--second-color);
    }
`

const DeleteBtn = styled.input`
    background-color: rgb(230, 50, 50);
	width: 2.25em;
	padding: .25em;
	margin: 0;
	border-radius: 2px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
`

// Component

interface taskProps {
    name:string,
    index:number,
    fn:(i:number) => void
}

const Task = ({ name, index, fn }:taskProps) => {
    const [done, setDone] = useState(false)

    const toggleDoneTask = ():void => { setDone(!done) }

    return (
        <TaskContainer>
            <h2 className={done ? 'done' : ''}>{name}</h2>
            <Buttons>
                <ToggleBtn type="submit" value={done ? '✓' : 'X'} onClick={toggleDoneTask} />
                <DeleteBtn type="submit" value="🗑" onClick={() => fn(index)} />
            </Buttons>
        </TaskContainer>
    )
}

export default Task;