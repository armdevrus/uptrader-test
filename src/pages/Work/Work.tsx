import { useSelector } from 'react-redux';
import { DragAndDrop } from "../../components/DragAndDrop/DragAndDrop";
import { Title } from "../../components/Title/Title";
import {
    addWork,
    updateWork,
    editWork,
    applyWork,
    changeWork
} from '../../features/works/worksActions';
import { RootState } from '../../interfaces';


export default function Work() {
    const worksStore = useSelector((state: RootState) => state.works)

    return (
        <div>
            <Title message="Work's" />
            <DragAndDrop 
                data={worksStore}
                add={addWork}
                update={updateWork}
                edit={editWork}
                apply={applyWork}
                change={changeWork}
            />
        </div>
    );
}



