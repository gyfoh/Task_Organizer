import { useNavigate } from 'react-router-dom'

import TaskForm from '../tasks/TaskForm'
import styles from './NewTask.module.css'

function NewTasks(){

    const navigate = useNavigate()

    function createPost(project) {

        //  initialize tasks
        project.task = []

        fetch('http://localhost:5000/tasks',{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate('/tasks', {state: {message: "Tarefa criada com sucesso"}})
        })
        .catch(err => console.log(err))

    }

    return (
        <div className={styles.newtask_container}>
            <h1>Criar Tarefa</h1>
            <p>Crie sua tarefa preenchendo o formulário</p>
            <TaskForm handleSubmit={createPost} btnText="Criar Tarefa"/>
        </div>
    )
}

export default NewTasks