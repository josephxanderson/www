// Framework imports
import Common from './Common';

const Main = ({ children, title }) => {
	return (<>
		<Common title={title} />

		{ children }
	</>);
}

export default Main;