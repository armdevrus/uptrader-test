import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Data, Status } from "../../interfaces"
import { ContainerCards } from "../ContainerCards/ContainerCards"
import './DragAndDrop.css'

const typesTask: Status[] = ['Queue', 'Development', 'Done']
interface RootState {
    todos: Data[]
}

export const DragAndDrop = () => {

    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [text, setText] = useState<string>('')

    const todosStore = useSelector((state: RootState) => state.todos)
    const dispatch = useDispatch()

    const handleUpdateList = (id: number, status: Status) => {
        let card = todosStore.find(task => task.id === id)
       
        if (card && card.status !== status) {
            dispatch({type: 'todos/update', id, status, card} 
            )
        }
    }
    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const handleAddCard = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const task: Data = {
                id: todosStore.length + 1,
                content: text,
                status: 'Queue',
                isEdit: false
            }
            dispatch({ type: 'todos/add', payload: task})
            setText('')
        }
    }
    
    return (
        <>
            <div className="add-card">
                <input
                    type="text"
                    placeholder='Add task...'
                    value={text}
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
                            // tasks={listTasks}

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
