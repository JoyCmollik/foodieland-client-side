import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { MdRestaurant } from 'react-icons/md';
import { RiTimerFill } from 'react-icons/ri';
import food1 from '../../../Images/food1.png';

const RecipeItem = () => {
  return (
		<>
			{/* recipe card */}
			<div
				className='rounded-[30px] p-4 space-y-6'
				style={{
					background:
						'linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)',
				}}
			>
				{/* image and heart button */}
				<div className='card-img-container relative'>
					<img
						className='object-cover w-full rounded-[30px]'
						src={food1}
						alt='recipeTimelineList'
					/>

					{/* heart button */}
					<button className='absolute border p-3 rounded-full bg-white top-5 right-5 flex justify-center items-center'>
						<AiFillHeart
							className='filter-shadow text-[#DBE2E5]'
							size={24}
						/>
					</button>
				</div>

				{/* card desc */}
				<div className='space-y-6 pb-4'>
					{/* title */}
					<h2 className='font-semibold text-2xl'>
						Big and Juicy Wagyu Beef Cheeseburger
					</h2>

					{/* icons */}
					<div className='flex items-center space-x-6'>
						<p className='flex items-center space-x-2'>
							<RiTimerFill size={24} />
							<span className='text-sm font-medium text-black opacity-60'>
								30 minutes
							</span>
						</p>
						<p className='flex items-center space-x-2'>
							<MdRestaurant size={24} />
							<span className='text-sm font-medium text-black opacity-60'>
								Snack
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
  );
}

export default RecipeItem