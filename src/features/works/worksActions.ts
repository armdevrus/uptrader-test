import { Data } from "../../interfaces";
import { WORK_ADD, WORK_APPLY, WORK_CHANGE, WORK_EDIT, WORK_UPDATE } from "./worksConst";

export function addWork(todo: Data) {
    return { type: WORK_ADD, payload: todo };
}

export function updateWork(id: number, status: string, card: Data) {
    return { type: WORK_UPDATE, id, status, card };
}

export function editWork(todoEdit: boolean, id: number) {
    return { type: WORK_EDIT, todoEdit, id };
}

export function changeWork(todoContent: string, id: number) {
    return { type: WORK_CHANGE, todoContent, id };
}
export function applyWork(todoContent: string, id: number) {
    return { type: WORK_APPLY, todoContent, id };
}
