import utilService from './utilService'

export default {
    getUser,
    signup,
    login,

    logout,
    trnasferCoins
}

const users = [
    {
        name: "adi",
        coins: 9999,
        password: '123',
        moves: [],
        currency: 'USD'
    },
    {
        name: "nir",
        coins: 5,
        password: '345',
        moves: [],
        currency: 'USD'
    },
]

function getUser() {
    return utilService.loadFromStorage('user')
}

function signup(user) {
    return new Promise((resolve, reject) => {
        user._id = _makeId()
        user.currency = 'USD'
        user.moves = []
        users.push(user)
        resolve(user)
        user.coins = 10
        utilService.storeToStorage('user', user)
    })
}

function logout() {
    utilService.storeToStorage('user', null)
}

function login(user) {
    return new Promise((resolve, reject) => {
        const u = users.find(u => user.name === u.name)
        if (!u) {
            console.log('wrong name or password');
            return
        }
        if (u.password === user.password) {
            resolve(u)
            utilService.storeToStorage('user', u)
        }
        else {
            reject('wrong name or password')
        }
    })

}

function addMove(move, user) {
    move._id = _makeId()
    move.at = Date.now()
    user.moves.push(move)
    return user
}

function trnasferCoins(move) {
    // let user = users.find(user => user.name === move.from)
    let user = utilService.loadFromStorage('user')
    if (user.coins >= move.amount) {
        user.coins -= move.amount
        user = addMove(move, user)
        utilService.storeToStorage('user', user)
        return true
    }
    else {
        console.log('not enoght coins')
        return false
    };
}

function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

