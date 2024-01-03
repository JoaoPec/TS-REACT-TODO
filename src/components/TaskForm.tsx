import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'

//Intefaces
import { ITask } from '../Interfaces/Task'


//styles
import styles from './TaskForm.module.css'

interface Props {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {

    const [id, setId] = useState<number>(0)

    const [title, setTitle] = useState<string>('')

    const [difficulty, setDifficulty] = useState<number>(0)


    function addTaskHandler(e: FormEvent<HTMLFormElement>) {

        e.preventDefault()

        const id: number = Math.floor(Math.random() * 1000)

        const newTask: ITask = {
            id, title, difficulty
        }
        setTaskList!([...taskList, newTask])

        setId(id)

        setTitle('')

        setDifficulty(0)

        console.log(taskList)
    }



    function handleChange(e: ChangeEvent<HTMLInputElement>) {

        if (e.target.name === 'title') {
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }

    }

    return (

        <form onSubmit={addTaskHandler} className={styles.form}>

            <div className={styles.input_container}>
                <label htmlFor="title">Titulo:</label>
                <input type="text" name='title' placeholder='Título da taréfa' value={title} onChange={handleChange} />
            </div>

            <div className={styles.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input type="text" name='difficulty' value={difficulty} placeholder='Dificuldade da tarefa' onChange={handleChange} />
            </div>
            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm