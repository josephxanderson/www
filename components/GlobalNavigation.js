import Link from 'next/link';

const GlobalNavigation = () => {
	return (
		<nav className="GlobalNavigation">
			<div className="GlobalNavigation-Container">
				<h4 className="GlobalNavigation-Title">
					<Link href="/">josephanderson.world 🌎</Link>
				</h4>

				<ul className="GlobalNavigation-List">
					<li className="GlobalNavigation-List-Item">
						<Link className="GlobalNavigation-List-Item-Link" href="/about">
							<span className="GlobalNavigation-Item-Content">About</span>
						</Link>
					</li>

					<li className="GlobalNavigation-List-Item">
						<Link className="GlobalNavigation-Item-Link" href="/journal">
							<span className="GlobalNavigation-Item-Content">Journal</span>
						</Link>
					</li>

					<li className="GlobalNavigation-List-Item">
						<Link className="GlobalNavigation-List-Item-Link" href="/Projects">
							<span className="GlobalNavigation-Item-Content">Projects</span>
						</Link>
					</li>

					<li className="GlobalNavigation-List-Item">
						<Link className="GlobalNavigation-List-Item-Link" href="/resume">
							<span className="GlobalNavigation-Item-Content">Résumé</span>
						</Link>
					</li>
				</ul>

				<h4 className="GlobalNavigation-CommandButton">⌘</h4>
			</div>
		</nav>
	);
}

export default GlobalNavigation;