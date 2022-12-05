import { sportTodos } from "../../assets";
import { Data } from "../../interfaces";
import {
    SPORT_ADD,
    SPORT_APPLY,
    SPORT_CHANGE,
    SPORT_EDIT,
    SPORT_UPDATE,
} from "./sportsConst";

const initialState: Data[] = sportTodos;

export function sportReducer(
    state = initialState,
    action: {
        type: string;
        payload: string | number;
        id: number;
        status: string;
        card: Data;
        todoEdit: boolean;
        todoContent: string
    }
) {
    switch (action.type) {
        case SPORT_ADD: {
            return [...state, action.payload];
        }
        case SPORT_UPDATE: {
            return [
                ...state.filter((todo) => todo.id !== action.id),
                { ...action.card, status: action.status },
            ];
        }
        case SPORT_EDIT: {
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
        case SPORT_CHANGE: {
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
        case SPORT_APPLY: {
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
