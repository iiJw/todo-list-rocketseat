import styles from '../styles/Tasks.module.css'
import { Trash } from 'phosphor-react'

interface TasksProps {
    content: string;
    deleteTask: (task: string) => void;
    isComplete?: boolean;
    handleCompleteTask: (content: string) => void;
}

function Tasks({ content, deleteTask, isComplete = false, handleCompleteTask }: TasksProps) {

    function completeTask() {
        handleCompleteTask(content)
    }

    function handleDeleteTask() {
        deleteTask(content)
    }

    return (
        <div className={styles.taskList}>
            <ul>
                <li className={styles.task}>
                        <input 
                        className={styles.checkbox} 
                        type="checkbox"
                        defaultChecked={isComplete}
                        onClick={completeTask}
                        />
                        <label className={isComplete ? styles.isComplete : styles.isNotComplete} data-content={content}>{content}</label>
                        
                        <button onClick={handleDeleteTask} className={styles.button} title="Deletar task">
                            < Trash size={24}/>
                        </button>
                </li>
            </ul>
        </div>
    )
}

export default Tasks