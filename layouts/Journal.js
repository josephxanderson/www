// Framework imports
import Common from './Common';

const Journal = ({ children, title }) => {
	return (<>
		<Common title={title} />

		<main className="PageContainer">
			{ children }
		</main>
	</>);
}

export default Journal;