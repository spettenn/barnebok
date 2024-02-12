// components/Navigation.tsx
import React from 'react';
import Link from 'next/link';
import { useTheme } from 'shadcn-ui';

const Navigation = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<nav className='flex items-center justify-between p-4'>
			<div className='logo'>{/* Add your logo here */}</div>
			<div className='links'>
				{/* Navigation Links */}
				<Link href='/about'>
					<a>Om oss</a>
				</Link>
				<Link href='/contact'>
					<a>Kontakt oss</a>
				</Link>
			</div>
			<div className='theme-toggle'>
				{/* Dark Mode Toggle */}
				<button onClick={toggleTheme}>
					{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
				</button>
			</div>
		</nav>
	);
};

export default Navigation;
