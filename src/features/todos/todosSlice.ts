import { data } from "../../assets";
import { Data } from "../../interfaces";

const initialState: Data[] = data;

export function todoReducer(
    state = initialState,
    action: {
        type: string;
        payload: string | number;
        id: number;
        status: string;
        card: Data;
    }
) {
    switch (action.type) {
        case "todos/add": {
            return [...state, action.payload];
        }
        case "todos/update": {
            return [
                ...state.filter((todo) => todo.id !== action.id),
                { ...action.card, status: action.status },
            ];
        }
        case "todos/edit": {
            return [
                ...state.map((todo) => {
                    if (todo.id === action.id) {
                        return { ...todo, isEdit: action.payload };
                    } else {
                        return todo;
                    }
                }),
            ];
        }
        case "todos/change" : {
            return [
                ...state.map((todo) => {
                     if (todo.id === action.id) {
                         return { ...todo, content: action.payload};
                     } else {
                         return todo;
                     }
                })
            ]
        }
        case "todos/apply": {
            return [
                ...state.map((todo) => {
                     if (todo.id === action.id) {
                         return { ...todo, content: action.payload};
                     } else {
                         return todo;
                     }
                })
            ]
        }
        default:
            return state;
    }
}
