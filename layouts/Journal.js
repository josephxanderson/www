// Framework imports
import Common from './Common';

const Journal = ({ children, title, description }) => {
	return (<>
		<Common title={title} description={description} />

		<main className="PageContainer">
			{ children }
		</main>
	</>);
}

export default Journal;