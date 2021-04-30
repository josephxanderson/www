// Framework imports
import Common from './Common';

const Main = ({ children, title, description }) => {
	return (<>
		<Common title={title} description={description} />

		<main className="PageContainer">
			{ children }
		</main>
	</>);
}

export default Main;