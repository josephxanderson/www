import { useEffect, useState } from 'react';
import Link from 'next/link';

const GlobalNavigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);

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

	return (
		<nav className={`GlobalNavigation ${menuOpen ? 'State-Open' : 'State-Closed'}`}>
			<div className="GlobalNavigation-Container">
				<div className="GlobalNavigation-Title" onClick={closeMenu}>
					<Link href="/" passHref><a /></Link>
					<h4 className="GlobalNavigation-Title-Content">josephanderson.world 🌎</h4>
				</div>

				<ul className="GlobalNavigation-List" onClick={closeMenu}>
					<li className="GlobalNavigation-List-Item">
						<Link className="GlobalNavigation-List-Item-Link" href="/about" passHref><a /></Link>
						<h5 className="GlobalNavigation-Item-Content">About</h5>
					</li>

					<li className="GlobalNavigation-List-Item">
						<Link className="GlobalNavigation-List-Item-Link" href="/journal" passHref><a /></Link>
						<h5 className="GlobalNavigation-Item-Content">Journal</h5>
					</li>

					<li className="GlobalNavigation-List-Item">
						<Link className="GlobalNavigation-List-Item-Link" href="/projects" passHref><a /></Link>
						<h5 className="GlobalNavigation-Item-Content">Projects</h5>
					</li>

					<li className="GlobalNavigation-List-Item">
						<Link className="GlobalNavigation-List-Item-Link" href="/~/documents/JosephAndersonRésumé.pdf" passHref><a /></Link>
						<h5 className="GlobalNavigation-Item-Content">Résumé</h5>
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