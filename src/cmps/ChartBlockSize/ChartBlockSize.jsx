import React from 'react'
import { Chart } from "react-google-charts";
import './ChartBlockSize.scss'

export default function ChartBlockSize(props) {

    const options = {
        hAxis: {
            title: 'Date (2020)',
        },
        vAxis: {
            title: 'MB ',
        },
    }
    const data = props.data;
    return (
        <div>
            <h3 className="title">Average Block Size</h3>
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
