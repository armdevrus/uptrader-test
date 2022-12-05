export type Status = "Queue" | "Development" | "Done";
export interface Data {
    id: number;
    content: string;
    status: Status;
    isEdit: false;
}
export interface RootState {
    works: Data[];
    sports: Data[];
}
export interface GeneralActions {
    edit: (
        todoEdit: boolean,
        id: number
    ) => {
        type: string;
        todoEdit: boolean;
        id: number;
    };
    apply: (
        todoContent: string,
        id: number
    ) => {
        type: string;
        todoContent: string;
        id: number;
    };
    change: (
        todoContent: string,
        id: number
    ) => {
        type: string;
        todoContent: string;
        id: number;
    };
}

export interface PropsDragAndDrop extends GeneralActions {
    data: Data[];
    add: (todo: Data) => {
        type: string;
        payload: Data;
    };
    update: (
        id: number,
        status: string,
        card: Data
    ) => {
        type: string;
        id: number;
        status: string;
        card: Data;
    };
}

export interface PropsCardItem extends GeneralActions {
    todo: Data;
    isDragging: boolean;
    handleDragging: (dragging: boolean) => void;
}
export interface PropsContainerCards extends GeneralActions {
    data: Data[];
    isDragging: boolean;
    handleDragging: (dragging: boolean) => void;
    status: Status;
    handleUpdateList: (id: number, status: Status) => void;
}
