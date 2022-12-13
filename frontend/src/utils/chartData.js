const getChartData = (formattedData, setChartData, setChartOptions) => {
	let labels = Object.keys(formattedData);
	const chartData1 = {
		labels: labels,
		datasets: [
			{
				data: labels.map((d) => formattedData[d]["download"]),
				label: "downloads",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
				skipNull: true,
			},
			{
				data: labels.map((d) => formattedData[d]["upload"]),
				label: "uploads",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				skipNull: true,
			},
		],
	};
	const chartData2 = {
		labels: labels,
		datasets: [
			{
				data: labels.map((d) => formattedData[d]["usage"]),
				label: "Usage (seconds)",
				pointRadius: 0,
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
		],
	};

	let charts = [chartData1, chartData2];
	const chartOptions = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
		},
	};

	setChartData(charts);
	setChartOptions(chartOptions);
};

export default getChartData;
