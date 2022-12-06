import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Data, PropsDragAndDrop, Status } from "../../interfaces"
import { ContainerCards } from "../ContainerCards/ContainerCards"
import './DragAndDrop.css'

const typesTodos: Status[] = ['Queue', 'Development', 'Done']
export const DragAndDrop = ({ data, add, update, edit, apply, change }: PropsDragAndDrop) => {

    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [isAdd, setIsAdd] = useState<boolean>(false)
    const [text, setText] = useState<string>('')

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleUpdateList = (id: number, status: Status) => {
        let todo = data.find(task => task.id === id)

        if (todo && todo.status !== status) {
            dispatch(
                update(id, status, todo)
            )
        }
    }
    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const handleAddtodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const todo: Data = {
                id: data.length + 1,
                content: text,
                status: 'Queue',
                isEdit: false
            }
            dispatch(add(todo))
            setText('')
        }
    }

    return (
        <>
            <button className='todo-btn' onClick={() => navigate(-1)}>Go back</button>
            <button className='todo-btn-addtodo' onClick={() => setIsAdd(true)}>Add Task</button>
            <div className="todo-modal" style={{ display: isAdd ? 'block' : 'none' }}>
                <div className='todo-modal-content'>
                    {isAdd && <button onClick={() => setIsAdd(false)}>x</button>}
                    <input
                        type="text"
                        placeholder='Add task and press Enter...'
                        value={text}
                        onChange={handleChangeValue}
                        onKeyDown={handleAddtodo}
                    />
                </div>
            </div>
            <div className="flex">
                {
                    typesTodos.map(container => (
                        <ContainerCards
                            data={data}
                            edit={edit}
                            apply={apply}
                            change={change}

                            status={container}
                            key={container}

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
