import { PlusCircle, ClipboardText } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from '../styles/ManageTasks.module.css'
import Tasks from './Tasks'

function ManageTasks() {
    const [tasks, setTasks] = useState([
        {   
            content: 'teste task',
            isComplete: false
        }
    ])

    const [newTaskText, setNewTaskText] = useState('')

    const completes = tasks.filter(task => {
        return task.isComplete !== false
      })

    function createNewTask(event: FormEvent) {
        event.preventDefault()
        setTasks([...tasks, {
            content: newTaskText,
            isComplete: false
        }]);

        setNewTaskText('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');

        setNewTaskText(event.target.value)
    }

    function newTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function handleCompleteTask(content: string) {
        const taskIsCompleted = tasks.map(task =>{
            if (task.content === content) {
                task.isComplete = !task.isComplete;
            }

            return task;
        });

        setTasks(taskIsCompleted)
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task =>{
            return task.content !== taskToDelete
        })

        setTasks(tasksWithoutDeletedOne)
    }

    return (
        <div className={styles.manageTasks}>
            <form onSubmit={createNewTask} className={styles.createTask}>
                <textarea
                placeholder='Adicione uma nova tarefa'
                value={newTaskText}
                onChange={handleNewTaskChange}
                onInvalid={newTaskInvalid}
                required
                />

                <button type="submit">
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>

            <div className={styles.taskList}>
                <div className={styles.tasksInfo}>
                    <h2>Tarefas Criadas <span>{tasks.length}</span></h2>
                    <h2>Concluídas <span>{completes.length}</span></h2>
                </div>
                    {tasks.map( task => {
                        return (
                        <Tasks 
                        key={task.content} 
                        content={task.content} 
                        isComplete={task.isComplete} 
                        handleCompleteTask={handleCompleteTask} 
                        deleteTask={deleteTask}/>
                        )
                    })}

                    {tasks.length === 0 && <p className={styles.emptyTasks}>
                        <ClipboardText size={56} />
                        <p className={styles.emptyText}>
                            <strong>Voce ainda não tem tarefas cadastradas</strong> <br></br>
                            <span> &nbsp;Crie tarefas e organize seus itens a fazer</span>
                        </p>
                    </p>}
            </div>
        </div>
    )
}

export default ManageTasks