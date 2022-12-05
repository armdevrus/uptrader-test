import { useDispatch } from 'react-redux';
import { PropsCardItem } from "../../interfaces"
import './CardItem.css'

export const CardItem = ({ todo, isDragging, handleDragging, edit, apply, change }: PropsCardItem) => {

    const dispatch = useDispatch()
    
    const handleOnDragEnd = () => handleDragging(false)
    const handleOnDragStart = (e: React.DragEvent<HTMLDivElement>) => {        
        if (!todo?.isEdit) {
            e.dataTransfer.setData('text', `${todo.id}`)
            handleDragging(true)
        }
    }

    const handleEdit = () => {
            dispatch(edit(!todo?.isEdit, todo.id))
    }

    const handleApplyText = () => {
        if (todo?.isEdit && todo.content) {
            handleEdit()
            dispatch(apply(todo.content, todo.id))
        } else {

        }
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (todo?.isEdit) {
            dispatch(change(e.target.value, todo.id))
        }
    }


    return (
        <div
            className={`card-container ${isDragging ? 'card-dragging' : ''}`}
            onDragEnd={handleOnDragEnd}
            onDragStart={handleOnDragStart}
            draggable={!todo?.isEdit}
        >
            <div>
                {!todo?.isEdit ?
                    <>
                        <span>{todo.content}</span>
                        <button onClick={handleEdit}>&#9998;</button>
                    </>
                    : <>
                        <input type="text" value={todo.content} onChange={handleChangeText}
                            placeholder={(todo?.isEdit && todo.content) ? '' : 'Введите текст...'}
                        />
                        <button onClick={handleApplyText}>&#10004;</button>
                    </>
                }
            </div>
        </div>
    )
}