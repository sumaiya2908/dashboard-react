import React from 'react'

const Dropdown = ({ days, setDate }) => {
	return (
		<div className='dropdown'>
			<select onChange={(e) => { setDate(e.target.value) }}>
				<option>Select a day</option>
				{days.map((day, index) => {
					return (
						<option key={index}>
							{day}
						</option>
					)

				})}
			</select>
		</div>
	)
}

export default Dropdown