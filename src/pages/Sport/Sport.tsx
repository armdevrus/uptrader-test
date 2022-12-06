import React from 'react';
import { useSelector } from 'react-redux';
import { DragAndDrop } from '../../components/DragAndDrop/DragAndDrop';
import { Title } from '../../components/Title/Title';
import { addSport, updateSport, editSport, applySport, changeSport } from '../../features/sports/sportsActions';
import { RootState } from '../../interfaces';

const Sport = () => {
    const sportsStore = useSelector((state: RootState) => state.sports)

    return (
        <div className='App'>
            <Title message="Sport's" />
            <DragAndDrop
                data={sportsStore}
                add={addSport}
                update={updateSport}
                edit={editSport}
                apply={applySport}
                change={changeSport}
            />
        </div>

    );
};

export default Sport;