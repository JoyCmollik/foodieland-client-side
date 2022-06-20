import React from 'react';
import RecipeItem from '../RecipeItem/RecipeItem';

const FeaturedRecipeList = () => {
	return (
		<div className='container mx-auto'>
			{/* section title */}
			<div className='text-center space-y-6 mb-24'>
				<h4 className='text-5xl font-semibold'>
					Simple and tasty recipes
				</h4>
				<p className='text-black opacity-60'>
					Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqut
					enim ad minim{' '}
				</p>
			</div>
			{/* recipe card list container */}
			<div className='grid grid-cols-4 gap-10'>
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
			</div>
		</div>
	);
};

export default FeaturedRecipeList;
