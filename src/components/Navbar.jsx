import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants/index.js';
import { styles } from '../styles.js';

const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed z-20 top-0 bg-primary`}
		>
			<div className='flex items-center justify-between w-full max-w-7xl mx-auto'>
				<Link
					to='/'
					onClick={() => {
						setActive('');
						window.scrollTo(0, 0);
					}}
					className='flex items-center gap-2'
				>
					<img src={logo} alt='logo' className='w-9 h-9 object-contain' />
					<p className='text-white text-[18px] font-bold cursor-pointer'>
						Portfolio
					</p>
				</Link>

				<ul className='sm:flex hidden list-none flex-row gap-10'>
					{navLinks.map(link => (
						<li
							key={link.id}
							className={`
                ${active === link.title ? 'text-white' : 'text-secondary'}
                hover:text-white text-[18px] font-medium cursor-pointer transition-colors 
                  ease duration-300
              `}
							onClick={() => setActive(link.title)}
						>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>

				<div
					className='sm:hidden flex item-center justify-end relative'
					onClick={() => setToggle(!toggle)}
				>
					<img
						className='cursor-pointer'
						src={toggle ? close : menu}
						alt='hamburger'
					/>

					<div
						className={`${
							!toggle ? 'hidden' : 'flex'
						} p-5 black-gradient absolute top-full right-0 z-10 mt-3 min-w-[140px] rounded-xl`}
					>
						<ul className='flex list-none flex-col gap-2 items-start w-full'>
							{navLinks.map(link => (
								<li
									key={link.id}
									className={`
                ${active === link.title ? 'text-white' : 'text-secondary'}
                font-poppins font-medium cursor-pointer text-[16px]
              `}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
