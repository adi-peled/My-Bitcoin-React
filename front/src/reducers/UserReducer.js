const INITIAL_STATE = {
    user: null
}

export function UserReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'TRANSFER_COINS':
            return {
                ...state,
                user: { ...state.user, moves: [action.move, ...state.user.moves] }
            }
        default:
            return state
    }
}