import {useLocation} from 'react-router-dom'

import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'

import styles from './Tasks.module.css'



function Tasks(){

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Minhas Tarefas</h1> 
                <LinkButton to="/newtask" text="Adicionar Tarefa"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            <Container customClass="start">
                <p>Tatefas...</p>
            </Container>
        </div>
    )
}

export default Tasks