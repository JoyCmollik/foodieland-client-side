import React from 'react';
import subscribe1 from '../../../Images/subscribe-1.png';
import subscribe2 from '../../../Images/subscribe-2.png';

const Subscribe = () => {
	return (
		<div className='container mx-auto bg-light relative flex flex-col justify-center items-center py-20 rounded-3xl'>
			<h4 className='text-5xl font-semibold mb-6'>
				Deliciousness to your inbox
			</h4>
			<p className='text-black opacity-60 w-2/4 text-center'>
				Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqut enim
				ad minim
			</p>
			{/* subscribe input */}
			<div className='mt-14 flex items-center bg-white p-2 rounded-3xl'>
				<input
					className='bg-transparent outline-none px-8 text-black opacity-40 focus-within:opacity-80'
					type='text'
					placeholder='Your email address...'
				/>
				<button className='text-sm font-semibold py-5 px-11 rounded-2xl bg-black text-white'>
					Subscribe
				</button>
			</div>
			{/* images */}
			<img className='absolute left-0 bottom-0 object-cover' src={subscribe2} alt='food2' />
			<img className='absolute right-0 bottom-0 object-cover' src={subscribe1} alt='food1' />
		</div>
	);
};

export default Subscribe;
