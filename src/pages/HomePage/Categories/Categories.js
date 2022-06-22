import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch('categories.json')
			.then((res) => res.json())
			.then((data) => {
				setCategories(data);
			});
	}, []);
	return (
		// categories section
		<div className='container mx-auto space-y-[130px]'>
			{/* categories title */}
			<div className='flex justify-between'>
				<h2 className='text-5xl font-semibold'>Categories</h2>
				<button className='py-5 px-7 text-base font-semibold bg-sky-100 ring-1 ring-sky-100 rounded-2xl'>
					View All Categories
				</button>
			</div>
			{/* end of title */}
			<div className='flex justify-between'>
				{categories.map((category) => (
					<Category key={category.id} category={category}></Category>
				))}
			</div>
		</div>
	);
};

export default Categories;
