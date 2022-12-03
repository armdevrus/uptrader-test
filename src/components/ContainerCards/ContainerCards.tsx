import './ContainerCards.css'
import { Data, Status } from '../../interfaces'
import { CardItem } from '../Carditem/CardItem'
import { useSelector } from 'react-redux';

interface Props {
    status: Status
    isDragging: boolean
    handleDragging: (dragging: boolean) => void
    handleUpdateList: (id: number, status: Status) => void
}
interface RootState {
    todos: Data[]
}

export const ContainerCards = ({ status, isDragging, handleDragging, handleUpdateList }: Props) => {

    const todosStore = useSelector((state: RootState) => state.todos)
    
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
            {todosStore.map(todo => (
                status === todo?.status &&
                <CardItem
                    isDragging={isDragging}
                    key={todo.id}
                    data={todo}
                    handleDragging={handleDragging}
                />
            ))}
        </div>
    )
}
