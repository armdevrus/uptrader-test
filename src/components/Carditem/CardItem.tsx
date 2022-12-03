import { useSelector, useDispatch } from 'react-redux';
import { Data } from "../../interfaces"
import './CardItem.css'

interface Props {
    data: Data
    isDragging: boolean
    handleDragging: (dragging: boolean) => void
}

export const CardItem = ({ data, isDragging, handleDragging }: Props) => {

    const dispatch = useDispatch()
    const todosStore = useSelector((state: { todos: Data[] }) => state.todos)

    const findTodo = todosStore.find(todo => todo.id === data.id)
    const handleOnDragEnd = () => handleDragging(false)
    const handleOnDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        if (!findTodo?.isEdit){
            e.dataTransfer.setData('text', `${data.id}`)
            handleDragging(true)
        }
    }

    const handleEdit = () =>
        dispatch({ type: 'todos/edit', payload: !findTodo?.isEdit, id: data.id })

    const handleApplyText = () => {
        if (findTodo?.isEdit && findTodo.content) {
            handleEdit()
            dispatch({ type: 'todos/apply', payload: findTodo.content, id: data.id })
        } else {

        }
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (findTodo?.isEdit) {
            dispatch({ type: 'todos/change', payload: e.target.value, id: data.id }) 
        }
    }


    return (
        <div
            className={`card-container ${isDragging ? 'card-dragging' : ''}`}
            onDragEnd={handleOnDragEnd}
            onDragStart={handleOnDragStart}
            draggable={!findTodo?.isEdit}
        >
            <div>
                {!findTodo?.isEdit ?
                    <>
                        <span>{data.content}</span>
                        <button onClick={handleEdit}>&#9998;</button>
                    </>
                    : <>
                        <input type="text" value={findTodo.content} onChange={handleChangeText} 
                            placeholder={(findTodo?.isEdit && findTodo.content) ? '' : 'Введите текст...'}
                        />
                        <button onClick={handleApplyText}>&#10004;</button>
                    </>
                }
            </div>
        </div>
    )
}