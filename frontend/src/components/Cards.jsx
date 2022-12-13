import React from 'react'

const Cards = ({ data }) => {

	return (
		<div className='card-container'>
			{Object.keys(data).map((service) => {
				return (
					<div className='card'>
						<div className='card-heading'>{service}:</div>
						<div className='card-body'>{data[service]['download'] + data[service]['upload']}</div>
					</div>
				)
			})}
		</div>
	)
}

export default Cards