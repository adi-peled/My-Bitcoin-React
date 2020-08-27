import axios from 'axios';

export default {
    getRate,
    getTradeVolume,
    getBlockSize,
    getMarketPrice
}


function getRate(currency = 'usd') {  // return promise

    return axios.get(`https://blockchain.info/tobtc?currency=${currency}&value=1`)
}


function getTradeVolume() {
    return axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
}


function getBlockSize() {
    return axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
}

function getMarketPrice() {
    return axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')

}