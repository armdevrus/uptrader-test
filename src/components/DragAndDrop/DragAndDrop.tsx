import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Data, PropsDragAndDrop, Status } from "../../interfaces"
import { ContainerCards } from "../ContainerCards/ContainerCards"
import './DragAndDrop.css'


const typesTodos: Status[] = ['Queue', 'Development', 'Done']
export const DragAndDrop = ({ data, add, update, edit, apply, change }: PropsDragAndDrop) => {


    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [text, setText] = useState<string>('')

    const dispatch = useDispatch()

    const handleUpdateList = (id: number, status: Status) => {
        let card = data.find(task => task.id === id)

        if (card && card.status !== status) {
            dispatch(
                update(id, status, card)
            )
        }
    }
    const handleDragging = (dragging: boolean) => setIsDragging(dragging)

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const handleAddCard = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
