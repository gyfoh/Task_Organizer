import {Link} from 'react-router-dom'
import styles from './TaskCard.module.css'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function TaskCard({id, title, start, handleRemove}){
    return (
        <div className={styles.task_card}>
            <h4>{title}</h4>
            <p>
                <span>Início:</span> {start}
            </p>
            <div className={styles.task_card_actions}>
                <Link to="/">
                    <BsPencil/> Editar
                </Link>
                <button>
                    <BsFillTrashFill/> Remover
                </button>
            </div>
        </div>
    )

}

export default TaskCard