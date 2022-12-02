import { Data, Status } from "../../interfaces"
import './CardItem.css'

interface Props {
    data: Data
    isDragging: boolean
    handleDragging: (dragging: boolean) => void
    handleUpdateList: (id: number, status: Status) => void
}

export const CardItem = ({ data, isDragging, handleDragging, handleUpdateList }: Props) => {

    const handleOnDragEnd = () => handleDragging(false)
    const handleOnDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text', `${data.id}`)
        handleDragging(true)
    }
    return (
        <div
            className={`card-container ${isDragging ? 'card-dragging' : ''}`}
            onDragEnd={handleOnDragEnd}
            onDragStart={handleOnDragStart}
            draggable
            >
            <p>{data.content}</p>
        </div>
    )
}