import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/Foodieland..png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

// nav links -- kept outside of component function so it renders only once
const navigation = [
  { id: "/home", name: "Home" },
  { id: "/recipes", name: "Recipes" },
  { id: "/blog", name: "Blog" },
  { id: "/contact", name: "Contact" },
  { id: "/about", name: "About us" },
];

const Navbar = () => {
  const { user, handleSignOut } = useAuth();

  return (
		<div className='border border-gray-200  '>
			<div className='container mx-auto  flex items-center text-base font-medium pt-7 pb-5'>
				<div className='h-8 w-28 mr-64 ml-20'>
					<img className='' src={logo} alt='foodieland' />
				</div>
				<div className='flex-none space-x-14 '>
					{navigation.map((nav) => (
						<Link className='text-black' key={nav.id} to={nav.id}>
							{nav.name}{' '}
						</Link>
					))}
				</div>
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
					{user && (
						<button
							onClick={handleSignOut}
							className='border flex justify-between items-center space-x-2 font-light rounded-lg p-1 uppercase'
						>
							{user.photoURL ? (
								<img
									className='rounded-full object-cover w-7'
									src={user.photoURL}
									alt='user'
								/>
							) : (
								<span className="font-bold">{user?.displayName.split(' ', 1)[0]}</span>
							)}
							<span className='text-xs'>sign out</span>
						</button>
					)}
				</div>
			</div>
		</div>
  );
};

export default Navbar;
