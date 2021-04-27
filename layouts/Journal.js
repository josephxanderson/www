// Framework imports
import Common from './Common';

const Journal = ({ children, title }) => {
	return (<>
		<Common title={title} />

		{ children }
	</>);
}

export default Journal;