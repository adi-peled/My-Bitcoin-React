import React, { Component } from 'react'
import ChartTradeVolume from '../../cmps/ChartTradeVolume/ChartTradeVolume'
import ChartBlockSize from '../../cmps/ChartBlockSize/ChartBlockSize'
import ChartMarketPrice from '../../cmps/ChartMarketPrice/ChartMarketPrice'
import bitcoinService from '../../services/bitcoinService'
export class Stats extends Component {
    state = {
        tradeVolume: null
    }

    organizeData(values, key) {
        const data = values.map(value => {
            const arr = []
            for (const property in value) {
                if (property === 'x') {
                    arr.push(new Date(value[property] * 1000).getDate() + '/' + (new Date(value[property] * 1000).getMonth() + 1))
                } else {
                    arr.push(value[property])
                }
            }
            return arr
        })
        data.unshift(["x", ""],)
        this.setState({ [key]: data })
    }

    getTradeVolume() {
        bitcoinService.getTradeVolume().then(res => {
            this.organizeData(res.data.values, "tradeVolume")
        })
    }

    getBlockSize() {
        bitcoinService.getBlockSize().then(res => {
            this.organizeData(res.data.values, "blockSize")
        })
    }

    getMarketPrice() {
        bitcoinService.getMarketPrice().then(res => {
            this.organizeData(res.data.values, "marketPrice")
        })
    }

    componentDidMount() {
        this.getTradeVolume()
        this.getBlockSize()
        this.getMarketPrice()
    }

    render() {
        const { tradeVolume, blockSize, marketPrice } = this.state
        return (
            <div>
                <ChartTradeVolume data={tradeVolume} />
                <ChartBlockSize data={blockSize} />
                <ChartMarketPrice data={marketPrice} />
            </div>
        )
    }
}
