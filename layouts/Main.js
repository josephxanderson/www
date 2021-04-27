// Framework imports
import Common from './Common';
import GlobalNavigation from '../components/GlobalNavigation';

const Main = ({ children, title }) => {
	return (<>
		<Common title={title} />

		<GlobalNavigation />

		{ children }
	</>);
}

export default Main;