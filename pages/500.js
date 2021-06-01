// Application imports
import Layout from '../layouts/Main';
import PageHeader from '../components/PageHeader';

const Error500 = () => {
	return (
		<Layout>
			<PageHeader heading="Try again" />

			<h3>
				That didn’t work. Try again in a minute.
			</h3>
		</Layout>
	);
}

export default Error500;