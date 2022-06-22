import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../../Images/Foodieland..png';

// nav links -- kept outside of component function so it renders only once
const navigation = [
	{ id: '/recipes', name: 'Recipes' },
	{ id: '/blog', name: 'Blog' },
	{ id: '/contact', name: 'Contact' },
	{ id: '/about', name: 'About us' },
];

const Footer = () => {
	return (
		<div className='container mx-auto py-12'>
			<div className='flex justify-between items-center'>
				<div className='space-y-4'>
					<img className='object-cover' src={logo} alt='foodieland' />
					<p className='text-black opacity-60'>
						Lorem ipsum dolor sit amet, consectetuipisicing elit,
					</p>
				</div>
				<div className='flex-none space-x-14 '>
					{navigation.map((nav) => (
						<Link className='text-black' key={nav.id} to={nav.id}>
							{nav.name}{' '}
						</Link>
					))}
				</div>
			</div>
			<div className='h-[1px] bg-black opacity-10 my-12' />
			<div className='flex flex-row-reverse justify-between'>
				<div className='flex items-center space-x-10 ml-60'>
					<a href='https://www.facebook.com/'>
						<FaFacebookF />
					</a>
					<a href='https://www.facebook.com/'>
						<FaTwitter />
					</a>
					<a href='https://www.facebook.com/'>
						<FaInstagram />
					</a>
				</div>
				<p className='text-black opacity-60 self-center'>
					&copy; 2022 Flowbase. Powered by Webflow
				</p>
			</div>
		</div>
	);
};

export default Footer;
