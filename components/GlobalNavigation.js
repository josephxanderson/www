import { useEffect, useState } from 'react';
import Link from 'next/link';

const GlobalNavigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenuOpen = () => {
		setMenuOpen(! menuOpen);
	}

	const handleWindowResize = () => {
		// Get the global breakpoint size from CSS.
		const globalBreakpointMd = window.getComputedStyle(document.documentElement).getPropertyValue('--global-breakpoint-md');
		console.log(globalBreakpointMd)
		// If the window width is greater than or equal to the breakpoint then close the menu.
		if (window.innerWidth >= globalBreakpointMd.replace('px', '')) {
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
				<div className="GlobalNavigation-Title">
					<Link href="/">
						<a>
							<h4 className="GlobalNavigation-Title-Content">josephanderson.world 🌎</h4>
						</a>
					</Link>
				</div>

				<ul className="GlobalNavigation-List">
					<li className="GlobalNavigation-List-Item">
						<Link className="GlobalNavigation-List-Item-Link" href="/about" passHref>
							<a>
								<p className="GlobalNavigation-Item-Content">About</p>
							</a>
						</Link>
					</li>

					<li className="GlobalNavigation-List-Item">
						<Link className="GlobalNavigation-Item-Link" href="/journal" passHref>
							<a>
								<p className="GlobalNavigation-Item-Content">Journal</p>
							</a>
						</Link>
					</li>

					<li className="GlobalNavigation-List-Item">
						<Link className="GlobalNavigation-List-Item-Link" href="/" passHref>
							<a>
								<p className="GlobalNavigation-Item-Content">Projects</p>
							</a>
						</Link>
					</li>

					<li className="GlobalNavigation-List-Item">
						<Link className="GlobalNavigation-List-Item-Link" href="/~/documents/JosephAndersonRésumé.pdf" passHref>
							<a>
								<p className="GlobalNavigation-Item-Content">Résumé</p>
							</a>
						</Link>
					</li>
				</ul>

				<div className="GlobalNavigation-CommandButton" onClick={toggleMenuOpen}>
					<h4 className="GlobalNavigation-CommandButton-Content">⌘</h4>
				</div>
			</div>
		</nav>
	);
}

export default GlobalNavigation;