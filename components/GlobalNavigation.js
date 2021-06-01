import { useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const GlobalNavigation = () => {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);
	let root = null;
	let headerElement = null;
	let resizeObserver = null;
	let findHeaderElement = null;

	const closeMenu = () => {
		setMenuOpen(false);
	}

	const toggleMenuOpen = () => {
		setMenuOpen(! menuOpen);
	}

	const handleWindowResize = () => {
		// Get the global breakpoint size from CSS.
		const globalBreakpoint = window.getComputedStyle(document.documentElement).getPropertyValue('--global-breakpoint-md');

		// If the window width is greater than or equal to the breakpoint then close the menu.
		if (window.innerWidth >= globalBreakpoint.replace('px', '')) {
			setMenuOpen(false);
		}
	}

	useEffect(() => {
		// Create window resize event listener.
		window.addEventListener('resize', handleWindowResize);

		// Clean-up.
		return () => {
			// Destroy window resize event listener.
			window.removeEventListener('resize', handleWindowResize);
		}
	});

	useLayoutEffect(() => {
		root = document.documentElement;
		headerElement = document.getElementsByClassName('GlobalNavigation')[0];

		if (headerElement) {
			resizeObserver = new ResizeObserver(getHeaderHeight).observe(headerElement);
		}
	}, []);

	const getHeaderHeight = () => {
		root.style.setProperty('--component-globalnavigation-height', headerElement.offsetHeight + 'px');
	}

	return (
		<nav className={`GlobalNavigation ${menuOpen ? 'State-Open' : ''}`}>
			<div className="GlobalNavigation-Container">
				<div className="GlobalNavigation-Title" onClick={closeMenu}>
					<Link href="/" passHref><a /></Link>
					<h4 className="GlobalNavigation-Title-Content">josephanderson.world 🌎</h4>
				</div>

				<ul className="GlobalNavigation-List" onClick={closeMenu}>
					<li className={`GlobalNavigation-List-Item ${ router.pathname.startsWith('/about') ? 'State-Active' : '' }`}>
						<Link className="GlobalNavigation-List-Item-Link" href="/about" passHref><a /></Link>
						<h5 className="GlobalNavigation-Item-Content">About</h5>
					</li>

					<li className={`GlobalNavigation-List-Item ${ router.pathname.startsWith('/projects') ? 'State-Active' : '' }`}>
						<Link className="GlobalNavigation-List-Item-Link" href="/projects" passHref><a /></Link>
						<h5 className="GlobalNavigation-Item-Content">Projects</h5>
					</li>

					<li className={`GlobalNavigation-List-Item ${ router.pathname.startsWith('/journal') ? 'State-Active' : '' }`}>
						<Link className="GlobalNavigation-List-Item-Link" href="/journal" passHref><a /></Link>
						<h5 className="GlobalNavigation-Item-Content">Journal</h5>
					</li>

					<li className="GlobalNavigation-List-Item">
						<Link className="GlobalNavigation-List-Item-Link" href="https://github.com/josephxanderson" passHref><a target="_blank" /></Link>
						<h5 className="GlobalNavigation-Item-Content">GitHub ↗</h5>
					</li>
				</ul>

				<div className="GlobalNavigation-CommandButton" onClick={toggleMenuOpen}>
					<h4 className="GlobalNavigation-CommandButton-Content">
						{ menuOpen
							? <span>↑</span>
							: <span>⌘</span>
						}
					</h4>
				</div>
			</div>
		</nav>
	);
}

export default GlobalNavigation;