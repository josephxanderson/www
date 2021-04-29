// Application imports
import Layout from '../layouts/Main';
import PageHeader from '../components/PageHeader';

const Index = () => {
	return (
		<Layout>
			<PageHeader heading="Can’t find that" />

			<h3>
				The page you’re looking for doesn’t exist.
			</h3>
		</Layout>
	);
}

export default Index;