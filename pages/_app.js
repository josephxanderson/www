// Framework imports
import { useEffect } from 'react';

// Application imports
import GlobalNavigation from '../components/GlobalNavigation';
import '../styles/index.scss';

const App = ({ Component, pageProps }) => {

	const handleColorPreference = () => {
		// Test for Match Media API.
		if (window.matchMedia) {
			// Check for color scheme preference.
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.body.setAttribute('data-theme', 'dark');
			} else {
				document.body.setAttribute('data-theme', 'light');
			}
		}

		// Set up color scheme event listener.
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
			if (event.matches) {
				// Dark mode
				document.body.setAttribute('data-theme', 'dark');
			} else {
				// Light mode
				document.body.setAttribute('data-theme', 'light');
			}
		});
	}

	useEffect(() => {
		handleColorPreference();
		console.log('r')
	});

	return (<>
		<GlobalNavigation />
		
		<Component {...pageProps} />
	</>);
}

export default App;