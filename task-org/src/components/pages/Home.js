import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>TaskOrganizer</span></h1>
            <p>Gerencie suas tarefas do dia-a-dia!</p>
            <LinkButton to="/newtask" text="Adicionar Tarefa"/>
            <img src={savings} alt="TaskMan" />
        </section>
    )
}

export default Home