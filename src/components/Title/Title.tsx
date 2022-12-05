import './Title.css'

export const Title = ({ message }: { message: string }) => {
    return (
        <div className="title">
            <h1> {message} Todos </h1>
        </div>
    )
}