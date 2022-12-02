import { useState } from 'react'
import { Data, Status } from "../../interfaces"
import { ContainerCards } from "../ContainerCards/ContainerCards"
import { data } from '../../assets'
import './DragAndDrop.css'

const typesTask: Status[] = ['Queue', 'Development', 'Done']

export const DragAndDrop = () => {

    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [listTasks, setListTasks] = useState<Data[]>(data)
    const [content, setContent] = useState<string>('')

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
    }

    const handleUpdateList = (id: number, status: Status) => {
        let card = listTasks.find(task => task.id === id)

        if (card && card.status !== status) {
            setListTasks(listTasks.filter(task => task.id !== id).concat({ ...card, status }))

            // alternative  
            // setListTasks([{ ...card, status}, ...listTasks.filter(task => task.id !== id)])
        }
    }

    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    const handleAddCard = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const task: Data = {
                id: listTasks.length + 1,
                content,
                status: 'Queue'
            }
            setListTasks([...listTasks, task])
            setContent('')
        }
    }
    

    return (
        <>
            <div className="add-card">
                <input
                    type="text"
                    placeholder='Add task...'
                    value={content}
                    onChange={handleChangeValue}
                    onKeyDown={handleAddCard}
                />
            </div>
            <div className="flex">
                {
                    typesTask.map(container => (
                        <ContainerCards
                            status={container}
                            key={container}
                            tasks={listTasks}

                            isDragging={isDragging}
                            handleDragging={handleDragging}
                            handleUpdateList={handleUpdateList}
                        />
                    ))
                }
            </div>
        </>
    )
}
