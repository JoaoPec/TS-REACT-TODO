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

  function deleteTask(id: number) {

    setTaskList(taskList.filter((task) => task.id !== id))

  }

  return (

    <>

      <div className="App">

        <Modal children={<TaskForm btnText='Editar Tarefa' taskList={taskList}/>} />

        <Header />

        <main className={styles.main}>

          <div>
            <h2>
              O que você vai fazer
            </h2>
          </div>

          <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList} />

          <div>
            <h2>
              Suas tarefas
            </h2>
            <TaskList taskList={taskList} handleDelete={deleteTask} />
          </div>


        </main>

        <Footer />

      </div>

    </>

  );
}

export default App;

