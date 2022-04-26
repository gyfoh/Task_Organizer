import {useState} from 'react'

import Input from '../form/Input.js'
import SubmitButton from '../form/SubmitButton.js'
import styles from './TaskForm.module.css'

function TaskForm({handleSubmit, btnText, projectData}){
    const [project, setProject] = useState(projectData || {})
    const submit = (e) => {
        e.preventDefault(project)
        // console.log(project)
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
    }
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text="Título da Tarefa" 
                name="title"
                placeholder="Insira o título da tarefa"
                handleOnChange={handleChange}
                value={project.title ? project.title : ''}
            />
            <Input 
                type="text" 
                text="Início" 
                name="start"
                placeholder="Insira a data/horário inicial"
                handleOnChange={handleChange}
                value={project.start ? project.start : ''}
            />
            <Input 
                type="text" 
                text="Limite" 
                name="limit"
                placeholder="Insira a data/horário limite(se tiver)"
                handleOnChange={handleChange}
                value={project.limit ? project.limit : ''}
            />
            <Input 
                type="text" 
                text="Informações" 
                name="info"
                placeholder="Insira informações sobre a tarefa"
                handleOnChange={handleChange}
                value={project.info ? project.info : ''}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default TaskForm