// Framework imports
import Common from './Common';

const Main = ({ children, title }) => {
	return (<>
		<Common title={title} />

		<main className="PageContainer">
			{ children }
		</main>
	</>);
}

export default Main;