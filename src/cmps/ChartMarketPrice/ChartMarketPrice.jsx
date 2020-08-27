import React from 'react'
import { Chart } from "react-google-charts";
import './ChartMarketPrice.scss'

export default function ChartMarketPrice(props) {

    const options = {
        hAxis: {
            title: 'Date (2020)',
        },
        vAxis: {
            title: 'USD ',
        },
    }

    const data = props.data;

    return (
        <div>
            <h3 className="title">Market Price</h3>
            <Chart
                className="chart"
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={options}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}
