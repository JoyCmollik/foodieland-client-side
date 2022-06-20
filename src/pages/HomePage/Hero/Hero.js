import React from 'react';
import { MdFastfood } from 'react-icons/md';
import { RiTimer2Fill } from 'react-icons/ri';
import { GiKnifeFork } from 'react-icons/gi';
import { HiPlay } from 'react-icons/hi';
import homeBg from '../../../../src/Images/home-bg.png';
import homeBadge from '../../../../src/Images/Badge.png';

const Hero = () => {
	return (
		<div className='py-10'>
			<div className='container h-full mx-auto grid grid-cols-2 rounded-3xl overflow-hidden'>
				{/* start of left column */}
				<div className='left-col flex flex-col justify-between bg-light p-12'>
					<div className='space-y-6'>
						{/* hot recipes button */}
						<button className='flex justify-between items-center font-semibold bg-white rounded-3xl px-5 py-2 space-x-2 text-sm filter-shadow'>
							<span>
								<MdFastfood />
							</span>
							<span>Hot Recipes</span>
						</button>
						{/* main title */}
						<h1 className='text-6xl font-semibold'>
							Spicy delicious <br />
							chicken wings
						</h1>
						{/* description */}
						<p className='text-black text-opacity-60'>
							Lorem ipsum dolor sit amet, consectetuipisicing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqut enim ad minim{' '}
						</p>
						{/* button group */}
						<div className='flex items-center space-x-4'>
							<button className='btn-with-icon bg-black bg-opacity-5'>
								<RiTimer2Fill />
								<span>30 Minutes</span>
							</button>
							<button className='btn-with-icon bg-black bg-opacity-5'>
								<GiKnifeFork />
								<span>Chicken</span>
							</button>
						</div>
					</div>
					<div className='flex justify-between items-center'>
						{/* user image */}
						<div className='flex justify-between space-x-4'>
							<img
								className='object-cover rounded-full w-10'
								src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'
								alt='user_img'
							/>
							<div className=''>
								<h5 className='font-semibold'>John Smith</h5>
								<p>15 March, 2022</p>
							</div>
						</div>
						{/* button view recipes */}
						<button className='flex justify-between items-center bg-black text-white px-9 py-4 rounded-2xl space-x-2   '>
							<span>View Recipes</span>
							<HiPlay size={24} />
						</button>
					</div>
				</div>
				{/* end of left column */}
				{/* start of right column */}
				<div className='right-col relative'>
					<img
						className='hidden md:block absolute top-10 -left-10'
						src={homeBadge}
						alt='home_badge'
					/>
					<img
						className='object-cover w-full'
						src={homeBg}
						alt='home-background'
					/>
				</div>
				{/* end of right column */}
			</div>
		</div>
	);
};

export default Hero;
