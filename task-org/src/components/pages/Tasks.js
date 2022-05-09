import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'

import Message from '../layout/Message'
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import TaskCard from '../tasks/TaskCard'

import styles from './Tasks.module.css'



function Tasks(){

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:5000/tasks', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data)=>{
            console.log(data)
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err)=>console.log(err)) 
        }, 300)
        
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Minhas Tarefas</h1> 
                <LinkButton to="/newtask" text="Adicionar Tarefa"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <TaskCard
                            id={project.id}
                            title={project.title}
                            start={project.start}
                            key={project.id}
                        />
                    ))
                }
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    )
}

export default Tasks