import './ContainerCards.css'
import { PropsContainerCards } from '../../interfaces'
import { CardItem } from '../Carditem/CardItem'

export const ContainerCards = ({ edit, apply, change, data, status, isDragging, handleDragging, handleUpdateList }: PropsContainerCards) => {

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
            {data.map(todo => (
                status === todo?.status &&
                <CardItem
                    todo={todo}
                    edit={edit}
                    apply={apply}
                    change={change}
                    key={todo.id}

                    isDragging={isDragging}
                    handleDragging={handleDragging}
                />
            ))}
        </div>
    )
}
