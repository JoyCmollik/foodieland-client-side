import React, { useState } from 'react';
import LoginImage from '../../../Images/Lunch time-bro.png';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom'; 
import useAuth from '../../../hooks/useAuth';

const Register = () => {
	// states
	const [userInput, setUserInput] = useState({ name: '', email: '', password: '' });
	// states from custom-hooks
	const { handleGoogleLogin, handleRegisterUser } = useAuth();

	// -- handler functions --

	// handling inputs
	const handleLoginInputs = (e) => {
		const inputField = e.target.name;
		const inputValue = e.target.value;

		setUserInput({
			...userInput,
			[inputField]: inputValue,
		});
	};

	// handling user login with email and password
	const handleRegister = () => {
    const {name, email, password} = userInput;
		if (name && email && password) {
			handleRegisterUser(name, email, password);
		}
	};

	console.log(userInput);
	return (
		<div
			className='grid grid-cols-2'
			style={{ maxHeight: 'calc(100vh - 82px)' }}
		>
			{/* form-title */}
			<div className='flex justify-center items-center '>
				<div>
					<h3 className='text-4xl font-semibold mb-5'>
						Create an account
					</h3>
					<h5 className='text-xs text-gray-500 mb-5'>
						please enter your detail to create an account
					</h5>
					{/* form section*/}
					<div className='mb-5'>
						<label
							htmlFor='email'
							className='block text-sm font-medium py-2 px-1'
						>
							Name
						</label>
						<input
							type='text'
							name='name'
							onBlur={handleLoginInputs}
							className='text-sm border border-gray-400 rounded-lg block p-2.5 w-64'
							placeholder='write your name'
						/>
					</div>
					<div className='mb-5'>
						<label
							htmlFor='email'
							className='block text-sm font-medium py-2 px-1'
						>
							Email
						</label>
						<input
							type='email'
							name='email'
							onBlur={handleLoginInputs}
							className='text-sm border border-gray-400 rounded-lg block p-2.5 w-64'
							placeholder='abc@gmail.com'
						/>
					</div>
					<div className='mb-5'>
						<label
							htmlFor='password'
							className='block text-sm font-medium py-2 px-1'
						>
							Password
						</label>
						<input
							type='password'
							name='password'
							onBlur={handleLoginInputs}
							className='text-sm border border-gray-400 rounded-lg block p-2.5 w-64'
							placeholder='password#!@'
						/>
					</div>
					<div className='flex mb-5'>
						<div>
							<input
								type='checkbox'
								value=''
								className='w-4 h-4 border border-gray-300'
								required
							/>
						</div>
						<label
							htmlFor='remember'
							className='text-sm font-medium ml-2'
						>
							Remember me
						</label>
						<div>
							<div>
								<button
									className='text-sm font-medium 
                ml-5 bg-transparent  inline-block'
								>
									forgot password ?
								</button>
							</div>
						</div>
					</div>
					<button onClick={handleRegister} className='mb-3 bg-gray-900 font-medium w-64 p-2 rounded-lg text-white block'>
						Sign in
					</button>
					{/* google sign in */}
					<button
						onClick={handleGoogleLogin}
						className='border block font-medium w-64 p-2 rounded-lg '
					>
						<FcGoogle className='inline text-2xl mr-2' /> Sign in
						with Google
					</button>
					<p className='text-sm mt-5 text-gray-400'>
						Already registered?{' '}
						<Link
							to='/login'
							className='font-semibold text-gray-900'
						>
							{' '}
							Sign in
						</Link>
					</p>
				</div>
			</div>
			<div className='flex justify-center items-center'>
				<img className='w-10/12' src={LoginImage} alt='loginImage' />
			</div>
		</div>
	);
};

export default Register;
