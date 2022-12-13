import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "../components/Chart";

const HomePage = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios({
			url: "http://localhost:3500/get-data",
			method: "get",
		}).then(({ data }) => {
			setData(data);
		});
	}, []);

	return (
		<div className='homepage'>
			<h3>Device Dashboard</h3>
			<Chart data={data} />
		</div>
	);
};

export default HomePage;
