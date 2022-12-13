import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2'

import { getChartData, getDays } from '../utils/chartData';
import Dropdown from './Dropdown';

ChartJS.register(...registerables);

const Chart = ({ data }) => {
	const [date, setDate] = useState('')

	//display empty charts
	const [chartData, setChartData] = useState([{
		datasets: []
	}])
	const [chartOptions, setChartOptions] = useState({})

	let { formattedData, days } = getDays(data)

	useEffect(() => {
		if (date != '')
			getChartData(formattedData[date], setChartData, setChartOptions)
	}, [date])

	return (
		<div className='container'>
			<Dropdown days={days} setDate={setDate} />
			<div className='charts'>
				{chartData.map((chart) => {
					return (
						<Bar data={chart} options={chartOptions} />
					)
				})} </div>
		</div>
	)
}

export default Chart