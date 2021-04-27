import Link from 'next/link';

const GlobalNavigation = () => {
	return (
		<nav className="GlobalNavigation">
			<div className="GlobalNavigation-Container">
				<h3 className="GlobalNavigation-Title">⌘ Joseph Anderson</h3>

				<ul className="GlobalNavigation-List">
					<li className="GlobalNavigation-Item">
						<Link className="GlobalNavigation-Item-Link" href="/about">
							<span className="GlobalNavigation-Item-Content">About</span>
						</Link>
					</li>

					<li className="GlobalNavigation-Item">
						<Link className="GlobalNavigation-Item-Link" href="/journal">
							<span className="GlobalNavigation-Item-Content">Journal</span>
						</Link>
					</li>

					<li className="GlobalNavigation-Item">
						<Link className="GlobalNavigation-Item-Link" href="/Projects">
							<span className="GlobalNavigation-Item-Content">Projects</span>
						</Link>
					</li>

					<li className="GlobalNavigation-Item">
						<Link className="GlobalNavigation-Item-Link" href="/resume">
							<span className="GlobalNavigation-Item-Content">Résumé</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default GlobalNavigation;