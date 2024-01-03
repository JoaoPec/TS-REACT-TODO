import React, { useState } from 'react';

//interface
import { ITask } from './Interfaces/Task';

//styles
import './index.css';

import styles from './App.module.css';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  function deleteTask(id: number) {

    setTaskList(taskList.filter((task) => task.id !== id))

  }

  function hideOrShowModal(display: boolean) {
    const modal = document.querySelector('#modal')
    if (display) {
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide")
    }
  }

  function editTask(task: ITask): void{
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  function updateTask(id: number, title: string, difficulty: number):void {

    const updatedTask: ITask = {
      id, title, difficulty
    }

    const updatedItems = taskList.map((task) => {
      return task.id === id ? updatedTask : task
    })

    setTaskList(updatedItems)

    hideOrShowModal(false)

  }

  return (

    <>

      <div className="App">

        <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList} task={taskToUpdate} handleUpdate={updateTask}/> } />

        <Header />

        <main className={styles.main}>

          <div>
            <h2>
              O que você vai fazer
            </h2>
          </div>

          <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}  />

          <div>
            <h2>
              Suas tarefas
            </h2>
            <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
          </div>


        </main>

        <Footer />

      </div>

    </>

  );
}

export default App;

