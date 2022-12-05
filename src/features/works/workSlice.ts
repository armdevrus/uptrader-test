import { workTodos } from "../../assets";
import { Data } from "../../interfaces";
import {
    WORK_ADD,
    WORK_APPLY,
    WORK_CHANGE,
    WORK_EDIT,
    WORK_UPDATE,
} from "./worksConst";

const initialState: Data[] = workTodos;

export function workReducer(
    state = initialState,
    action: {
        type: string;
        payload: string | number;
        id: number;
        status: string;
        card: Data;
        todoEdit: boolean;
        todoContent: string;
    }
) {
    switch (action.type) {
        case WORK_ADD: {
            return [...state, action.payload];
        }
        case WORK_UPDATE: {
            return [
                ...state.filter((todo) => todo.id !== action.id),
                { ...action.card, status: action.status },
            ];
        }
        case WORK_EDIT: {
            return [
                ...state.map((todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, isEdit: action.todoEdit };
                    } else {
                        return todo;
                    }
                }),
            ];
        }
        case WORK_CHANGE: {
            return [
                ...state.map((todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, content: action.todoContent };
                    } else {
                        return todo;
                    }
                }),
            ];
        }
        case WORK_APPLY: {
            return [
                ...state.map((todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, content: action.todoContent };
                    } else {
                        return todo;
                    }
                }),
            ];
        }
        default:
            return state;
    }
}
