function formatChartData(data) {
	let formattedData = {};

	data.map(({ hostName, download, upload, usageSeconds, createdAt }) => {
		let date = createdAt.split(" ")[0];
		download = parseInt(download);
		upload = parseInt(upload);
		usageSeconds = parseInt(usageSeconds);
		if (!(date in formattedData)) formattedData[date] = {};

		if (hostName in formattedData[date]) {
			formattedData[date][hostName]["download"] += download;
			formattedData[date][hostName]["upload"] += upload;
			formattedData[date][hostName]["usage"] += usageSeconds;
		} else {
			formattedData[date][hostName] = {};
			formattedData[date][hostName]["download"] = download;
			formattedData[date][hostName]["upload"] = upload;
			formattedData[date][hostName]["usage"] = usageSeconds;
		}
	});
	return formattedData;
}
const getDays = (data) => {
	let formattedData = formatChartData(data);
	let days = [];
	Object.keys(formattedData).map((day) => {
		days.push(day);
	});

	return { formattedData, days };
};

export default getDays;
