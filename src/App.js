import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Navbar from './components/sharedComponents/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider';
import HomePageComponent from './pages/HomePage/HomePageComponent/HomePageComponent';

function App() {
	return (
		<Router>
			<AuthProvider>
				<Navbar />
				<Routes>
					<Route index element={<HomePageComponent />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</AuthProvider>
		</Router>
	);
}

export default App;
