import './ContainerCards.css'
import { Data, Status } from '../../interfaces'
import { CardItem } from '../Carditem/CardItem'

interface Props {
    status: Status
    tasks: Data[]
    isDragging: boolean
    handleDragging: (dragging: boolean) => void
    handleUpdateList: (id: number, status: Status) => void
}

export const ContainerCards = ({ status, tasks = [], isDragging, handleDragging, handleUpdateList }: Props) => {

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }


    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const id = +e.dataTransfer.getData('text')
        handleUpdateList(id, status)
        handleDragging(false)
    }


    return (
        <div className='layout-cards'
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <h5>{status}</h5>
            {tasks.map(task => (
                status === task?.status &&
                <CardItem
                    isDragging={isDragging}
                    key={task.id}
                    data={task}
                    handleDragging={handleDragging}
                    handleUpdateList={handleUpdateList}
                />
            ))}
        </div>
    )
}
