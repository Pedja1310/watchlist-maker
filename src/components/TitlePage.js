import React, { useEffect } from 'react'
import moment from 'moment'

// import { title } from './movieHelper'
import { useHistory, useParams } from 'react-router-dom'
import {
	clearCurrentTitle,
	fetchTitleDetails,
	titleDetailsSelector
} from '../store/entities/titles'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'

function TitlePage() {
	const dispatch = useDispatch()
	const history = useHistory()
	const title = useSelector(titleDetailsSelector)
	const { id, media_type } = useParams()

	useEffect(() => {
		dispatch(fetchTitleDetails({ id, media_type }))
	}, [id, media_type, dispatch])

	const handleBackButton = () => {
		history.goBack()
		dispatch(clearCurrentTitle())
	}

	return title.loading ? (
		<Loader type='ThreeDots' height='64' width='64' timeout={3000} />
	) : (
		<section id='movie-details' className='p-4 pb-20 grid grid-auto-rows'>
			<button
				onClick={handleBackButton}
				className='mb-4 flex flex-row items-center w-auto focus:outline-none'
			>
				<img
					src='/images/icons/goback.png'
					alt='Genres Icon'
					width='16'
					className='mr-1'
				/>
				Back
			</button>
			<div className='col-span-1'>
				<img
					src={`https://image.tmdb.org/t/p/w500${title.backdrop_path}`}
					alt=''
					className='rounded-md object-cover w-full'
				/>
			</div>
			<div className=' border-b-2 border-gray-100 py-4 col-span-1 flex justify-between items-center'>
				<div>
					<h1 className='text-lg font-semibold'>
						{title.title ? title.title : title.name} (
						{title.release_date
							? title.release_date.slice(0, 4)
							: title.first_air_date.slice(0, 4)}
						)
					</h1>
					<h3 className='mt-1 text-md'>{title.tagline}</h3>
				</div>
				<div className='flex flex-col items-center ml-4'>
					<p className='text-xs'>
						<span className='text-2xl text-yellow-500'>
							{title.vote_average}
						</span>
						/10
					</p>
					<div className='flex flex-row items-center'>
						<img
							src='/images/icons/user.png'
							alt='Genres Icon'
							width='14'
							className='mr-1'
						/>
						<p className='text-xs'>{title.vote_count}</p>
					</div>
				</div>
			</div>
			<div className='border-b-2 border-gray-100 py-4'>
				<h3 className='font-semibold'>Synopsis</h3>
				<p className='mt-2 text-sm'>{title.overview}</p>
			</div>
			<div className='flex flex-col border-b-2 border-gray-100 py-4'>
				<div className='flex items-center flex-wrap'>
					<img
						src='/images/icons/genres.png'
						alt='Genres Icon'
						width='16'
						className='mr-1'
					/>
					{title.genres.map((genre, index) => (
						<span className={`text-sm ${index && 'pl-1'}`} key={index}>
							{`${genre.name}${index + 1 !== title.genres.length ? ',' : ''}`}
						</span>
					))}
				</div>
				<div className='flex mt-2 items-center'>
					<img
						src='/images/icons/runtime.png'
						alt='Genres Icon'
						width='16'
						className='mr-1'
					/>
					<span className='text-sm'>
						{title.runtime || title.episode_run_time[0]} min
					</span>
				</div>
				<div className='flex mt-2 items-center'>
					<img
						src='/images/icons/release-date.png'
						alt='Release Date Icon'
						width='16'
						className='mr-1'
					/>
					<span className='text-sm'>
						{(title.release_date &&
							moment(title.release_date).format('DD.MM.YYYY')) ||
							(title.first_air_date &&
								moment(title.first_air_date).format('DD.MM.YYYY'))}
					</span>
				</div>
				{title.homepage && (
					<div className='flex mt-2 items-center'>
						<img
							src='/images/icons/imdb.png'
							alt='Release Date Icon'
							width='16'
							className='mr-1'
						/>
						<span className='text-sm'>
							<a href={title.homepage} target='_blank' rel='noreferrer'>
								Official Page
							</a>
						</span>
					</div>
				)}
			</div>
		</section>
	)
}

export default TitlePage
