import userService from "../services/userService"

const _setUser = (user) => ({ type: 'SET_USER', user })
const _transferCoins = (move) => ({ type: 'TRANSFER_COINS', move })



export function setUser() {
    return async dispatch => {
        const user = await userService.getUser()
        dispatch(_setUser(user))
    }
}

export function trnasferCoins(move) {
    return async dispatch => {
        const boolean = await userService.trnasferCoins(move)
        if (boolean) dispatch(_transferCoins(move))
    }
}

