import React from 'react'
import { Link } from 'react-router-dom'

function TitleCard({ poster_path, id, title, media_type }) {
	return (
		<div className='relative z-0 shadow-lg'>
			<Link to={`/details/${media_type}/${id}`}>
				<img
					src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
					className='object-cover rounded-md'
					alt={`${title} poster`}
				/>
			</Link>
		</div>
	)
}

export default TitleCard
