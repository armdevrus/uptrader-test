import { Data } from "../../interfaces";
import { SPORT_ADD, SPORT_APPLY, SPORT_CHANGE, SPORT_EDIT, SPORT_UPDATE } from "./sportsConst";

export function addSport(todo: Data) {
    return { type: SPORT_ADD, payload: todo };
}

export function updateSport(
    id: number,
    status: string,
    card: Data
) {
    return { type: SPORT_UPDATE, id, status, card };
}

export function editSport(
    todoEdit: boolean,
    id: number
) {
    return { type: SPORT_EDIT, todoEdit, id};
}

export function applySport(
    todoContent: string,
    id: number
) {
    return { type: SPORT_APPLY, todoContent, id};
}

export function changeSport(
    todoContent: string,
    id: number
) {
    return { type: SPORT_CHANGE, todoContent, id};
}



