// Application imports
import GlobalNavigation from '../components/GlobalNavigation';
import '../styles/index.scss';

const App = ({ Component, pageProps }) => {
	return (<>
		<GlobalNavigation />
		
		<Component {...pageProps} />
	</>);
}

export default App;