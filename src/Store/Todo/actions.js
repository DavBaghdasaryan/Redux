export const types = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
}

export function addTodo() {
    return {
        type: types.ADD_TODO
    }
}

export function toggleTodo() {
    return {
        type: types.TOGGLE_TODO
    }
}

